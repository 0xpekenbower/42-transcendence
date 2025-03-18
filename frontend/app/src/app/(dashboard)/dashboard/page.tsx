'use client';
import React from 'react';
import GameStats from '@/components/dashboard/GameStats';
import StatisticsChart from '@/components/dashboard/StatisticsChart';
import CalendarWidget from '@/components/dashboard/CalendarWidget';
import AchievementsList from '@/components/dashboard/AchievementsList';
import { LeaderBoard } from '@/components/LeaderBoard';
import PlayerCard from '@/components/dashboard/PlayerCard';

export default function Dashboard() {
    return (
        <div className="grid grid-cols-4 grid-rows-[0.25fr_1fr_1fr_1fr] gap-2" id="mainContent">
            {/* Game Statistics Summary */}
            <GameStats />
            
            {/* Statistics Chart */}
            <div className="col-span-2 row-span-1 bg-[#1E2934] rounded-[40px] gap-2" id="statistic">
                <StatisticsChart />
            </div>
            
            {/* Calendar */}
            <div className=" col-span-1 row-span-1 bg-[#1E2934] overflow-visible rounded-[40px] items-center flex justify-center text-xl" id="cal">
                <CalendarWidget />
            </div>
            
            {/* Achievements */}
            <div className="col-span-1 row-span-3 rounded-[40px] overflow-hidden" id="graph">
                <AchievementsList />
            </div>
            
            {/* Leaderboard */}
            <div className=" col-span-2 row-span-2 overflow-visible rounded-lg" id="overview">
                <LeaderBoard />
            </div>
            
            {/* Player Card */}
            <div className=" col-span-1 row-span-2 overflow-visible rounded-[40px]" id="card">
                <PlayerCard />
            </div>
        </div>
    );
}