/* =====================================================================
   论文列表（来源：Google Scholar；DOI / BibTeX 来自 Crossref）。新论文加在对应年份最上面。

   每篇的字段：
   - title / authors：作者名里写 * 表示共同一作，† 表示通讯作者；你的名字（J Sun）会自动加粗
   - venue：short 是彩色标签上的缩写，full 是全称，year 是年份
   - type："journal" 期刊(蓝) / "conference" 会议(绿) / "preprint" 预印本(灰)
   - badges：红框小标签，比如 ["Cover"]、["Oral"]
   - selected: true → 放进「一作 / 共一」列表；不写则在「合作论文」列表；highlight: true → 浅黄底色突出
   - thumb：示意图路径；links：paper / pdf / code / data 等链接；tldr：一句话总结
   ===================================================================== */

window.SITE.publications = [

  /* ======================= 2026 ======================= */
  {
    title: "Lateral ventricular brain–computer interface system with lantern-inspired electrode for stable performance and memory-guided decoding",
    authors: ["Y Sun", "Y Gao", "K Wang", "J Sun", "Y Chen", "C Huang", "X Li", "Y Yang", "T Zhao", "..."],
    venue: { short: "Natl. Sci. Rev.", full: "National Science Review", year: 2026 },
    type: "journal",
    thumb: "images/pubs/ventricular-bci.svg",
    links: { paper: "https://doi.org/10.1093/nsr/nwag081" },
    tldr: { en: "A lantern-inspired expandable electrode in the rat lateral ventricle recorded stably for 112 days and decoded T-maze decisions with up to 98% accuracy.",
            zh: "灯笼式可展开电极置入大鼠侧脑室，信号稳定 112 天，T 迷宫决策解码准确率达 98%。" },
    bibtex: `@article{Sun_2026_NSR, title={Lateral ventricular brain–computer interface system with lantern-inspired electrode for stable performance and memory-guided decoding}, journal={National Science Review}, publisher={Oxford University Press (OUP)}, author={Sun, Yike and Gao, Yaxuan and Wang, Kewei and Sun, Jingnan and Chen, Yuzhen and Huang, Changxing and Li, Xiaoyang and Yang, Yanan and Zhao, Tianhua and Zhu, Haochen and Liu, Ran and Chen, Xiaogang and Lu, Bai and Gao, Xiaorong}, year={2026}, doi={10.1093/nsr/nwag081}}`
  },
  {
    title: "The EasyCog Dataset: Towards Easier Cognitive Assessment with Passive Video Watching",
    authors: ["Q Hu", "Y Zhou", "J Wang", "Y Gong", "Y Zhang", "J Sun", "J Yao", "Q Shao", "L Qiu", "..."],
    venue: { short: "IMWUT", full: "Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies", year: 2026 },
    type: "journal",
    thumb: "images/pubs/easycog-dataset.svg",
    links: { paper: "https://doi.org/10.1145/3789682" },
    tldr: { en: "A multimodal dataset of forehead/ear EEG and eye tracking from 101 participants passively watching a video, paired with MoCA/MMSE scores and benchmarks.",
            zh: "101 人被动观看视频时采集额部/耳部脑电与眼动，配有 MoCA/MMSE 评分和基准测试。" },
    bibtex: `@article{hu2026easycog, title={The EasyCog Dataset: Towards Easier Cognitive Assessment with Passive Video Watching}, volume={10}, number={1}, pages={1--28}, journal={Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies}, author={Hu, Qingyong and Zhou, Yuxuan and Wang, Jinjian and Gong, Yanbin and Zhang, Yizhen and Sun, Jingnan and Yao, Jian and Shao, Qijia and Qiu, Lili and Zhang, Qian and Li, Guihua}, year={2026}, doi={10.1145/3789682}}`
  },
  {
    title: "Brain Fog, Symptom Burden, and Theta Synchrony After Mild SARS-CoV-2 Infection",
    authors: ["J Sun", "Y Bi", "A Shen", "Y Jiang", "Y Sun"],
    venue: { short: "SSRN", full: "SSRN preprint", year: 2026 },
    type: "preprint", selected: true,
    thumb: "images/pubs/brain-fog-theta.svg",
    links: { paper: "https://doi.org/10.2139/ssrn.7092611" },
    tldr: { en: "In a mild SARS-CoV-2 cohort, parieto-occipital theta phase-lag change was associated with residual brain fog after adjusting for symptom burden.",
            zh: "轻症新冠队列中，校正症状负担后，顶枕区 θ 相位滞后变化与残余脑雾相关。" },
    bibtex: `@misc{sun2026brainfog, title={Brain Fog, Symptom Burden, and Theta Synchrony After Mild SARS-CoV-2 Infection}, author={Sun, Jingnan and Bi, Yuda and Shen, Anruo and Jiang, Yanyan and Sun, Yike}, howpublished={SSRN preprint}, year={2026}, doi={10.2139/ssrn.7092611}}`
  },
  {
    title: "Spectral Coherence Index: A Model-Free Metric for Protein Structural Ensemble Quality Assessment",
    authors: ["Y Bi", "H Zhang", "J Sun", "VD Calhoun"],
    venue: { short: "arXiv", full: "arXiv preprint arXiv:2603.25880", year: 2026 },
    type: "preprint",
    thumb: "images/pubs/spectral-coherence-index.svg",
    links: { paper: "https://arxiv.org/abs/2603.25880" },
    tldr: { en: "A model-free effective-rank metric that separates real NMR protein ensembles from incoherent controls (AUC 0.973 on 110 ensembles).",
            zh: "提出无模型的谱相干指数，用于评估 NMR 蛋白结构集合质量，110 个集合上 AUC 达 0.973。" },
    bibtex: `@misc{Bi2026SCI, title={Spectral Coherence Index: A Model-Free Metric for Protein Structural Ensemble Quality Assessment}, author={Bi, Yuda and Zhang, Huaiwen and Sun, Jingnan and Calhoun, Vince D.}, year={2026}, eprint={2603.25880}, archivePrefix={arXiv}}`
  },

  /* ======================= 2025 ======================= */
  {
    title: "A data-centric and interpretable EEG framework for depression severity grading using SHAP-based insights",
    authors: ["A Shen", "J Sun", "X Chen", "X Gao"],
    venue: { short: "JNER", full: "Journal of NeuroEngineering and Rehabilitation", year: 2025 },
    type: "journal",
    thumb: "images/pubs/depression-shap.svg",
    links: { paper: "https://doi.org/10.1186/s12984-025-01645-5" },
    tldr: { en: "An interpretable EEG framework with SHAP-guided feature selection grades depression severity (74.5% accuracy); left parieto-occipital features matter most.",
            zh: "用 SHAP 引导特征选择构建可解释的抑郁分级脑电框架，准确率 74.5%，左顶枕区特征最关键。" },
    bibtex: `@article{Shen2025SHAP, title={A data-centric and interpretable EEG framework for depression severity grading using SHAP-based insights}, author={Shen, Anruo and Sun, Jingnan and Chen, Xiaogang and Gao, Xiaorong}, journal={Journal of NeuroEngineering and Rehabilitation}, volume={22}, number={1}, pages={116}, year={2025}, doi={10.1186/s12984-025-01645-5}}`
  },
  {
    title: "Personalized EEG-guided brain stimulation targeting in major depression via network controllability and multi-objective optimization",
    authors: ["A Wang", "J Sun"],
    venue: { short: "BMC Psychiatry", full: "BMC Psychiatry", year: 2025 },
    type: "journal",
    thumb: "images/pubs/eeg-guided-stimulation.svg",
    links: { paper: "https://doi.org/10.1186/s12888-025-07171-x" },
    tldr: { en: "Network controllability plus multi-objective optimization on EEG connectivity personalizes stimulation targets for depression, outperforming random plans in simulation.",
            zh: "基于脑电连接的网络可控性与多目标优化，为抑郁症定位个体化刺激靶点，仿真效果优于随机方案。" },
    bibtex: `@article{Wang2025Controllability, title={Personalized EEG-guided brain stimulation targeting in major depression via network controllability and multi-objective optimization}, author={Wang, Aihua and Sun, Jingnan}, journal={BMC Psychiatry}, volume={25}, number={1}, pages={723}, year={2025}, doi={10.1186/s12888-025-07171-x}}`
  },
  {
    title: "High‐Frequency rTMS Improves Visual Working Memory in Patients With aMCI: A Cognitive Neural Mechanism Study",
    authors: ["M Liu*", "R Ren‐Li", "J Sun*", "JSY Yeo", "J Ma", "JX Yan", "ZX Tu", "YX Li"],
    venue: { short: "CNS Neurosci. Ther.", full: "CNS Neuroscience & Therapeutics", year: 2025 },
    type: "journal", selected: true,
    thumb: "images/pubs/rtms-amci-vwm.svg",
    links: { paper: "https://doi.org/10.1111/cns.70301" },
    tldr: { en: "A 7-day DLPFC rTMS course improved visual working memory in aMCI, with stronger encoding-stage N2pc, alpha activity and frontoparietal theta connectivity.",
            zh: "7 天 DLPFC 高频 rTMS 改善 aMCI 患者视觉工作记忆，编码期 N2pc、α 振荡和额顶 θ 连接增强。" },
    bibtex: `@article{Liu2025rTMSaMCI, title={High-Frequency {rTMS} Improves Visual Working Memory in Patients With {aMCI}: A Cognitive Neural Mechanism Study}, author={Liu, Meng and Ren-Li, Ren and Sun, Jingnan and Yeo, Janelle S. Y. and Ma, Jing and Yan, Jia-Xin and BuMaYiLaMu-XueKeEr and Tu, Zhao-Xi and Li, Yun-Xia}, journal={CNS Neuroscience \\& Therapeutics}, volume={31}, number={3}, pages={e70301}, year={2025}, doi={10.1111/cns.70301}}`
  },
  {
    title: "Enhancing working memory in MCI: Modulating alpha-gamma coupling and gamma oscillations via rTMS",
    authors: ["X Yuan*", "X Zhang*", "J Sun*", "R Li", "J Ma", "C Pan", "M Liu", "H Yang", "D Yang", "F Li", "..."],
    venue: { short: "Neurotherapeutics", full: "Neurotherapeutics", year: 2025 },
    type: "journal", selected: true,
    thumb: "images/pubs/rtms-alpha-gamma.svg",
    links: { paper: "https://doi.org/10.1016/j.neurot.2025.e00619" },
    tldr: { en: "10 Hz DLPFC rTMS improved working memory in MCI, linked to lower occipital gamma and stronger frontal-alpha–occipital-gamma coupling.",
            zh: "10 Hz rTMS 改善 MCI 工作记忆，伴随枕区 γ 活动降低与额区 α–枕区 γ 耦合增强。" },
    bibtex: `@article{Yuan2025AlphaGamma, title={Enhancing working memory in {MCI}: Modulating alpha-gamma coupling and gamma oscillations via {rTMS}}, author={Yuan, Xiao and Zhang, Xiaochen and Sun, Jingnan and Li, Renren and Ma, Jing and Pan, Chenxi and Liu, Meng and Yang, Hualan and Yang, Dan and Li, Fangyun and Bie, Zhi and Hu, Zhen and Li, Yunxia}, journal={Neurotherapeutics}, volume={22}, number={5}, pages={e00619}, year={2025}, doi={10.1016/j.neurot.2025.e00619}}`
  },
  {
    title: "Creating ionic current pathways: A non-implantation approach to achieving cortical electrical signals for brain-computer interface",
    authors: ["Y Sun", "Y Gao", "A Shen", "J Sun", "X Chen", "X Gao"],
    venue: { short: "Biosens. Bioelectron.", full: "Biosensors and Bioelectronics", year: 2025 },
    type: "journal",
    thumb: "images/pubs/ionic-pathways.svg",
    links: { paper: "https://doi.org/10.1016/j.bios.2024.116882" },
    tldr: { en: "Hollow implants in skull micro-holes form ionic current pathways, giving scalp recordings low-frequency quality comparable to implanted ECoG.",
            zh: "在颅骨微孔中放置中空植入体形成离子电流通路，头皮信号低频质量接近植入式 ECoG。" },
    bibtex: `@article{Sun_2025_Bios, title={Creating ionic current pathways: A non-implantation approach to achieving cortical electrical signals for brain-computer interface}, volume={268}, pages={116882}, journal={Biosensors and Bioelectronics}, author={Sun, Yike and Gao, Yaxuan and Shen, Anruo and Sun, Jingnan and Chen, Xiaogang and Gao, Xiaorong}, year={2025}, doi={10.1016/j.bios.2024.116882}}`
  },
  {
    title: "Beyond Frequency: Leveraging Spatial Features in SSVEP-Based Brain-Computer Interfaces with Visual Animations",
    authors: ["Y Sun", "Z Zhang", "Q Qi", "X Li", "J Sun", "K Zhang", "J Zhuang", "X Chen", "X Gao"],
    venue: { short: "EMBC 2025", full: "47th Annual International Conference of the IEEE Engineering in Medicine and Biology Society", year: 2025 },
    type: "conference",
    thumb: "images/pubs/spatial-ssvep.svg",
    links: { paper: "https://doi.org/10.1109/EMBC58623.2025.11254745" },
    tldr: { en: "Six action animations, all at 6 Hz, evoked distinct SSVEP spatial patterns, enabling frequency-free classification with 93% accuracy.",
            zh: "六种动作动画统一以 6 Hz 呈现，依靠 SSVEP 空间分布差异而非频率分类，准确率 93%。" },
    bibtex: `@inproceedings{Sun_2025_EMBC, title={Beyond Frequency: Leveraging Spatial Features in SSVEP-Based Brain-Computer Interfaces with Visual Animations}, booktitle={2025 47th Annual International Conference of the IEEE Engineering in Medicine and Biology Society (EMBC)}, author={Sun, Yike and Zhang, Ziyu and Qi, Qi and Li, Xiaoyang and Sun, Jingnan and Zhang, Kemeng and Zhuang, Jiaxiang and Chen, Xiaogang and Gao, Xiaorong}, year={2025}, pages={1--5}, doi={10.1109/EMBC58623.2025.11254745}}`
  },
  {
    title: "Dual-Pathway Dynamics in Neural Systems During Visual Working Memory: Insights from Cognitive Processing",
    authors: ["J Sun", "X Yuan", "A Shen", "Y Sun", "X Li", "Y Li"],
    venue: { short: "SSRN", full: "SSRN preprint 5146771", year: 2025 },
    type: "preprint", selected: true,
    thumb: "images/pubs/dual-pathway-vwm.svg",
    links: { paper: "https://doi.org/10.2139/ssrn.5146771" },
    tldr: { en: "EEG during visual working memory reveals two interacting systems: low-frequency global processing and high-frequency precise computation.",
            zh: "视觉工作记忆脑电揭示低频全局处理与高频精确计算两个相互作用的系统。" },
    bibtex: `@misc{Sun2025DualPathway, title={Dual-Pathway Dynamics in Neural Systems During Visual Working Memory: Insights from Cognitive Processing}, author={Sun, Jingnan and Yuan, Xiao and Shen, Anruo and Sun, Yike and Li, Xiaoyang and Li, Yunxia}, howpublished={SSRN preprint 5146771}, year={2025}, doi={10.2139/ssrn.5146771}}`
  },

  /* ======================= 2024 ======================= */
  {
    title: "Adaptive spatiotemporal encoding network for cognitive assessment using resting state EEG",
    authors: ["J Sun", "A Shen", "Y Sun", "X Chen", "Y Li", "X Gao", "B Lu"],
    venue: { short: "npj Digit. Med.", full: "npj Digital Medicine", year: 2024 },
    type: "journal", selected: true, highlight: true,
    thumb: "images/pubs/spatiotemporal-cognition.svg",
    links: { paper: "https://doi.org/10.1038/s41746-024-01384-2" },
    tldr: { en: "An adaptive spatiotemporal encoding network on resting-state EEG from 743 participants estimates cognitive scores with 3.12% mean absolute error.",
            zh: "自适应时空编码网络基于 743 人静息态脑电评估认知水平，平均绝对误差 3.12%。" },
    bibtex: `@article{sun2024spatiotemporal, title={Adaptive spatiotemporal encoding network for cognitive assessment using resting state EEG}, volume={7}, number={1}, pages={375}, journal={npj Digital Medicine}, author={Sun, Jingnan and Shen, Anruo and Sun, Yike and Chen, Xiaogang and Li, Yunxia and Gao, Xiaorong and Lu, Bai}, year={2024}, doi={10.1038/s41746-024-01384-2}}`
  },
  {
    title: "An ensemble learning model for continuous cognition assessment based on resting-state EEG",
    authors: ["J Sun", "Y Sun", "A Shen", "Y Li", "X Gao", "B Lu"],
    venue: { short: "npj Aging", full: "npj Aging", year: 2024 },
    type: "journal", selected: true, highlight: true,
    thumb: "images/pubs/ensemble-cognition.svg",
    links: { paper: "https://doi.org/10.1038/s41514-023-00129-x" },
    tldr: { en: "An AdaBoost ensemble maps resting-state EEG from 252 subjects to a continuous 0–100 cognition score (mean error 4.82), across recording devices.",
            zh: "AdaBoost 集成模型把 252 人的静息态脑电映射为 0–100 连续认知分数，跨设备误差 4.82。" },
    bibtex: `@article{sun2024ensemble, title={An ensemble learning model for continuous cognition assessment based on resting-state EEG}, volume={10}, number={1}, pages={1}, journal={npj Aging}, author={Sun, Jingnan and Sun, Yike and Shen, Anruo and Li, Yunxia and Gao, Xiaorong and Lu, Bai}, year={2024}, doi={10.1038/s41514-023-00129-x}}`
  },
  {
    title: "Precise prediction of cerebrospinal fluid amyloid beta protein for early Alzheimer's disease detection using multimodal data",
    authors: ["J Sun*", "Z Xie*", "Y Sun*", "A Shen", "R Li", "X Yuan", "B Lu", "Y Li"],
    venue: { short: "MedComm", full: "MedComm", year: 2024 },
    type: "journal", selected: true, highlight: true,
    thumb: "images/pubs/csf-amyloid.svg",
    links: { paper: "https://doi.org/10.1002/mco2.532" },
    tldr: { en: "Combining MRI, EEG and clinical scales, a random forest estimates CSF Aβ42/Aβ40 with 91.6% precision for early Alzheimer's detection.",
            zh: "融合 MRI、脑电与临床量表，随机森林预测脑脊液 Aβ42/Aβ40，精度 91.6%，用于阿尔茨海默病早期检测。" },
    bibtex: `@article{sun2024csf, title={Precise prediction of cerebrospinal fluid amyloid beta protein for early Alzheimer's disease detection using multimodal data}, volume={5}, number={5}, pages={e532}, journal={MedComm}, author={Sun, Jingnan and Xie, Zengmai and Sun, Yike and Shen, Anruo and Li, Renren and Yuan, Xiao and Lu, Bai and Li, Yunxia}, year={2024}, doi={10.1002/mco2.532}}`
  },
  {
    title: "EEG signatures of cognitive decline after mild SARS-CoV-2 infection: an age-dependent study",
    authors: ["Y Sun*", "J Sun*", "X Chen", "Y Wang", "X Gao"],
    venue: { short: "BMC Med.", full: "BMC Medicine", year: 2024 },
    type: "journal", selected: true,
    thumb: "images/pubs/covid-cognitive-decline.svg",
    links: { paper: "https://doi.org/10.1186/s12916-024-03481-1" },
    tldr: { en: "Pre/post-infection EEG from 185 participants shows stronger low-frequency synchrony and lower Hurst exponent after mild COVID-19, with smaller changes in the young.",
            zh: "185 人感染前后脑电显示轻症新冠后低频同步增强、Hurst 指数下降，儿童青少年变化较小。" },
    bibtex: `@article{sun2024covid, title={EEG signatures of cognitive decline after mild SARS-CoV-2 infection: an age-dependent study}, volume={22}, number={1}, pages={257}, journal={BMC Medicine}, author={Sun, Yike and Sun, Jingnan and Chen, Xiaogang and Wang, Yijun and Gao, Xiaorong}, year={2024}, doi={10.1186/s12916-024-03481-1}}`
  },
  {
    title: "Efficient dual-frequency SSVEP brain-computer interface system exploiting interocular visual resource disparities",
    authors: ["Y Sun", "Y Li", "Y Chen", "C Yang", "J Sun", "L Liang", "X Chen", "X Gao"],
    venue: { short: "ESWA", full: "Expert Systems with Applications", year: 2024 },
    type: "journal",
    thumb: "images/pubs/interocular-ssvep.svg",
    links: { paper: "https://doi.org/10.1016/j.eswa.2024.124144" },
    tldr: { en: "Exploiting the unequal contributions of the two eyes, a 40-target dual-frequency SSVEP BCI reaches 234 bits/min online.",
            zh: "利用双眼视觉资源差异优化双频编码，40 目标 SSVEP 脑机接口在线信息传输率达 234 bits/min。" },
    bibtex: `@article{Sun_2024_ESWA, title={Efficient dual-frequency SSVEP brain-computer interface system exploiting interocular visual resource disparities}, volume={252}, pages={124144}, journal={Expert Systems with Applications}, author={Sun, Yike and Li, Yuhan and Chen, Yuzhen and Yang, Chen and Sun, Jingnan and Liang, Liyan and Chen, Xiaogang and Gao, Xiaorong}, year={2024}, doi={10.1016/j.eswa.2024.124144}}`
  },
  {
    title: "Identifying Critical Nodes in the Cognitive Decline Process through EEG Network Community Detection Based on Autoencoder",
    authors: ["J Sun", "M Liu", "A Shen", "X Chen", "X Gao", "Y Li"],
    venue: { short: "EMBC 2024", full: "46th Annual International Conference of the IEEE Engineering in Medicine and Biology Society", year: 2024 },
    type: "conference", selected: true,
    thumb: "images/pubs/critical-nodes-autoencoder.svg",
    links: { paper: "https://doi.org/10.1109/EMBC53108.2024.10782607" },
    tldr: { en: "An autoencoder finds communities and critical nodes in resting EEG networks along healthy-to-MCI decline; TMS on these nodes improved cognition.",
            zh: "用自编码器在静息态脑电网络中找出认知衰退的关键节点，以其为靶点的 TMS 改善了 MCI 患者认知。" },
    bibtex: `@inproceedings{sun2024critical, title={Identifying Critical Nodes in the Cognitive Decline Process through EEG Network Community Detection Based on Autoencoder}, booktitle={2024 46th Annual International Conference of the IEEE Engineering in Medicine and Biology Society (EMBC)}, author={Sun, Jingnan and Liu, Meng and Shen, Anruo and Chen, Xiaogang and Gao, Xiaorong and Li, Yunxia}, year={2024}, pages={1--4}, doi={10.1109/EMBC53108.2024.10782607}}`
  },

  /* ======================= 2023 ======================= */
  {
    title: "A real-time non-implantation Bi-directional brain–Computer interface solution without stimulation artifacts",
    authors: ["Y Sun", "A Shen", "C Du", "J Sun", "X Chen", "X Gao"],
    venue: { short: "IEEE TNSRE", full: "IEEE Transactions on Neural Systems and Rehabilitation Engineering", year: 2023 },
    type: "journal",
    thumb: "images/pubs/bidirectional-bci.svg",
    links: { paper: "https://doi.org/10.1109/TNSRE.2023.3311750" },
    tldr: { en: "Temporal interference stimulation plus minimally invasive skull modification enables real-time read/write BCI without stimulation artifacts.",
            zh: "结合时间干涉刺激与微创颅骨改造，实现无刺激伪迹的实时读写双向脑机接口。" },
    bibtex: `@article{Sun_2023_TNSRE, title={A Real-Time Non-Implantation Bi-Directional Brain–Computer Interface Solution Without Stimulation Artifacts}, volume={31}, pages={3566--3575}, journal={IEEE Transactions on Neural Systems and Rehabilitation Engineering}, author={Sun, Yike and Shen, Anruo and Du, Chenlin and Sun, Jingnan and Chen, Xiaogang and Gao, Xiaorong}, year={2023}, doi={10.1109/TNSRE.2023.3311750}}`
  },

  /* ======================= 2022 ======================= */
  {
    title: "A binocular vision SSVEP brain–computer interface paradigm for dual-frequency modulation",
    authors: ["Y Sun", "L Liang", "J Sun", "X Chen", "R Tian", "Y Chen", "L Zhang", "X Gao"],
    venue: { short: "IEEE TBME", full: "IEEE Transactions on Biomedical Engineering", year: 2022 },
    type: "journal",
    thumb: "images/pubs/binocular-ssvep.svg",
    links: { paper: "https://doi.org/10.1109/TBME.2022.3212192" },
    tldr: { en: "Polarized light lets each eye see a different frequency, suppressing intermodulation and reaching 104.6 bits/min training-free online ITR.",
            zh: "用偏振光让双眼分别看到不同频率，抑制互调成分，免训练在线信息传输率达 104.6 bits/min。" },
    bibtex: `@article{Sun_2023_TBME, title={A Binocular Vision SSVEP Brain–Computer Interface Paradigm for Dual-Frequency Modulation}, volume={70}, number={4}, pages={1172--1181}, journal={IEEE Transactions on Biomedical Engineering}, author={Sun, Yike and Liang, Liyan and Sun, Jingnan and Chen, Xiaogang and Tian, Runfa and Chen, Yuanfang and Zhang, Lijian and Gao, Xiaorong}, year={2023}, doi={10.1109/TBME.2022.3212192}}`
  },
  {
    title: "Minimally invasive local-skull electrophysiological modification with piezoelectric drill",
    authors: ["Y Sun", "A Shen", "J Sun", "C Du", "X Chen", "Y Wang", "W Pei", "X Gao"],
    venue: { short: "IEEE TNSRE", full: "IEEE Transactions on Neural Systems and Rehabilitation Engineering", year: 2022 },
    type: "journal",
    thumb: "images/pubs/piezo-drill.svg",
    links: { paper: "https://doi.org/10.1109/TNSRE.2022.3192543" },
    tldr: { en: "A ~500 µm piezoelectric-drilled skull hole cut skull impedance by ~84% and raised scalp SSVEP SNR by 5.13 dB without implants.",
            zh: "压电钻在颅骨上开约 500 µm 小孔，阻抗降低约 84%，头皮 SSVEP 信噪比提高 5.13 dB，无需植入。" },
    bibtex: `@article{Sun_2022_TNSRE, title={Minimally Invasive Local-Skull Electrophysiological Modification With Piezoelectric Drill}, volume={30}, pages={2042--2051}, journal={IEEE Transactions on Neural Systems and Rehabilitation Engineering}, author={Sun, Yike and Shen, Anruo and Sun, Jingnan and Du, Chenlin and Chen, Xiaogang and Wang, Yijun and Pei, Weihua and Gao, Xiaorong}, year={2022}, doi={10.1109/TNSRE.2022.3192543}}`
  },

  /* ======================= 2021 ======================= */
  {
    title: "Neurofeedback training of the control network improves children's performance with an SSVEP-based BCI",
    authors: ["J Sun", "J He", "X Gao"],
    venue: { short: "Neuroscience", full: "Neuroscience", year: 2021 },
    type: "journal", selected: true, highlight: true,
    thumb: "images/pubs/neurofeedback-children.svg",
    links: { paper: "https://doi.org/10.1016/j.neuroscience.2021.08.010" },
    tldr: { en: "Neurofeedback training that up-regulates parietal alpha in children improved SSVEP-BCI SNR, accuracy and ITR through the attention control network.",
            zh: "上调儿童顶叶 α 的神经反馈训练，通过注意控制网络提升了 SSVEP 脑机接口的信噪比、准确率和信息传输率。" },
    bibtex: `@article{Sun_2021_Neuroscience, title={Neurofeedback Training of the Control Network Improves Children's Performance with an SSVEP-based BCI}, volume={478}, pages={24--38}, journal={Neuroscience}, author={Sun, Jingnan and He, Jing and Gao, Xiaorong}, year={2021}, doi={10.1016/j.neuroscience.2021.08.010}}`
  },

  /* ======================= 2020 ======================= */
  {
    title: "The effect of fatigue on brain connectivity networks",
    authors: ["S Zhang", "J Sun", "X Gao"],
    venue: { short: "Brain Sci. Adv.", full: "Brain Science Advances", year: 2020 },
    type: "journal",
    thumb: "images/pubs/fatigue-connectivity.svg",
    links: { paper: "https://doi.org/10.26599/BSA.2020.9050008" },
    tldr: { en: "Under N-back-induced fatigue, connectivity of parietal control regions weakens during an RSVP task, indicating reduced control ability.",
            zh: "N-back 诱发疲劳后，RSVP 任务中顶叶控制区的连接强度减弱，提示控制能力下降。" },
    bibtex: `@article{Zhang2020Fatigue, title={The effect of fatigue on brain connectivity networks}, author={Zhang, Shangen and Sun, Jingnan and Gao, Xiaorong}, journal={Brain Science Advances}, volume={6}, number={2}, pages={120--131}, year={2020}, doi={10.26599/BSA.2020.9050008}}`
  }
];
