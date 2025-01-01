import React from 'react';
import DiscussionThread from './DiscussionThread';
import TopContributors from './TopContributors';
import PollSection from './PollSection';
import CreatePost from './CreatePost';

export default function FanZonePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <CreatePost />
          <DiscussionThread />
        </div>
        <div className="space-y-6">
          <PollSection />
          <TopContributors />
        </div>
      </div>
    </div>
  );
}