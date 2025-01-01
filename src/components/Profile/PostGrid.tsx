import React from 'react';
import { Heart, MessageCircle } from 'lucide-react';

interface Post {
  id: string;
  image: string;
  likes: number;
  comments: number;
}

interface PostGridProps {
  posts: Post[];
  loading?: boolean;
}

export default function PostGrid({ posts, loading }: PostGridProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.map((post) => (
        <div
          key={post.id}
          className="group relative aspect-square bg-gray-200 dark:bg-gray-700 rounded-xl overflow-hidden"
        >
          <img
            src={post.image}
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="flex gap-6 text-white">
              <div className="flex items-center gap-2">
                <Heart className="w-6 h-6" />
                <span className="text-lg font-medium">{post.likes}</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-6 h-6" />
                <span className="text-lg font-medium">{post.comments}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}