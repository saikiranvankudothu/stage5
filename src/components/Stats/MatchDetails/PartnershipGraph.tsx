import React from 'react';
import { PartnershipStats } from '../types';

interface PartnershipGraphProps {
  partnerships: PartnershipStats[];
}

export default function PartnershipGraph({ partnerships }: PartnershipGraphProps) {
  const maxRuns = Math.max(...partnerships.map(p => p.runs));

  return (
    <div className="h-64 flex items-end gap-4">
      {partnerships.map((partnership, index) => (
        <div
          key={index}
          className="flex-1 flex flex-col items-center gap-2"
        >
          <div className="w-full bg-indigo-600 dark:bg-indigo-500 rounded-t-lg transition-all hover:bg-indigo-700 dark:hover:bg-indigo-600 group relative"
            style={{ height: `${(partnership.runs / maxRuns) * 100}%` }}
          >
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 dark:bg-gray-700 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {partnership.runs} runs ({partnership.balls} balls)
            </div>
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400 text-center">
            {partnership.players.join(' & ')}
          </div>
        </div>
      ))}
    </div>
  );
}