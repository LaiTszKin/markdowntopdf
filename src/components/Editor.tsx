import React from 'react';

interface EditorProps {
  value: string;
  onChange: (value: string) => void;
}

export const Editor: React.FC<EditorProps> = ({ value, onChange }) => {
  return (
    <div className="h-full flex flex-col">
      <h2 className="text-lg font-semibold text-gray-800 mb-3 px-1">Markdown 編輯器</h2>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 w-full p-4 font-mono text-sm bg-gray-50 text-gray-800 resize-none focus:outline-none rounded-lg border border-gray-200 focus:border-blue-400"
        placeholder="在此輸入 Markdown..."
      />
    </div>
  );
};
