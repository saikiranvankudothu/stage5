import React, { useState } from 'react';
import ScheduleFilters from './ScheduleFilters';
import ScheduleList from './ScheduleList';
import { ScheduleFilters as ScheduleFiltersType } from './types';
import { scheduleData } from './scheduleData';

const initialFilters: ScheduleFiltersType = {
  tournament: '',
  team: '',
  status: '',
  dateRange: {
    start: '',
    end: '',
  },
};

export default function SchedulePage() {
  const [filters, setFilters] = useState<ScheduleFiltersType>(initialFilters);

  const filteredMatches = scheduleData.filter((match) => {
    if (filters.tournament && match.tournament !== filters.tournament) return false;
    if (filters.status && match.status !== filters.status) return false;
    if (filters.dateRange.start && new Date(match.date) < new Date(filters.dateRange.start))
      return false;
    if (filters.dateRange.end && new Date(match.date) > new Date(filters.dateRange.end))
      return false;
    return true;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Match Schedule</h1>
      
      <ScheduleFilters
        filters={filters}
        onFilterChange={setFilters}
        onReset={() => setFilters(initialFilters)}
      />
      
      <ScheduleList matches={filteredMatches} />
    </div>
  );
}