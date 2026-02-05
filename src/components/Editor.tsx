import React from 'react';

interface EditorProps {
  value: string;
  onChange: (value: string) => void;
}

export const Editor: React.FC<EditorProps> = ({ value, onChange }) => {
  return (
    <div className="h-full flex flex-col">
      <h2 className="section-title text-lg font-semibold mb-3 px-1">Markdown 編輯器</h2>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="editor-textarea flex-1 w-full p-4 text-sm resize-none rounded-2xl"
        placeholder="在此輸入 Markdown..."
      />
    </div>
  );
};
