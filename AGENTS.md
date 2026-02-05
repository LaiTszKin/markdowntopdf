# Repository Guidelines

## 專案結構與模組組織
- `src/` 為主要程式碼；`components/` UI 元件、`hooks/` 自訂 hooks、`utils/` 工具（如 PDF 產生）、`styles/` 共用樣式、`assets/` 靜態資源。
- `public/` 放置不經編譯的靜態檔；`index.html` 為應用入口；`dist/` 為建置輸出。
- 主要設定檔包含 `vite.config.ts`、`tsconfig*.json`、`eslint.config.js`、`postcss.config.js`。

## 建置、測試與開發指令
- `npm install`：安裝依賴。
- `npm run dev`：啟動 Vite 開發伺服器（即時預覽）。
- `npm run build`：先執行 `tsc -b` 再產出 `dist/`。
- `npm run preview`：本機預覽已建置的內容。
- `npm run lint`：執行 ESLint。

## 程式風格與命名規範
- 使用 TypeScript + React；縮排 2 空格；檔案內普遍使用分號與單引號（imports）。
- 元件檔名採 `PascalCase`（例：`Editor.tsx`），hooks 以 `use` 開頭（例：`useMarkdown.ts`）。
- 樣式集中於 `src/App.css`、`src/index.css`、`src/styles/preview.css`，並搭配 Tailwind utility classes。

## 測試指引
- 目前未建立測試框架或 `npm run test` 指令。
- 若新增測試，請在 `package.json` 補上 `test` 指令，並在 README 中說明測試工具與命名慣例（如 `*.test.tsx`）。

## Commit 與 Pull Request 指引
- 目前提交訊息採用 Conventional Commits 風格（例：`feat: ...`、`chore: release v1.0.2`）。
- PR 請提供清楚的變更摘要；若影響 UI，請附上截圖或短影片。
- 若涉及版本釋出，請同步更新 `CHANGELOG.md`。
