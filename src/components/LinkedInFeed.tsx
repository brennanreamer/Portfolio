'use client';

import { useState } from 'react';

interface LinkedInPost {
  url: string;
  height: number;
}

interface LinkedInFeedProps {
  posts: LinkedInPost[];
}

export function LinkedInFeed({ posts }: LinkedInFeedProps) {
  if (!posts || posts.length === 0) return null;

  return (
    <div className="mt-12 bg-gray-50 rounded-xl p-8">
      <div className="flex items-center gap-3 mb-6">
        <svg
          className="w-8 h-8 text-[#0A66C2]"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
        <h2 className="text-2xl font-bold text-gray-800">LinkedIn Updates</h2>
      </div>
      
      <div 
        className="overflow-y-auto pr-4 rounded-lg"
        style={{
          maxHeight: 'calc(100vh - 300px)',
          scrollbarWidth: 'thin',
          scrollbarColor: '#CBD5E1 #F1F5F9'
        }}
      >
        <div className="space-y-6 flex flex-col items-center">
          {posts.map((post, index) => (
            <div 
              key={index} 
              className="w-full max-w-[504px] transform transition-all duration-300 hover:translate-y-[-4px]"
            >
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <iframe
                  src={post.url}
                  width="100%"
                  height={post.height}
                  className="rounded-xl"
                  frameBorder="0"
                  allowFullScreen
                  title={`LinkedIn post ${index + 1}`}
                  scrolling="no"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
