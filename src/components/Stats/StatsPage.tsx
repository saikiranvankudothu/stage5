import React, { useState } from 'react';
import { Search } from 'lucide-react';
import MatchList from './MatchList';
import { MatchStats } from './types';

// You would typically fetch this data from an API
const mockMatches: MatchStats[] = [
  {
    id: 'match1',
    date: '2024-03-20',
    teams: {
      team1: {
        id: 'ind',
        name: 'India',
        logo: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80',
        rank: 1,
        titles: 3,
        players: [],
        matches: []
      },
      team2: {
        id: 'aus',
        name: 'Australia',
        logo: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80',
        rank: 2,
        titles: 5,
        players: [],
        matches: []
      }
    },
    result: 'India won by 5 wickets',
    stats: {
      batting: [],
      bowling: [],
      partnership: [],
      extras: {
        wides: 5,
        noBalls: 1,
        byes: 2,
        legByes: 3,
        total: 11
      }
    }
  }
  // Add more matches as needed
];

export default function StatsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMatches = mockMatches.filter(match =>
    match.teams.team1.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    match.teams.team2.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Match Statistics</h1>
        <div className="relative w-64">
          <input
            type="text"
            placeholder="Search matches..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      <MatchList matches={filteredMatches} />
    </div>
  );
}