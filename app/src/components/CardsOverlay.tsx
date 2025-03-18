"use client";

import React from "react";

export default function CardsOverlay() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
      {/* Container for your cards */}
      <div className="flex gap-6 pointer-events-auto">
        {/* Card 1 */}
        <div className="w-[200px] h-[300px] bg-white/10 rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
          {/* Your text or icons go here */}
        </div>
        {/* Card 2 */}
        <div className="w-[200px] h-[300px] bg-white/10 rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
          {/* Your text or icons go here */}
        </div>
        {/* Card 3 */}
        <div className="w-[200px] h-[300px] bg-white/10 rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
          {/* Your text or icons go here */}
        </div>
      </div>
    </div>
  );
}


