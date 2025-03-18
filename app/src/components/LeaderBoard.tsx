"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp, ArrowUpDown } from "lucide-react";
import { BronzeClass, SilverClass, GoldClass } from "@/icons/leaderboardIcons";
import { IronBd, BronzeBd, SelverBd, GoldeBd, MythicBd } from "@/icons/Badges";

type RankTier = "Iron" | "Bronze" | "Silver" | "Gold" | "Mythic";

type Player = {
  id: number;
  username: string;
  Classement: number;
  rankTier: RankTier;
  level: number;
  exp: number;
  score: number;
  wins: number;
  losses: number;
  avatar?: string;
  winRate?: number;
  totalGames?: number;
  achievementsProgress: number;
};

type SortField = "Classement" | "score" | "wins" | "losses" | "winRate" | "totalGames" | "level" | "exp" | "achievementsProgress" | "rankTier";
type SortDirection = "asc" | "desc";

export function LeaderBoard() {
  // State for sorting
  const [sortField, setSortField] = useState<SortField>("Classement");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");

  // Sample leaderboard data with new fields
  const leaderboardData: Player[] = [
    { id: 1, username: "Champion123", Classement: 1, rankTier: "Iron", level: 25, exp: 9500, score: 9850, wins: 42, losses: 8, avatar: "/avatars/player1.png", achievementsProgress: 85 },
    { id: 2, username: "PingPongMaster", Classement: 2, rankTier: "Gold", level: 22, exp: 8900, score: 9340, wins: 38, losses: 12, avatar: "/avatars/player2.png", achievementsProgress: 78 },
    { id: 3, username: "TableTennisKing", Classement: 3, rankTier: "Silver", level: 20, exp: 8200, score: 8920, wins: 36, losses: 15, avatar: "/avatars/player3.png", achievementsProgress: 72 },
    { id: 4, username: "PaddlePro", Classement: 4, rankTier: "Silver", level: 18, exp: 7800, score: 8450, wins: 33, losses: 17, achievementsProgress: 65 },
    { id: 5, username: "SpinMaster", Classement: 5, rankTier: "Silver", level: 17, exp: 7500, score: 8120, wins: 31, losses: 19, achievementsProgress: 60 },
    { id: 6, username: "RallyChamp", Classement: 6, rankTier: "Silver", level: 16, exp: 7200, score: 7890, wins: 29, losses: 21, achievementsProgress: 55 },
    { id: 7, username: "ServeExpert", Classement: 7, rankTier: "Bronze", level: 15, exp: 6800, score: 7650, wins: 27, losses: 23, achievementsProgress: 50 },
    { id: 8, username: "SmashKing", Classement: 8, rankTier: "Bronze", level: 14, exp: 6500, score: 7320, wins: 25, losses: 25, achievementsProgress: 45 },
    { id: 9, username: "BackspinPro", Classement: 9, rankTier: "Bronze", level: 13, exp: 6200, score: 7100, wins: 23, losses: 27, achievementsProgress: 40 },
    { id: 10, username: "VolleyMaster", Classement: 10, rankTier: "Bronze", level: 12, exp: 5900, score: 6950, wins: 21, losses: 29, achievementsProgress: 35 },
    { id: 11, username: "TopSpin", Classement: 11, rankTier: "Bronze", level: 11, exp: 5600, score: 6800, wins: 20, losses: 30, achievementsProgress: 30 },
    { id: 12, username: "SliceKing", Classement: 12, rankTier: "Bronze", level: 10, exp: 5300, score: 6650, wins: 19, losses: 31, achievementsProgress: 25 },
    { id: 13, username: "LoopMaster", Classement: 13, rankTier: "Bronze", level: 9, exp: 5000, score: 6500, wins: 18, losses: 32, achievementsProgress: 20 },
    { id: 14, username: "BlockPro", Classement: 14, rankTier: "Bronze", level: 8, exp: 4700, score: 6350, wins: 17, losses: 33, achievementsProgress: 15 },
    { id: 15, username: "aelmrabe", Classement: 15, rankTier: "Mythic", level: 10, exp: 4000, score: 6200, wins: 100, losses: 10, achievementsProgress: 60 },
  ];

  // Calculate win rate percentage for each player
  const playersWithStats = leaderboardData.map(player => {
    const totalGames = player.wins + player.losses;
    const winRate = totalGames > 0 ? Math.round((player.wins / totalGames) * 100) : 0;
    return { ...player, winRate, totalGames };
  });

  // Helper function to get rank icon based on player rank tier
  const getRankIcon = (rankTier: RankTier) => {
    switch (rankTier) {
      case "Iron":
        return <IronBd className="w-16 h-16" />;
      case "Bronze":
        return <BronzeBd className="w-16 h-16" />;
      case "Silver":
        return <SelverBd className="w-16 h-16" />;
      case "Gold":
        return <GoldeBd className="w-16 h-16" />;
      case "Mythic":
        return <MythicBd className="w-16 h-16" />;
      default:
        return <IronBd className="w-16 h-16" />;
    }
  };

  // Helper function to get tier rank value for sorting
  const getTierRankValue = (tier: RankTier): number => {
    switch (tier) {
      case "Iron": return 1;
      case "Bronze": return 2;
      case "Silver": return 3;
      case "Gold": return 4;
      case "Mythic": return 5;
      default: return 0;
    }
  };

  // Handle sort click
  const handleSort = (field: SortField) => {
    if (sortField === field) {
      // Toggle direction if same field
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      // Set new field and default direction
      setSortField(field);
      setSortDirection("desc"); // Default to descending for most fields
    }
  };

  // Get sort icon
  const getSortIcon = (field: SortField) => {
    if (sortField !== field) {
      return <ArrowUpDown className="h-4 w-4 inline ml-1 text-gray-500" />;
    }
    return sortDirection === "asc" ? 
      <ChevronUp className="h-4 w-4 inline ml-1 text-blue-400" /> : 
      <ChevronDown className="h-4 w-4 inline ml-1 text-blue-400" />;
  };

  // Sort players
  const sortedPlayers = [...playersWithStats].sort((a, b) => {
    let comparison = 0;
    
    switch (sortField) {
      case "Classement":
        comparison = a.Classement - b.Classement;
        break;
      case "score":
        comparison = a.score - b.score;
        break;
      case "wins":
        comparison = a.wins - b.wins;
        break;
      case "losses":
        comparison = a.losses - b.losses;
        break;
      case "winRate":
        comparison = (a.winRate || 0) - (b.winRate || 0);
        break;
      case "totalGames":
        comparison = (a.totalGames || 0) - (b.totalGames || 0);
        break;
      case "level":
        comparison = a.level - b.level;
        break;
      case "exp":
        comparison = a.exp - b.exp;
        break;
      case "achievementsProgress":
        comparison = a.achievementsProgress - b.achievementsProgress;
        break;
      case "rankTier":
        comparison = getTierRankValue(a.rankTier) - getTierRankValue(b.rankTier);
        break;
      default:
        comparison = 0;
    }
    
    return sortDirection === "asc" ? comparison : -comparison;
  });

  return (
    <div className="w-full h-full rounded-[40px] overflow-hidden flex flex-col">
      {/* Fixed header section */}
      <div className="bg-[#0A1622] p-4 flex justify-between items-center sticky top-0 z-10">
        <h2 className="text-xl font-bold text-white">Leaderboard Rankings</h2>
        <div className="text-sm text-gray-400">
          <span className="mr-4">Total Players: {leaderboardData.length}</span>
          <span>Updated: {new Date().toLocaleDateString()}</span>
        </div>
      </div>
      
      {/* Fixed table header with sorting */}
      <div className="grid grid-cols-12 gap-2 p-3 border-b border-gray-700 text-gray-400 text-sm font-medium bg-[#1E2934] sticky top-[60px] z-10">
        <div 
          className="col-span-1 text-center cursor-pointer hover:text-white transition-colors"
          onClick={() => handleSort("Classement")}
        >
          Rank {getSortIcon("Classement")}
        </div>
        <div className="col-span-2">Player</div>
        <div 
          className="col-span-1 text-center cursor-pointer hover:text-white transition-colors"
          onClick={() => handleSort("rankTier")}
        >
          Tier {getSortIcon("rankTier")}
        </div>
        <div 
          className="col-span-1 text-center cursor-pointer hover:text-white transition-colors"
          onClick={() => handleSort("level")}
        >
          Level {getSortIcon("level")}
        </div>
        <div 
          className="col-span-1 text-center cursor-pointer hover:text-white transition-colors"
          onClick={() => handleSort("exp")}
        >
          Exp {getSortIcon("exp")}
        </div>
        <div 
          className="col-span-1 text-center cursor-pointer hover:text-white transition-colors"
          onClick={() => handleSort("score")}
        >
          Score {getSortIcon("score")}
        </div>
        <div className="col-span-1 text-center flex justify-center space-x-2">
          <span 
            className="cursor-pointer hover:text-white transition-colors"
            onClick={() => handleSort("wins")}
          >
            W {getSortIcon("wins")}
          </span>
          <span>/</span>
          <span 
            className="cursor-pointer hover:text-white transition-colors"
            onClick={() => handleSort("losses")}
          >
            L {getSortIcon("losses")}
          </span>
        </div>
        <div 
          className="col-span-1 text-center cursor-pointer hover:text-white transition-colors"
          onClick={() => handleSort("winRate")}
        >
          Win Rate {getSortIcon("winRate")}
        </div>
        <div 
          className="col-span-1 text-center cursor-pointer hover:text-white transition-colors"
          onClick={() => handleSort("totalGames")}
        >
          Games {getSortIcon("totalGames")}
        </div>
        <div 
          className="col-span-2 text-center cursor-pointer hover:text-white transition-colors"
          onClick={() => handleSort("achievementsProgress")}
        >
          Achievements {getSortIcon("achievementsProgress")}
        </div>
      </div>
      
      {/* Scrollable player rows */}
      <div className="flex-1 overflow-y-auto bg-[#1E2934]/80 no-scrollbar">
        <ul className="divide-y divide-gray-700">
          {sortedPlayers.map((player) => (
            <li key={player.id} className="p-3 hover:bg-[#2E424F] transition-colors">
              <div className="grid grid-cols-12 gap-2 items-center">
                {/* Rank */}
                <div className="col-span-1 flex justify-center">
                  <span className={`flex items-center justify-center w-8 h-8 rounded-full font-bold
                    ${player.Classement === 1 ? 'bg-yellow-500 text-black' : 
                      player.Classement === 2 ? 'bg-gray-300 text-black' : 
                      player.Classement === 3 ? 'bg-amber-700 text-black' : 
                      'bg-[#0A1622] text-gray-300'}`}>
                    {player.Classement}
                  </span>
                </div>
                
                {/* Player info */}
                <div className="col-span-2 flex items-center space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-700 overflow-hidden">
                    {player.avatar ? (
                      <Image src={player.avatar} alt={player.username} width={40} height={40} />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-300 font-bold">
                        {player.username.substring(0, 2)}
                      </div>
                    )}
                  </div>
                  <div className="truncate">
                    <p className="text-white font-medium">{player.username}</p>
                  </div>
                </div>
                
                {/* Rank Tier */}
                <div className="col-span-1 text-center">
                  <div className="flex items-center justify-center space-x-2">
                    <div className="flex items-center">
                      {getRankIcon(player.rankTier)}
                    </div>
                    <p className="text-white font-bold">{player.rankTier}</p>
                  </div>
                </div>
                
                {/* Level */}
                <div className="col-span-1 text-center">
                  <p className="text-white font-bold">{player.level}</p>
                </div>
                
                {/* Experience */}
                <div className="col-span-1 text-center">
                  <p className="text-white">{player.exp}</p>
                </div>
                
                {/* Score */}
                <div className="col-span-1 text-center">
                  <p className="text-white font-bold">{player.score}</p>
                </div>
                
                {/* Win/Loss */}
                <div className="col-span-1 text-center">
                  <p className="text-sm">
                    <span className="text-green-400">{player.wins}W</span>
                    <span className="mx-1">-</span>
                    <span className="text-red-400">{player.losses}L</span>
                  </p>
                </div>
                
                {/* Win Rate */}
                <div className="col-span-1 text-center">
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-blue-500 h-2.5 rounded-full" 
                      style={{ width: `${player.winRate}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-300 mt-1">{player.winRate}%</p>
                </div>
                
                {/* Total Games */}
                <div className="col-span-1 text-center text-gray-300">
                  {player.totalGames}
                </div>
                
                {/* Achievements Progress */}
                <div className="col-span-2 text-center">
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-green-500 h-2.5 rounded-full" 
                      style={{ width: `${player.achievementsProgress}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-300 mt-1">{player.achievementsProgress}%</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


/*
    Classement  Player    Rank    Level  Exp   Wins   Losses  Win Rate  TotalGames  AchievementsProgress 
    #1          aelmrabe  Bronze  10     4000  100     10       98%        110             60%
  


*/