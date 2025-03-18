'use client';
import React from 'react';
import ModelRenderer from '@/components/model-renderer';
import CarouselScene from '@/components/CarouselScene';

export default function PlayerCard() {
  return (
    <div className="flex flex-col w-full h-full overflow-visible border rounded-[40px] bg-[#1E2934]">
      <div className="w-full text-center py-3">
        <h2 className="text-xl font-bold text-white">Player Overview</h2>
      </div>
      
      <div className="flex flex-col sm:grid sm:grid-cols-2 flex-grow w-full overflow-visible">
        <div className="h-[200px] sm:h-full flex items-center justify-center">
          <ModelRenderer />
        </div>
        <div className="h-[200px] sm:h-full flex items-center justify-center">
          <CarouselScene />
        </div>
      </div>
    </div>
  );
} 