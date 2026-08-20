/* ==========================================================================
   StudySpot — View renderers (pure HTML-string functions)
   ========================================================================== */

const Views = {

  t(obj) { return App.t(obj); },

  /* ---------- shared components --------------------------------------- */

  emptyState(iconName, title, subtitle) {
    return `<div class="empty-state">${icon(iconName)}
      <h3 class="card-title text-primary">${title}</h3>
      ${subtitle ? `<p class="body-small mt-1">${subtitle}</p>` : ''}</div>`;
  },

  needCard(typeKey) {
    const type = NEED_TYPES[typeKey];
    return `<button class="need-card" data-nav="#/discover?type=${typeKey}">
      <div class="need-icon" style="background:${type.color}">${icon(type.icon)}</div>
      <div>
        <h3 class="card-title">${this.t(type.name)}</h3>
        <p class="body-small text-secondary mt-1">${this.t(type.desc)}</p>
      </div>
    </button>`;
  },

  crowdBadge(space) {
    const c = CROWD[space.crowd];
    return `<span class="status-badge ${c.badge}"><span class="status-dot ${c.dot}"></span>${this.t(c.name)}</span>`;
  },

  spaceCard(space) {
    const t = this.t;
    const type = NEED_TYPES[space.type];
    return `
    <article class="card-tap space-card" data-click="goto-space" data-id="${space.id}" role="button" tabindex="0" aria-label="${t(space.name)}">
      <div class="card-head">
        <div>
          <h3 class="card-title">${t(space.name)}</h3>
          <div class="row gap-sm mt-2">
            <span class="tag tag-warm">${t(type.name)}</span>
            <span class="caption text-secondary">${space.walkMin} ${t({ zh: '分钟步行', en: 'min walk' })}</span>
          </div>
        </div>
        ${this.crowdBadge(space)}
      </div>
      <div class="row gap-md mt-3" style="flex-wrap:wrap">
        ${space.features.map(f => `<span class="feature-item">${icon(f.icon)} ${t(f.label)}</span>`).join('')}
      </div>
    </article>`;
  },

  activityCard(act) {
    const t = this.t;
    const pct = Math.min(100, Math.round(act.enrolled / act.capacity * 100));
    const full = act.enrolled >= act.capacity;
    return `
    <article class="card-tap activity-card" data-click="goto-activity" data-id="${act.id}" role="button" tabindex="0" aria-label="${t(act.title)}">
      <div class="activity-img" style="background:${act.color}">${icon(act.icon)}</div>
      <div class="row-between">
        <h3 class="card-title">${t(act.title)}</h3>
        <span class="tag tag-warm">${t(act.tag)}</span>
      </div>
      <div class="stack stack-gap mt-2">
        <div class="row gap-sm body-small text-secondary">${icon('calendar')} ${t(act.date)} · ${act.time}</div>
        <div class="row gap-sm body-small text-secondary">${icon('map-pin')} ${t(act.location)}</div>
        <div class="row-between body-small text-secondary">
          <span class="row gap-sm">${icon('users')} ${act.enrolled} / ${act.capacity}</span>
          ${full ? `<span class="tag tag-coral">${t({ zh: '已满', en: 'Full' })}</span>` : `<span class="tag tag-lime">${t({ zh: '可报名', en: 'Open' })}</span>`}
        </div>
      </div>
      <div class="progress mt-3"><div class="progress-fill" style="width:${pct}%"></div></div>
    </article>`;
  },

  spaceFilterTags(scope, active) {
    const t = this.t;
    const self = this;
    const mk = (key, label) => `<label class="filter-radio">
      <input type="radio" name="sf" value="${key}" ${key === active ? 'checked' : ''} data-filter="${scope}" />
      <span class="filter-label">${label}</span></label>`;
    return mk('all', t({ zh: '全部', en: 'All' })) +
      Object.keys(NEED_TYPES).map(k => mk(k, t(NEED_TYPES[k].name))).join('');
  },

  activityFilterTags(active) {
    const t = this.t;
    const mk = (key, label) => `<label class="filter-radio">
      <input type="radio" name="af" value="${key}" ${key === active ? 'checked' : ''} data-filter="activities" />
      <span class="filter-label">${label}</span></label>`;
    const TAGS = [
      { key: 'all', label: { zh: '全部', en: 'All' } },
      { key: 'academic', label: { zh: '学业', en: 'Academic' } },
      { key: 'sports', label: { zh: '运动', en: 'Sports' } },
      { key: 'multicultural', label: { zh: '多元文化', en: 'Multicultural' } },
      { key: 'wellbeing', label: { zh: '心理健康', en: 'Wellbeing' } },
      { key: 'language', label: { zh: '语言', en: 'Language' } },
    ];
    return TAGS.map(tg => mk(tg.key, t(tg.label))).join('');
  },

  qrSvg(seed) {
    let h = 0;
    for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
    const N = 21;
    const cells = [];
    const finderZone = (r, c) => (r < 8 && c < 8) || (r < 8 && c >= N - 8) || (r >= N - 8 && c < 8);
    for (let r = 0; r < N; r++) {
      for (let c = 0; c < N; c++) {
        if (finderZone(r, c)) continue;
        h = (h * 1103515245 + 12345) >>> 0;
        if (h % 100 < 45) cells.push(c + ',' + r);
      }
    }
    const finder = (x, y) => `
      <rect x="${x}" y="${y}" width="7" height="7" fill="#fff" stroke="#1A1A1A" stroke-width="1.4"/>
      <rect x="${x + 2.2}" y="${y + 2.2}" width="2.6" height="2.6" fill="#1A1A1A"/>`;
    return `<svg viewBox="0 0 ${N} ${N}" width="180" height="180" shape-rendering="crispEdges" role="img" aria-label="QR code">
      <rect width="${N}" height="${N}" fill="#fff"/>
      ${cells.map(p => `<rect x="${p.split(',')[0]}" y="${p.split(',')[1]}" width="1" height="1" fill="#1A1A1A"/>`).join('')}
      ${finder(0, 0)}${finder(N - 7, 0)}${finder(0, N - 7)}
    </svg>`;
  },

  /* ---------- home ------------------------------------------------------ */

  home() {
    const t = this.t;
    const needs = Object.keys(NEED_TYPES);
    const nearby = SPACES.slice(0, 3);
    return `
    <div class="page page-pad">
      <section class="section">
        <h2 class="section-title mb-3">${t({ zh: '你现在需要什么样的空间？', en: 'What kind of space do you need?' })}</h2>
        <div class="grid-2">
          ${needs.map(n => this.needCard(n)).join('')}
        </div>
      </section>

      <section>
        <div class="section-head">
          <h2 class="section-title">${t({ zh: '附近空间', en: 'Nearby spaces' })}</h2>
          <button class="btn-text" data-nav="#/spaces">${t({ zh: '查看全部', en: 'See all' })} ${icon('chevron-right')}</button>
        </div>
        <div class="stack stack-gap">
          ${nearby.map(s => this.spaceCard(s)).join('')}
        </div>
      </section>
    </div>`;
  },

  /* ---------- discover / space list ------------------------------------ */

  discover(type) { return this.spaceList(type, '#/discover', { zh: '发现', en: 'Discover' }); },
  spaces(type) { return this.spaceList(type, '#/spaces', { zh: '附近空间', en: 'Nearby Spaces' }); },

  spaceList(type, base, title) {
    const t = this.t;
    const filter = type || 'all';
    const list = filter === 'all' ? SPACES : SPACES.filter(s => s.type === filter);
    return `
    <div class="page page-pad">
      <section class="mb-3">
        <div class="search-bar">
          ${icon('search')}
          <input type="search" placeholder="${t({ zh: '搜索空间、楼宇或设施', en: 'Search spaces or facilities' })}" data-search-scope="space-list" />
        </div>
      </section>
      <section class="mb-3">
        <div class="filter-scroll">
          ${this.spaceFilterTags('spaces', filter)}
        </div>
      </section>
      <section data-search-list="space-list">
        ${list.length
          ? `<div class="stack stack-gap">${list.map(s => this.spaceCard(s)).join('')}</div>`
          : this.emptyState('map-pin', t({ zh: '没有找到匹配的空间', en: 'No spaces match' }), t({ zh: '试试其他需求类型', en: 'Try another need type' }))}
      </section>
    </div>`;
  },

  /* ---------- space detail --------------------------------------------- */

  spaceDetail(id) {
    const s = SPACES.find(x => x.id === id);
    const t = this.t;
    if (!s) return `<div class="page page-pad">${this.emptyState('map-pin', t({ zh: '未找到该空间', en: 'Space not found' }), '')}</div>`;
    const type = NEED_TYPES[s.type];
    const isFav = App.isFavorite(s.id);
    return `
    <div class="page page-pad">
      <div class="detail-hero" style="background:${s.color}">
        <span class="detail-hero-badge">${icon('clock')} ${s.hours}</span>
      </div>

      <section class="mb-3">
        <div class="row-between">
          <h1 class="page-title">${t(s.name)}</h1>
        </div>
        <div class="row gap-sm mt-2">
          <span class="tag tag-warm">${t(type.name)}</span>
          <span class="caption text-secondary">${s.walkMin} ${t({ zh: '分钟步行', en: 'min walk' })}</span>
        </div>
      </section>

      <section class="mb-3">
        <h2 class="section-title mb-2">${t({ zh: '实时状态', en: 'Live status' })}</h2>
        <div class="card">
          <div class="row-between">
            <span class="body-default">${t({ zh: '当前拥挤度', en: 'Crowding' })}</span>
            ${this.crowdBadge(s)}
          </div>
          <div class="divider"></div>
          <div class="row-between">
            <span class="body-default">${t({ zh: '噪声水平', en: 'Noise level' })}</span>
            <span class="body-default text-secondary">${s.type === 'focus' || s.type === 'restore'
              ? t({ zh: '安静', en: 'Quiet' })
              : s.type === 'move' ? t({ zh: '活跃', en: 'Lively' }) : t({ zh: '适中', en: 'Moderate' })}</span>
          </div>
          <div class="divider"></div>
          <div class="row-between">
            <span class="body-default">${t({ zh: '最近更新', en: 'Updated' })}</span>
            <span class="body-small text-tertiary">${t({ zh: '5 分钟前 · 学生签到', en: '5 min ago · student check-in' })}</span>
          </div>
        </div>
      </section>

      <section class="mb-3">
        <h2 class="section-title mb-2">${t({ zh: '设施与特征', en: 'Facilities' })}</h2>
        <div class="row gap-sm" style="flex-wrap:wrap">
          ${s.features.map(f => `<span class="tag tag-neutral">${icon(f.icon)} ${t(f.label)}</span>`).join('')}
        </div>
      </section>

      <section class="mb-3">
        <h2 class="section-title mb-2">${t({ zh: '开放时间', en: 'Opening hours' })}</h2>
        <div class="card row-between">
          <span class="body-default">${t({ zh: '每日开放', en: 'Daily' })}</span>
          <span class="body-default text-secondary">${s.hours}</span>
        </div>
      </section>

      <section class="mb-3">
        <h2 class="section-title mb-2">${t({ zh: '空间介绍', en: 'About' })}</h2>
        <p class="body-default text-secondary">${t(s.desc)}</p>
      </section>

      <section class="mb-4">
        <div class="alert alert-info">${icon('info')} <span>${t({ zh: '到访后签到，你的反馈将帮助其他同学实时了解这里的状态。', en: 'Check in on arrival — your update helps others see how busy it is right now.' })}</span></div>
      </section>

      <div class="row gap-md">
        <button class="btn btn-primary flex-1" data-click="goto-checkin" data-id="${s.id}">${icon('qr-code')} ${t({ zh: '到访签到', en: 'Check in' })}</button>
        <button class="btn btn-outline ${isFav ? 'active' : ''}" data-click="toggle-favorite" data-id="${s.id}" aria-pressed="${isFav}">
          ${icon(isFav ? 'heart-filled' : 'heart')} ${t({ zh: '收藏', en: 'Save' })}
        </button>
      </div>
    </div>`;
  },

  /* ---------- check-in -------------------------------------------------- */

  checkin(id) {
    const s = SPACES.find(x => x.id === id);
    const t = this.t;
    if (!s) return `<div class="page page-pad">${this.emptyState('qr-code', t({ zh: '未找到该空间', en: 'Space not found' }), '')}</div>`;
    const CROWD_KEYS = ['free', 'light', 'moderate', 'busy', 'full'];
    const NOISE = [
      { key: 'quiet', label: { zh: '安静', en: 'Quiet' } },
      { key: 'normal', label: { zh: '适中', en: 'Normal' } },
      { key: 'noisy', label: { zh: '嘈杂', en: 'Noisy' } },
    ];
    return `
    <div class="page page-pad">
      <section class="card mb-3" style="text-align:center">
        <div class="checkin-qr">${this.qrSvg(s.id + '-checkin')}</div>
        <h2 class="card-title mt-3">${t(s.name)}</h2>
        <p class="body-small text-tertiary mt-2">${t({ zh: '扫描空间入口二维码，确认你已到达', en: 'Scan the QR code at the space entrance to confirm your arrival' })}</p>
      </section>

      <form data-form="checkin" data-id="${s.id}">
        <section class="card mb-3">
          <h2 class="section-title mb-3">${t({ zh: '当前拥挤度', en: 'Current crowding' })}</h2>
          <div class="grid-2">
            ${CROWD_KEYS.map(k => `
              <label class="check-item">
                <input type="radio" name="crowd" value="${k}" ${k === 'light' ? 'checked' : ''} />
                <div class="check-box">${icon('check')}</div>
                <span class="check-label">${t(CROWD[k].name)}</span>
              </label>`).join('')}
          </div>
        </section>

        <section class="card mb-3">
          <h2 class="section-title mb-3">${t({ zh: '噪声水平', en: 'Noise level' })}</h2>
          <div class="filter-scroll">
            ${NOISE.map(n => `
              <label class="filter-radio">
                <input type="radio" name="noise" value="${n.key}" ${n.key === 'normal' ? 'checked' : ''} />
                <span class="filter-label">${t(n.label)}</span>
              </label>`).join('')}
          </div>
        </section>

        <button class="btn btn-primary btn-block btn-lg" type="submit">${icon('check-circle')} ${t({ zh: '确认签到', en: 'Confirm check-in' })}</button>
      </form>
    </div>`;
  },

  /* ---------- activities ------------------------------------------------ */

  activities(tag) {
    const t = this.t;
    const filter = tag || 'all';
    const list = filter === 'all' ? ACTIVITIES : ACTIVITIES.filter(a => a.tagKey === filter);
    return `
    <div class="page page-pad">
      <section class="mb-3">
        <div class="filter-scroll">
          ${this.activityFilterTags(filter)}
        </div>
      </section>
      <section>
        ${list.length
          ? `<div class="stack stack-gap">${list.map(a => this.activityCard(a)).join('')}</div>`
          : this.emptyState('calendar', t({ zh: '暂无此类活动', en: 'No events yet' }), t({ zh: '稍后再来看看吧', en: 'Check back later' }))}
      </section>
    </div>`;
  },

  /* ---------- activity detail ------------------------------------------- */

  activityDetail(id) {
    const act = ACTIVITIES.find(a => a.id === id);
    const t = this.t;
    if (!act) return `<div class="page page-pad">${this.emptyState('calendar', t({ zh: '未找到该活动', en: 'Event not found' }), '')}</div>`;
    const registered = App.isRegistered(act.id);
    const pct = Math.min(100, Math.round(act.enrolled / act.capacity * 100));
    const full = act.enrolled >= act.capacity;
    return `
    <div class="page page-pad">
      <div class="detail-hero" style="background:${act.color}">
        <span class="detail-hero-badge">${icon(act.icon)} ${t(act.tag)}</span>
      </div>

      <section class="mb-3">
        <h1 class="page-title">${t(act.title)}</h1>
        <div class="row gap-sm mt-2">
          <span class="tag tag-neutral">${icon('users')} ${t({ zh: '组织者', en: 'Organizer' })}: ${act.organizer}</span>
        </div>
      </section>

      <section class="mb-3">
        <div class="card stack stack-gap">
          <div class="row gap-sm">${icon('calendar')} <span>${t(act.date)} · ${act.time}</span></div>
          <div class="row gap-sm">${icon('map-pin')} <span>${t(act.location)}</span></div>
          <div class="row gap-sm">${icon('shield')} <span>${t({ zh: '学校认证活动', en: 'Campus-certified event' })}</span></div>
        </div>
      </section>

      <section class="mb-3">
        <h2 class="section-title mb-2">${t({ zh: '活动介绍', en: 'About' })}</h2>
        <p class="body-default text-secondary">${t(act.desc)}</p>
      </section>

      <section class="mb-3">
        <div class="card">
          <div class="row-between mb-2">
            <span class="body-default">${t({ zh: '报名人数', en: 'Attendance' })}</span>
            <span class="body-default text-secondary">${act.enrolled} / ${act.capacity}</span>
          </div>
          <div class="progress"><div class="progress-fill" style="width:${pct}%"></div></div>
        </div>
      </section>

      <div class="row gap-md">
        ${registered
          ? `<button class="btn btn-secondary flex-1" disabled>${icon('check')} ${t({ zh: '已报名', en: 'Registered' })}</button>`
          : full
            ? `<button class="btn btn-secondary flex-1" disabled>${t({ zh: '名额已满', en: 'Full' })}</button>`
            : `<button class="btn btn-primary flex-1" data-click="open-register" data-id="${act.id}">${icon('ticket')} ${t({ zh: '立即报名', en: 'Register' })}</button>`}
        <button class="btn btn-outline" data-click="toggle-favorite" data-id="${act.id}">${icon('bookmark')} ${t({ zh: '收藏', en: 'Save' })}</button>
      </div>
    </div>`;
  },

  /* ---------- register -------------------------------------------------- */

  register(id) {
    const act = ACTIVITIES.find(a => a.id === id);
    const t = this.t;
    if (!act) return `<div class="page page-pad">${this.emptyState('calendar', t({ zh: '未找到该活动', en: 'Event not found' }), '')}</div>`;
    return `
    <div class="page page-pad">
      <section class="card mb-3">
        <h2 class="card-title">${t(act.title)}</h2>
        <div class="stack stack-gap mt-2 body-small text-secondary">
          <div class="row gap-sm">${icon('calendar')} ${t(act.date)} · ${act.time}</div>
          <div class="row gap-sm">${icon('map-pin')} ${t(act.location)}</div>
          <div class="row gap-sm">${icon('shield')} ${act.organizer}</div>
        </div>
      </section>

      <form data-form="register" data-id="${act.id}">
        <div class="field">
          <label class="field-label">${t({ zh: '姓名', en: 'Name' })}</label>
          <input class="input" name="name" value="${App.lang === 'zh' ? '李晓雨' : 'Li Xiaoyu'}" required />
        </div>
        <div class="field">
          <label class="field-label">${t({ zh: '备注（选填）', en: 'Note (optional)' })}</label>
          <textarea class="textarea" name="note" rows="3" placeholder="${t({ zh: '例如：是否需要无障碍支持', en: 'e.g. accessibility needs' })}"></textarea>
        </div>
        <button class="btn btn-primary btn-block btn-lg" type="submit">${icon('check')} ${t({ zh: '确认报名', en: 'Confirm registration' })}</button>
      </form>
    </div>`;
  },

  /* ---------- create activity ------------------------------------------- */

  createActivity() {
    const t = this.t;
    const TYPES = [
      { key: 'focus', label: { zh: '学业 / 学习小组', en: 'Academic / study group' } },
      { key: 'move', label: { zh: '运动 / 健身', en: 'Sports / fitness' } },
      { key: 'connect', label: { zh: '社交 / 社团', en: 'Social / club' } },
      { key: 'restore', label: { zh: '心理健康 / 放松', en: 'Wellbeing / relaxation' } },
      { key: 'multicultural', label: { zh: '多元文化', en: 'Multicultural' } },
    ];
    return `
    <form data-form="create-activity">
      <div class="page page-pad">
        <div class="alert alert-info mb-3">${icon('info')} <span>${t({ zh: '活动发布需经学校认证，通常在 1 个工作日内审核。', en: 'Events require school verification — usually reviewed within 1 business day.' })}</span></div>

        <div class="field">
          <label class="field-label">${t({ zh: '活动名称', en: 'Event title' })}</label>
          <input class="input" name="title" required placeholder="${t({ zh: '例如：周末羽毛球局', en: 'e.g. Weekend badminton' })}" />
        </div>

        <div class="field">
          <label class="field-label">${t({ zh: '活动类型', en: 'Category' })}</label>
          <select class="select" name="type">
            ${TYPES.map(tp => `<option value="${tp.key}">${t(tp.label)}</option>`).join('')}
          </select>
        </div>

        <div class="grid-2">
          <div class="field">
            <label class="field-label">${t({ zh: '日期', en: 'Date' })}</label>
            <input class="input" name="date" placeholder="${t({ zh: '周六 14:00', en: 'Sat 14:00' })}" />
          </div>
          <div class="field">
            <label class="field-label">${t({ zh: '人数上限', en: 'Capacity' })}</label>
            <input class="input" name="capacity" type="number" min="2" max="200" value="20" />
          </div>
        </div>

        <div class="field">
          <label class="field-label">${t({ zh: '地点', en: 'Location' })}</label>
          <input class="input" name="location" required placeholder="${t({ zh: '例如：体育馆羽毛球场', en: 'e.g. Gym badminton courts' })}" />
        </div>

        <div class="field">
          <label class="field-label">${t({ zh: '活动介绍', en: 'Description' })}</label>
          <textarea class="textarea" name="desc" rows="4" placeholder="${t({ zh: '介绍一下活动内容、面向人群和需要准备的物品…', en: 'Describe the event, who it is for and what to bring…' })}"></textarea>
        </div>

        <button class="btn btn-primary btn-block btn-lg" type="submit">${icon('plus')} ${t({ zh: '提交活动', en: 'Submit event' })}</button>
      </div>
    </form>`;
  },

  /* ---------- profile ---------------------------------------------------- */

  profile() {
    const t = this.t;
    const favCount = App.state.favorites.length;
    const actCount = App.state.registered.length;
    const checkins = App.state.checkins;
    const menu = (iconName, label, action, id) => `
      <button class="list-item" data-click="${action}" ${id ? `data-id="${id}"` : ''}>
        <div class="li-left"><span class="icon-tile sm" style="background:var(--bg-container-inset-strong);color:var(--primary-base)">${icon(iconName)}</span><span>${label}</span></div>
        ${icon('chevron-right')}
      </button>`;
    return `
    <div>
      <div class="profile-head">
        <div class="avatar">${App.lang === 'zh' ? '李' : 'L'}</div>
        <div>
          <h1 class="page-title">${t({ zh: '李晓雨', en: 'Li Xiaoyu' })}</h1>
          <p class="body-small text-tertiary mt-1">${t({ zh: '大三 · 计算机科学', en: 'Junior · Computer Science' })}</p>
        </div>
      </div>

      <div class="page-pad">
        <div class="stat-grid mb-4">
          <div class="stat-card"><div class="stat-num">${favCount}</div><div class="stat-label">${t({ zh: '收藏空间', en: 'Spaces' })}</div></div>
          <div class="stat-card"><div class="stat-num">${actCount}</div><div class="stat-label">${t({ zh: '参与活动', en: 'Events' })}</div></div>
          <div class="stat-card"><div class="stat-num">${checkins}</div><div class="stat-label">${t({ zh: '签到次数', en: 'Check-ins' })}</div></div>
        </div>

        <div class="stack stack-gap">
          <div class="card" style="padding:4px 0">
            ${menu('bookmark', t({ zh: '我的收藏', en: 'My favorites' }), 'goto-favorites')}
            ${menu('ticket', t({ zh: '我的活动', en: 'My activities' }), 'goto-myactivities')}
          </div>
          <div class="card" style="padding:4px 0">
            ${menu('heart', t({ zh: '支持资源', en: 'Support resources' }), 'goto-support')}
            ${menu('settings', t({ zh: '设置', en: 'Settings' }), 'goto-settings')}
          </div>
        </div>
      </div>
    </div>`;
  },

  /* ---------- favorites -------------------------------------------------- */

  favorites() {
    const t = this.t;
    const favs = SPACES.filter(s => App.state.favorites.includes(s.id));
    if (!favs.length) {
      return `<div class="page page-pad">${this.emptyState('heart',
        t({ zh: '还没有收藏的空间', en: 'No saved spaces yet' }),
        t({ zh: '在空间详情页点击收藏，下次就能快速找到啦', en: 'Tap Save on a space to find it quickly next time' }))}
        <button class="btn btn-primary btn-block" data-nav="#/spaces" style="max-width:280px;margin:0 auto">${icon('compass')} ${t({ zh: '去发现空间', en: 'Discover spaces' })}</button>
      </div>`;
    }
    return `<div class="page page-pad"><div class="stack stack-gap">${favs.map(s => this.spaceCard(s)).join('')}</div></div>`;
  },

  /* ---------- my activities ---------------------------------------------- */

  myActivities() {
    const t = this.t;
    const acts = ACTIVITIES.filter(a => App.state.registered.includes(a.id));
    if (!acts.length) {
      return `<div class="page page-pad">${this.emptyState('ticket',
        t({ zh: '还没有报名的活动', en: 'No registered events yet' }),
        t({ zh: '去活动页看看有没有感兴趣的', en: 'Browse events to find something you like' }))}
        <button class="btn btn-primary btn-block" data-nav="#/activities" style="max-width:280px;margin:0 auto">${icon('calendar')} ${t({ zh: '浏览活动', en: 'Browse events' })}</button>
      </div>`;
    }
    return `<div class="page page-pad"><div class="stack stack-gap">${acts.map(a => this.activityCard(a)).join('')}</div></div>`;
  },

  /* ---------- support ----------------------------------------------------- */

  support() {
    const t = this.t;
    const crisis = SUPPORT.find(s => s.type === 'crisis');
    const others = SUPPORT.filter(s => s.type !== 'crisis');
    return `
    <div class="page page-pad">
      <div class="alert alert-warning mb-3">${icon('alert')} <span>${t({ zh: '如果你正处于危机或感到无法应对，请立即拨打 24 小时支持热线。', en: 'If you are in crisis or feeling overwhelmed, call the 24/7 hotline right now.' })}</span></div>

      ${this.supportCard(crisis)}

      <h2 class="section-title mb-3 mt-4">${t({ zh: '学校认证服务', en: 'Campus-certified services' })}</h2>
      <div class="stack stack-gap">
        ${others.map(s => this.supportCard(s)).join('')}
      </div>

      <p class="caption text-tertiary mt-4" style="text-align:center;line-height:1.7">${t({ zh: 'StudySpot 连接你与专业服务，但不会替代它们。\n所有内容均由学校官方提供。', en: 'StudySpot connects you to professional services — we never replace them.\nAll resources are provided by the university.' })}</p>
    </div>`;
  },

  supportCard(s) {
    const t = this.t;
    const contactIcon = s.contactType === 'phone' ? 'phone' : s.contactType === 'mail' ? 'mail' : 'map-pin';
    return `
    <article class="card support-item" style="background:var(--bg-container-primary)">
      <div class="support-icon" style="background:${s.color}22;color:${s.color}">${icon(s.icon)}</div>
      <div class="flex-1">
        <div class="row-between">
          <h3 class="card-title">${t(s.name)}</h3>
          ${s.emergency ? `<span class="tag tag-coral">${t({ zh: '24小时', en: '24/7' })}</span>` : ''}
        </div>
        <p class="body-small text-secondary mt-1">${t(s.desc)}</p>
        <div class="row gap-md mt-2 body-small text-tertiary" style="flex-wrap:wrap">
          <span class="row gap-sm">${icon('clock')} ${s.hours}</span>
          <span class="row gap-sm">${icon(contactIcon)} ${s.contact}</span>
        </div>
        <button class="btn-text mt-2" data-click="contact" data-info="${s.contact}">${t({ zh: '获取联系方式', en: 'Get contact' })} ${icon('external-link')}</button>
      </div>
    </article>`;
  },

  /* ---------- settings ---------------------------------------------------- */

  settings() {
    const t = this.t;
    const fontScale = localStorage.getItem('ss_font_scale') || 'medium';
    return `
    <div class="page">
      <div class="settings-group">
        <div class="settings-group-title">${t({ zh: '偏好', en: 'Preferences' })}</div>
        <div class="settings-list">
          <div class="list-item" style="flex-wrap:wrap">
            <div class="li-left">${icon('globe')} <span>${t({ zh: '语言', en: 'Language' })}</span></div>
            <div class="segment" style="max-width:190px">
              <button class="${App.lang === 'zh' ? 'active' : ''}" data-action="set-lang-zh">中文</button>
              <button class="${App.lang === 'en' ? 'active' : ''}" data-action="set-lang-en">English</button>
            </div>
          </div>
          <div class="list-item">
            <div class="li-left">${icon('bell')} <span>${t({ zh: '通知提醒', en: 'Notifications' })}</span></div>
            <label class="toggle"><input type="checkbox" data-toggle="notify" checked /><div class="track"><div class="thumb"></div></div></label>
          </div>
          <div class="list-item">
            <div class="li-left">${icon('accessibility')} <span>${t({ zh: '大字体', en: 'Large text' })}</span></div>
            <label class="toggle"><input type="checkbox" data-toggle="large-text" ${fontScale === 'large' ? 'checked' : ''} /><div class="track"><div class="thumb"></div></div></label>
          </div>
          <div class="list-item">
            <div class="li-left">${icon('moon')} <span>${t({ zh: '深色模式', en: 'Dark mode' })}</span></div>
            <span class="caption text-tertiary">${t({ zh: '即将上线', en: 'Coming soon' })}</span>
          </div>
        </div>
      </div>

      <div class="settings-group">
        <div class="settings-group-title">${t({ zh: '关于', en: 'About' })}</div>
        <div class="settings-list">
          <div class="list-item"><div class="li-left">${icon('info')} <span>${t({ zh: '版本', en: 'Version' })}</span></div><div class="li-right"><span class="li-value">0.1.0</span></div></div>
          <div class="list-item" data-click="contact" data-info="privacy@campus.edu"><div class="li-left">${icon('shield')} <span>${t({ zh: '隐私政策', en: 'Privacy policy' })}</span></div>${icon('chevron-right')}</div>
          <div class="list-item" data-click="contact" data-info="support@campus.edu"><div class="li-left">${icon('help-circle')} <span>${t({ zh: '帮助与反馈', en: 'Help & feedback' })}</span></div>${icon('chevron-right')}</div>
        </div>
      </div>
    </div>`;
  },
};
