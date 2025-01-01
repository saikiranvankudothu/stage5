import React, { useState } from 'react';
import ProfileHeader from './ProfileHeader';
import ProfileTabs from './ProfileTabs';
import PostGrid from './PostGrid';

const mockUser = {
  name: 'John Smith',
  username: 'johnsmith',
  bio: 'Cricket enthusiast | Professional photographer | Travel lover',
  location: 'Mumbai, India',
  website: 'https://johnsmith.com',
  isFollowing: false,
  stats: {
    matches: 42,
    followers: 1234,
    following: 567,
    posts: 89,
  },
};

const mockPosts = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80',
    likes: 234,
    comments: 12,
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80',
    likes: 187,
    comments: 8,
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?auto=format&fit=crop&q=80',
    likes: 342,
    comments: 15,
  },
];

export default function Profile() {
  const [activeTab, setActiveTab] = useState('posts');
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-true-black">
      <div className="container mx-auto px-4 py-8">
        <ProfileHeader user={mockUser} />
        <ProfileTabs activeTab={activeTab} onTabChange={setActiveTab} />
        <PostGrid posts={mockPosts} loading={loading} />
      </div>
    </div>
  );
}