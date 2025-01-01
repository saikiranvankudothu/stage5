import React, { useState } from 'react';
import { Share2, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ScoreCard from './ScoreCard';
import Commentary from './Commentary';
import Statistics from './Statistics';
import ScoreGraph from './ScoreGraph';
import TimelineSlider from './TimelineSlider';

export default function LiveMatchPage() {
  const [activeTab, setActiveTab] = useState('commentary');
  const navigate = useNavigate();

  const handleShare = async () => {
    try {
      await navigator.share({
        title: 'IND vs AUS - Live Cricket Match',
        text: 'Watch the exciting match between India and Australia!',
        url: window.location.href,
      });
    } catch (error) {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center h-16">
            <button
              onClick={() => navigate(-1)}
              className="mr-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
            >
              <ArrowLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </button>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">IND vs AUS</h1>
            <button
              onClick={handleShare}
              className="ml-auto flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <Share2 className="w-4 h-4" />
              Share Match
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <ScoreCard />
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
              <div className="border-b border-gray-200 dark:border-gray-700">
                <nav className="flex">
                  {['commentary', 'statistics', 'graph'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`flex-1 px-4 py-3 text-sm font-medium capitalize ${
                        activeTab === tab
                          ? 'text-indigo-600 border-b-2 border-indigo-600'
                          : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="p-4">
                {activeTab === 'commentary' && <Commentary />}
                {activeTab === 'statistics' && <Statistics />}
                {activeTab === 'graph' && <ScoreGraph />}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <TimelineSlider />
            <Statistics compact />
          </div>
        </div>
      </div>
    </div>
  );
}