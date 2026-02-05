import { useState } from 'react';

export const useMarkdown = () => {
  const [content, setContent] = useState(`# 歡迎使用 Markdown 轉 PDF

這是一個簡約的 Markdown 編輯器，支持實時預覽和 PDF 導出。

## 功能特點

- **實時預覽**: 左側編輯，右側即時顯示
- **PDF 導出**: 一鍵下載高品質 PDF 文件
- **簡約設計**: 專注於內容創作

## 語法示例

### 文字樣式

**粗體文字** 和 *斜體文字* 以及 ~~刪除線~~

### 列表

1. 有序列表項目一
2. 有序列表項目二
3. 有序列表項目三

- 無序列表項目
- 另一個項目
  - 嵌套項目

### 代碼

\`\`\`javascript
function hello() {
  console.log("Hello, World!");
}
\`\`\`

### 引用

> 這是一段引用文字。
> 可以有多行。

### 鏈接和圖片

[訪問 GitHub](https://github.com/LaiTszKin/markdowntopdf)

---

開始編輯你的 Markdown 文檔吧！
`);

  return { content, setContent };
};
