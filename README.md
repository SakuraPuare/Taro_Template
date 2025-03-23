# Taro Template 项目

## 项目简介

这是一个基于 Taro 框架开发的微信小程序模板项目，包含自定义 TabBar 功能实现。使用 React 技术栈，集成了 TailwindCSS 等现代化工具。

## 技术栈

- Taro 4.0.9
- React 17.0.0
- TypeScript
- TailwindCSS 4.0.15
- Taro UI 3.3.0

## 功能特点

### 自定义 TabBar

本项目实现了微信小程序的自定义 TabBar 组件，并使用了 `Taro.getTabBar` 去管理 TabBar 的状态。

相关文档：

- Taro 微信小程序自定义 TabBar 开发文档：https://docs.taro.zone/docs/miniprogram-plugin
- 微信小程序自定义 TabBar 文档：https://developers.weixin.qq.com/miniprogram/dev/framework/ability/custom-tabbar.html

## 安装与使用

### 环境准备

确保你已安装以下工具：

- Node.js (推荐使用 14.x 或以上版本)
- Yarn 或 npm

### 安装依赖

```bash
# 使用 yarn
yarn install

# 或使用 npm
npm install
```

### 开发模式

```bash
# 开发微信小程序
yarn dev:weapp
# 或
npm run dev:weapp
```

### 生产构建

```bash
# 构建微信小程序
yarn build:weapp
# 或
npm run build:weapp
```

## 目录结构

```
├── config                 // 项目编译配置
├── dist                   // 项目编译产物
├── src                    // 源码目录
│   ├── custom-tab-bar     // 自定义TabBar组件
│   ├── images             // 图片资源
│   ├── pages              // 页面文件
│   ├── utils              // 工具函数
│   ├── app.config.ts      // 全局配置
│   ├── app.css            // 全局样式
│   └── app.ts             // 项目入口文件
├── babel.config.js        // Babel配置
├── package.json           // 项目依赖
├── project.config.json    // 小程序项目配置
├── tailwind.config.js     // TailwindCSS配置
└── tsconfig.json          // TypeScript配置
```

## 许可证

[MIT License](LICENSE)
