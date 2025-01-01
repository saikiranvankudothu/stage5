import React from 'react';

const scoreData = [
  { over: 5, runs: 32 },
  { over: 10, runs: 68 },
  { over: 15, runs: 98 },
  { over: 20, runs: 134 },
  { over: 25, runs: 165 },
  { over: 30, runs: 198 },
  { over: 35, runs: 234 },
  { over: 40, runs: 265 },
  { over: 42.3, runs: 285 }
];

export default function ScoreGraph() {
  const maxRuns = Math.max(...scoreData.map(d => d.runs));
  const maxOvers = Math.max(...scoreData.map(d => d.over));

  return (
    <div className="h-[400px] p-4">
      <div className="w-full h-full flex">
        {/* Y-axis */}
        <div className="flex flex-col justify-between text-sm text-gray-500 dark:text-gray-400 pr-4">
          {[...Array(6)].map((_, i) => (
            <span key={i}>{Math.round((maxRuns * (5 - i)) / 5)}</span>
          ))}
        </div>

        {/* Graph area */}
        <div className="flex-1 relative">
          {/* Grid lines */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-full border-t border-gray-200 dark:border-gray-700"
              style={{ top: `${(i * 100) / 5}%` }}
            />
          ))}

          {/* Score line */}
          <svg className="w-full h-full">
            <defs>
              <linearGradient id="scoreGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgb(79, 70, 229)" stopOpacity="0.2" />
                <stop offset="100%" stopColor="rgb(79, 70, 229)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d={`
                M ${scoreData.map(d => `${(d.over * 100) / maxOvers}% ${100 - (d.runs * 100) / maxRuns}%`).join(' L ')}
              `}
              fill="none"
              stroke="rgb(79, 70, 229)"
              strokeWidth="2"
              className="transition-all duration-300"
            />
            <path
              d={`
                M 0 100%
                ${scoreData.map(d => `L ${(d.over * 100) / maxOvers}% ${100 - (d.runs * 100) / maxRuns}%`).join(' ')}
                L 100% 100%
              `}
              fill="url(#scoreGradient)"
              className="transition-all duration-300"
            />
          </svg>

          {/* X-axis labels */}
          <div className="absolute bottom-0 w-full flex justify-between text-sm text-gray-500 dark:text-gray-400 -mb-6">
            {[0, 10, 20, 30, 40, 50].map(over => (
              <span key={over}>{over}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}