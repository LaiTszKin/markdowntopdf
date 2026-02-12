# Markdown 轉 PDF

一個簡約的 Markdown 編輯器，左側編輯、右側即時預覽，並可一鍵匯出 PDF。

## 功能

- 即時預覽（支援 GFM：表格、刪除線、任務清單）
- 自訂檔名並下載 PDF
- 在支援的瀏覽器中，可直接選擇 PDF 的儲存位置
- 乾淨、易讀的預覽樣式

## 使用方式

1. 在左側輸入 Markdown。
2. 右側即時看到 HTML 預覽。
3. 點擊檔名可修改輸出檔名。
4. 點「下載 PDF」後，可在瀏覽器跳出的儲存視窗中選擇位置並匯出 A4 直式 PDF。

## 本機開發

需要安裝 Node.js。

```bash
npm install
npm run dev
```

啟動後依終端機顯示的網址開啟。

## 建置

```bash
npm run build
npm run preview
```

## 技術棧

- React + TypeScript + Vite
- react-markdown + remark-gfm
- html2pdf.js
- Tailwind CSS
