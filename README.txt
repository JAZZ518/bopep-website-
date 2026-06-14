================================================================
  BOPEP比波普音乐工作室 — 个人网站
  专业儿童吉他教育 · 车鸿霖老师
================================================================

📁 文件结构
-----------
bopep-website/
├── index.html          首页
├── about.html          关于车老师
├── courses.html        课程介绍
├── gallery.html        学员风采
├── contact.html        联系我们（百度地图）
├── performances.html   车老师演奏
├── sitemap.xml         SEO 网站地图
├── robots.txt          爬虫规则
├── assets/
│   ├── css/style.css   全局样式
│   ├── js/main.js      全局脚本（导航/表单/灯箱/动画）
│   └── images/         图片资源（32张）
└── README.txt          本文件


🚀 免费部署（无需服务器）
------------------------

方案一【推荐】Gitee Pages（国内访问最快）
  1. 推送代码到 Gitee: git push origin master
  2. 打开 https://gitee.com/Mr_chejazz/bopep-website
  3. 点击「服务」→「Gitee Pages」→「启动」
  4. 访问地址：https://mr_chejazz.gitee.io/bopep-website

方案二 GitHub Pages（全球访问）
  1. 推送代码到 GitHub: git push github master
  2. 打开 https://github.com/JAZZ518/bopep-website-/settings/pages
  3. Branch 选 master → Save
  4. 访问地址：https://jazz518.github.io/bopep-website-


⚠️ 上线前必须替换的 3 个占位符
-------------------------------

1. 百度地图 AK（contact.html 第 229 行）
   搜索：YOUR_BAIDU_MAP_AK
   申请：https://lbsyun.baidu.com/apiconsole/key
   → 注册百度地图开放平台 → 创建应用 → 获取 AK

2. 百度统计 ID（所有 6 个 HTML 页面）
   搜索：YOUR_BAIDU_TONGJI_ID
   申请：https://tongji.baidu.com
   → 注册百度统计 → 添加站点 → 获取统计 ID

3. 域名（所有 HTML + sitemap.xml + robots.txt）
   搜索：YOUR_DOMAIN
   替换为：你的实际域名
   → 如果用 Gitee Pages 默认域名则替换为 mr_chejazz.gitee.io/bopep-website
   → 如果用 GitHub Pages 默认域名则替换为 jazz518.github.io/bopep-website-


📝 已填写的信息
-------------------
✅ 工作室地址：甘肃省兰州市南关十字民安大厦A塔1207室
✅ 联系电话：18919925348
✅ 微信号：cxf810529
✅ 百度地图（需替换 AK 后生效）
✅ 百度统计（需替换统计 ID 后生效）
✅ SEO 结构化数据 + Open Graph 微信分享卡片


📷 图片状态
-------------
✅ 车老师照片：   teacher-01.jpg ~ teacher07.jpg（7张）
✅ 学员演出：     performance-01.jpg ~ performance-16.jpg（16张）
✅ 教学环境：     classroom-01.jpg ~ classroom-05.jpg（5张）
✅ 微信二维码：   wechat.jpg
✅ 位置/地图：    百度地图动态加载（需 AK）


🌐 浏览器兼容性
---------------
- Chrome / Edge（推荐）
- Safari / Firefox
- 微信内置浏览器
- 各手机浏览器
- 国内全部主流浏览器（已移除国外 CDN 依赖）


💡 后续建议
-----------
- 图片压缩：用 TinyPNG 压缩大图以加快加载速度
- 自定义域名：在 Gitee Pages 设置中绑定自己的域名（需 Gitee 实名认证）
- ICP 备案：如需绑定自定义国内域名，需在云服务商完成 ICP 备案
- HTTPS：GitHub Pages 自动提供；Gitee Pages 需手动申请
