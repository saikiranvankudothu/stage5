import React from 'react';
import { BattingStats } from '../types';

interface BattingChartProps {
  stats: BattingStats[];
}

export default function BattingChart({ stats }: BattingChartProps) {
  const maxRuns = Math.max(...stats.map(stat => stat.runs));

  return (
    <div className="space-y-4">
      {stats.map((stat) => (
        <div key={stat.playerId} className="space-y-1">
          <div className="flex justify-between text-sm">
            <span className="font-medium text-gray-900 dark:text-white">{stat.playerName}</span>
            <span className="text-gray-600 dark:text-gray-400">{stat.runs} runs</span>
          </div>
          <div className="relative h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="absolute h-full bg-indigo-600 dark:bg-indigo-500 rounded-full transition-all"
              style={{ width: `${(stat.runs / maxRuns) * 100}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
            <span>{stat.balls} balls</span>
            <span>SR: {stat.strikeRate}</span>
          </div>
        </div>
      ))}
    </div>
  );
}