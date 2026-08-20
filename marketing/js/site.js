/* ==========================================================================
   StudySpot — Marketing site
   Bilingual render + scroll reveal + mobile menu + FAQ
   ========================================================================== */

const ICONS = {
  'map-pin': '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  activity: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
  'qr-code': '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><path d="M14 14h3v3h-3z"/><path d="M21 14v.01"/><path d="M14 21h3v-3"/><path d="M17 21h.01"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  heart: '<path d="M19 14c1.5-1.5 2-3 2-4.5A4.5 4.5 0 0 0 16.5 5c-1.3 0-2.6.6-3.5 1.5-.9-.9-2.2-1.5-3.5-1.5A4.5 4.5 0 0 0 5 9.5C5 11 5.5 12.5 7 14l5 5 7-7Z"/>',
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/>',
  leaf: '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  zap: '<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z"/>',
  globe: '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
  'arrow-right': '<path d="M5 12h14M12 5l7 7-7 7"/>',
  'chevron-down': '<path d="m6 9 6 6 6-6"/>',
  sparkle: '<path d="M12 3l1.9 5.8a2 2 0 0 0 1.3 1.3L21 12l-5.8 1.9a2 2 0 0 0-1.3 1.3L12 21l-1.9-5.8a2 2 0 0 0-1.3-1.3L3 12l5.8-1.9a2 2 0 0 0 1.3-1.3L12 3Z"/>',
  home: '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2h-4v-7H9v7H5a2 2 0 0 1-2-2Z"/>',
  compass: '<circle cx="12" cy="12" r="10"/><path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12Z"/>',
  monitor: '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  close: '<path d="M18 6 6 18M6 6l12 12"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/>',
};
const icon = (n, cls) =>
  `<svg class="${cls || ''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[n] || ''}</svg>`;

/* ---------- bilingual content ------------------------------------------- */
const I18N = {
  zh: {
    langName: '中文',
    navFeatures: '功能', navNeeds: '校园体验', navTestimonials: '同学说', navFaq: '常见问题',
    cta: '开始探索',
    heroEyebrow: '校园空间 · 学生福祉平台',
    heroTitle1: '找到此刻',
    heroTitle2: '最适合你的校园空间',
    heroSub: 'StudySpot 按你的状态——专注、放松、社交、运动——实时推荐最合适的校园空间，并连接学校认证的活动与支持资源。',
    heroCta1: '开始探索',
    heroCta2: '了解更多',
    heroTrust1: '为高校学生打造',
    heroTrust2: '学校认证内容',
    heroTrust3: '打开即用 · 无需下载',
    floatT: '扫码签到成功',
    floatS: '实时状态已更新',
    stat1v: '10+', stat1l: '实时校园空间',
    stat2v: '7+', stat2l: '认证活动每周更新',
    stat3v: '24/7', stat3l: '官方支持热线',
    stat4v: '0', stat4l: '安装成本 · 打开即用',
    featTitle: '为真实的校园日常而设计',
    f1t: '实时空间状态', f1d: '拥挤度、噪声与开放时间实时更新，信息来自同学扫码签到与学校官方数据。',
    f2t: '扫码签到', f2d: '到访扫码，30 秒反馈实时状态，帮助下一位同学做出选择。',
    f3t: '认证活动', f3d: '浏览学校认证的社团与活动，查看详情并一键报名。',
    f4t: '支持资源', f4d: '心理咨询、学业辅导与 24 小时热线，官方支持触手可及。',
    needsTitle: '你属于哪种状态？',
    needsSub: '每一个空间都按你的状态匹配——找到对的地方，做对的事。',
    n1: '专注', n1d: '图书馆自习区 · 讨论室',
    n2: '放松', n2d: '休息室 · 冥想角',
    n3: '社交', n3d: '咖啡厅 · 活动室',
    n4: '运动', n4d: '跑道 · 健身房',
    showTitle: '一个产品，双端体验',
    showSub: '移动端与桌面端共享同一套设计语言，偏好与记录自动同步。',
    p1t: '移动端 PWA', p1d: '可添加到主屏幕，离线可用；底部导航随手签到、一键报名。',
    p2t: '桌面端 Web', p2d: '侧边栏导航与多列布局，大屏浏览空间与活动更高效。',
    testiTitle: '同学们怎么说',
    q1: '期末周全靠 StudySpot 找到空自习室，真的救了我。', q1n: '李晓雨 · 计算机系 · 大三',
    q2: '一眼就看到跑步训练营，报名超方便，社团活动都在上面。', q2n: '陈明 · 体育系 · 大二',
    q3: '界面干净，中英文一键切换，对我们国际生特别友好。', q3n: 'Alina · 国际学生',
    ctaTitle: '现在就去找你的专属空间',
    ctaSub: '无需下载，打开网页即用；也可以添加到主屏幕，随时查看。',
    ctaBtn: '打开应用',
    faqTitle: '常见问题',
    qq1: '需要注册或登录吗？', aa1: '不需要。打开即用，收藏与签到记录保存在你的浏览器本地。',
    qq2: '空间状态准确吗？', aa2: '状态来自同学扫码签到反馈与学校官方信息，并持续实时更新。',
    qq3: '覆盖哪些校区？', aa3: '内容经学校官方认证，校区支持正在逐步开放。',
    qq4: '我的数据安全吗？', aa4: '我们只保存必要的本地偏好，不采集任何个人身份信息。',
    qq5: '如何反馈问题？', aa5: '通过应用内「帮助与反馈」，或邮件 support@campus.edu。',
    footTag: '校园空间与学生福祉导航平台',
    footProduct: '产品', footProduct1: '功能', footProduct2: '空间', footProduct3: '活动',
    footSupport: '支持', footSupport1: '帮助中心', footSupport2: '隐私政策', footSupport3: '联系我们',
    copy: '© 2026 StudySpot · 为高校学生打造',
    mockNeedTitle: '你现在需要什么样的空间？',
    mockNearby: '附近空间',
    mockSpace1: '图书馆 3F 自习区', mockSpace1tag: '专注', mockSpace1c: '较空',
    mockSpace2: '校园咖啡厅', mockSpace2tag: '社交', mockSpace2c: '适中',
    mockTab1: '首页', mockTab2: '发现', mockTab3: '活动', mockTab4: '我的',
    deskNav1: '首页', deskNav2: '发现', deskNav3: '活动', deskNav4: '我的',
    deskCreate: '创建活动',
    deskTitle: '发现空间',
    deskCard1: '图书馆 3F 自习区', deskCard1t: '专注',
    deskCard2: '体育场跑道', deskCard2t: '运动',
    menu: '菜单',
    appLink: '打开应用',
  },
  en: {
    langName: 'English',
    navFeatures: 'Features', navNeeds: 'Campus', navTestimonials: 'Students', navFaq: 'FAQ',
    cta: 'Get started',
    heroEyebrow: 'Campus spaces · Student wellbeing',
    heroTitle1: 'Find the space',
    heroTitle2: 'that fits you right now',
    heroSub: 'StudySpot matches you to the right campus space by how you feel — focus, relax, connect or move — and connects you to campus-certified events and support.',
    heroCta1: 'Explore the app',
    heroCta2: 'Learn more',
    heroTrust1: 'Built for students',
    heroTrust2: 'Campus-certified content',
    heroTrust3: 'No install needed',
    floatT: 'Checked in',
    floatS: 'Live status updated',
    stat1v: '10+', stat1l: 'Live campus spaces',
    stat2v: '7+', stat2l: 'Events updated weekly',
    stat3v: '24/7', stat3l: 'Official support hotline',
    stat4v: '0', stat4l: 'Install cost · open & go',
    featTitle: 'Designed for real campus life',
    f1t: 'Live space status', f1d: 'Crowding, noise and hours update in real time, powered by student check-ins and official data.',
    f2t: 'Check-in by QR', f2d: 'Scan on arrival and share live status in 30 seconds — it helps the next student choose.',
    f3t: 'Certified events', f3d: 'Browse campus-certified clubs and events, view details and register in one tap.',
    f4t: 'Support resources', f4d: 'Counseling, academic help and a 24/7 hotline — official support always within reach.',
    needsTitle: 'How are you feeling?',
    needsSub: 'Every space matches your state — find the right place for the right moment.',
    n1: 'Focus', n1d: 'Study rooms · discussion rooms',
    n2: 'Restore', n2d: 'Lounges · quiet corners',
    n3: 'Connect', n3d: 'Cafés · activity halls',
    n4: 'Move', n4d: 'Track · gym',
    showTitle: 'One product, two experiences',
    showSub: 'Mobile and desktop share the same design language, with preferences synced automatically.',
    p1t: 'Mobile PWA', p1d: 'Add to home screen and use offline; check in and register straight from the bottom nav.',
    p2t: 'Desktop web', p2d: 'Sidebar navigation and multi-column layouts make browsing spaces and events effortless.',
    testiTitle: 'What students say',
    q1: 'StudySpot saved me during finals — I always found a free study room.', q1n: 'Li Xiaoyu · CS · Junior',
    q2: 'Spotted the running camp instantly and registered in seconds. All club events are on it.', q2n: 'Chen Ming · Sports · Sophomore',
    q3: 'Clean UI and one-tap language switch — great for us international students.', q3n: 'Alina · International student',
    ctaTitle: 'Go find your space',
    ctaSub: 'No download needed — open the web app, or add it to your home screen for quick access.',
    ctaBtn: 'Open the app',
    faqTitle: 'Frequently asked',
    qq1: 'Do I need an account?', aa1: 'No. It works right away — favorites and check-ins are stored locally in your browser.',
    qq2: 'Are space statuses accurate?', aa2: 'Statuses come from student check-in feedback plus official campus data, updated continuously.',
    qq3: 'Which campuses are covered?', aa3: 'Content is campus-certified and more campuses are rolling out over time.',
    qq4: 'Is my data safe?', aa4: 'We only store necessary local preferences and never collect personal identity information.',
    qq5: 'How do I report an issue?', aa5: 'Use “Help & feedback” inside the app, or email support@campus.edu.',
    footTag: 'Campus space & student wellbeing navigation',
    footProduct: 'Product', footProduct1: 'Features', footProduct2: 'Spaces', footProduct3: 'Events',
    footSupport: 'Support', footSupport1: 'Help center', footSupport2: 'Privacy', footSupport3: 'Contact',
    copy: '© 2026 StudySpot · Made for students',
    mockNeedTitle: 'What kind of space do you need?',
    mockNearby: 'Nearby spaces',
    mockSpace1: 'Library 3F Study', mockSpace1tag: 'Focus', mockSpace1c: 'Open',
    mockSpace2: 'Campus Café', mockSpace2tag: 'Connect', mockSpace2c: 'Moderate',
    mockTab1: 'Home', mockTab2: 'Discover', mockTab3: 'Events', mockTab4: 'Me',
    deskNav1: 'Home', deskNav2: 'Discover', deskNav3: 'Events', deskNav4: 'Me',
    deskCreate: 'Create event',
    deskTitle: 'Discover spaces',
    deskCard1: 'Library 3F Study', deskCard1t: 'Focus',
    deskCard2: 'Stadium Track', deskCard2t: 'Move',
    menu: 'Menu',
    appLink: 'Open app',
  },
};

/* Need tiles (shared by phone mockup + needs section) */
const NEED_TILES = [
  { key: 'n1', color: '#FFB800', icon: 'book' },
  { key: 'n2', color: '#7BB832', icon: 'leaf' },
  { key: 'n3', color: '#5BC0EB', icon: 'users' },
  { key: 'n4', color: '#FF6B6B', icon: 'zap' },
];

/* ---------- app shell ---------------------------------------------------- */
const App = {
  lang: localStorage.getItem('mkt_lang') || 'zh',

  t(key) {
    const v = I18N[this.lang][key];
    if (v === undefined && this.lang !== 'zh') return I18N.zh[key] || '';
    return v || '';
  },

  toggleLang() {
    this.lang = this.lang === 'zh' ? 'en' : 'zh';
    localStorage.setItem('mkt_lang', this.lang);
    document.documentElement.lang = this.lang === 'zh' ? 'zh-CN' : 'en';
    this.render();
  },

  init() {
    document.documentElement.lang = this.lang === 'zh' ? 'zh-CN' : 'en';
    this.render();
    this.bind();
  },

  /* ---- render ----------------------------------------------------------- */
  render() {
    const t = (k) => this.t(k);
    const L = I18N[this.lang];
    const appHref = '../index.html';

    const phoneMockup = `
      <div class="phone reveal">
        <div class="phone-screen">
          <div class="ph-status"><span>9:41</span><span>${icon('globe')}</span></div>
          <div class="ph-app">
            <div class="ph-header"><span class="ph-brand">StudySpot</span><span class="ph-pill">${this.lang === 'zh' ? 'EN' : '中文'}</span></div>
            <div class="ph-need-title">${t('mockNeedTitle')}</div>
            <div class="ph-needs">
              ${NEED_TILES.map(n => `
                <div class="ph-need"><div class="ph-need-ic" style="background:${n.color}">${icon(n.icon)}</div><span>${t(n.key)}</span></div>`).join('')}
            </div>
            <div class="ph-near"><span>${t('mockNearby')}</span><em>${icon('arrow-right')}</em></div>
            <div class="ph-space">
              <div><div class="ph-space-name">${t('mockSpace1')}</div><div class="ph-space-tag">${t('mockSpace1tag')}</div></div>
              <span class="ph-badge">${t('mockSpace1c')}</span>
            </div>
            <div class="ph-space">
              <div><div class="ph-space-name">${t('mockSpace2')}</div><div class="ph-space-tag">${t('mockSpace2tag')}</div></div>
              <span class="ph-badge ph-badge--mid">${t('mockSpace2c')}</span>
            </div>
            <div class="ph-nav">
              <span class="on">${t('mockTab1')}</span><span>${t('mockTab2')}</span><span>${t('mockTab3')}</span><span>${t('mockTab4')}</span>
            </div>
          </div>
        </div>
      </div>`;

    const browserMockup = `
      <div class="browser reveal">
        <div class="browser-bar"><span class="bdot bdot-r"></span><span class="bdot bdot-y"></span><span class="bdot bdot-g"></span><span class="burl">studyspot.campus.edu</span></div>
        <div class="browser-body">
          <div class="br-side">
            <div class="br-brand"><span class="br-logo"></span>StudySpot</div>
            <div class="br-nav on">${icon('home')} ${t('deskNav1')}</div>
            <div class="br-nav">${icon('compass') || icon('activity')} ${t('deskNav2')}</div>
            <div class="br-nav">${icon('calendar')} ${t('deskNav3')}</div>
            <div class="br-nav">${icon('users')} ${t('deskNav4')}</div>
            <div class="br-create">+ ${t('deskCreate')}</div>
          </div>
          <div class="br-main">
            <div class="br-title">${t('deskTitle')}</div>
            <div class="br-cards">
              <div class="br-card"><div class="bc-name">${t('deskCard1')}</div><div class="bc-tag">${t('deskCard1t')}</div><span class="bc-badge">${t('mockSpace1c')}</span></div>
              <div class="br-card"><div class="bc-name">${t('deskCard2')}</div><div class="bc-tag">${t('deskCard2t')}</div><span class="bc-badge">${t('mockSpace1c')}</span></div>
            </div>
          </div>
        </div>
      </div>`;

    const features = [
      { ic: 'activity', t: t('f1t'), d: t('f1d') },
      { ic: 'qr-code', t: t('f2t'), d: t('f2d') },
      { ic: 'calendar', t: t('f3t'), d: t('f3d') },
      { ic: 'heart', t: t('f4t'), d: t('f4d') },
    ];
    const testimonials = [
      { q: t('q1'), n: t('q1n'), c: 'L' },
      { q: t('q2'), n: t('q2n'), c: 'C' },
      { q: t('q3'), n: t('q3n'), c: 'A' },
    ];
    const faqs = [
      { q: t('qq1'), a: t('aa1') },
      { q: t('qq2'), a: t('aa2') },
      { q: t('qq3'), a: t('aa3') },
      { q: t('qq4'), a: t('aa4') },
      { q: t('qq5'), a: t('aa5') },
    ];

    const langBtn = `<button class="lang-btn" data-action="lang">${icon('globe')} ${this.lang === 'zh' ? 'EN' : '中文'}</button>`;

    document.getElementById('site').innerHTML = `
      <header class="site-header" id="site-header">
        <div class="header-inner">
          <a class="brand" href="#top" data-scroll>
            <span class="brand-mark">${icon('map-pin')}</span>StudySpot
          </a>
          <nav class="nav-links" aria-label="Primary">
            <a href="#features" data-scroll>${t('navFeatures')}</a>
            <a href="#needs" data-scroll>${t('navNeeds')}</a>
            <a href="#testimonials" data-scroll>${t('navTestimonials')}</a>
            <a href="#faq" data-scroll>${t('navFaq')}</a>
          </nav>
          <div class="header-actions">
            ${langBtn}
            <a class="btn btn-primary" href="${appHref}" target="_blank" rel="noopener">${t('cta')} ${icon('arrow-right')}</a>
            <button class="menu-btn" data-action="menu" aria-label="${t('menu')}">${icon('menu')}</button>
          </div>
        </div>
      </header>

      <div class="mobile-menu" id="mobile-menu">
        <div class="mobile-menu-panel">
          <div class="mobile-menu-head">
            <span class="brand"><span class="brand-mark">${icon('map-pin')}</span>StudySpot</span>
            <button class="menu-btn" data-action="menu" aria-label="Close">${icon('close')}</button>
          </div>
          <a class="mm-link" href="#features" data-scroll>${t('navFeatures')}</a>
          <a class="mm-link" href="#needs" data-scroll>${t('navNeeds')}</a>
          <a class="mm-link" href="#testimonials" data-scroll>${t('navTestimonials')}</a>
          <a class="mm-link" href="#faq" data-scroll>${t('navFaq')}</a>
          <div class="mm-cta">
            <a class="btn btn-primary btn-lg btn-block" href="${appHref}" target="_blank" rel="noopener">${t('appLink')}</a>
          </div>
        </div>
      </div>

      <main id="top">
        <section class="hero">
          <div class="container hero-grid">
            <div class="hero-copy reveal">
              <span class="eyebrow">${t('heroEyebrow')}</span>
              <h1 class="h-display h-hero">${t('heroTitle1')}<br><span class="accent">${t('heroTitle2')}</span></h1>
              <p class="lead">${t('heroSub')}</p>
              <div class="hero-ctas">
                <a class="btn btn-primary btn-lg" href="${appHref}" target="_blank" rel="noopener">${t('heroCta1')} ${icon('arrow-right')}</a>
                <a class="btn btn-ghost btn-lg" href="#features" data-scroll>${t('heroCta2')}</a>
              </div>
              <div class="hero-trust">
                <span>${icon('check')} ${t('heroTrust1')}</span>
                <span>${icon('shield')} ${t('heroTrust2')}</span>
                <span>${icon('sparkle')} ${t('heroTrust3')}</span>
              </div>
            </div>
            <div class="hero-visual">
              ${phoneMockup}
              <div class="float-card reveal">
                <div class="fc-ic">${icon('check')}</div>
                <div><div class="fc-t">${t('floatT')}</div><div class="fc-s">${t('floatS')}</div></div>
              </div>
            </div>
          </div>
        </section>

        <section class="stats">
          <div class="container stats-grid">
            <div class="stat reveal"><div class="stat-num"><em>${t('stat1v')}</em></div><div class="stat-label">${t('stat1l')}</div></div>
            <div class="stat reveal"><div class="stat-num"><em>${t('stat2v')}</em></div><div class="stat-label">${t('stat2l')}</div></div>
            <div class="stat reveal"><div class="stat-num"><em>${t('stat3v')}</em></div><div class="stat-label">${t('stat3l')}</div></div>
            <div class="stat reveal"><div class="stat-num"><em>${t('stat4v')}</em></div><div class="stat-label">${t('stat4l')}</div></div>
          </div>
        </section>

        <section class="section" id="features">
          <div class="container">
            <div class="section-head reveal">
              <span class="eyebrow">${t('navFeatures')}</span>
              <h2 class="h-display h-section">${t('featTitle')}</h2>
            </div>
            <div class="features-grid">
              ${features.map((f, i) => `
                <article class="feature reveal">
                  <div class="feature-ic">${icon(f.ic)}</div>
                  <h3>${f.t}</h3>
                  <p>${f.d}</p>
                </article>`).join('')}
            </div>
          </div>
        </section>

        <section class="section section--soft" id="needs">
          <div class="container">
            <div class="section-head reveal">
              <span class="eyebrow">${t('n1')} · ${t('n2')} · ${t('n3')} · ${t('n4')}</span>
              <h2 class="h-display h-section">${t('needsTitle')}</h2>
              <p class="lead">${t('needsSub')}</p>
            </div>
            <div class="needs-grid">
              ${NEED_TILES.map((n, i) => `
                <div class="need reveal">
                  <div class="need-ic" style="background:${n.color}">${icon(n.icon)}</div>
                  <h3>${t(n.key)}</h3>
                  <p>${t(n.key + 'd')}</p>
                </div>`).join('')}
            </div>
          </div>
        </section>

        <section class="section" id="showcase">
          <div class="container show-grid">
            <div class="show-copy reveal">
              <span class="eyebrow">${t('navFeatures')} / ${t('deskTitle')}</span>
              <h2 class="h-display h-section">${t('showTitle')}</h2>
              <p class="lead">${t('showSub')}</p>
              <div class="show-points">
                <div class="show-point">
                  <div class="sp-ic">${icon('qr-code')}</div>
                  <div><h4>${t('p1t')}</h4><p>${t('p1d')}</p></div>
                </div>
                <div class="show-point">
                  <div class="sp-ic">${icon('monitor') || icon('activity')}</div>
                  <div><h4>${t('p2t')}</h4><p>${t('p2d')}</p></div>
                </div>
              </div>
            </div>
            ${browserMockup}
          </div>
        </section>

        <section class="section section--soft" id="testimonials">
          <div class="container">
            <div class="section-head reveal">
              <span class="eyebrow">${t('navTestimonials')}</span>
              <h2 class="h-display h-section">${t('testiTitle')}</h2>
            </div>
            <div class="testi-grid">
              ${testimonials.map((x, i) => `
                <figure class="testi reveal">
                  <blockquote class="quote">“${x.q}”</blockquote>
                  <figcaption class="who">
                    <span class="ava">${x.c}</span>
                    <span><b>${x.n.split(' · ')[0]}</b><span>${x.n.split(' · ').slice(1).join(' · ')}</span></span>
                  </figcaption>
                </figure>`).join('')}
            </div>
          </div>
        </section>

        <section class="section--dark cta" id="cta">
          <div class="container reveal">
            <span class="eyebrow">StudySpot</span>
            <h2 class="h-display h-section">${t('ctaTitle')}</h2>
            <p class="lead">${t('ctaSub')}</p>
            <div class="cta-actions">
              <a class="btn btn-light btn-lg" href="${appHref}" target="_blank" rel="noopener">${t('ctaBtn')} ${icon('arrow-right')}</a>
              <button class="btn btn-primary btn-lg" data-action="lang">${icon('globe')} ${this.lang === 'zh' ? 'English' : '中文'}</button>
            </div>
          </div>
        </section>

        <section class="section faq" id="faq">
          <div class="container">
            <div class="section-head reveal">
              <span class="eyebrow">${t('navFaq')}</span>
              <h2 class="h-display h-section">${t('faqTitle')}</h2>
            </div>
            <div class="faq-list reveal">
              ${faqs.map(f => `
                <details>
                  <summary>${f.q}<span class="faq-ic">${icon('chevron-down')}</span></summary>
                  <div class="faq-a">${f.a}</div>
                </details>`).join('')}
            </div>
          </div>
        </section>
      </main>

      <footer class="site-footer">
        <div class="container">
          <div class="footer-grid">
            <div class="footer-brand">
              <a class="brand" href="#top" data-scroll><span class="brand-mark">${icon('map-pin')}</span>StudySpot</a>
              <p>${t('footTag')}</p>
            </div>
            <div class="footer-col">
              <h5>${t('footProduct')}</h5>
              <a href="#features" data-scroll>${t('footProduct1')}</a>
              <a href="#needs" data-scroll>${t('footProduct2')}</a>
              <a href="#cta" data-scroll>${t('footProduct3')}</a>
            </div>
            <div class="footer-col">
              <h5>${t('footSupport')}</h5>
              <a href="#faq" data-scroll>${t('footSupport1')}</a>
              <a href="#faq" data-scroll>${t('footSupport2')}</a>
              <a href="mailto:support@campus.edu">${t('footSupport3')}</a>
            </div>
          </div>
          <div class="footer-bottom">
            <span>${t('copy')}</span>
            <button class="fb-lang" data-action="lang">${icon('globe')} ${this.lang === 'zh' ? 'English' : '中文'}</button>
          </div>
        </div>
      </footer>`;
  },

  /* ---- interactions ----------------------------------------------------- */
  bind() {
    document.addEventListener('click', (e) => {
      const langBtn = e.target.closest('[data-action="lang"]');
      if (langBtn) { this.toggleLang(); return; }

      const menuBtn = e.target.closest('[data-action="menu"]');
      if (menuBtn) {
        const menu = document.getElementById('mobile-menu');
        menu.classList.toggle('open');
        document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
        return;
      }

      const scrollLink = e.target.closest('[data-scroll]');
      if (scrollLink) {
        // close mobile menu if open
        const menu = document.getElementById('mobile-menu');
        if (menu.classList.contains('open')) {
          menu.classList.remove('open');
          document.body.style.overflow = '';
        }
        return; // native smooth scroll handles the rest
      }
    });

    // Sticky header background on scroll
    const header = document.getElementById('site-header');
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Reveal on scroll — elements already in the viewport become visible
    // immediately (no IO round-trip), the rest reveal as they scroll in.
    const els = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
      els.forEach((el) => {
        // Force the final state for anything already in the viewport so it
        // paints fully visible immediately (calling getBoundingClientRect
        // first would recalc the hidden base style and start a .6s
        // transition that leaves the element semi-transparent on first
        // paint). Only below-the-fold elements keep the transition so they
        // still fade in as the user scrolls.
        el.style.transition = 'none';
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('in');
        } else {
          el.style.transition = '';
          io.observe(el);
        }
      });
    } else {
      els.forEach((el) => el.classList.add('in'));
    }
  },
};

App.init();
