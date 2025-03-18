"use client";

import { useState, useRef, useEffect } from "react";
import { SelverBd, GoldeBd, BronzeBd, MythicBd, IronBd } from '@/icons/Badges';
import { getCookie } from 'cookies-next';

function RankInfo() {
  // Get rank level from cookies
  const [rankLevel, setRankLevel] = useState<string>("Iron"); // Default fallback
  
  useEffect(() => {
    // Get rank from cookies when component mounts
    const userRank = getCookie('rankLevel');
    if (userRank) {
      setRankLevel(String(userRank).toLowerCase());
    }
  }, []);
  
  // Map rank levels to data
  const rankData = {
    iron: {
      currentRank: "Iron",
      currentExp: 0,
      expForNextRank: 1000,
      badge: <IronBd />,
    },
    bronze: {
      currentRank: "Bronze II",
      currentExp: 0,
      expForNextRank: 2000,
      badge: <BronzeBd />,
    },
    silver: {
      currentRank: "Silver II",
      currentExp: 0,
      expForNextRank: 3000,
      badge: <SelverBd />,
    },
    gold: {
      currentRank: "Gold II",
      currentExp: 0,
      expForNextRank: 4000,
      badge: <GoldeBd />,
    },
    mythic: {
      currentRank: "Mythic",
      currentExp: 0,
      expForNextRank: 5000,
      badge: <MythicBd />,
    }
  };
  
  // Use the rank data based on level, fallback to iron if not found
  const currentRankData = rankData[rankLevel as keyof typeof rankData] || rankData.iron;
  
  // Calculate progress percentage
  const progressPercentage = (currentRankData.currentExp / currentRankData.expForNextRank) * 100;
  const remainingExp = currentRankData.expForNextRank - currentRankData.currentExp;

  return (
    <div className="w-full h-full flex items-start">
      <div className="bg-transparent rounded-2xl p-6 w-full h-full flex flex-col">        
        <div className="flex-1 flex flex-col items-start">
          {/* Rank badge */}
          <div className="w-40 h-40 mb-4 relative flex justify-center mx-auto">
          {currentRankData.badge}
          </div>
          
          {/* Rank name */}
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2 justify-center mx-auto">{currentRankData.currentRank}</h2>
          
          {/* Progress bar */}
          <div className="w-full mt-4">
            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
              <span>Current Rank Progress</span>
              <span>{Math.round(progressPercentage)}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
              <div 
                className={`h-3 rounded-full transition-all duration-500 ${
                  rankLevel === 'iron' ? 'bg-gradient-to-r from-gray-400 to-gray-300' :
                  rankLevel === 'bronze' ? 'bg-gradient-to-r from-amber-700 to-amber-500' :
                  rankLevel === 'silver' ? 'bg-gradient-to-r from-gray-400 to-gray-300' :
                  rankLevel === 'gold' ? 'bg-gradient-to-r from-yellow-500 to-amber-300' :
                  rankLevel === 'mythic' ? 'bg-gradient-to-r from-purple-600 to-pink-500' :
                  'bg-gradient-to-r from-purple-600 to-pink-500'
                }`}
                style={{ width: `${progressPercentage}%` }}>
              </div>
            </div>
            
            {/* Experience details */}
            <div className="flex justify-between mt-2 text-sm">
              <span className="text-gray-600 dark:text-gray-400">Current EXP: <span className="font-medium">{currentRankData.currentExp}</span></span>
              <span className="text-gray-600 dark:text-gray-400">Needed: <span className="font-medium">{remainingExp}</span></span>
            </div>
          </div>
          <div className="w-full mt-4">
            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
              <span>Achievements Progress</span>
              <span>{Math.round(progressPercentage)}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
              <div 
                className={`h-3 rounded-full transition-all duration-500 ${
                  rankLevel === 'iron' ? 'bg-gradient-to-r from-gray-400 to-gray-300' :
                  rankLevel === 'bronze' ? 'bg-gradient-to-r from-amber-700 to-amber-500' :
                  rankLevel === 'silver' ? 'bg-gradient-to-r from-gray-400 to-gray-300' :
                  rankLevel === 'gold' ? 'bg-gradient-to-r from-yellow-500 to-amber-300' :
                  rankLevel === 'mythic' ? 'bg-gradient-to-r from-purple-600 to-pink-500' :
                  'bg-gradient-to-r from-purple-600 to-pink-500'
                }`}
                style={{ width: `${progressPercentage}%` }}>
              </div>
            </div>
            
            {/* Experience details */}
            <div className="flex justify-between mt-2 text-sm">
              <span className="text-gray-600 dark:text-gray-400">Current EXP: <span className="font-medium">{currentRankData.currentExp}</span></span>
              <span className="text-gray-600 dark:text-gray-400">Needed: <span className="font-medium">{remainingExp}</span></span>
            </div>
          </div>
          <div className=" bg-gray-50 mt-5 w-full dark:bg-gray-700 p-3 rounded-lg border border-gray-100 dark:border-gray-600">
            <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200">Rank Benefits</h4>
            <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
              <li className="flex items-center"><span className="text-green-500 dark:text-green-400 mr-1">✓</span> Access to special challenges</li>
              <li className="flex items-center"><span className="text-green-500 dark:text-green-400 mr-1">✓</span> Bonus experience on weekends</li>
              <li className="flex items-center"><span className="text-green-500 dark:text-green-400 mr-1">✓</span> Custom profile badge</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function LevelInfo() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="bg-transparent rounded-2xl p-6 shadow-xl w-full h-full">
        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">Level Info</h3>
        <p className="text-gray-600 dark:text-gray-400">Card content goes here 2</p>
      </div>
    </div>
  );
}

function AchievementsInfo() {
  const achievements = [
    {
      title: "First Steps",
      description: "Complete your first task",
      completed: true,
      icon: "🏆"
    },
    {
      title: "Consistency",
      description: "Log in for 5 consecutive days",
      completed: false,
      progress: 3,
      total: 5,
      icon: "📅"
    },
    {
      title: "Productivity Master",
      description: "Complete 10 tasks in a single day",
      completed: false,
      progress: 6,
      total: 10,
      icon: "⚡"
    },
    {
      title: "Team Player",
      description: "Collaborate on 3 projects",
      completed: false,
      progress: 1,
      total: 3,
      icon: "👥"
    }
  ];

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="bg-transparent rounded-2xl p-6 shadow-xl w-full h-full overflow-auto scrollbar-hide">
        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">Achievements</h3>
        <div className="space-y-3">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className={`border rounded-lg p-3 transition-colors ${
                achievement.completed 
                  ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800' 
                  : 'hover:bg-gray-50 dark:hover:bg-gray-700 border-gray-200 dark:border-gray-700'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-xl">{achievement.icon}</span>
                <div className="flex-1">
                  <h4 className="font-semibold text-sm text-gray-800 dark:text-gray-200">{achievement.title}</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{achievement.description}</p>
                </div>
                {achievement.completed && (
                  <span className="text-green-500 dark:text-green-400 text-xl">✓</span>
                )}
              </div>
              
              {!achievement.completed && achievement.progress !== undefined && (
                <div className="mt-2">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-blue-500 dark:bg-blue-400 h-2 rounded-full"
                      style={{ width: `${(achievement.progress / achievement.total) * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-right">
                    {achievement.progress}/{achievement.total}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CarouselScene() {
  const [activeIndex, setActiveIndex] = useState(0);
  // const [containerSize, setContainerSize] = useState({ width: 400, height: 600 });
  const containerRef = useRef<HTMLDivElement>(null);
  const cards = [<RankInfo />, <LevelInfo />, <AchievementsInfo />];

  // Handle responsive sizing
  // useEffect(() => {
  //   const handleResize = () => {
  //     if (containerRef.current && containerRef.current.parentElement) {
  //       // Get parent container dimensions to make component responsive
  //       const parentWidth = containerRef.current.parentElement.clientWidth;
        
  //       // Set responsive dimensions based on screen size
  //       if (parentWidth < 640) { // Mobile
  //         setContainerSize({ 
  //           width: Math.min(parentWidth - 32, 400), 
  //           height: 500 
  //         });
  //       } else if (parentWidth < 1024) { // Tablet
  //         setContainerSize({ 
  //           width: Math.min(parentWidth * 0.7, 500), 
  //           height: 550 
  //         });
  //       } else { // Desktop
  //         setContainerSize({ 
  //           width: Math.min(parentWidth * 0.4, 600), 
  //           height: 600 
  //         });
  //       }
  //     }
  //   };

  //   // Initial size calculation
  //   handleResize();
    
  //   // Add event listener for window resize
  //   window.addEventListener('resize', handleResize);
    
  //   // Clean up event listener
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  const handleClick = () => {
    if (activeIndex === 2){
      setActiveIndex(0);
    }else{
      setActiveIndex(activeIndex + 1);
    }
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: activeIndex * containerRef.current.clientHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full flex justify-center justify-items-start items-center p-4">
      <div
        className="relative overflow-hidden rounded-2xl shadow-lg"
        onClick={handleClick}
        ref={containerRef}
        style={{ 
          width: '400px',
          height: '690px',
          maxWidth: '100%'
        }}
      >
        <div
          className="absolute inset-0 transition-transform duration-500"
          style={{ transform: `translateY(-${activeIndex * 100}%)` }}
        >
          {cards.map((card, index) => (
            <div key={index} className="w-full h-full">
              {card}
            </div>
          ))}
        </div>
        
        {/* Navigation dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {cards.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                activeIndex === index 
                  ? 'bg-blue-500 w-4' 
                  : 'bg-gray-300 dark:bg-gray-600'
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex(index);
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </div>
  );
}