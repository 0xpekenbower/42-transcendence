'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Avatar from "@/3DModules/Avatar";

interface ProfileStats {
  wins: number;
  losses: number;
  winRate: string;
  currentRank: string;
  currentLevel: number;
  achievements: string[];
}

interface UserProfile {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  nickname: string;
  profilePicture: string;
  aboutMe: string;
  title: string;
  selectedModel: string;
  selectedAnimation: string;
  stats: ProfileStats;
  coins: number;
  isCurrentUser: boolean;
}

const modelOptions = ['Default', 'Warrior', 'Mage', 'Rogue'];
const animationOptions = ['Idle', 'Wave', 'Dance', 'Victory'];

export default function ProfilePage() {
  const [profile, setProfile] = useState<UserProfile>({
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    nickname: 'JD',
    profilePicture: '/default-avatar.jpg',
    aboutMe: 'Gaming enthusiast and competitive player',
    title: 'Pro Gamer',
    selectedModel: 'Default',
    selectedAnimation: 'Idle',
    stats: {
      wins: 150,
      losses: 50,
      winRate: '75%',
      currentRank: 'Diamond',
      currentLevel: 42,
      achievements: ['First Win', 'Top Player', 'Champion']
    },
    coins: 1500,
    isCurrentUser: true
  });

  const [isEditing, setIsEditing] = useState({
    firstName: false,
    lastName: false,
    aboutMe: false,
    title: false
  });

  const handleEdit = (field: keyof typeof isEditing, value: string) => {
    setProfile(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleModelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setProfile(prev => ({
      ...prev,
      selectedModel: event.target.value
    }));
  };

  const handleAnimationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setProfile(prev => ({
      ...prev,
      selectedAnimation: event.target.value
    }));
  };

  const toggleEdit = (field: keyof typeof isEditing) => {
    setIsEditing(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  return (
    <div className="container mx-auto h-[1600px] p-8">
      <div className="bg-[#1E2934] rounded-xl shadow-lg overflow-hidden">
        {/* Header Section */}
        <div className="relative h-64 bg-gradient-to-r from-blue-500/30 to-purple-500/30">
          <div className="absolute bottom-0 left-8 transform translate-y-1/2">
            <div className="relative">
              <Image
                src={profile.profilePicture}
                alt="Profile"
                width={192}
                height={192}
                className="rounded-full border-8 border-[#1E2934]"
              />
              {profile.isCurrentUser && (
                <label className="absolute bottom-0 right-0 bg-blue-600 p-2.5 rounded-full cursor-pointer">
                  <input type="file" className="hidden" accept="image/*" onChange={(e) => {
                    if (e.target.files?.[0]) {
                      const url = URL.createObjectURL(e.target.files[0]);
                      setProfile(prev => ({...prev, profilePicture: url}));
                    }
                  }} />
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </label>
              )}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-12 pt-32">
          <div className="grid grid-cols-2 gap-12">
            {/* Left Column - User Info */}
            <div>
              <div className="mb-8">
                {isEditing.firstName ? (
                  <input
                    type="text"
                    value={profile.firstName}
                    onChange={(e) => handleEdit('firstName', e.target.value)}
                    onBlur={() => toggleEdit('firstName')}
                    className="bg-[#2A3744] text-white px-4 py-2 rounded text-2xl"
                    autoFocus
                  />
                ) : (
                  <h2 
                    className="text-4xl font-bold text-white cursor-pointer mb-4"
                    onClick={() => profile.isCurrentUser && toggleEdit('firstName')}
                  >
                    {profile.firstName} {profile.lastName}
                  </h2>
                )}
                <p className="text-xl text-gray-400 mb-2">{profile.nickname}</p>
                <p className="text-xl text-gray-400">{profile.email}</p>
              </div>

              <div className="grid grid-cols-3 gap-8 mb-12">
                <div className="bg-[#2A3744] p-6 rounded-xl text-center">
                  <div className="text-4xl font-bold text-white mb-2">{profile.stats.wins}</div>
                  <div className="text-lg text-gray-400">Wins</div>
                </div>
                <div className="bg-[#2A3744] p-6 rounded-xl text-center">
                  <div className="text-4xl font-bold text-white mb-2">{profile.stats.losses}</div>
                  <div className="text-lg text-gray-400">Losses</div>
                </div>
                <div className="bg-[#2A3744] p-6 rounded-xl text-center">
                  <div className="text-4xl font-bold text-white mb-2">{profile.stats.winRate}</div>
                  <div className="text-lg text-gray-400">Win Rate</div>
                </div>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-white mb-4">About Me</h3>
                {isEditing.aboutMe ? (
                  <textarea
                    value={profile.aboutMe}
                    onChange={(e) => handleEdit('aboutMe', e.target.value)}
                    onBlur={() => toggleEdit('aboutMe')}
                    className="bg-[#2A3744] text-white w-full p-4 rounded-xl text-xl h-48"
                    autoFocus
                  />
                ) : (
                  <p 
                    className="text-xl text-gray-400 cursor-pointer"
                    onClick={() => profile.isCurrentUser && toggleEdit('aboutMe')}
                  >
                    {profile.aboutMe}
                  </p>
                )}
              </div>

              <div className="flex flex-wrap gap-4">
                {!profile.isCurrentUser ? (
                  <>
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg">Send Message</button>
                    <button className="bg-green-600 text-white px-6 py-3 rounded-xl text-lg">Add Friend</button>
                    <button className="bg-red-600 text-white px-6 py-3 rounded-xl text-lg">Block</button>
                    <button className="bg-gray-600 text-white px-6 py-3 rounded-xl text-lg">Report</button>
                  </>
                ) : (
                  <button className="bg-red-600 text-white px-6 py-3 rounded-xl text-lg">Delete Account</button>
                )}
              </div>
            </div>

            {/* Right Column - 3D Model and Additional Info */}
            <div>
              <div className="bg-[#2A3744] h-[800px] rounded-xl mb-8 overflow-hidden">
                <Canvas
                  camera={{ position: [0.25, 2, 10], fov: 20, zoom: 1 }}
                >
                  <ambientLight intensity={1.0} />
                  <directionalLight intensity={1.0} position={[5, 10, 5]} />
                  <Environment preset="sunset" />
                  <Avatar />
                </Canvas>
              </div>

              <div className="grid grid-cols-2 gap-8 mb-8">
                <select 
                  className="bg-[#2A3744] text-white rounded-xl p-4 text-xl"
                  value={profile.selectedModel}
                  onChange={handleModelChange}
                >
                  {modelOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
                <select 
                  className="bg-[#2A3744] text-white rounded-xl p-4 text-xl"
                  value={profile.selectedAnimation}
                  onChange={handleAnimationChange}
                >
                  {animationOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              {profile.isCurrentUser && (
                <div className="bg-[#2A3744] p-8 rounded-xl">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl text-white">Coins</span>
                    <span className="text-3xl text-yellow-400 font-bold">{profile.coins}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}