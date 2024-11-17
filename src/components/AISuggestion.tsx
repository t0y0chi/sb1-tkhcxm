import React from 'react';
import { Check, Edit } from 'lucide-react';

interface AISuggestionProps {
  suggestion: string;
  onAccept: (suggestion: string) => void;
}

function AISuggestion({ suggestion, onAccept }: AISuggestionProps) {
  return (
    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
      <div className="flex items-start gap-4">
        <div className="flex-1">
          <p className="text-sm text-gray-600 mb-2">AI Suggested Reply:</p>
          <p className="text-gray-800">{suggestion}</p>
        </div>
        <div className="flex flex-col gap-2">
          <button
            onClick={() => onAccept(suggestion)}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded-md transition-colors"
          >
            <Check size={16} />
            <span>Accept</span>
          </button>
          <button
            onClick={() => onAccept(suggestion)}
            className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-3 py-1.5 rounded-md transition-colors"
          >
            <Edit size={16} />
            <span>Edit</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AISuggestion;