import React from 'react';
import { Settings, MapPin, Link as LinkIcon, LogOut, Share2 } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

interface ProfileHeaderProps {
  user: {
    name: string;
    username: string;
    bio: string;
    location: string;
    website: string;
    isFollowing: boolean;
    stats: {
      matches: number;
      followers: number;
      following: number;
      posts: number;
    };
  };
}

export default function ProfileHeader({ user }: ProfileHeaderProps) {
  const { logout } = useAuth();

  const handleShare = async () => {
    try {
      await navigator.share({
        title: `${user.name}'s Profile`,
        text: user.bio,
        url: window.location.href,
      });
    } catch (error) {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="bg-white dark:bg-true-black rounded-xl shadow-md p-6 mb-6">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
        <div className="relative w-32 h-32 rounded-full border-4 border-gray-200 dark:border-true-black overflow-hidden flex-shrink-0">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80"
            alt={user.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{user.name}</h1>
            <div className="flex flex-wrap gap-3">
              <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                {user.isFollowing ? 'Following' : 'Follow'}
              </button>
              <button 
                onClick={handleShare}
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
              >
                <Share2 className="w-4 h-4" />
                Share
              </button>
              <button className="p-2 rounded-lg border border-gray-300 dark:border-true-black hover:bg-gray-100 dark:hover:bg-true-black transition-colors">
                <Settings className="w-5 h-5 text-gray-600 dark:text-white" />
              </button>
              <button
                onClick={logout}
                className="hidden md:block p-2 rounded-lg border border-gray-300 dark:border-true-black hover:bg-red-50 hover:border-red-300 hover:text-red-600 dark:hover:bg-red-900/50 dark:hover:border-red-700 transition-colors"
                aria-label="Logout"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="flex gap-6 mb-4">
            <div className="text-center">
              <div className="text-xl font-bold text-gray-900 dark:text-white">{user.stats.matches}</div>
              <div className="text-sm text-gray-600 dark:text-white">Matches</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-gray-900 dark:text-white">{user.stats.followers}</div>
              <div className="text-sm text-gray-600 dark:text-white">Followers</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-gray-900 dark:text-white">{user.stats.following}</div>
              <div className="text-sm text-gray-600 dark:text-white">Following</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-gray-900 dark:text-white">{user.stats.posts}</div>
              <div className="text-sm text-gray-600 dark:text-white">Posts</div>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-gray-600 dark:text-white">{user.bio}</p>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-white">
              <MapPin className="w-4 h-4" />
              <span>{user.location}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <LinkIcon className="w-4 h-4 text-gray-600 dark:text-white" />
              <a href={user.website} className="text-indigo-600 hover:text-indigo-500">{user.website}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}