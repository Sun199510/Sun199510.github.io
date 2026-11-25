/* =====================================================================
   主页的全部内容都在这个文件里。平时更新主页只需要改这里。

   规则：
   - 需要中英文的地方写成 { en: "English", zh: "中文" }；只写一个字符串则两种语言都显示它。
   - bio / research / news 里可以写 HTML，比如 <a href="...">链接</a>、<strong>加粗</strong>。
   - 注意每一项结尾的逗号，以及引号要成对。改完刷新网页就能看到效果。

   个人信息来自 files/Jingnan Sun_CV_260324.pdf；论文信息来自 Crossref / 出版社页面。
   ===================================================================== */

window.SITE = {
  lastUpdated: "2026-11-25",
  defaultLang: "en",          // 第一次打开时的语言："en" 或 "zh"；访客切换后会记住

  /* 作者列表里会被加粗的名字（你的中英文名都可以写进来） */
  me: ["J Sun", "Jingnan Sun", "孙劲男"],

  /* ---------------- 顶部个人信息 ---------------- */
  profile: {
    name: { en: "Jingnan Sun", zh: "孙劲男" },
    photo: "images/me.jpg",               // 由 images/profile photo.jpg 裁成正方形得到
    title: { en: "Postdoctoral Fellow", zh: "博士后" },
    affiliation: { en: "Department of Biomedical Engineering, Johns Hopkins University", zh: "约翰斯·霍普金斯大学 生物医学工程系" },
    bio: {
      en: `<p>I am a postdoctoral fellow in the Department of Biomedical Engineering at <strong>Johns Hopkins University</strong>,
           working with Prof. Akira Sawa.
           I received my Ph.D. (2024, advised by Prof. Bai Lu) and M.Eng. (2020, advised by Prof. Xiaorong Gao)
           in Biomedical Engineering from <strong>Tsinghua University</strong>, and my B.Eng. from <strong>Northeastern University</strong>.</p>
           <p>My research bridges <strong>neuroscience</strong> and <strong>artificial intelligence</strong>:
           decoding neural signals such as <strong>EEG</strong>, assessing cognition in aging and <strong>Alzheimer's disease</strong>,
           building <strong>brain-computer interfaces</strong>, and guiding <strong>neuromodulation</strong> for neurological and psychiatric disorders.</p>
           <p>In the long run, I am fascinated by how <strong>machine intelligence</strong> and <strong>biological intelligence</strong> develop and the principles that govern them, and I hope to contribute to this understanding. For now, studying abnormal brain and cognitive states in disease seems a fitting entry point. With extensive experience in interdisciplinary <strong>biomedical engineering research</strong>, I warmly welcome discussions and collaborations, so please feel free to reach out.</p>`,
      zh: `<p>我是<strong>约翰斯·霍普金斯大学</strong>生物医学工程系博士后，合作导师为 Akira Sawa 教授。
           此前在<strong>清华大学</strong>获得生物医学工程博士学位（2024，导师：鲁白教授）和工学硕士学位（2020，导师：高小榕教授），
           本科毕业于<strong>东北大学</strong>。</p>
           <p>我的研究致力于连接<strong>神经科学</strong>与<strong>人工智能</strong>：解码<strong>脑电（EEG）</strong>等神经信号，
           评估衰老与<strong>阿尔茨海默病</strong>中的认知状态，开发<strong>脑机接口</strong>，并为神经与精神疾病的<strong>神经调控</strong>提供指导。</p>
           <p>长期来看，我对<strong>机器智能</strong>和<strong>生物智能</strong>的发展和规则很感兴趣，也希望能有所贡献。目前来看，对疾病的异常脑状态和认知状态研究可能是一个合适的切入点。我有丰富的<strong>生物医学工程交叉研究</strong>经验，非常欢迎交流与合作，请随时联系我。</p>`
    },
    links: [
      { label: "jsun142@jhu.edu",                url: "mailto:jsun142@jhu.edu" },
      { label: "sunbme@foxmail.com",             url: "mailto:sunbme@foxmail.com" },
      { label: "Google Scholar",                 url: "https://scholar.google.com/citations?user=oVDgjKYAAAAJ" }
      // 以后有了可以加：
      // { label: { en: "CV", zh: "简历" }, url: "files/cv.pdf" },
      // { label: "ORCID",  url: "https://orcid.org/0000-..." },
      // { label: "GitHub", url: "https://github.com/..." },
    ]
  },

  /* ---------------- 研究方向（一段话） ---------------- */
  research: {
    en: `<p>I am interested in how the nervous system processes information, and in integrating neuroscience with AI —
         using neuroscience knowledge to improve artificial neural networks, and AI to solve problems in neuroscience and clinical medicine.
         My work spans three lines:</p>
         <ul>
           <li><strong>Cognitive assessment</strong> — resting-state EEG and multimodal models for aging, MCI and Alzheimer's disease;</li>
           <li><strong>Brain-computer interfaces</strong> — from SSVEP paradigms and neurofeedback to minimally invasive recording;</li>
           <li><strong>Neuromodulation</strong> — rTMS mechanisms and EEG-guided stimulation targeting for cognitive impairment and depression.</li>
         </ul>`,
    zh: `<p>我关注神经系统的信息处理机制，以及神经科学与人工智能的结合——用神经科学知识改进人工神经网络，用 AI 技术解决神经科学和临床医学问题。
         目前的工作主要包括三个方向：</p>
         <ul>
           <li><strong>认知评估</strong>：基于静息态脑电和多模态数据，评估衰老、轻度认知障碍与阿尔茨海默病；</li>
           <li><strong>脑机接口</strong>：从 SSVEP 范式、神经反馈训练到微创信号采集；</li>
           <li><strong>神经调控</strong>：rTMS 作用机制，以及面向认知障碍和抑郁症的脑电引导刺激靶点。</li>
         </ul>`
  },

  /* ---------------- 在研项目 ----------------
     status：标题后面的灰色状态小字（加 stage: "accepted" 时显示为绿色）；tags：底部关键词
     注意：未投稿的工作只写方向和方法，不写数据、结果和合作队列细节。列表为空时整个栏目不显示。
  */
  ongoing: [
    {
      status: { en: "In progress", zh: "进行中" },
      title:  { en: "A multimodal brain-imaging pattern of anhedonia, from adolescence to psychosis",
                zh: "从青少年到精神病：快感缺失的多模态脑影像模式" },
      desc:   { en: "Applying multi-view factor analysis to structural, diffusion and resting-state MRI from the ABCD Study to find latent brain patterns linked to anhedonia in early adolescence, and asking whether the same pattern relates to hedonic symptoms in adults with psychosis.",
                zh: "对 ABCD 研究的结构像、弥散像和静息态功能像做多视图因子分析，寻找与青少年早期快感缺失相关的潜在脑模式，并检验同一模式是否也与成人精神病患者的快感症状相关。" },
      tags:   ["ABCD Study", "sMRI · DTI · rs-fMRI", { en: "Anhedonia", zh: "快感缺失" }, { en: "Factor analysis", zh: "因子分析" }]
    },
    {
      status: { en: "In preparation", zh: "撰写中" },
      title:  { en: "How brain stimulation reaches the network across cognitive decline",
                zh: "认知衰退过程中，经颅磁刺激如何作用于脑网络" },
      desc:   { en: "Using TMS-EEG in a clinical cohort spanning normal cognition to dementia, we study whether degenerating cortex still responds to stimulation, what determines how much stimulation reaches the network in each person, and how this can inform personalized and closed-loop TMS.",
                zh: "在覆盖正常认知到痴呆的临床队列中，用 TMS-EEG 研究退化的皮层是否仍能响应刺激、哪些因素决定刺激传到网络的程度，以及如何据此实现个体化和闭环 TMS。" },
      tags:   ["TMS-EEG", { en: "MCI & dementia", zh: "MCI 与痴呆" }, { en: "Personalized stimulation", zh: "个体化刺激" }]
    },
    {
      stage: "accepted",
      status: { en: "Accepted · MedComm", zh: "已接收 · MedComm" },
      title:  { en: "An EEG signature of Alzheimer's disease progression and drug response, from rats to patients",
                zh: "从大鼠到患者：反映阿尔茨海默病进展与药物疗效的脑电标志" },
      desc:   { en: "An interpretable EEG score that integrates multiple physiologically grounded features, built on simultaneous LFP–EEG recordings in an AD rat model and tested in patients with MCI, to track disease stage and treatment response across species.",
                zh: "构建融合多种生理学脑电特征的可解释评分：在 AD 大鼠模型的 LFP–EEG 同步记录中建立，并在 MCI 患者中检验，用于跨物种追踪疾病分期和治疗反应。" },
      tags:   ["EEG", "LFP", { en: "AD rat model", zh: "AD 大鼠模型" }, { en: "Translational", zh: "跨物种转化" }]
    }
  ],

  /* ---------------- 最新动态（新的放最上面） ---------------- */
  newsShown: 5,   // 默认显示几条，其余点「展开更多」
  news: [
    { date: "2026", text: { en: "Our lateral ventricular BCI with a lantern-inspired electrode was published in <em>National Science Review</em>.", zh: "侧脑室脑机接口（灯笼式电极）论文发表于 <em>National Science Review</em>。" } },
    { date: "2026", text: { en: "The EasyCog dataset for passive-video cognitive assessment was published in <em>ACM IMWUT</em>.", zh: "被动观影认知评估数据集 EasyCog 发表于 <em>ACM IMWUT</em>。" } },
    { date: "2025-06", text: { en: "Joined the Department of Biomedical Engineering at Johns Hopkins University as a postdoctoral fellow.", zh: "加入约翰斯·霍普金斯大学生物医学工程系，任博士后。" } },
    { date: "2024-12", text: { en: "Received my Ph.D. in Biomedical Engineering from Tsinghua University.", zh: "获清华大学生物医学工程博士学位。" } },
    { date: "2024", text: { en: "Named Outstanding Graduate of Beijing Municipality.", zh: "获评北京市优秀毕业生。" } },
    { date: "2024", text: { en: "Our adaptive spatiotemporal encoding network for EEG cognitive assessment was published in <em>npj Digital Medicine</em>.", zh: "基于静息态脑电的自适应时空编码认知评估网络发表于 <em>npj Digital Medicine</em>。" } }
  ],

  /* 论文列表在 publications.js 里 */

  /* ---------------- 教育背景 ---------------- */
  education: [
    { period: "2020.09 – 2024.12", role: { en: "Ph.D. in Biomedical Engineering, Tsinghua University", zh: "清华大学 生物医学工程 博士" },
      org: { en: "Advisor: Prof. Bai Lu (Neurobiology)", zh: "导师：鲁白 教授（神经生物学）" } },
    { period: "2017.09 – 2020.06", role: { en: "M.Eng. in Biomedical Engineering, Tsinghua University", zh: "清华大学 生物医学工程 工学硕士" },
      org: { en: "Advisor: Prof. Xiaorong Gao (Brain-Computer Interface)", zh: "导师：高小榕 教授（脑机接口）" } },
    { period: "2014.09 – 2017.06", role: { en: "B.Eng. in Biomedical Engineering, Northeastern University", zh: "东北大学 生物医学工程 工学学士" },
      org: { en: "Advisor: Prof. Shouliang Qi (Brain Network)", zh: "导师：齐守良 教授（脑网络）" } }
  ],

  /* ---------------- 工作经历 ---------------- */
  experience: [
    { period: "2025.06 – present", role: { en: "Postdoctoral Fellow, Department of Biomedical Engineering, Johns Hopkins University", zh: "约翰斯·霍普金斯大学 生物医学工程系 博士后" },
      org: { en: "Advisor: Prof. Akira Sawa", zh: "合作导师：Akira Sawa 教授" } }
  ],

  /* ---------------- 奖项 ---------------- */
  awards: [
    { en: "Outstanding Graduate of Beijing Municipality, 2024", zh: "北京市优秀毕业生，2024" },
    { en: "REAWORLD Illustrious Virtue Scholarship, 2023 (5 recipients per year)", zh: "REAWORLD Illustrious Virtue 奖学金，2023（每年 5 人）" },
    { en: "Tsinghua University Comprehensive First-Class Scholarship, 2023", zh: "清华大学综合优秀一等奖学金，2023" },
    { en: "Outstanding Master's Thesis of Tsinghua University, 2020", zh: "清华大学优秀硕士学位论文，2020" },
    { en: "Outstanding Graduate of Northeastern University, 2017", zh: "东北大学优秀毕业生，2017" },
    { en: "Suzhou Industrial Park Scholarship, 2017", zh: "苏州工业园区奖学金，2017" },
    { en: "National Scholarship, 2016", zh: "国家奖学金，2016" },
    { en: "Model Outstanding Student Leader of Northeastern University, 2016", zh: "东北大学优秀学生干部标兵，2016" },
    { en: "Outstanding University Student of Shenyang Municipality, 2016 (100 people citywide)", zh: "沈阳市优秀大学生，2016（全市 100 人）" },
    { en: "Northeastern University Comprehensive First-Class Scholarship, 2015", zh: "东北大学综合一等奖学金，2015" }
  ],

  /* ---------------- 学术服务 ---------------- */
  service: [
    { en: "<strong>Guest Editor</strong>: <em>Frontiers in Neuroscience</em>",
      zh: "<strong>客座编辑</strong>：<em>Frontiers in Neuroscience</em>" },
    { en: "<strong>Reviewer</strong>: <em>IEEE Journal of Biomedical and Health Informatics</em> (JBHI), <em>IEEE Transactions on Neural Systems and Rehabilitation Engineering</em> (TNSRE), <em>IEEE Transactions on Affective Computing</em>, <em>Journal of Alzheimer's Disease</em>, <em>BMC Cardiovascular Disorders</em>",
      zh: "<strong>期刊审稿人</strong>：<em>IEEE Journal of Biomedical and Health Informatics</em>（JBHI）、<em>IEEE Transactions on Neural Systems and Rehabilitation Engineering</em>（TNSRE）、<em>IEEE Transactions on Affective Computing</em>、<em>Journal of Alzheimer's Disease</em>、<em>BMC Cardiovascular Disorders</em>" },
    { en: "<strong>Reviewer</strong>: The 9th International Conference on Biological Information and Biomedical Engineering (BIBE 2026)",
      zh: "<strong>会议审稿人</strong>：第九届生物信息与生物医学工程国际会议（BIBE 2026）" }
  ],

  footer: ""   // 页脚「最后更新」后面附加的一句话，留空则不显示
};
