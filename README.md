# webpack 前端统一框架

## 框架简介

利用目前最新的 webpack5 搭建的 vue3 前端开发框架，兼容 chrome、safari、firefox 等主流浏览器；  
集成 mock 数据模拟服务，可以实现无任何其他依赖的前端开发；  
使用最少的 package 依赖，实现最快的编译速度和最稳定高效的代码产出。

## 技术栈组合

- webpack @5.x
- vue @3.x
- vuex @4.x
- vue-router @4.x
- axios @0.21.x

## 环境要求

- 系统： win10/7、macOS
- 工具: VSCode 最新版
- NODE: > v10.0

## 快速开始

由于国内网络原因，在正式开发项目之前，建议设置 npm 淘宝源；

```bash
npm config set registry https://registry.npm.taobao.org/
```

安装依赖并运行，npm run dev

```bash
npm install
npm run dev
```

按控制台提示点击打开 http://localhost:9900；  
 _您还可以打开在线文档和数据模拟模拟服务： http://localhost:9900/api/_  
 命令说明:

```bash
npm run dev   # 开发环境会启动本地server
npm run build  # 生产环境打包
npm run build:test  # 测试环境打包
```

## 目录规范

_注：所有目录名都采用小写加横线间隔，所有组件的文件名以首字母大写的驼峰命令_

| 目录               | 说明                             |
| ------------------ | -------------------------------- |
| mock               | 模拟数据服务                     |
| public             | 静态文件，最终与打包后的目录合并 |
| src                | 业务代码                         |
| ├─ asset           | 模块资源                         |
| ├─ ├─ css          | 模块样式                         |
| ├─ ├─ font         | 图标字体                         |
| ├─ ├─ image        | 模块图片                         |
| ├─ component       | 业务组件                         |
| ├─ page            | 路由页面                         |
| ├─ ├─ App.vue      | 页面根组件                       |
| ├─ router          | 页面路由                         |
| ├─ service         | 业务逻辑                         |
| ├─ store           | 全局状态                         |
| ├─ util            | 工具类                           |
| ├─ entry           | 入口类文件夹                     |
| ├─ config.ts       | 不同环境的配置文件               |
| ├─ index.d.ts      | 项目自定义 ts 申明               |
| ├─ index.html      | 入口 html                        |
| ├─ main.ts         | 入口                             |
| -.editorconfig     | 编辑器规范配置                   |
| -.gitignore        | git 文件排除                     |
| -babel.config.js   | babel 配置文件                   |
| -package.json      | 依赖包和启动脚本                 |
| -README.md         | 说明文档                         |
| -webpack.config.js | webpack 配置文件                 |

## 未来规划

- 集成 editorConfig,eslint 来在框架层面统一编码风格和规范
- 同时支持 vue 和 react
- 支持单入口和多入口轻松可配
- 自动划部署

## 升级日志

- 2.0.0 初始版本
