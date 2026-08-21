<div align="center">

# StudySpot

**校园空间与学生福祉导航平台**<br>
*Campus space & student wellbeing navigation*

![Vanilla JS](https://img.shields.io/badge/Vanilla_JS-ES2020-F7DF1E?logo=javascript&logoColor=black)
![Zero dependencies](https://img.shields.io/badge/dependencies-0-brightgreen)
![PWA](https://img.shields.io/badge/PWA-offline_ready-5A0FC8)
![i18n](https://img.shields.io/badge/i18n-中文_|_English-blue)

[简体中文](#简体中文) · [English](#english)

</div>

---

## 简体中文

### 简介

StudySpot 帮助大学生在需要**专注学习、放松恢复、社交连接或运动释放**时，快速找到当下最适合的校园空间，并连接学校认证的活动与支持资源。

项目依据 `paraflow/` 目录下的产品章程、PRD、用户画像与视觉风格指南实现，包含两个独立交付物：

| 交付物 | 路径 | 说明 |
| --- | --- | --- |
| **应用本体** | `/` | 移动端优先的单页应用，支持 PWA 离线安装 |
| **宣传官网** | `/marketing/` | 面向潜在用户的品牌落地页 |

### 功能特性

| 功能 | 说明 |
| --- | --- |
| **空间发现** | 按需求类型（专注 / 恢复 / 连接 / 运动）、关键词与设施筛选校园空间 |
| **实时状态** | 展示拥挤度、噪声水平、开放时间与步行距离 |
| **到访签到** | 签到并反馈实际拥挤度与噪声，维持状态数据鲜活 |
| **空间收藏** | 收藏常用空间，首页与收藏页快速进入 |
| **活动导航** | 浏览认证社团活动，查看详情、报名，或自行创建活动 |
| **支持资源** | 心理咨询、学业辅导、24 小时热线等官方资源入口 |
| **双语切换** | 中英文一键切换，偏好持久化 |
| **无障碍** | 大字体模式；全站遵循 `prefers-reduced-motion` |

### 快速开始

零构建、零依赖，任意静态服务器即可运行：

```bash
git clone https://github.com/pika-from-akachi/studyspot.git
cd studyspot
python -m http.server 8000
```

| 地址 | 内容 |
| --- | --- |
| `http://localhost:8000` | 应用本体 |
| `http://localhost:8000/marketing/` | 宣传官网 |

> **请勿直接双击 `index.html`。** Service Worker 在 `file://` 协议下不会注册，PWA 离线与安装功能将无法验证。

#### 在桌面端预览移动端效果

布局断点为 `1024px`，中间还有一档过渡态，直接拖拽窗口容易看到非预期的样式：

| 视口宽度 | 呈现 |
| --- | --- |
| `< 640px` | 移动端完整形态（纯白背景、底部 Tab 栏） |
| `640px – 1023px` | 移动布局 + 两侧灰底描边（平板过渡态） |
| `≥ 1024px` | 桌面布局（左侧边栏 + 多栏栅格） |

推荐使用 Chrome DevTools 设备模式（`F12` → `Ctrl + Shift + M`）选择 iPhone 14 Pro（393px）等预设，**切换后刷新页面**。

### 双端布局

同一套代码适配两种端体验，断点 `1024px`：

| | 移动端 `< 1024px` | 桌面端 `≥ 1024px` |
| --- | --- | --- |
| 主导航 | 底部 Tab 栏 | 固定左侧边栏（240px） |
| 内容宽度 | 居中单列 520px | 填满侧栏右侧整页，列表页按屏宽自适应多列 |
| 列表布局 | 单列卡片 | 2–5 列栅格（按屏宽自适应） |
| 详情 / 表单 | 单列 | 居中窄栏 760px |
| 返回按钮 | 顶栏显示 | 隐藏（侧边栏承担导航） |
| PWA 安装 | 支持 | 支持 |

### 项目结构

```
studyspot/
├── index.html              # 应用外壳（SPA）
├── manifest.webmanifest    # PWA 清单
├── sw.js                   # Service Worker（离线缓存）
├── css/
│   └── styles.css          # 应用设计系统
├── js/
│   ├── app.js              # 路由 / i18n / 状态 / 事件绑定
│   ├── views.js            # 页面渲染（返回 HTML 字符串）
│   ├── data.js             # 双语示例数据
│   └── icons.js            # 内联 SVG 图标集
├── icons/                  # 应用图标（SVG + 192/512 PNG）
├── marketing/              # 宣传官网（独立设计语言）
│   ├── index.html
│   ├── css/style.css
│   └── js/site.js
└── paraflow/               # 原始设计文档（只读参考，请勿修改）
    ├── Global Context/     # 产品章程、用户画像
    ├── Feature Plan/       # PRD、用户流程
    ├── Screen & Prototype/ # 三套首页原型
    └── Style Guide/        # 三套视觉风格指南
```

### 页面路由

采用 Hash 路由，无需服务端配置：

| 路由 | 页面 |
| --- | --- |
| `#/` | 首页（需求类型 + 附近空间） |
| `#/discover` | 发现（搜索 + 分类筛选） |
| `#/spaces` | 空间列表（支持 `?type=` `?q=` 参数） |
| `#/spaces/:id` | 空间详情 |
| `#/checkin/:id` | 到访签到 |
| `#/activities` | 活动列表（支持 `?tag=` 参数） |
| `#/activities/:id` | 活动详情 |
| `#/activities/:id/register` | 活动报名 |
| `#/activities/create` | 创建活动 |
| `#/profile` | 我的 |
| `#/profile/favorites` | 我的收藏 |
| `#/profile/activities` | 我的活动 |
| `#/profile/support` | 支持资源 |
| `#/profile/settings` | 设置 |

### 技术栈

原生 HTML / CSS / JavaScript（ES2020），无框架、无构建步骤、无第三方运行时依赖。

- **Hash 路由** — 单页应用，静态托管即可部署
- **内联 SVG 图标** — 无外部图标库请求，完全离线可用
- **Service Worker** — 预缓存核心资源，支持离线访问与安装
- **localStorage** — 用户状态持久化

#### 数据持久化

| 键名 | 用途 |
| --- | --- |
| `ss_lang` | 应用语言偏好 |
| `ss_favorites` | 收藏的空间 |
| `ss_registered` | 已报名活动 |
| `ss_checkins` | 签到记录 |
| `ss_font_scale` | 大字体模式 |
| `mkt_lang` | 官网语言偏好 |

### 设计语言

项目使用两套独立的设计语言：

| | 应用本体 | 宣传官网 |
| --- | --- | --- |
| 定位 | 活力橙绿（Energetic） | 简约高级（Premium Minimal） |
| 页面背景 | `#FFFFFF` | `#FBF9F6` 象牙白 |
| 主色 | `#FF7A3D` 明亮橘 | `#E65A0F` 焦糖橙 |
| 文字 | 高对比深色 | `#1B1A17` 炭墨 |
| 字体 | 全站无衬线 | 衬线标题 + 无衬线正文 |
| 风格 | 扁平 · 零阴影零渐变 | 发丝边框 · 胶囊按钮 |

应用侧规范详见 `paraflow/Style Guide/studyspot_energetic.style-guide.md`。

### 已知限制

- **示例数据** — 空间、活动与支持资源均为 `js/data.js` 中的前端示例数据，尚未接入后端 API。
- **官网 SEO** — `marketing/index.html` 仅为 16 行外壳，全部内容由 `site.js` 在运行时注入，搜索引擎与社交平台抓取时仅能获取空容器。若官网需承担获客职责，应将首屏内容静态化或引入预渲染。
- **离线图标** — `sw.js` 的预缓存清单包含 `app-icon.svg`，但未包含 manifest 引用的 192 / 512 PNG，首次离线安装时图标可能缺失。

### 免责声明

本项目为**学术与设计演示用途**，与 University of Cambridge（剑桥大学）**无任何隶属、合作或授权关系**。项目中出现的校徽、校训与 `@cam.ac.uk` 邮箱地址仅作界面演示，不代表该校立场，亦不应用于任何真实服务。

> 剑桥大学纹章为其注册商标。若本项目计划公开部署或商业使用，请替换为自有品牌或虚构机构标识。

### 许可

本仓库尚未指定开源许可证。在补充 `LICENSE` 文件前，默认保留所有权利。

---

## English

### Overview

StudySpot helps university students quickly find the campus space that fits their current need — **focus, recover, connect or move** — and connects them with university-certified activities and support resources.

The implementation follows the product charter, PRD, personas and style guides in `paraflow/`, and ships two independent deliverables:

| Deliverable | Path | Description |
| --- | --- | --- |
| **Application** | `/` | Mobile-first single-page app, installable as an offline PWA |
| **Marketing site** | `/marketing/` | Brand landing page for prospective users |

### Features

| Feature | Description |
| --- | --- |
| **Space discovery** | Filter campus spaces by need type (focus / recover / connect / move), keyword and facilities |
| **Live status** | Crowd level, noise level, opening hours and walking distance at a glance |
| **Check-in** | Check in and report actual crowd and noise levels to keep status data fresh |
| **Favourites** | Save frequently used spaces for quick access from home and the favourites page |
| **Activities** | Browse certified society activities, view details, register, or create your own |
| **Support resources** | Entry points for counselling, academic support and 24-hour helplines |
| **Bilingual** | One-tap Chinese / English switching with persisted preference |
| **Accessibility** | Large-text mode; `prefers-reduced-motion` respected throughout |

### Getting started

No build step, no dependencies — any static server works:

```bash
git clone https://github.com/pika-from-akachi/studyspot.git
cd studyspot
python -m http.server 8000
```

| URL | Content |
| --- | --- |
| `http://localhost:8000` | Application |
| `http://localhost:8000/marketing/` | Marketing site |

> **Do not open `index.html` directly from the filesystem.** Service workers are not registered over `file://`, so offline and install behaviour cannot be verified.

#### Previewing the mobile layout on desktop

The layout breakpoint is `1024px`, with an intermediate state in between — dragging the window is likely to show a layout you did not intend to inspect:

| Viewport width | Rendering |
| --- | --- |
| `< 640px` | Full mobile experience (white background, bottom tab bar) |
| `640px – 1023px` | Mobile layout with grey letterboxing (tablet transition) |
| `≥ 1024px` | Desktop layout (sidebar + multi-column grids) |

Use Chrome DevTools device mode (`F12` → `Ctrl + Shift + M`) with a preset such as iPhone 14 Pro (393px), and **reload after switching**.

### Dual layout

A single codebase serves both experiences, switching at `1024px`:

| | Mobile `< 1024px` | Desktop `≥ 1024px` |
| --- | --- | --- |
| Primary navigation | Bottom tab bar | Fixed left sidebar (240px) |
| Content width | Centred 520px column | Full width right of the sidebar; list pages auto-fit columns |
| List layout | Single-column cards | 2–5 column grid (auto-fit by viewport) |
| Detail / forms | Single column | Centred 760px column |
| Back button | Shown in header | Hidden (sidebar handles navigation) |
| PWA install | Supported | Supported |

### Project structure

```
studyspot/
├── index.html              # Application shell (SPA)
├── manifest.webmanifest    # PWA manifest
├── sw.js                   # Service worker (offline cache)
├── css/
│   └── styles.css          # Application design system
├── js/
│   ├── app.js              # Routing / i18n / state / event binding
│   ├── views.js            # Page rendering (returns HTML strings)
│   ├── data.js             # Bilingual sample data
│   └── icons.js            # Inline SVG icon set
├── icons/                  # App icons (SVG + 192/512 PNG)
├── marketing/              # Marketing site (separate design language)
│   ├── index.html
│   ├── css/style.css
│   └── js/site.js
└── paraflow/               # Source design documents (read-only reference)
    ├── Global Context/     # Product charter, personas
    ├── Feature Plan/       # PRD, user flows
    ├── Screen & Prototype/ # Three homepage prototypes
    └── Style Guide/        # Three visual style guides
```

### Routes

Hash-based routing — no server configuration required:

| Route | Page |
| --- | --- |
| `#/` | Home (need types + nearby spaces) |
| `#/discover` | Discover (search + category filters) |
| `#/spaces` | Space list (accepts `?type=` and `?q=`) |
| `#/spaces/:id` | Space detail |
| `#/checkin/:id` | Check-in |
| `#/activities` | Activity list (accepts `?tag=`) |
| `#/activities/:id` | Activity detail |
| `#/activities/:id/register` | Activity registration |
| `#/activities/create` | Create activity |
| `#/profile` | Profile |
| `#/profile/favorites` | Favourites |
| `#/profile/activities` | My activities |
| `#/profile/support` | Support resources |
| `#/profile/settings` | Settings |

### Tech stack

Vanilla HTML / CSS / JavaScript (ES2020) — no framework, no build step, no third-party runtime dependencies.

- **Hash routing** — SPA deployable to any static host
- **Inline SVG icons** — no external icon requests, fully offline-capable
- **Service worker** — precaches core assets for offline use and installation
- **localStorage** — persists user state

#### Persisted state

| Key | Purpose |
| --- | --- |
| `ss_lang` | Application language preference |
| `ss_favorites` | Saved spaces |
| `ss_registered` | Registered activities |
| `ss_checkins` | Check-in history |
| `ss_font_scale` | Large-text mode |
| `mkt_lang` | Marketing site language preference |

### Design language

The project uses two distinct design languages:

| | Application | Marketing site |
| --- | --- | --- |
| Direction | Energetic | Premium Minimal |
| Background | `#FFFFFF` | `#FBF9F6` ivory |
| Primary | `#FF7A3D` bright orange | `#E65A0F` burnt tangerine |
| Text | High-contrast dark | `#1B1A17` warm near-black |
| Type | Sans-serif throughout | Serif headings + sans body |
| Style | Flat, no shadows or gradients | Hairline borders, pill buttons |

Application-side specifications are documented in `paraflow/Style Guide/studyspot_energetic.style-guide.md`.

### Known limitations

- **Sample data** — Spaces, activities and support resources are front-end sample data in `js/data.js`; no backend API is wired up yet.
- **Marketing SEO** — `marketing/index.html` is a 16-line shell; all content is injected at runtime by `site.js`, so crawlers and social scrapers see an empty container. If the site is to drive acquisition, the above-the-fold content should be made static or pre-rendered.
- **Offline icons** — The `sw.js` precache list includes `app-icon.svg` but omits the 192 / 512 PNGs referenced by the manifest, so icons may be missing on first offline install.

### Disclaimer

This project is an **academic and design demonstration**. It is **not affiliated with, endorsed by, or licensed by the University of Cambridge**. The coat of arms, motto and `@cam.ac.uk` addresses appearing in the interface are illustrative only, do not represent the University, and must not be used for any real service.

> The University of Cambridge coat of arms is a registered trademark. If this project is to be publicly deployed or used commercially, replace it with your own or a fictional institutional identity.

### License

No open-source license has been specified for this repository. Until a `LICENSE` file is added, all rights are reserved.
