/* ==========================================================================
   StudySpot — Mock data layer
   Bilingual (zh / en) sample data for the MVP prototype.
   ========================================================================== */

/* The four need types (专注 / 恢复 / 连接 / 运动) */
const NEED_TYPES = {
  focus:   { name: { zh: '专注',   en: 'Focus' },   desc: { zh: '安静学习空间', en: 'Quiet study spaces' }, color: '#FF7A3D', icon: 'target' },
  restore: { name: { zh: '恢复',   en: 'Relax' },   desc: { zh: '放松休息空间', en: 'Rest & recharge' },   color: '#A4D65E', icon: 'sparkles' },
  connect: { name: { zh: '连接',   en: 'Connect' }, desc: { zh: '社交交流空间', en: 'Social spaces' },       color: '#FF6B6B', icon: 'users' },
  move:    { name: { zh: '运动',   en: 'Move' },    desc: { zh: '健身活动空间', en: 'Active spaces' },       color: '#5BC0EB', icon: 'zap' },
};

/* Crowding levels */
const CROWD = {
  free:     { name: { zh: '空闲',   en: 'Empty' },    dot: 'dot-free',     badge: 'bg-success-light', level: 1, color: '#7ED321' },
  light:    { name: { zh: '较空闲', en: 'Light' },    dot: 'dot-light',    badge: 'bg-success-light', level: 2, color: '#7ED321' },
  moderate: { name: { zh: '适中',   en: 'Moderate' }, dot: 'dot-moderate', badge: 'bg-warning-light', level: 3, color: '#FFB800' },
  busy:     { name: { zh: '拥挤',   en: 'Busy' },     dot: 'dot-busy',     badge: 'bg-warning-light', level: 4, color: '#FF7A3D' },
  full:     { name: { zh: '已满',   en: 'Full' },     dot: 'dot-full',     badge: 'bg-error-light',    level: 5, color: '#FF4D4D' },
  closed:   { name: { zh: '关闭',   en: 'Closed' },   dot: 'dot-closed',   badge: 'bg-neutral',        level: 0, color: '#B3B3B3' },
};

/* Campus spaces */
const SPACES = [
  {
    id: 'lib-3f', name: { zh: '图书馆3层自习区', en: 'Library 3F Study Area' },
    type: 'focus', crowd: 'light',
    walkMin: 5, hours: '08:00 – 23:00',
    features: [{ icon: 'volume-x', label: { zh: '安静', en: 'Quiet' } }, { icon: 'plug', label: { zh: '有插座', en: 'Outlets' } }, { icon: 'sun', label: { zh: '自然光', en: 'Natural light' } }],
    color: '#FF7A3D', desc: { zh: '位于图书馆三层的开放式自习区，座位充足，配有独立台灯与电源插座，适合深度专注学习。', en: 'An open study area on the 3rd floor of the library with plenty of seats, desk lamps and power outlets — ideal for deep focus.' },
  },
  {
    id: 'center-lounge', name: { zh: '学生活动中心休息区', en: 'Student Center Lounge' },
    type: 'restore', crowd: 'free',
    walkMin: 3, hours: '07:30 – 23:30',
    features: [{ icon: 'sofa', label: { zh: '沙发座椅', en: 'Sofas' } }, { icon: 'coffee', label: { zh: '有咖啡', en: 'Coffee bar' } }],
    color: '#A4D65E', desc: { zh: '学生活动中心的开放式休息区，软沙发与绿植环绕，适合课间小憩或放松恢复。', en: 'An open lounge in the Student Center with soft sofas and plants — great for a break between classes.' },
  },
  {
    id: 'main-201', name: { zh: '主楼讨论室201', en: 'Main Building Room 201' },
    type: 'connect', crowd: 'moderate',
    walkMin: 8, hours: '08:00 – 22:00',
    features: [{ icon: 'users', label: { zh: '小组讨论', en: 'Group work' } }, { icon: 'monitor', label: { zh: '有显示屏', en: 'Display' } }],
    color: '#FF6B6B', desc: { zh: '可容纳8-10人的小组讨论室，配备大屏与白板，适合项目协作与社团会议。', en: 'A discussion room for 8–10 people with a large display and whiteboard — perfect for team projects and club meetings.' },
  },
  {
    id: 'stadium', name: { zh: '体育场跑道', en: 'Stadium Track' },
    type: 'move', crowd: 'light',
    walkMin: 10, hours: '06:00 – 22:00',
    features: [{ icon: 'sun', label: { zh: '户外', en: 'Outdoor' } }, { icon: 'zap', label: { zh: '夜间照明', en: 'Night lights' } }],
    color: '#5BC0EB', desc: { zh: '400米标准跑道，晚间开放照明，适合跑步、慢走等有氧运动。', en: 'A 400m running track with evening lighting — ideal for running and walking.' },
  },
  {
    id: 'cafe', name: { zh: '校园咖啡厅', en: 'Campus Café' },
    type: 'connect', crowd: 'busy',
    walkMin: 2, hours: '08:00 – 20:00',
    features: [{ icon: 'coffee', label: { zh: '有咖啡', en: 'Coffee' } }, { icon: 'wifi', label: { zh: '免费WiFi', en: 'Free Wi-Fi' } }, { icon: 'volume', label: { zh: '轻松氛围', en: 'Casual vibe' } }],
    color: '#FF6B6B', desc: { zh: '校园最受欢迎的社交聚集地，适合与朋友聊天、小组交流或认识新朋友。', en: 'The most popular hangout on campus for chatting with friends and meeting new people.' },
  },
  {
    id: 'outdoor-study', name: { zh: '户外学习区', en: 'Outdoor Study Area' },
    type: 'focus', crowd: 'free',
    walkMin: 6, hours: '全天开放',
    features: [{ icon: 'sun', label: { zh: '自然光', en: 'Natural light' } }, { icon: 'wifi', label: { zh: '覆盖WiFi', en: 'Wi-Fi' } }],
    color: '#FF9966', desc: { zh: '教学楼之间的半开放花园学习区，配备遮阳伞与木质长桌，天气好时非常舒适。', en: 'A semi-open garden study area between buildings with umbrellas and wooden tables — lovely on sunny days.' },
  },
  {
    id: 'dept-study', name: { zh: '院系自习室', en: 'Department Study Room' },
    type: 'focus', crowd: 'moderate',
    walkMin: 7, hours: '08:00 – 22:00',
    features: [{ icon: 'volume-x', label: { zh: '安静', en: 'Quiet' } }, { icon: 'plug', label: { zh: '有插座', en: 'Outlets' } }, { icon: 'shield', label: { zh: '凭学生证进入', en: 'Student ID required' } }],
    color: '#FF7A3D', desc: { zh: '仅对本院系学生开放的自习室，环境安静，适合需要长时间专注的复习备考。', en: 'A quiet study room restricted to department students — ideal for long revision sessions.' },
  },
  {
    id: 'lib-4f-lounge', name: { zh: '图书馆4层休息室', en: 'Library 4F Lounge' },
    type: 'restore', crowd: 'light',
    walkMin: 4, hours: '08:00 – 23:00',
    features: [{ icon: 'sofa', label: { zh: '沙发座椅', en: 'Sofas' } }, { icon: 'moon', label: { zh: '低光环境', en: 'Dim lighting' } }],
    color: '#A4D65E', desc: { zh: '安静的低光休息室，配有多组沙发与阅读角，适合午休或冥想放松。', en: 'A quiet, dimly-lit lounge with sofas and reading nooks — perfect for an afternoon rest or meditation.' },
  },
  {
    id: 'gym', name: { zh: '校园健身房', en: 'Campus Gym' },
    type: 'move', crowd: 'full',
    walkMin: 12, hours: '07:00 – 22:00',
    features: [{ icon: 'dumbbell', label: { zh: '器材齐全', en: 'Full equipment' } }, { icon: 'users', label: { zh: '有教练', en: 'Trainers on duty' } }],
    color: '#5BC0EB', desc: { zh: '器械齐全的校内健身房，含力量区、有氧区与更衣淋浴设施。', en: 'A fully-equipped campus gym with strength and cardio zones plus changing rooms.' },
  },
  {
    id: 'room-103', name: { zh: '学生活动室103', en: 'Activity Room 103' },
    type: 'connect', crowd: 'free',
    walkMin: 5, hours: '09:00 – 21:00',
    features: [{ icon: 'users', label: { zh: '小组讨论', en: 'Group work' } }, { icon: 'monitor', label: { zh: '有白板', en: 'Whiteboard' } }],
    color: '#FF6B6B', desc: { zh: '灵活的多功能活动室，桌椅可自由移动，适合社团例会与小型聚会。', en: 'A flexible multi-purpose room with movable furniture — great for club meetings and small gatherings.' },
  },
];

/* Certified activities */
const ACTIVITIES = [
  {
    id: 'exch-night', title: { zh: '国际学生交流夜', en: 'International Student Exchange Night' },
    type: 'connect', tag: { zh: '多元文化', en: 'Multicultural' }, tagKey: 'multicultural',
    organizer: { zh: '国际学生办公室', en: 'International Student Office' }, time: '周五 19:00 – 21:00', date: { zh: '本周五', en: 'This Friday' },
    location: { zh: '学生活动中心 多功能厅', en: 'Student Center, Multi-function Hall' }, capacity: 40, enrolled: 27,
    color: '#FF6B6B', icon: 'users',
    desc: { zh: '面向所有学生的国际文化交流之夜，分享家乡美食与文化故事，认识来自世界各地的朋友。', en: 'An international cultural night open to all students — share food and stories from home and meet friends from around the world.' },
  },
  {
    id: 'marathon', title: { zh: '校园马拉松训练营', en: 'Campus Marathon Training' },
    type: 'move', tag: { zh: '运动', en: 'Sports' }, tagKey: 'sports',
    organizer: { zh: '校跑步协会', en: 'Campus Running Club' }, time: '周二 / 周四 17:30', date: { zh: '每周二四', en: 'Every Tue & Thu' },
    location: { zh: '体育场', en: 'Stadium Track' }, capacity: 30, enrolled: 18,
    color: '#5BC0EB', icon: 'zap',
    desc: { zh: '专业教练指导的分组跑步训练，从5公里到半马，无论新手还是老手都欢迎。', en: 'Coach-led running sessions in groups, from 5K to half-marathon — beginners and veterans welcome.' },
  },
  {
    id: 'destress', title: { zh: '期末考试减压工作坊', en: 'Finals De-stress Workshop' },
    type: 'restore', tag: { zh: '心理健康', en: 'Wellbeing' }, tagKey: 'wellbeing',
    organizer: { zh: '心理咨询中心', en: 'Counseling Center' }, time: '周三 15:00 – 16:30', date: { zh: '本周三', en: 'This Wednesday' },
    location: { zh: '图书馆 B1 活动室', en: 'Library B1 Activity Room' }, capacity: 20, enrolled: 9,
    color: '#A4D65E', icon: 'sparkles',
    desc: { zh: '通过呼吸练习、正念与时间管理技巧，帮助你在期末季保持平静与高效。', en: 'Breathing exercises, mindfulness and time-management tips to stay calm and productive through finals.' },
  },
  {
    id: 'ds-group', title: { zh: '数据结构学习小组', en: 'Data Structures Study Group' },
    type: 'focus', tag: { zh: '学业', en: 'Academic' }, tagKey: 'academic',
    organizer: { zh: '计算机学院学生会', en: 'CS School Student Union' }, time: '周六 10:00 – 12:00', date: { zh: '本周六', en: 'This Saturday' },
    location: { zh: '院系自习室', en: 'Department Study Room' }, capacity: 12, enrolled: 8,
    color: '#FF7A3D', icon: 'book-open',
    desc: { zh: '由高年级学长带领的刷题与答疑小组，一起攻克算法与数据结构难题。', en: 'A problem-solving group led by senior students tackling algorithms and data structures together.' },
  },
  {
    id: 'badminton', title: { zh: '羽毛球俱乐部开放日', en: 'Badminton Club Open Day' },
    type: 'move', tag: { zh: '运动', en: 'Sports' }, tagKey: 'sports',
    organizer: { zh: '羽毛球协会', en: 'Badminton Association' }, time: '周六 14:00 – 17:00', date: { zh: '本周六', en: 'This Saturday' },
    location: { zh: '体育馆 羽毛球场', en: 'Gym Badminton Courts' }, capacity: 24, enrolled: 21,
    color: '#5BC0EB', icon: 'activity',
    desc: { zh: '免费体验日！提供球拍与场地，无论水平高低都能找到对练伙伴。', en: 'Free open day with rackets and courts provided — find a match whatever your level.' },
  },
  {
    id: 'english-corner', title: { zh: '英语角', en: 'English Corner' },
    type: 'connect', tag: { zh: '语言', en: 'Language' }, tagKey: 'language',
    organizer: { zh: '外国语学院', en: 'School of Foreign Languages' }, time: '周五 18:30 – 20:00', date: { zh: '每周五', en: 'Every Friday' },
    location: { zh: '校园咖啡厅', en: 'Campus Café' }, capacity: 25, enrolled: 14,
    color: '#FF6B6B', icon: 'globe',
    desc: { zh: '轻松友好的英语口语交流活动，适合想练习口语的国际生与本地生。', en: 'A friendly English conversation session — great for international and local students to practice speaking.' },
  },
  {
    id: 'mindfulness', title: { zh: '正念冥想入门', en: 'Mindfulness for Beginners' },
    type: 'restore', tag: { zh: '心理健康', en: 'Wellbeing' }, tagKey: 'wellbeing',
    organizer: { zh: '心理协会', en: 'Psychology Society' }, time: '周三 12:30 – 13:00', date: { zh: '每周三', en: 'Every Wednesday' },
    location: { zh: '学生活动中心 静心室', en: 'Student Center Quiet Room' }, capacity: 15, enrolled: 6,
    color: '#A4D65E', icon: 'moon',
    desc: { zh: '30分钟的正念冥想引导，帮你从午间学习中抽离，恢复专注力。', en: 'A 30-minute guided mindfulness session to reset your focus in the middle of the day.' },
  },
];

/* Certified support resources */
const SUPPORT = [
  {
    id: 'crisis', name: { zh: '24小时紧急支持热线', en: '24/7 Crisis Hotline' },
    type: 'crisis', emergency: true,
    hours: '24小时 / 24 hours', contact: '400-xxx-xxxx',
    contactType: 'phone',
    color: '#FF4D4D', icon: 'phone',
    desc: { zh: '任何时候感到无法应对时，都可以拨打的心理危机干预热线，全年无休。', en: 'A round-the-clock psychological crisis intervention hotline — call any time you feel overwhelmed.' },
  },
  {
    id: 'counseling', name: { zh: '心理咨询中心', en: 'Counseling Center' },
    type: 'counseling', emergency: false,
    hours: '周一至周五 09:00 – 17:00', contact: '心理楼 2层',
    contactType: 'location',
    color: '#FF6B6B', icon: 'heart',
    desc: { zh: '提供免费的一对一心理咨询与团体辅导，所有预约严格保密。', en: 'Free confidential one-on-one counseling and group therapy — all appointments are private.' },
  },
  {
    id: 'academic', name: { zh: '学业辅导中心', en: 'Academic Support Center' },
    type: 'academic', emergency: false,
    hours: '周一至周五 10:00 – 18:00', contact: '教学楼 A-105',
    contactType: 'location',
    color: '#FF7A3D', icon: 'book-open',
    desc: { zh: '提供写作辅导、课程答疑与学习方法工作坊，帮助每位学生学业成功。', en: 'Writing support, course tutoring and study-skills workshops to help every student succeed.' },
  },
  {
    id: 'career', name: { zh: '职业发展中心', en: 'Career Development Center' },
    type: 'career', emergency: false,
    hours: '周一至周五 09:30 – 17:30', contact: 'career@campus.edu',
    contactType: 'mail',
    color: '#5BC0EB', icon: 'briefcase',
    desc: { zh: '简历与面试辅导、职业规划咨询、实习与招聘信息发布。', en: 'Resume and interview coaching, career planning and internship/job postings.' },
  },
  {
    id: 'international', name: { zh: '国际学生服务中心', en: 'International Student Office' },
    type: 'international', emergency: false,
    hours: '周一至周五 09:00 – 17:00', contact: '行政楼 3层 301',
    contactType: 'location',
    color: '#A4D65E', icon: 'globe',
    desc: { zh: '为国际学生提供签证、住宿、语言支持与跨文化适应的一站式服务。', en: 'One-stop support for international students — visas, housing, language help and cultural adaptation.' },
  },
  {
    id: 'health', name: { zh: '校医院', en: 'University Health Center' },
    type: 'health', emergency: false,
    hours: '周一至周五 08:30 – 17:30', contact: '校医院大楼',
    contactType: 'location',
    color: '#7ED321', icon: 'medical',
    desc: { zh: '提供基本诊疗、疫苗接种与健康咨询，紧急情况请直接前往急诊室。', en: 'General consultations, vaccinations and health advice. For emergencies go straight to the ER.' },
  },
];

/* Populated counters kept in localStorage to simulate state */
function getStats() {
  const s = {
    favorites: JSON.parse(localStorage.getItem('ss_favorites') || '[]'),
    activities: JSON.parse(localStorage.getItem('ss_registered') || '[]'),
    checkins: parseInt(localStorage.getItem('ss_checkins') || '0', 10),
    lang: localStorage.getItem('ss_lang') || 'zh',
  };
  return s;
}
