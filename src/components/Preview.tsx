import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import '../styles/preview.css';

interface PreviewProps {
  content: string;
}

export const Preview: React.FC<PreviewProps> = ({ content }) => {
  return (
    <div className="h-full flex flex-col">
      <h2 className="section-title text-lg font-semibold mb-3 px-1">HTML 預覽</h2>
      <div className="flex-1 overflow-auto paper-panel rounded-2xl p-6">
        <div className="preview-content prose prose-gray max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {content || '*預覽將顯示在這裡...*'}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};
