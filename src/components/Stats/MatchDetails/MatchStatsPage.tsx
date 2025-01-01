import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BattingChart from './BattingChart';
import BowlingChart from './BowlingChart';
import PartnershipGraph from './PartnershipGraph';
import { MatchStats } from '../types';
import { ArrowLeft } from 'lucide-react';

const tabs = [
  { id: 'batting', label: 'Batting' },
  { id: 'bowling', label: 'Bowling' },
  { id: 'partnerships', label: 'Partnerships' },
];

// Mock data - In a real app, this would come from an API
const mockMatch: MatchStats = {
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
    batting: [
      {
        playerId: 'vk18',
        playerName: 'Virat Kohli',
        runs: 82,
        balls: 74,
        fours: 6,
        sixes: 2,
        strikeRate: 110.81
      },
      {
        playerId: 'rs45',
        playerName: 'Rohit Sharma',
        runs: 56,
        balls: 43,
        fours: 4,
        sixes: 3,
        strikeRate: 130.23
      }
    ],
    bowling: [
      {
        playerId: 'ms23',
        playerName: 'Mitchell Starc',
        overs: 9.3,
        maidens: 1,
        runs: 48,
        wickets: 2,
        economy: 5.05
      },
      {
        playerId: 'pc47',
        playerName: 'Pat Cummins',
        overs: 10,
        maidens: 0,
        runs: 52,
        wickets: 1,
        economy: 5.20
      }
    ],
    partnership: [
      {
        players: ['Virat Kohli', 'Rohit Sharma'],
        runs: 120,
        balls: 98
      },
      {
        players: ['Rohit Sharma', 'KL Rahul'],
        runs: 85,
        balls: 72
      }
    ],
    extras: {
      wides: 5,
      noBalls: 1,
      byes: 2,
      legByes: 3,
      total: 11
    }
  }
};

export default function MatchStatsPage() {
  const { matchId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('batting');
  const [match, setMatch] = useState<MatchStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setLoading(true);
    setTimeout(() => {
      setMatch(mockMatch);
      setLoading(false);
    }, 500);
  }, [matchId]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse space-y-4">
          <div className="h-16 bg-gray-200 dark:bg-gray-700 rounded-xl" />
          <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded-xl" />
        </div>
      </div>
    );
  }

  if (!match) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400">Match not found</p>
          <button
            onClick={() => navigate('/stats')}
            className="mt-4 text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
          >
            Back to Stats
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={() => navigate('/stats')}
        className="mb-6 flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Stats
      </button>

      <div className="space-y-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <img
                src={match.teams.team1.logo}
                alt={match.teams.team1.name}
                className="w-16 h-16 object-contain"
              />
              <span className="text-2xl font-bold text-gray-900 dark:text-white">vs</span>
              <img
                src={match.teams.team2.logo}
                alt={match.teams.team2.name}
                className="w-16 h-16 object-contain"
              />
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-600 dark:text-gray-400">{match.date}</div>
              <div className="text-indigo-600 dark:text-indigo-400 font-medium">{match.result}</div>
            </div>
          </div>

          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="flex gap-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-2 px-4 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400'
                      : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="mt-6">
            {activeTab === 'batting' && <BattingChart stats={match.stats.batting} />}
            {activeTab === 'bowling' && <BowlingChart stats={match.stats.bowling} />}
            {activeTab === 'partnerships' && <PartnershipGraph partnerships={match.stats.partnership} />}
          </div>
        </div>
      </div>
    </div>
  );
}