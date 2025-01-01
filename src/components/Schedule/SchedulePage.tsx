import React, { useState } from 'react';
import { Calendar as CalendarIcon, List } from 'lucide-react';
import MatchCard from './MatchCard';
import { matchSchedule } from './scheduleData';

export default function SchedulePage() {
  const [viewType, setViewType] = useState<'calendar' | 'list'>('list');

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Match Schedule</h1>
        
        <div className="flex gap-2">
          <button
            onClick={() => setViewType('list')}
            className={`p-2 rounded-lg ${
              viewType === 'list'
                ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400'
                : 'text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700'
            }`}
          >
            <List className="w-5 h-5" />
          </button>
          <button
            onClick={() => setViewType('calendar')}
            className={`p-2 rounded-lg ${
              viewType === 'calendar'
                ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400'
                : 'text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700'
            }`}
          >
            <CalendarIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {matchSchedule.map((match) => (
          <MatchCard key={match.id} {...match} />
        ))}
      </div>
    </div>
  );
}