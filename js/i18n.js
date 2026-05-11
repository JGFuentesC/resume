(function () {
  var STORAGE_KEY = 'jgf_lang';

  var T = {
    en: {
      /* NAV */
      'nav.about':     'About',
      'nav.career':    'Career',
      'nav.ventures':  'Ventures',
      'nav.education': 'Education',
      'nav.professor': 'Professor',
      'nav.archive':   'Archive',
      'nav.contact':   'Contact',
      /* HERO */
      'hero.tagline': 'AI Executive | Entrepreneur | Professor',

      /* ABOUT */
      'about.heading': 'About Me',
      'about.p1': 'BSc in Applied Mathematics and Computer Science from UNAM, MSc in Analytics Intelligence (Data Mining) from Universidad Anáhuac, and PhD in Engineering Sciences from Universidad Iberoamericana with a research stay at Universidad de Chile. Advanced AI studies at MIT; Google-certified Professional Machine Learning Engineer.',
      'about.p2': 'Over 17 years of experience solving complex problems with AI and analytics in finance, manufacturing, retail, health, and government. His ability to transform data into business value has driven critical projects across multiple organizations, including Silicon Valley experience.',
      'about.p3': 'Co-founder of Insaite (applied AI) and Plurall (Colombian financial-inclusion platform serving 6.5M+ micro-entrepreneurs). Founder of Augmented Humans, an AI education platform focused on human-machine symbiosis.',
      'about.p4': 'Featured in Forbes, El Financiero, and El Economista for his expertise in artificial intelligence and data science.',
      /* CAREER */
      'career.heading':    'Career',
      'job1.date':  'Aug 2018 — Present',
      'job1.title': 'CTO & Co-founder',
      'job1.body':  'AI cognitive solutions for manufacturing, finance and retail. Technical and strategic leadership.',
      'job2.date':  'Oct 2022 — Present',
      'job2.title': 'CRO / Chief AI Officer & Co-founder',
      'job2.body':  'First AI-powered Colombian Fin-App. Working capital and mobile banking for 6.5M+ micro-entrepreneurs. Backed by Fasanara, Visa and Dale.',
      'job3.date':  '2024 — Present',
      'job3.title': 'Founder',
      'job3.body':  'AI education platform focused on human-machine symbiosis to enhance intellect and creativity.',
      'job4.date':  'Jul 2024 — Present',
      'job4.title': 'Graduate Professor',
      'job4.body':  'Business Intelligence for the Master\'s in Analytics and Information Technologies.',
      'job5.date':  'Aug 2012 — Aug 2025',
      'job5.title': 'Undergraduate Professor',
      'job5.body':  'Multivariate Analysis, Differential Equations, Programming, Databases, Numerical Analysis, Statistics, Calculus, Advanced Computing, Data Mining, Stochastic Simulation.',
      'job6.date':  'Aug 2021 — Aug 2022',
      'job6.title': 'Sr. Data Scientist',
      'job6.body':  'Led the data science team for global software engineering talent matching. Silicon Valley experience.',
      'job7.date':  'Dec 2012 — Jun 2016',
      'job7.title': 'VP of Credit Card Analytics',
      'job7.body':  'Predictive modeling of attrition, spending propensity and credit risk. Advanced segmentation.',
      'job8.date':  'Feb 2010 — Dec 2012',
      'job8.title': 'Data Mining Consultant',
      'job8.body':  'Analytics and technology consulting for retail banking collections.',
      'job9.date':  'Feb 2009 — Feb 2010',
      'job9.title': 'Decision Support Analyst',
      'job9.body':  'Analytics support, reporting and database analysis.',
      /* VENTURES */
      'ventures.heading':     'Ventures',
      'vent1.title': 'CTO · Insaite',
      'vent1.since': 'since 2018',
      'vent1.body':  'Applied AI to optimize business processes. Cognitive ML and data science solutions reducing costs and improving performance in manufacturing, finance and retail.',
      'vent2.title': 'CRO/CDO · Plurall',
      'vent2.since': 'since 2022',
      'vent2.body':  'AI-powered financial inclusion for 6.5M+ micro-entrepreneurs in Colombia. Risk management, data strategies and Embedded Finance expansion across Latin America.',
      'vent3.title': 'Founder · Augmented Humans',
      'vent3.since': 'since 2024',
      'vent3.body':  'AI education platform. Human-machine symbiosis to enhance intellect and creativity. Training the next generation of AI professionals.',
      /* EDUCATION */
      'education.heading': 'Education',
      'edu1.degree': 'PhD in Engineering Sciences',
      'edu1.school': 'U. Iberoamericana + U. de Chile',
      'edu2.degree': 'MSc in Analytics Intelligence',
      'edu2.school': 'U. Anáhuac',
      'edu3.degree': 'Specialization in Data Mining',
      'edu3.school': 'U. Anáhuac',
      'edu4.degree': 'BSc Applied Mathematics & Computer Science',
      'edu4.school': 'UNAM',
      'edu5.degree': 'Advanced ML for Big Data & Text Processing',
      'edu5.school': 'Massachusetts Institute of Technology',
      /* PROFESSOR */
      'prof.heading':        'Professor',
      'prof.unam.title':     'UNAM · FES Acatlán',
      'prof.unam.since':     'Aug 2012 — Aug 2025',
      'prof.unam.body':      'Professor for the Bachelor\'s programs in Actuarial Science, Applied Mathematics & Computer Science, and Data Science.',
      'prof.anahuac.title':  'Universidad Anáhuac · CADIT',
      'prof.anahuac.since':  'Jul 2024 — Present',
      'prof.anahuac.body':   'Graduate Professor — Business Intelligence for the Master\'s in Analytics and Information Technologies.',
      'prof.anahuac.link':   'CADIT Profile ↗',
      /* ARCHIVE HEADINGS */
      'pub.heading':  'Publications',
      'press.heading': 'Press',
      'cert.heading': 'Certifications',
      /* SKILLS */
      'skills.heading': 'Skills',
      /* HOBBIES */
      'hobbies.heading': 'Hobbies',
      'hobby.soccer':    'Soccer',
      'hobby.visualkei': 'Visual Kei',
      'hobby.anime':     'Anime',
      'hobby.games':     'Video Games',
      'hobby.guitar':    'Guitar',
      /* FOOTER */
      'footer.credit': 'Conceptual photography generated with diffusion models',
      /* COURSES */
      'course.multivariate': 'Multivariate Analysis',
      'course.diffeq':       'Differential Equations',
      'course.algorithms':   'Algorithms & Programming',
      'course.databases':    'Databases',
      'course.numerical':    'Numerical Analysis',
      'course.stats2':       'Statistics II',
      'course.calc1':        'Calculus I',
      'course.calc3':        'Calculus III',
      'course.compTopics':   'Advanced Computing Topics',
      'course.datamining':   'Data Mining',
      'course.stochastic':   'Stochastic Simulation',
      'course.statcomp':     'Statistical Computing',
      'course.paradigms':    'Programming Paradigms for Data Science',
      'course.probability':  'Applied Probability',
      /* SKILL GROUPS */
      'sg.aiml':   'AI & ML',
      'sg.ds':     'Data Science',
      'sg.eng':    'Engineering',
      'sg.domain': 'Domain',
      /* SKILLS */
      'sk.ml':         'Machine Learning',
      'sk.dl':         'Deep Learning',
      'sk.genai':      'GenAI & RAG',
      'sk.pred':       'Predictive Modeling',
      'sk.or':         'Operations Research',
      'sk.ds':         'Data Science',
      'sk.bigdata':    'Big Data',
      'sk.stats':      'Advanced Statistics',
      'sk.bi':         'Business Intelligence',
      'sk.seg':        'Segmentation',
      'sk.python':     'Python',
      'sk.sql':        'SQL',
      'sk.backend':    'Backend Development',
      'sk.gcp':        'GCP',
      'sk.linux':      'Linux',
      'sk.credit':     'Credit Risk',
      'sk.attrition':  'Customer Attrition',
      'sk.fintech':    'Fintech',
      'sk.aiedu':      'AI Education',
      'sk.leadership': 'Technical Leadership',
    },

    ja: {
      /* NAV */
      'nav.about':     '私について',
      'nav.career':    'キャリア',
      'nav.ventures':  '起業',
      'nav.education': '学歴',
      'nav.professor': '教授',
      'nav.archive':   'アーカイブ',
      'nav.contact':   '連絡',
      /* HERO */
      'hero.tagline': 'AIエグゼクティブ | 起業家 | 教授',
      /* ABOUT */
      'about.heading': '私について',
      'about.p1': 'UNAM（国立自治大学）で応用数学・計算機科学の学士号を取得。アナワク大学でデータマイニング専攻の分析インテリジェンス修士号を、イベロアメリカーナ大学でエンジニアリング科学の博士号（チリ大学研究留学あり）を取得。MITでAI高度研究を修了し、Google認定プロフェッショナルMLエンジニア。',
      'about.p2': '17年以上の専門経験を持ち、金融・製造・小売・医療・行政分野でAIと分析ソリューションにより複雑な問題を解決。データをビジネス価値に変換する能力が多数組織の重要プロジェクトを支えてきた。シリコンバレー勤務経験あり。',
      'about.p3': 'InsaiteとPlurall（コロンビア650万人超のマイクロ起業家向け金融包摂プラットフォーム）の共同創業者。Augmented Humansの創業者（人間と機械の共生に特化したAI教育プラットフォーム）。',
      'about.p4': 'フォーブス、エル・フィナンシエロ、エル・エコノミスタにてAI・データサイエンスの専門家として取り上げられている。',
      /* CAREER */
      'career.heading':    'キャリア',
      'job1.date':  '2018年8月 — 現在',
      'job1.title': '最高技術責任者 & 共同創業者',
      'job1.body':  '製造・金融・小売向けAI認知ソリューション。技術的・戦略的リーダーシップ。',
      'job2.date':  '2022年10月 — 現在',
      'job2.title': 'CRO / チーフAIオフィサー & 共同創業者',
      'job2.body':  'コロンビア初のAI駆動フィンテックアプリ。650万人超のマイクロ起業家へ運転資金・モバイルバンキングを提供。Fasanara・Visa・Dale出資。',
      'job3.date':  '2024年 — 現在',
      'job3.title': '創業者',
      'job3.body':  '人間と機械の共生に特化したAI教育プラットフォーム。知性と創造性の向上を目指す。',
      'job4.date':  '2024年7月 — 現在',
      'job4.title': '大学院教授',
      'job4.body':  '分析・情報技術修士課程のビジネスインテリジェンス担当。',
      'job5.date':  '2012年8月 — 2025年8月',
      'job5.title': '学部講師',
      'job5.body':  '多変量解析・微分方程式・プログラミング・データベース・数値解析・統計学・微積分・計算機科学・データマイニング・確率的シミュレーション。',
      'job6.date':  '2021年8月 — 2022年8月',
      'job6.title': 'シニアデータサイエンティスト',
      'job6.body':  'グローバルソフトウェアエンジニア人材マッチングのデータサイエンスチームを率いた。シリコンバレー勤務。',
      'job7.date':  '2012年12月 — 2016年6月',
      'job7.title': 'クレジットカード分析担当副部長',
      'job7.body':  '解約・消費性向・信用リスクの予測モデリング。高度セグメンテーション。',
      'job8.date':  '2010年2月 — 2012年12月',
      'job8.title': 'データマイニングコンサルタント',
      'job8.body':  '個人向け銀行の債権回収向け分析・技術コンサルティング。',
      'job9.date':  '2009年2月 — 2010年2月',
      'job9.title': '意思決定支援アナリスト',
      'job9.body':  '分析サポート・レポーティング・データベース解析。',
      /* VENTURES */
      'ventures.heading':     '起業',
      'vent1.title': 'CTO · Insaite',
      'vent1.since': '2018年より',
      'vent1.body':  'ビジネスプロセス最適化のための応用AI。製造・金融・小売のコスト削減・パフォーマンス向上に貢献する認知MLソリューション。',
      'vent2.title': 'CRO/CDO · Plurall',
      'vent2.since': '2022年より',
      'vent2.body':  'コロンビアで650万人超のマイクロ起業家へのAI駆動金融包摂。リスク管理・データ戦略・ラテンアメリカでのEmbedded Finance展開。',
      'vent3.title': '創業者 · Augmented Humans',
      'vent3.since': '2024年より',
      'vent3.body':  'AI教育プラットフォーム。人間と機械の共生で知性と創造性を向上。次世代AI専門家の育成。',
      /* EDUCATION */
      'education.heading': '学歴',
      'edu1.degree': 'エンジニアリング科学博士',
      'edu1.school': 'イベロアメリカーナ大学 + チリ大学',
      'edu2.degree': '分析インテリジェンス修士',
      'edu2.school': 'アナワク大学',
      'edu3.degree': 'データマイニング専攻',
      'edu3.school': 'アナワク大学',
      'edu4.degree': '応用数学・計算機科学学士',
      'edu4.school': 'UNAM（国立自治大学）',
      'edu5.degree': 'Advanced ML for Big Data & Text Processing',
      'edu5.school': 'マサチューセッツ工科大学（MIT）',
      /* PROFESSOR */
      'prof.heading':        '教授',
      'prof.unam.title':     'UNAM · FES アカトラン',
      'prof.unam.since':     '2012年8月 — 2025年8月',
      'prof.unam.body':      '保険数理学・応用数学・計算機科学・データサイエンス学部課程の講師。',
      'prof.anahuac.title':  'アナワク大学 · CADIT',
      'prof.anahuac.since':  '2024年7月 — 現在',
      'prof.anahuac.body':   '大学院教授 — 分析・情報技術修士課程のビジネスインテリジェンス担当。',
      'prof.anahuac.link':   'CADITプロフィール ↗',
      /* ARCHIVE HEADINGS */
      'pub.heading':   '出版物',
      'press.heading': 'メディア',
      'cert.heading':  '資格',
      /* SKILLS */
      'skills.heading': 'スキル',
      /* HOBBIES */
      'hobbies.heading': '趣味',
      'hobby.soccer':    'サッカー',
      'hobby.visualkei': 'ヴィジュアル系',
      'hobby.anime':     'アニメ',
      'hobby.games':     'ゲーム',
      'hobby.guitar':    'ギター',
      /* FOOTER */
      'footer.credit': '拡散モデルで生成された概念写真',
      /* COURSES */
      'course.multivariate': '多変量解析',
      'course.diffeq':       '微分方程式',
      'course.algorithms':   'アルゴリズムとプログラミング',
      'course.databases':    'データベース',
      'course.numerical':    '数値解析',
      'course.stats2':       '統計学II',
      'course.calc1':        '微積分I',
      'course.calc3':        '微積分III',
      'course.compTopics':   '計算機科学特論',
      'course.datamining':   'データマイニング',
      'course.stochastic':   '確率的シミュレーション',
      'course.statcomp':     '統計計算',
      'course.paradigms':    'データサイエンスのプログラミングパラダイム',
      'course.probability':  '応用確率論',
      /* SKILL GROUPS */
      'sg.aiml':   'AI・ML',
      'sg.ds':     'データサイエンス',
      'sg.eng':    'エンジニアリング',
      'sg.domain': '専門分野',
      /* SKILLS */
      'sk.ml':         '機械学習',
      'sk.dl':         'ディープラーニング',
      'sk.genai':      '生成AI・RAG',
      'sk.pred':       '予測モデリング',
      'sk.or':         'オペレーションズリサーチ',
      'sk.ds':         'データサイエンス',
      'sk.bigdata':    'ビッグデータ',
      'sk.stats':      '高度統計学',
      'sk.bi':         'ビジネスインテリジェンス',
      'sk.seg':        'セグメンテーション',
      'sk.python':     'Python',
      'sk.sql':        'SQL',
      'sk.backend':    'バックエンド開発',
      'sk.gcp':        'GCP',
      'sk.linux':      'Linux',
      'sk.credit':     '信用リスク',
      'sk.attrition':  '顧客離脱分析',
      'sk.fintech':    'フィンテック',
      'sk.aiedu':      'AI教育',
      'sk.leadership': '技術リーダーシップ',
    }
  };

  /* On first load, snapshot all ES text from the DOM */
  var ES = {};
  function snapshotES() {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      ES[el.dataset.i18n] = el.textContent;
    });
  }

  function applyLang(lang) {
    document.documentElement.lang = lang === 'ja' ? 'ja' : lang === 'en' ? 'en' : 'es';

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.dataset.i18n;
      var text = lang === 'es' ? ES[key] : (T[lang] && T[lang][key]);
      if (text !== undefined && text !== null) el.textContent = text;
    });

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    localStorage.setItem(STORAGE_KEY, lang);
  }

  document.addEventListener('DOMContentLoaded', function () {
    snapshotES();

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () { applyLang(btn.dataset.lang); });
    });

    var saved = localStorage.getItem(STORAGE_KEY) || 'es';
    applyLang(saved);
  });
})();
