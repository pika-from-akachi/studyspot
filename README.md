# StudySpot

校园空间与学生福祉导航平台 — Campus space & student wellbeing navigation.

StudySpot 帮助大学生在需要专注学习、放松恢复、社交连接或运动释放时，快速找到适合的校园空间，并连接认证的校园活动与支持资源。本项目是依据 `paraflow/` 目录下的 PRD、产品章程与视觉风格指南实现的 **Web + 移动端 PWA**，采用 **活力橙绿（Energetic）** 设计语言。

> StudySpot helps students quickly find campus spaces that fit their current need — focus, relax, connect or move — and connects them with certified activities and support resources. Built from the PRD and design docs in `paraflow/`, styled with the **Energetic** (vibrant orange-green) design language.

## ✨ 核心功能 Features

- **空间发现与筛选** — 按需求类型（专注 / 恢复 / 连接 / 运动）、实时状态与设施筛选附近空间
- **实时空间状态** — 拥挤度、噪声水平、开放时间、步行距离一目了然
- **到访签到** — 扫码签到并反馈拥挤度与噪声，让状态信息保持鲜活
- **空间收藏** — 收藏常用空间，首页/收藏页快速查看
- **认证活动导航** — 浏览学校认证的社团与活动，查看详情并一键报名、创建活动
- **支持资源连接** — 心理咨询、学业辅导、24小时热线等官方支持资源
- **多语言 / 无障碍** — 中英文一键切换，支持大字体模式

## 🎨 设计语言 Design Language

基于 `paraflow/Style Guide/studyspot_energetic.style-guide.md`：

| 项 | 值 |
|---|---|
| 主色 Primary | 明亮橘色 `#FF7A3D`（hover `#E6590A`） |
| 辅助色 Accents | 柠檬绿 `#A4D65E` · 珊瑚 `#FF6B6B` · 天蓝 `#5BC0EB` |
| 页面背景 | 纯白 `#FFFFFF`，卡片暖白 `#FFF8F5` |
| 风格 | 鲜活扁平 · 高对比 · **零阴影零渐变**，以表面色差建立层级 |
| 圆角 / 间距 | 8 / 12 / 16 / 全圆角；4px 间距基准 |

## 🖥️ 运行方式 Run

无需构建、无依赖，直接打开或任意静态服务器即可：

```bash
# 方式一：直接双击 index.html
# 方式二：本地静态服务器
python -m http.server 8000
# 浏览器访问 http://localhost:8000
```

- 桌面端：以居中手机列展示（Chrome DevTools 可切换设备模式）
- 移动端：支持 **添加到主屏幕（PWA）**，离线可用

## 📁 项目结构 Structure

```
studyspot/
├── index.html             # 应用外壳（SPA 单页）
├── manifest.webmanifest   # PWA 清单
├── sw.js                  # Service Worker（离线缓存）
├── icons/                 # 应用图标（SVG + PNG）
├── css/
│   └── styles.css         # 设计系统（活力橙绿）
├── js/
│   ├── icons.js           # 内联 SVG 图标集（Lucide 风格）
│   ├── data.js            # 双语 mock 数据（空间/活动/支持资源）
│   ├── views.js           # 页面渲染函数（纯 HTML 字符串）
│   └── app.js             # 路由 / i18n / 状态 / 事件
└── paraflow/              # 原始设计文档（请勿修改）
```

## 🧭 页面路由 Routes

| 路由 | 页面 |
|---|---|
| `#/` | 首页（需求类型 + 附近空间） |
| `#/discover` | 发现（搜索 + 分类筛选） |
| `#/spaces` | 附近空间列表 |
| `#/spaces/:id` | 空间详情 |
| `#/checkin/:id` | 到访签到 |
| `#/activities` | 活动列表 |
| `#/activities/:id` | 活动详情 |
| `#/activities/:id/register` | 活动报名 |
| `#/activities/create` | 创建活动 |
| `#/profile` | 我的（统计 + 入口） |
| `#/profile/favorites` | 我的收藏 |
| `#/profile/activities` | 我的活动 |
| `#/profile/support` | 支持资源 |
| `#/profile/settings` | 设置 |

## 🔧 技术栈 Tech Stack

原生 HTML / CSS / JavaScript（ES2020），零第三方运行时依赖：

- **Hash 路由**：单页应用，轻量无框架
- **内联 SVG 图标**：完全离线可用
- **localStorage**：收藏、报名、签到与语言偏好持久化
- **Service Worker**：PWA 离线缓存与安装支持
- **响应式**：移动优先，桌面居中列

## 📝 说明 Notes

- 数据为前端 mock 数据（`js/data.js`），后续可替换为真实 API。
- 设计规范与产品文档见 `paraflow/`（原设计文件，未修改）。
