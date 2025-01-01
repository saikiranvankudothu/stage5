import React from 'react';

interface StatisticsProps {
  compact?: boolean;
}

const battingStats = [
  { name: 'Virat Kohli', runs: 82, balls: 74, strikeRate: 110.81 },
  { name: 'KL Rahul', runs: 56, balls: 43, strikeRate: 130.23 }
];

const bowlingStats = [
  { name: 'Mitchell Starc', overs: '9.3', maidens: 1, runs: 48, wickets: 2, economy: 5.05 },
  { name: 'Pat Cummins', overs: '10.0', maidens: 0, runs: 52, wickets: 1, economy: 5.20 }
];

export default function Statistics({ compact = false }: StatisticsProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Batting
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="text-sm text-gray-500 dark:text-gray-400">
                <th className="text-left font-medium">Batter</th>
                <th className="text-center font-medium">R</th>
                <th className="text-center font-medium">B</th>
                {!compact && <th className="text-center font-medium">4s</th>}
                {!compact && <th className="text-center font-medium">6s</th>}
                <th className="text-right font-medium">SR</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {battingStats.map((batter) => (
                <tr key={batter.name} className="text-sm">
                  <td className="py-3 text-gray-900 dark:text-white font-medium">
                    {batter.name}
                  </td>
                  <td className="py-3 text-center text-gray-900 dark:text-white">
                    {batter.runs}
                  </td>
                  <td className="py-3 text-center text-gray-500 dark:text-gray-400">
                    {batter.balls}
                  </td>
                  {!compact && (
                    <>
                      <td className="py-3 text-center text-gray-500 dark:text-gray-400">6</td>
                      <td className="py-3 text-center text-gray-500 dark:text-gray-400">2</td>
                    </>
                  )}
                  <td className="py-3 text-right text-gray-500 dark:text-gray-400">
                    {batter.strikeRate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Bowling
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="text-sm text-gray-500 dark:text-gray-400">
                <th className="text-left font-medium">Bowler</th>
                <th className="text-center font-medium">O</th>
                {!compact && <th className="text-center font-medium">M</th>}
                <th className="text-center font-medium">R</th>
                <th className="text-center font-medium">W</th>
                <th className="text-right font-medium">ECO</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {bowlingStats.map((bowler) => (
                <tr key={bowler.name} className="text-sm">
                  <td className="py-3 text-gray-900 dark:text-white font-medium">
                    {bowler.name}
                  </td>
                  <td className="py-3 text-center text-gray-500 dark:text-gray-400">
                    {bowler.overs}
                  </td>
                  {!compact && (
                    <td className="py-3 text-center text-gray-500 dark:text-gray-400">
                      {bowler.maidens}
                    </td>
                  )}
                  <td className="py-3 text-center text-gray-500 dark:text-gray-400">
                    {bowler.runs}
                  </td>
                  <td className="py-3 text-center text-gray-900 dark:text-white font-medium">
                    {bowler.wickets}
                  </td>
                  <td className="py-3 text-right text-gray-500 dark:text-gray-400">
                    {bowler.economy}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}