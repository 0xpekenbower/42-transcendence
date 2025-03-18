'use client';
import React from 'react';
import { 
  ChatStarter, FirstPaddle, FriendlyCircle, PingPongLegend, 
  RisingStar, RisingStarII, RisingStarIII, SocialStar, 
  TournamentChampion, TournamentChampionII, TournamentChampionIII, 
  FriendlyCircleII 
} from '@/icons/achevments';

export default function AchievementsList() {
  return (
    <div className="grid grid-cols-1 grid-flow-row h-full gap-4 overflow-auto overflow-y-scroll no-scrollbar ml-[25px] mr-[25px] mt-[25px]">
      <div className="overflow-visible h-[170px]">
        <FirstPaddle pathData='true' />
      </div>
      <div className="overflow-visible h-[170px]">
        <FriendlyCircle pathData='true' />
      </div>
      <div className="overflow-visible h-[170px]">
        <ChatStarter pathData='true' />
      </div>
      <div className="overflow-visible h-[170px]">
        <RisingStar pathData='true' />
      </div>
      <div className="overflow-visible h-[170px]">
        <RisingStarII pathData='false' />
      </div>
      <div className="overflow-visible h-[170px]">
        <RisingStarIII pathData='false' />
      </div>
      <div className="overflow-visible h-[170px]">
        <FriendlyCircleII pathData='false' />
      </div>
      <div className="overflow-visible h-[170px]">
        <SocialStar pathData='false' />
      </div>
      <div className="overflow-visible h-[170px]">
        <TournamentChampion pathData='false' />
      </div>
      <div className="overflow-visible h-[170px]">
        <TournamentChampionII pathData='false' />
      </div>
      <div className="overflow-visible h-[170px]">
        <TournamentChampionIII pathData='false' />
      </div>
      <div className="overflow-visible h-[170px]">
        <PingPongLegend pathData='false' />
      </div>
    </div>
  );
} 