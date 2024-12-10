import React from 'react';

interface DisplayProps {
  value: string;
  expression: string;
}

export function Display({ value, expression }: DisplayProps) {
  return (
    <div className="w-full bg-gray-800 rounded-2xl p-4 mb-4">
      <div className="h-6 text-right text-gray-400 text-sm mb-1">
        {expression || '\u00A0'}
      </div>
      <div className="text-right text-white text-4xl font-semibold truncate">
        {value || '0'}
      </div>
    </div>
  );
}