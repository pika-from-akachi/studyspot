/* ==========================================================================
   StudySpot — Application core
   Hash router · i18n · persistent state · header/bottom-nav rendering
   ========================================================================== */

const App = {
  lang: 'zh',
  state: { favorites: [], registered: [], checkins: 0 },

  init() {
    this.loadState();
    this.bindNav();
    window.addEventListener('hashchange', () => this.render());
    this.render();
    // Register service worker for offline / installability
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').catch(() => {});
      });
    }
  },

  /* ---- i18n ----------------------------------------------------------- */
  // Accepts { zh, en } objects or plain strings (returned as-is).
  t(obj) {
    if (typeof obj === 'string') return obj;
    return (obj && (obj[this.lang] || obj.zh)) || '';
  },

  setLang(lang) {
    this.lang = lang;
    localStorage.setItem('ss_lang', lang);
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    this.render();
  },

  /* ---- state ---------------------------------------------------------- */
  loadState() {
    this.lang = localStorage.getItem('ss_lang') || 'zh';
    this.state.favorites = JSON.parse(localStorage.getItem('ss_favorites') || '[]');
    this.state.registered = JSON.parse(localStorage.getItem('ss_registered') || '[]');
    this.state.checkins = parseInt(localStorage.getItem('ss_checkins') || '0', 10);
  },
  save() {
    localStorage.setItem('ss_favorites', JSON.stringify(this.state.favorites));
    localStorage.setItem('ss_registered', JSON.stringify(this.state.registered));
    localStorage.setItem('ss_checkins', String(this.state.checkins));
  },
  isFavorite(id) { return this.state.favorites.includes(id); },
  toggleFavorite(id) {
    const i = this.state.favorites.indexOf(id);
    if (i >= 0) this.state.favorites.splice(i, 1);
    else this.state.favorites.push(id);
    this.save();
  },
  isRegistered(id) { return this.state.registered.includes(id); },
  registerActivity(id) {
    if (!this.state.registered.includes(id)) this.state.registered.push(id);
    this.save();
  },
  addCheckin() {
    this.state.checkins += 1;
    this.save();
  },

  /* ---- routing -------------------------------------------------------- */
  parseHash() {
    const h = (location.hash || '#/').replace(/^#/, '') || '/';
    const [path, query] = h.split('?');
    const segments = path.split('/').filter(Boolean);
    return { segments, params: new URLSearchParams(query || '') };
  },

  navigate(hash) {
    if (location.hash === hash) this.render();
    else location.hash = hash;
  },

  back() { history.length > 1 ? history.back() : this.navigate('#/'); },

  /* ---- shell rendering ------------------------------------------------ */
  render() {
    const { segments, params } = this.parseHash();
    const route = this.matchRoute(segments);
    window.scrollTo(0, 0);
    this.renderHeader(route);
    this.renderMain(route, params);
    this.renderNav(route);
    this.renderSidebar(route);
  },

  matchRoute(seg) {
    const s = seg;
    if (s.length === 0) return { name: 'home' };
    if (s[0] === 'discover') return { name: 'discover' };
    if (s[0] === 'spaces' && s.length === 1) return { name: 'spaces' };
    if (s[0] === 'spaces' && s.length === 2) return { name: 'spaceDetail', id: s[1] };
    if (s[0] === 'checkin' && s.length === 2) return { name: 'checkin', id: s[1] };
    if (s[0] === 'activities' && s.length === 1) return { name: 'activities' };
    if (s[0] === 'activities' && s[1] === 'create') return { name: 'createActivity' };
    if (s[0] === 'activities' && s.length === 2) return { name: 'activityDetail', id: s[1] };
    if (s[0] === 'activities' && s[1] && s[2] === 'register') return { name: 'register', id: s[1] };
    if (s[0] === 'profile' && s.length === 1) return { name: 'profile' };
    if (s[0] === 'profile' && s[1] === 'favorites') return { name: 'favorites' };
    if (s[0] === 'profile' && s[1] === 'activities') return { name: 'myActivities' };
    if (s[0] === 'profile' && s[1] === 'support') return { name: 'support' };
    if (s[0] === 'profile' && s[1] === 'settings') return { name: 'settings' };
    return { name: 'home' };
  },

  activeTabFor(route) {
    switch (route.name) {
      case 'home': case 'spaces': case 'spaceDetail': case 'checkin': return 'home';
      case 'discover': return 'discover';
      case 'activities': case 'activityDetail': case 'register': case 'createActivity': return 'activities';
      case 'profile': case 'favorites': case 'myActivities': case 'support': case 'settings': return 'profile';
      default: return 'home';
    }
  },

  routeTitle(route) {
    return {
      discover: { zh: '发现', en: 'Discover' },
      spaces: { zh: '附近空间', en: 'Nearby Spaces' },
      spaceDetail: { zh: '空间详情', en: 'Space Details' },
      checkin: { zh: '签到', en: 'Check In' },
      activities: { zh: '活动', en: 'Events' },
      activityDetail: { zh: '活动详情', en: 'Event Details' },
      register: { zh: '活动报名', en: 'Register' },
      createActivity: { zh: '创建活动', en: 'Create Event' },
      profile: { zh: '我的', en: 'Profile' },
      favorites: { zh: '我的收藏', en: 'Favorites' },
      myActivities: { zh: '我的活动', en: 'My Activities' },
      support: { zh: '支持资源', en: 'Support' },
      settings: { zh: '设置', en: 'Settings' },
    }[route.name] || null;
  },

  renderHeader(route) {
    const el = document.getElementById('app-header');
    const t = this.t.bind(this);
    // Sub-pages show a back button on mobile; it is hidden on desktop where the sidebar covers navigation.
    const showBack = ['spaces', 'spaceDetail', 'checkin', 'activityDetail', 'register', 'createActivity',
      'favorites', 'myActivities', 'support', 'settings'].includes(route.name);
    const title = this.routeTitle(route);

    const left = title
      ? `<div class="h-left">${showBack ? `<button class="icon-btn" data-nav="back" aria-label="Back">${icon('arrow-left')}</button>` : ''}<span class="page-title">${t(title)}</span></div>`
      : `<div class="h-left">${crest(30)}<span class="page-title" style="font-size:20px">StudySpot</span></div>`;

    const right = `${route.name === 'activities'
      ? `<button class="icon-btn" data-nav="#/activities/create" aria-label="${t({ zh: '创建活动', en: 'Create event' })}">${icon('plus')}</button>`
      : ''}<button class="lang-pill" data-action="toggle-lang">${icon('globe')} ${this.lang === 'zh' ? 'EN' : '中文'}</button>`;

    el.innerHTML = `${left}<div class="h-right">${right}</div>`;
  },

  renderMain(route, params) {
    const main = document.getElementById('app-main');
    const v = Views;
    const narrow = ['spaceDetail', 'activityDetail', 'checkin', 'register', 'createActivity', 'settings'].includes(route.name);
    main.classList.toggle('main-narrow', narrow);
    main.classList.toggle('main-wide', !narrow);
    switch (route.name) {
      case 'home': main.innerHTML = v.home(); break;
      case 'discover': main.innerHTML = v.discover(params.get('type')); break;
      case 'spaces': main.innerHTML = v.spaces(params.get('type'), params.get('q')); break;
      case 'spaceDetail': main.innerHTML = v.spaceDetail(route.id); break;
      case 'checkin': main.innerHTML = v.checkin(route.id); break;
      case 'activities': main.innerHTML = v.activities(params.get('tag')); break;
      case 'activityDetail': main.innerHTML = v.activityDetail(route.id); break;
      case 'register': main.innerHTML = v.register(route.id); break;
      case 'createActivity': main.innerHTML = v.createActivity(); break;
      case 'profile': main.innerHTML = v.profile(); break;
      case 'favorites': main.innerHTML = v.favorites(); break;
      case 'myActivities': main.innerHTML = v.myActivities(); break;
      case 'support': main.innerHTML = v.support(); break;
      case 'settings': main.innerHTML = v.settings(); break;
      default: main.innerHTML = v.home();
    }
  },

  renderNav(route) {
    const el = document.getElementById('bottom-nav');
    const t = this.t.bind(this);
    const activeTab = this.activeTabFor(route);
    const tabs = [
      { key: 'home',       hash: '#/',             label: { zh: '首页', en: 'Home' },      icon: 'home' },
      { key: 'discover',   hash: '#/discover',     label: { zh: '发现', en: 'Discover' },  icon: 'compass' },
      { key: 'activities', hash: '#/activities',   label: { zh: '活动', en: 'Events' },    icon: 'calendar' },
      { key: 'profile',    hash: '#/profile',      label: { zh: '我的', en: 'Profile' },   icon: 'user' },
    ];
    el.innerHTML = tabs.map(tab => `
      <button class="nav-item ${activeTab === tab.key ? 'active' : ''}" data-nav="${tab.hash}" aria-label="${t(tab.label)}">
        <span class="nav-icon">${icon(tab.icon)}</span>
        <span class="nav-label">${t(tab.label)}</span>
      </button>`).join('');
  },

  renderSidebar(route) {
    const el = document.getElementById('sidebar');
    if (!el) return;
    const t = this.t.bind(this);
    const activeTab = this.activeTabFor(route);
    const tabs = [
      { key: 'home',       hash: '#/',             label: { zh: '首页', en: 'Home' },      icon: 'home' },
      { key: 'discover',   hash: '#/discover',     label: { zh: '发现', en: 'Discover' },  icon: 'compass' },
      { key: 'activities', hash: '#/activities',   label: { zh: '活动', en: 'Events' },    icon: 'calendar' },
      { key: 'profile',    hash: '#/profile',      label: { zh: '我的', en: 'Profile' },   icon: 'user' },
    ];
    const quick = [
      { hash: '#/profile/favorites', label: { zh: '我的收藏', en: 'Favorites' },   icon: 'bookmark' },
      { hash: '#/profile/support',   label: { zh: '支持资源', en: 'Support' },     icon: 'heart' },
      { hash: '#/profile/settings',  label: { zh: '设置', en: 'Settings' },        icon: 'settings' },
    ];
    const sideItem = (item, isTab) => `
      <button class="side-item ${isTab && activeTab === item.key ? 'active' : ''}" data-nav="${item.hash}">
        <span class="side-icon">${icon(item.icon)}</span>${t(item.label)}
      </button>`;

    el.innerHTML = `
      <div class="sidebar-brand">
        ${crest(40)}
        <div>
          <div class="brand-name">StudySpot</div>
          <div class="brand-sub">${this.lang === 'zh' ? '剑桥大学' : 'University of Cambridge'}</div>
        </div>
      </div>
      <nav class="sidebar-nav">
        ${tabs.map(tab => sideItem(tab, true)).join('')}
        <div class="sidebar-section-label">${t({ zh: '快捷', en: 'Quick links' })}</div>
        ${quick.map(item => sideItem(item, false)).join('')}
      </nav>
      <div class="sidebar-footer">
        <button class="btn btn-primary btn-block" data-nav="#/activities/create">${icon('plus')} ${t({ zh: '创建活动', en: 'Create event' })}</button>
        <button class="lang-pill sidebar-lang" data-action="toggle-lang">${icon('globe')} ${this.lang === 'zh' ? 'EN' : '中文'}</button>
      </div>`;
  },

  /* ---- event delegation ----------------------------------------------- */
  bindNav() {
    document.addEventListener('click', (e) => {
      const navBtn = e.target.closest('[data-nav]');
      if (navBtn) {
        const target = navBtn.getAttribute('data-nav');
        if (target === 'back') { e.preventDefault(); this.back(); }
        else { e.preventDefault(); this.navigate(target); }
        return;
      }

      const actionBtn = e.target.closest('[data-action]');
      if (actionBtn) {
        const action = actionBtn.getAttribute('data-action');
        this.handleAction(action, actionBtn, e);
        return;
      }

      const actionEl = e.target.closest('[data-click]');
      if (actionEl) {
        const action = actionEl.getAttribute('data-click');
        this.handleAction(action, actionEl, e);
      }
    });

    document.addEventListener('submit', (e) => {
      const form = e.target.closest('form[data-form]');
      if (form) {
        e.preventDefault();
        this.handleForm(form.getAttribute('data-form'), form);
      }
    });

    document.addEventListener('change', (e) => {
      const filterInput = e.target.closest('input[data-filter]');
      if (filterInput) {
        const value = filterInput.value;
        const current = location.hash;
        const base = current.startsWith('#/discover') ? '#/discover'
          : current.startsWith('#/activities') ? '#/activities'
          : '#/spaces';
        const param = base.includes('activities') ? 'tag' : 'type';
        this.navigate(base + (value === 'all' ? '' : '?' + param + '=' + value));
        return;
      }
      const toggleInput = e.target.closest('input[data-toggle]');
      if (toggleInput) {
        const kind = toggleInput.getAttribute('data-toggle');
        const checked = toggleInput.checked;
        if (kind === 'large-text') this.applyFontScale(checked ? 'large' : 'medium');
        if (kind === 'notify') this.toast(checked
          ? this.t({ zh: '通知已开启', en: 'Notifications on' })
          : this.t({ zh: '通知已关闭', en: 'Notifications off' }));
      }
    });

    document.addEventListener('input', (e) => {
      const searchInput = e.target.closest('input[data-search-scope]');
      if (searchInput) {
        const scope = searchInput.getAttribute('data-search-scope');
        const q = searchInput.value.trim().toLowerCase();
        const cards = document.querySelectorAll('[data-search-list="' + scope + '"] .space-card, [data-search-list="' + scope + '"] .activity-card');
        cards.forEach(card => {
          const match = card.textContent.toLowerCase().includes(q);
          card.style.display = match ? '' : 'none';
        });
      }
    });
  },

  applyFontScale(scale) {
    const sizes = { small: '0.94', medium: '1', large: '1.12' };
    document.documentElement.style.fontSize = sizes[scale] || '1';
    localStorage.setItem('ss_font_scale', scale);
  },

  handleAction(action, el, event) {
    const t = this.t.bind(this);
    const id = el.getAttribute('data-id');
    switch (action) {
      case 'goto-space':
        this.navigate('#/spaces/' + id);
        break;
      case 'goto-activity':
        this.navigate('#/activities/' + id);
        break;
      case 'goto-checkin':
        this.navigate('#/checkin/' + id);
        break;
      case 'goto-favorites':
        this.navigate('#/profile/favorites');
        break;
      case 'goto-myactivities':
        this.navigate('#/profile/activities');
        break;
      case 'goto-support':
        this.navigate('#/profile/support');
        break;
      case 'goto-settings':
        this.navigate('#/profile/settings');
        break;
      case 'set-lang-zh':
        this.setLang('zh');
        break;
      case 'set-lang-en':
        this.setLang('en');
        break;
      case 'contact': {
        const info = el.getAttribute('data-info') || '';
        this.toast(t({ zh: '联系方式：', en: 'Contact: ' }) + info);
        break;
      }
      case 'toggle-lang':
        this.setLang(this.lang === 'zh' ? 'en' : 'zh');
        break;
      case 'nav-settings':
        this.navigate('#/profile/settings');
        break;
      case 'nav-favorites':
        this.navigate('#/profile/favorites');
        break;
      case 'toggle-favorite':
        this.toggleFavorite(id);
        this.render();
        this.toast(this.isFavorite(id) ? t({ zh: '已收藏', en: 'Added to favorites' }) : t({ zh: '已取消收藏', en: 'Removed from favorites' }));
        break;
      case 'checkin':
        this.addCheckin();
        this.toast(t({ zh: '签到成功！已分享你的实时反馈', en: "Checked in! Your update was shared." }));
        setTimeout(() => { if (location.hash.includes('checkin')) this.navigate('#/spaces/' + id); }, 1200);
        break;
      case 'register': {
        const act = ACTIVITIES.find(a => a.id === id);
        if (act) this.registerActivity(id);
        this.render();
        this.toast(t({ zh: '报名成功！', en: 'Registered!' }));
        break;
      }
      case 'quick-register':
        if (!this.isRegistered(id)) this.registerActivity(id);
        this.render();
        this.toast(t({ zh: '报名成功！', en: 'Registered!' }));
        break;
      case 'open-register':
        this.navigate('#/activities/' + id + '/register');
        break;
      case 'create-activity-submit': {
        this.toast(t({ zh: '活动已创建！等待审核', en: 'Event created! Under review.' }));
        setTimeout(() => this.navigate('#/activities'), 1000);
        break;
      }
      case 'close-sheet':
        document.querySelector('.sheet-overlay')?.remove();
        break;
      default:
        break;
    }
  },

  handleForm(formName, form) {
    const t = this.t.bind(this);
    if (formName === 'checkin') {
      this.addCheckin();
      this.toast(t({ zh: '签到成功！感谢分享实时状态', en: "Checked in! Thanks for sharing." }));
      setTimeout(() => this.navigate('#/spaces/' + (form.getAttribute('data-id') || '')), 1200);
    }
    if (formName === 'register') {
      this.registerActivity(form.getAttribute('data-id'));
      this.toast(t({ zh: '报名成功！', en: 'Registered!' }));
      setTimeout(() => this.navigate('#/profile/activities'), 1000);
    }
    if (formName === 'create-activity') {
      this.toast(t({ zh: '活动已创建，等待认证审核', en: 'Event created, pending review.' }));
      setTimeout(() => this.navigate('#/activities'), 1000);
    }
  },

  toast(msg) {
    const el = document.getElementById('toast');
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => el.classList.remove('show'), 2400);
  },
};

App.init();
