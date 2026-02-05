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
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <label className="text-sm text-gray-600">文件名:</label>
        {isEditing ? (
          <input
            type="text"
            value={filename}
            onChange={(e) => setFilename(e.target.value)}
            onBlur={() => setIsEditing(false)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') setIsEditing(false);
            }}
            className="px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-400"
            autoFocus
          />
        ) : (
          <span
            onClick={() => setIsEditing(true)}
            className="px-2 py-1 text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded"
          >
            {filename}
          </span>
        )}
        <span className="text-sm text-gray-400">.pdf</span>
      </div>
      <button
        onClick={handleDownload}
        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        <Download size={18} />
        <span>下載 PDF</span>
      </button>
    </div>
  );
};
