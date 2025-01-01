import React from 'react';
import { Play } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative h-[400px] rounded-2xl overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80"
        alt="Cricket Match"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <div className="max-w-2xl">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-600 text-white mb-4">
                LIVE NOW
              </span>
              <h1 className="text-4xl font-bold text-white mb-4">
                IND vs AUS - Finals
              </h1>
              <p className="text-gray-200 mb-6">
                Watch the epic showdown between India and Australia in the tournament finals
              </p>
              <button className="inline-flex items-center px-6 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
                <Play className="h-5 w-5 mr-2" />
                Watch Live
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}