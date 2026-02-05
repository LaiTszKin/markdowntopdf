import React from 'react';
import { Editor } from './components/Editor';
import { Preview } from './components/Preview';
import { Toolbar } from './components/Toolbar';
import { useMarkdown } from './hooks/useMarkdown';
import { generatePdf } from './utils/pdf';

function App() {
  const { content, setContent } = useMarkdown();
  const previewRef = React.useRef<HTMLDivElement>(null);

  const handleDownload = (filename: string) => {
    if (previewRef.current) {
      const contentElement = previewRef.current.querySelector('.preview-content') as HTMLElement;
      if (contentElement) {
        generatePdf(contentElement, filename);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-screen-2xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">Markdown 轉 PDF</h1>
          <Toolbar onDownload={handleDownload} />
        </div>
      </header>

      <main className="max-w-screen-2xl mx-auto p-4 h-[calc(100vh-73px)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-full">
          <div className="h-full">
            <Editor value={content} onChange={setContent} />
          </div>
          <div className="h-full" ref={previewRef}>
            <Preview content={content} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
