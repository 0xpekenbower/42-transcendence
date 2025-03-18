'use client';

import React from 'react';
// import LevelCard from '@/components/LevelCard';

export default function LevelPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Page Header */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-[#1E2934] rounded-2xl p-6 shadow-lg">
          <h1 className="text-2xl font-bold text-white">Player Level</h1>
          <p className="text-gray-400">Track your progress and unlock rewards</p>
        </div>
        
        {/* Level Card */}
        {/* <div className="col-span-1 md:col-span-1 lg:col-span-1">
          <LevelCard level={5} xp={750} nextLevelXp={1000} title="Rising Star" />
        </div> */}
        
        {/* Additional content can go here */}
        <div className="col-span-1 md:col-span-1 lg:col-span-2 bg-[#1E2934] rounded-2xl p-6 shadow-lg">
          <h2 className="text-xl font-bold text-white mb-4">Level History</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-[#0A1622] rounded-lg">
              <span className="text-white">Level 4</span>
              <span className="text-gray-400">Completed 2 weeks ago</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-[#0A1622] rounded-lg">
              <span className="text-white">Level 3</span>
              <span className="text-gray-400">Completed 1 month ago</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-[#0A1622] rounded-lg">
              <span className="text-white">Level 2</span>
              <span className="text-gray-400">Completed 2 months ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 