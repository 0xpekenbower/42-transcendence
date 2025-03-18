'use client'
import { useState, useRef, useEffect } from 'react'
import { BarSearchIcon, Inotif } from '@/icons/icons'
import Image from 'next/image'

// Components
import NotificationDropdown from '@/components/topbar/NotificationDropdown'
import SearchBar from '@/components/topbar/SearchBar'
import ProfileSection from '@/components/topbar/ProfileSection'

interface TopbarProfile {
  exp: number;
  maxExp: number;
  coins: number;
  nickname: string;
  level: number;
  profileImage: string;
}

export default function Topbar() {
  const [showNotifications, setShowNotifications] = useState(false);
  const notificationRef = useRef<HTMLDivElement>(null);
  
  // Mock data - replace with actual user data
  const profile: TopbarProfile = {
    exp: 750,
    maxExp: 1000,
    coins: 1200,
    nickname: "Player123",
    level: 42,
    profileImage: "/default-avatar.jpg"
  };

  // Handle clicks outside the notification dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
    }

    // Add event listener when dropdown is shown
    if (showNotifications) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    // Clean up the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showNotifications]);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 w-full h-[100px] py-10 gap-4" id="header">
      {/* Search Bar */}
      <SearchBar />

      {/* Right Section */}
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 w-full sm:w-auto">
        {/* Notification Icon */}
        <div className="relative" ref={notificationRef}>
          <Inotif 
            className='w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] cursor-pointer'
            onClick={() => setShowNotifications(!showNotifications)}
          />
          {showNotifications && <NotificationDropdown />}
        </div>

        {/* Profile Section */}
        <ProfileSection profile={profile} />
      </div>
    </div>
  )
}
