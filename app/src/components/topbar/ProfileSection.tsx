'use client'
import Image from 'next/image'
import { CoinsIcon, ExpIcon } from '@/icons/icons';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';

interface ProfileProps {
  profile: {
    exp: number;
    maxExp: number;
    coins: number;
    nickname: string;
    level: number;
    profileImage: string;
  }
}

export default function ProfileSection({ profile }: ProfileProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle clicks outside the dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    }

    // Add event listener when dropdown is shown
    if (showDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    // Clean up the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDropdown]);

  return (
    <div className="flex items-center gap-4">
      {/* Profile Image with Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <div 
          className="w-[80px] h-[80px] rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[3px] cursor-pointer"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <div className="w-full h-full rounded-full overflow-hidden bg-[#2A3744]">
            <Image
              src={profile.profileImage}
              alt="Profile"
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-8 h-8 flex items-center justify-center text-white text-sm font-bold border-2 border-[#1E2934]">
          {profile.level}
        </div>
        
        {/* Profile Dropdown */}
        {showDropdown && (
          <div className="absolute right-0 mt-2 w-[180px] bg-[#2A3744] rounded-xl shadow-lg z-50 overflow-hidden">
            <div className="py-1">
              <Link href="/profile" className="flex items-center px-4 py-3 text-white hover:bg-[#374151] transition-colors">
                <FaUser className="mr-3 text-blue-400" />
                Profile
              </Link>
              <Link href="/settings" className="flex items-center px-4 py-3 text-white hover:bg-[#374151] transition-colors">
                <FaCog className="mr-3 text-gray-400" />
                Settings
              </Link>
              <div className="border-t border-gray-600"></div>
              <button 
                className="flex items-center w-full text-left px-4 py-3 text-red-400 hover:bg-[#374151] transition-colors"
                onClick={() => console.log('Logout clicked')}
              >
                <FaSignOutAlt className="mr-3" />
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
      
      {/* Stats */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <CoinsIcon className="w-8 h-8" />
          <span className="text-white text-2xl font-bold">{profile.coins} Coins</span>
        </div>
        <div className="flex items-center gap-2">
          <ExpIcon className="w-8 h-8" />
            <div className="flex justify-between text-white text-2xl font-bold">
              <span>{profile.exp} Exp</span>
            </div>
        </div>
      </div>
    </div>
  )
} 