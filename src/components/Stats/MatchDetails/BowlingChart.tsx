import React from 'react';
import { BowlingStats } from '../types';

interface BowlingChartProps {
  stats: BowlingStats[];
}

export default function BowlingChart({ stats }: BowlingChartProps) {
  const maxWickets = Math.max(...stats.map(stat => stat.wickets));

  return (
    <div className="space-y-4">
      {stats.map((stat) => (
        <div key={stat.playerId} className="space-y-1">
          <div className="flex justify-between text-sm">
            <span className="font-medium text-gray-900 dark:text-white">{stat.playerName}</span>
            <span className="text-gray-600 dark:text-gray-400">{stat.wickets}-{stat.runs}</span>
          </div>
          <div className="relative h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="absolute h-full bg-green-600 dark:bg-green-500 rounded-full transition-all"
              style={{ width: `${(stat.wickets / maxWickets) * 100}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
            <span>{stat.overs} overs</span>
            <span>Econ: {stat.economy}</span>
          </div>
        </div>
      ))}
    </div>
  );
}