import React, { useState } from 'react';
import { Download } from 'lucide-react';

interface ToolbarProps {
  onDownload: (filename: string) => void;
}

export const Toolbar: React.FC<ToolbarProps> = ({ onDownload }) => {
  const [filename, setFilename] = useState('document');
  const [isEditing, setIsEditing] = useState(false);

  const handleDownload = () => {
    const name = filename.trim() || 'document';
    onDownload(name);
  };

  return (
    <div className="flex items-center gap-4 flex-wrap justify-end">
      <div className="flex items-center gap-2">
        <label className="toolbar-label text-sm">文件名:</label>
        {isEditing ? (
          <input
            type="text"
            value={filename}
            onChange={(e) => setFilename(e.target.value)}
            onBlur={() => setIsEditing(false)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') setIsEditing(false);
            }}
            className="toolbar-input px-2 py-1 text-sm rounded-md"
            autoFocus
          />
        ) : (
          <span
            onClick={() => setIsEditing(true)}
            className="toolbar-filename px-2 py-1 text-sm cursor-pointer rounded-md"
          >
            {filename}
          </span>
        )}
        <span className="text-sm text-[color:var(--paper-ink-muted)]">.pdf</span>
      </div>
      <button
        onClick={handleDownload}
        className="toolbar-button flex items-center gap-2 px-4 py-2 rounded-lg"
      >
        <Download size={18} />
        <span>下載 PDF</span>
      </button>
    </div>
  );
};
