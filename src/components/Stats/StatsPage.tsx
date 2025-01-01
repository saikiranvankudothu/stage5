import React from 'react';
import PointsTable from './PointsTable';
import PlayerStats from './PlayerStats';
import StatCharts from './StatCharts';

export default function StatsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Statistics</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <StatCharts />
        </div>
        <div>
          <PointsTable />
        </div>
      </div>
      
      <div className="mt-6">
        <PlayerStats />
      </div>
    </div>
  );
}