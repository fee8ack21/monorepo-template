<a id="readme-top"></a>

# Monorepo Template

基於 [pnpm Workspace](https://pnpm.io/workspaces) + [Vite](https://vitejs.dev/) + [Vue](https://vuejs.org/) 的多前端共用模組架構

## 目錄

- [Monorepo Template](#monorepo-template)
  - [目錄](#目錄)
  - [專案介紹](#專案介紹)
  - [啟動專案](#啟動專案)
  - [資料夾架構](#資料夾架構)
  - [Git Commit 規範](#git-commit-規範)

## 專案介紹

### 使用技術

![typescript][typescript-badge]
![pnpm][pnpm-badge]
![vite][vite-badge]
![vue][vue-badge]
![sass][sass-badge]
![tailwind][tailwind-badge]
![eslint][eslint-badge]
![prettier][prettier-badge]
![swagger][swagger-badge]

## 啟動專案

### 安裝 pnpm

```sh
npm i -g pnpm
```

### 安裝 dependencies

```sh
pnpm i
```

### 生成 API Service 內容

```sh
pnpm api build
```

### 運行 JSON Server

```sh
pnpm mock-server start

# Listening on: http://localhost:3000
```

### 運行 App1 與 App2 專案

```sh
pnpm app1 dev
pnpm app2 dev
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 資料夾架構

```
├─.vscode - 專案 VS Code 設定
├─apps - 運行專案
│  ├─app1
│  ├─app2
│  └─mock-server - 測試用 API，資料來源為 db.json
└─packages - 各專案共用內容
    ├─api - API Service (基於 swagger.json 自動產出 src 內容)
    ├─plugins - 插件設定
    ├─ui - components 與 layout
    ├─utilities - 工具類函式
    └─views - 功能頁面相關的 composables 與 components
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Git Commit 規範

- feat -> feature
- fix -> bug fix
- docs -> documentation
- style -> formatting, lint stuff
- refactor -> code restructure without changing external behavior
- perf -> performance

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[pnpm-badge]: https://img.shields.io/badge/pnpm-yellow?style=for-the-badge&logo=pnpm&logoColor=white
[swagger-badge]: https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=Swagger&logoColor=white
[vite-badge]: https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E
[vue-badge]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[tailwind-badge]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[typescript-badge]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[sass-badge]: https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white
[eslint-badge]: https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white
[prettier-badge]: https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E
