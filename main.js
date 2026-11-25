/* 渲染逻辑：一般不需要改。内容请改 data.js */
(function () {
  'use strict';

  var S = window.SITE;
  var app = document.getElementById('app');

  var UI = {
    en: {
      research: 'Research', ongoing: 'Ongoing Projects', news: 'News', pubs: 'Publications', selected: 'First & Co-first Author', all: 'Collaborations',
      experience: 'Experience', education: 'Education', awards: 'Awards & Honors', service: 'Academic Service',
      showMore: 'Show more', showLess: 'Show less', bibtex: 'BibTeX', copy: 'Copy', copied: 'Copied',
      updated: 'Last updated', equal: '* equal contribution', corresponding: '† corresponding author',
      langBtn: '中文'
    },
    zh: {
      research: '研究方向', ongoing: '在研项目', news: '最新动态', pubs: '论文发表', selected: '一作 / 共一', all: '合作论文',
      experience: '工作经历', education: '教育背景', awards: '奖励与荣誉', service: '学术服务',
      showMore: '展开更多', showLess: '收起', bibtex: 'BibTeX', copy: '复制', copied: '已复制',
      updated: '最后更新', equal: '* 共同第一作者', corresponding: '† 通讯作者',
      langBtn: 'EN'
    }
  };

  var state = {
    lang: initialLang(),
    pubFilter: 'selected',
    newsOpen: false,
    openBib: {}
  };

  function store(key, val) { try { localStorage.setItem(key, val); } catch (e) {} }
  function load(key) { try { return localStorage.getItem(key); } catch (e) { return null; } }

  function initialLang() {
    var q = new URLSearchParams(location.search).get('lang');
    if (q === 'en' || q === 'zh') return q;
    var saved = load('lang');
    if (saved === 'en' || saved === 'zh') return saved;
    if (S.defaultLang === 'en' || S.defaultLang === 'zh') return S.defaultLang;
    return (navigator.language || '').toLowerCase().indexOf('zh') === 0 ? 'zh' : 'en';
  }

  // 取当前语言的文字：可以是字符串，也可以是 {en, zh}
  function t(v) {
    if (v == null) return '';
    if (typeof v === 'string') return v;
    return v[state.lang] || v.en || v.zh || '';
  }
  function ui(k) { return UI[state.lang][k]; }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  /* ---------- 各部分 ---------- */

  function renderIntro() {
    var p = S.profile;
    var altName = state.lang === 'en' ? p.name.zh : p.name.en;
    var links = (p.links || []).map(function (l) {
      var ext = /^https?:/.test(l.url) ? ' target="_blank" rel="noopener"' : '';
      return '<a href="' + esc(l.url) + '"' + ext + '>' + esc(t(l.label)) + '</a>';
    }).join('<span class="sep">/</span>');

    return '' +
      '<header class="intro">' +
        '<div class="intro-text">' +
          '<h1 class="name">' + esc(t(p.name)) +
            (altName && altName !== t(p.name) ? '<span class="alt">' + esc(altName) + '</span>' : '') +
          '</h1>' +
          '<p class="role">' + esc(t(p.title)) + (p.affiliation ? ' · ' + t(p.affiliation) : '') + '</p>' +
          '<div class="bio">' + t(p.bio) + '</div>' +
          '<div class="links">' + links + '</div>' +
        '</div>' +
        '<img class="photo" src="' + esc(p.photo) + '" alt="' + esc(t(p.name)) + '">' +
      '</header>';
  }

  function sectionHead(title, extra) {
    return '<div class="section-head"><h2 class="section-title">' + esc(title) + '</h2>' + (extra || '') + '</div>';
  }

  function renderResearch() {
    if (!S.research) return '';
    return '<section class="section" id="research">' + sectionHead(ui('research')) +
      '<div class="section-lead">' + t(S.research) + '</div></section>';
  }

  function renderOngoing() {
    var items = S.ongoing || [];
    if (!items.length) return '';
    var html = items.map(function (p) {
      var tags = (p.tags || []).map(function (x) { return esc(t(x)); }).join(' · ');
      var status = p.status
        ? '<span class="status' + (p.stage ? ' stage-' + esc(p.stage) : '') + '">' + esc(t(p.status)) + '</span>'
        : '';
      return '<article class="project">' +
        '<h3 class="project-title">' + esc(t(p.title)) + status + '</h3>' +
        '<p class="project-desc">' + t(p.desc) + '</p>' +
        (tags ? '<div class="project-tags">' + tags + '</div>' : '') +
      '</article>';
    }).join('');
    return '<section class="section" id="ongoing">' + sectionHead(ui('ongoing')) + '<div class="projects">' + html + '</div></section>';
  }

  function renderNews() {
    var items = S.news || [];
    if (!items.length) return '';
    var limit = S.newsShown || 5;
    var shown = state.newsOpen ? items : items.slice(0, limit);
    var html = shown.map(function (n) {
      return '<li><span class="date">' + esc(n.date) + '</span><span>' + t(n.text) + '</span></li>';
    }).join('');
    var more = items.length > limit
      ? '<button class="more-btn" data-act="news">' + ui(state.newsOpen ? 'showLess' : 'showMore') + '</button>'
      : '';
    return '<section class="section" id="news">' + sectionHead(ui('news')) +
      '<ul class="news">' + html + '</ul>' + more + '</section>';
  }

  function authorsHtml(list) {
    var me = S.me || [];
    return list.map(function (a) {
      var bare = a.replace(/[*†]/g, '').trim();
      var isMe = me.indexOf(bare) !== -1;
      return isMe ? '<span class="me">' + esc(a) + '</span>' : esc(a);
    }).join(', ');
  }

  function renderPub(p, i) {
    var typeTag = { journal: 'tag-journal', conference: 'tag-conference', preprint: 'tag-preprint' }[p.type] || 'tag-preprint';
    var venue = '<span class="tag ' + typeTag + '">' + esc(p.venue.short) + '</span>' +
      (p.badges || []).map(function (b) { return '<span class="tag tag-badge">' + esc(t(b)) + '</span>'; }).join('') +
      '<span>' + esc(t(p.venue.full)) + (p.venue.year ? ', ' + p.venue.year : '') + '</span>';

    var links = [];
    var L = p.links || {};
    var names = { paper: 'Paper', pdf: 'PDF', code: 'Code', data: 'Data', project: 'Project', slides: 'Slides', poster: 'Poster', video: 'Video', doi: 'DOI' };
    Object.keys(L).forEach(function (k) {
      if (L[k]) links.push('<a href="' + esc(L[k]) + '" target="_blank" rel="noopener">' + (names[k] || esc(k)) + '</a>');
    });
    if (p.bibtex) {
      links.push('<button class="link-btn" data-act="bib" data-i="' + i + '" aria-expanded="' + !!state.openBib[i] + '">' + ui('bibtex') + '</button>');
    }

    var titleUrl = L.paper || L.doi || L.pdf || L.project;
    var title = titleUrl
      ? '<a href="' + esc(titleUrl) + '" target="_blank" rel="noopener">' + esc(t(p.title)) + '</a>'
      : esc(t(p.title));

    var bib = state.openBib[i]
      ? '<div class="bibtex"><pre>' + esc(p.bibtex.trim()) + '</pre><button class="copy-btn" data-act="copy" data-i="' + i + '">' + ui('copy') + '</button></div>'
      : '';

    return '' +
      '<article class="pub' + (p.highlight ? ' highlight' : '') + '">' +
        (p.thumb ? '<button class="pub-thumb-btn" data-act="zoom" data-i="' + i + '" aria-label="Enlarge figure">' +
          '<img class="pub-thumb" src="' + esc(p.thumb) + '" alt="' + esc(t(p.title)) + '" loading="lazy"></button>' : '') +
        '<div class="pub-body">' +
          '<h3 class="pub-title">' + title + '</h3>' +
          '<div class="pub-authors">' + authorsHtml(p.authors) + '</div>' +
          '<div class="pub-venue">' + venue + '</div>' +
          (links.length ? '<div class="pub-links">' + links.join('<span class="sep">/</span>') + '</div>' : '') +
          (p.tldr ? '<p class="pub-tldr">' + t(p.tldr) + '</p>' : '') +
          bib +
        '</div>' +
      '</article>';
  }

  function renderPubs() {
    var all = S.publications || [];
    if (!all.length) return '';
    // 两个互不重叠的列表：selected: true = 一作/共一；其余 = 合作论文
    var nSel = all.filter(function (p) { return p.selected; }).length;
    var nOther = all.length - nSel;
    var filter = !nSel ? 'all' : (!nOther ? 'selected' : state.pubFilter);
    var seg = (nSel && nOther)
      ? '<div class="seg" role="group">' +
          '<button data-act="filter" data-v="selected" aria-pressed="' + (filter === 'selected') + '">' + ui('selected') + ' (' + nSel + ')</button>' +
          '<button data-act="filter" data-v="all" aria-pressed="' + (filter === 'all') + '">' + ui('all') + ' (' + nOther + ')</button>' +
        '</div>'
      : '';
    var lastYear = null;
    var html = all.map(function (p, i) {
      if (!!p.selected !== (filter === 'selected')) return '';
      var head = '';
      if (p.venue.year !== lastYear) {
        lastYear = p.venue.year;
        head = '<div class="year-head">' + esc(lastYear || '') + '</div>';
      }
      return head + renderPub(p, i);
    }).join('');
    return '<section class="section" id="publications">' + sectionHead(ui('pubs'), seg) +
      '<p class="note">' + ui('equal') +
        (all.some(function (p) { return p.authors.join('').indexOf('†') !== -1; }) ? '&nbsp;&nbsp;' + ui('corresponding') : '') + '</p>' +
      '<div class="pubs">' + html + '</div></section>';
  }

  function renderTimeline(key, items) {
    if (!items || !items.length) return '';
    var html = items.map(function (e) {
      return '<li><span class="when">' + esc(e.period) + '</span><span class="what">' + t(e.role) +
        (e.org ? '<br><span class="sub">' + t(e.org) + '</span>' : '') + '</span></li>';
    }).join('');
    return '<section class="section" id="' + key + '">' + sectionHead(ui(key)) + '<ul class="timeline">' + html + '</ul></section>';
  }

  function renderList(key, items) {
    if (!items || !items.length) return '';
    var html = items.map(function (x) { return '<li>' + t(x) + '</li>'; }).join('');
    return '<section class="section" id="' + key + '">' + sectionHead(ui(key)) + '<ul class="plain">' + html + '</ul></section>';
  }

  function render() {
    document.documentElement.lang = state.lang === 'zh' ? 'zh-CN' : 'en';
    document.title = t(S.profile.name) + (state.lang === 'zh' ? ' 的个人主页' : '');
    document.getElementById('lang-toggle').textContent = ui('langBtn');

    app.innerHTML =
      renderIntro() +
      renderResearch() +
      renderOngoing() +
      renderPubs() +
      renderTimeline('education', S.education) +
      renderTimeline('experience', S.experience) +
      renderList('awards', S.awards) +
      renderList('service', S.service) +
      '<footer class="footer">' + ui('updated') + ': ' + esc(S.lastUpdated || '') +
        (S.footer ? ' · ' + t(S.footer) : '') + '</footer>';
  }

  /* ---------- 交互 ---------- */

  app.addEventListener('click', function (ev) {
    var b = ev.target.closest('[data-act]');
    if (!b) return;
    var act = b.getAttribute('data-act');
    var i = b.getAttribute('data-i');
    if (act === 'news') { state.newsOpen = !state.newsOpen; render(); }
    else if (act === 'filter') { state.pubFilter = b.getAttribute('data-v'); render(); }
    else if (act === 'bib') { state.openBib[i] = !state.openBib[i]; render(); }
    else if (act === 'zoom') { openLightbox(S.publications[i]); }
    else if (act === 'copy') {
      var text = S.publications[i].bibtex.trim();
      var done = function () { b.textContent = ui('copied'); setTimeout(function () { b.textContent = ui('copy'); }, 1500); };
      if (navigator.clipboard) navigator.clipboard.writeText(text).then(done, function () {});
    }
  });

  // 放大看示意图：点击任意位置或按 Esc 关闭
  var box = document.createElement('dialog');
  box.className = 'lightbox';
  document.body.appendChild(box);
  box.addEventListener('click', function () { box.close(); });
  function openLightbox(p) {
    box.innerHTML = '<img src="' + esc(p.thumb) + '" alt=""><p>' + esc(t(p.title)) + '</p>';
    if (box.showModal) box.showModal(); else window.open(p.thumb, '_blank');
  }

  document.getElementById('lang-toggle').addEventListener('click', function () {
    state.lang = state.lang === 'en' ? 'zh' : 'en';
    store('lang', state.lang);
    render();
  });

  document.getElementById('theme-toggle').addEventListener('click', function () {
    var root = document.documentElement;
    var cur = root.getAttribute('data-theme') ||
      (window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    var next = cur === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    store('theme', next);
  });

  render();
})();
