import React from 'react';
import TeamCard from './TeamCard';
import { teamData } from './teamData';

export default function TeamsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Teams</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamData.map((team) => (
          <TeamCard key={team.id} {...team} />
        ))}
      </div>
    </div>
  );
}