'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Avatar from "@/3DModules/Avatar";

interface SettingsFormData {
  firstName: string;
  lastName: string;
  nickname: string;
  email: string;
  bio: string;
  profilePicture: string;
  avatarModel: string;
  avatarAnimation: string;
  titleString: string;
  backgroundImage: string;
  cardBorderDesign: string;
  stats: {
    wins: number;
    losses: number;
    winRate: string;
    achievements: string[];
    currentRank: string;
    currentLevel: number;
  }
}

const modelOptions = ['Default', 'Warrior', 'Mage', 'Rogue'];
const animationOptions = ['Idle', 'Wave', 'Dance', 'Victory'];
const borderDesigns = ['Default', 'Gold', 'Diamond', 'Premium'];

export default function SettingsPage() {
  const [formData, setFormData] = useState<SettingsFormData>({
    firstName: 'John',
    lastName: 'Doe',
    nickname: 'JD',
    email: 'john@example.com',
    bio: 'Gaming enthusiast and competitive player',
    profilePicture: '/default-avatar.jpg',
    avatarModel: 'Default',
    avatarAnimation: 'Idle',
    titleString: 'Pro Gamer',
    backgroundImage: '/default-bg.jpg',
    cardBorderDesign: 'Default',
    stats: {
      wins: 150,
      losses: 50,
      winRate: '75%',
      achievements: ['First Win', 'Top Player', 'Champion'],
      currentRank: 'Diamond',
      currentLevel: 42
    }
  });

  return (
    <div className="mx-auto w-full h-full overflow-hidden p-8 md:p-10 2xl:p-12">
      <div className="mx-auto w-full max-w-[3000px]">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-4xl font-bold text-dark dark:text-white">Settings</h1>
          <nav>
            <ol className="flex items-center gap-3 text-xl font-medium">
              <li>Dashboard</li>
              <li aria-hidden="true" role="presentation">/</li>
              <li className="text-primary">Settings</li>
            </ol>
          </nav>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-12 gap-12">
          {/* Personal Information Section */}
          <div className="col-span-6">
            <div className="rounded-2xl border-2 border-stroke bg-white shadow-xl dark:border-dark-3 dark:bg-[#1E2934] mb-12">
              <div className="border-b-2 border-stroke px-10 py-6 dark:border-dark-3">
                <h3 className="text-2xl font-medium text-dark dark:text-white">Personal Information</h3>
              </div>
              
              <div className="p-10">
                <form className="space-y-8">
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <label className="mb-4 block text-lg font-medium dark:text-white">First Name</label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        className="w-full rounded-xl border-2 border-stroke bg-[#2A3744] py-4 px-6 text-lg text-white"
                      />
                    </div>
                    <div>
                      <label className="mb-4 block text-lg font-medium dark:text-white">Last Name</label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        className="w-full rounded-xl border-2 border-stroke bg-[#2A3744] py-4 px-6 text-lg text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-4 block text-lg font-medium dark:text-white">Nickname</label>
                    <input
                      type="text"
                      value={formData.nickname}
                      onChange={(e) => setFormData({...formData, nickname: e.target.value})}
                      className="w-full rounded-xl border-2 border-stroke bg-[#2A3744] py-4 px-6 text-lg text-white"
                    />
                  </div>

                  <div>
                    <label className="mb-4 block text-lg font-medium dark:text-white">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full rounded-xl border-2 border-stroke bg-[#2A3744] py-4 px-6 text-lg text-white"
                    />
                  </div>

                  <div>
                    <label className="mb-4 block text-lg font-medium dark:text-white">Bio</label>
                    <textarea
                      value={formData.bio}
                      onChange={(e) => setFormData({...formData, bio: e.target.value})}
                      className="w-full rounded-xl border-2 border-stroke bg-[#2A3744] py-4 px-6 text-lg text-white h-40"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Profile Card Settings Section */}
          <div className="col-span-6">
            <div className="rounded-2xl border-2 border-stroke bg-white shadow-xl dark:border-dark-3 dark:bg-[#1E2934] mb-12">
              <div className="border-b-2 border-stroke px-10 py-6 dark:border-dark-3">
                <h3 className="text-2xl font-medium text-dark dark:text-white">Profile Card Settings</h3>
              </div>
              
              <div className="p-10">
                <div className="mb-12 bg-[#2A3744] h-[600px] rounded-xl overflow-hidden">
                  <Canvas camera={{ position: [0.25, 2, 10], fov: 20 }}>
                    <ambientLight intensity={1.0} />
                    <directionalLight intensity={1.0} position={[5, 10, 5]} />
                    <Environment preset="sunset" />
                    <Avatar />
                  </Canvas>
                </div>

                <div className="grid grid-cols-2 gap-8 mb-8">
                  <div>
                    <label className="mb-4 block text-lg font-medium dark:text-white">Avatar Model</label>
                    <select 
                      value={formData.avatarModel}
                      onChange={(e) => setFormData({...formData, avatarModel: e.target.value})}
                      className="w-full rounded-xl border-2 border-stroke bg-[#2A3744] py-4 px-6 text-lg text-white"
                    >
                      {modelOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="mb-4 block text-lg font-medium dark:text-white">Animation</label>
                    <select 
                      value={formData.avatarAnimation}
                      onChange={(e) => setFormData({...formData, avatarAnimation: e.target.value})}
                      className="w-full rounded-xl border-2 border-stroke bg-[#2A3744] py-4 px-6 text-lg text-white"
                    >
                      {animationOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <label className="mb-4 block text-lg font-medium dark:text-white">Title</label>
                    <input
                      type="text"
                      value={formData.titleString}
                      onChange={(e) => setFormData({...formData, titleString: e.target.value})}
                      className="w-full rounded-xl border-2 border-stroke bg-[#2A3744] py-4 px-6 text-lg text-white"
                    />
                  </div>

                  <div>
                    <label className="mb-4 block text-lg font-medium dark:text-white">Card Border Design</label>
                    <select 
                      value={formData.cardBorderDesign}
                      onChange={(e) => setFormData({...formData, cardBorderDesign: e.target.value})}
                      className="w-full rounded-xl border-2 border-stroke bg-[#2A3744] py-4 px-6 text-lg text-white"
                    >
                      {borderDesigns.map(design => (
                        <option key={design} value={design}>{design}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Display Section */}
            <div className="rounded-2xl border-2 border-stroke bg-white shadow-xl dark:border-dark-3 dark:bg-[#1E2934]">
              <div className="border-b-2 border-stroke px-10 py-6 dark:border-dark-3">
                <h3 className="text-2xl font-medium text-dark dark:text-white">Profile Stats</h3>
              </div>
              
              <div className="p-10">
                <div className="grid grid-cols-3 gap-8 mb-8">
                  <div className="bg-[#2A3744] p-6 rounded-xl">
                    <div className="text-lg text-gray-400">Wins</div>
                    <div className="text-3xl text-white">{formData.stats.wins}</div>
                  </div>
                  <div className="bg-[#2A3744] p-6 rounded-xl">
                    <div className="text-lg text-gray-400">Losses</div>
                    <div className="text-3xl text-white">{formData.stats.losses}</div>
                  </div>
                  <div className="bg-[#2A3744] p-6 rounded-xl">
                    <div className="text-lg text-gray-400">Win Rate</div>
                    <div className="text-3xl text-white">{formData.stats.winRate}</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div className="bg-[#2A3744] p-6 rounded-xl">
                    <div className="text-lg text-gray-400">Current Rank</div>
                    <div className="text-3xl text-white">{formData.stats.currentRank}</div>
                  </div>
                  <div className="bg-[#2A3744] p-6 rounded-xl">
                    <div className="text-lg text-gray-400">Level</div>
                    <div className="text-3xl text-white">{formData.stats.currentLevel}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-6 mt-12">
          <button
            className="flex justify-center rounded-xl border-2 border-stroke px-10 py-4 text-lg font-medium text-dark hover:shadow-xl dark:border-dark-3 dark:text-white"
            type="button"
          >
            Cancel
          </button>
          <button
            className="flex justify-center rounded-xl bg-primary px-10 py-4 text-lg font-medium text-white hover:bg-opacity-90"
            type="submit"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}


/*
  Personal Information{
    FirstName
    LastName
    Nickname
    Email
    Bio
    Profile Picture
  }
  ProfileCard Information{
    Avatar Model
    Avatar Animation
    Tile String 
    Background Image
    Card Border Margin Design
  }
  ProfileCard Stats{
    Wins
    Losses
    Win Rate
    Achievede Icons (Array of Icons Achieved by User in Achievements List)
    Current Rank Badge And Name of Rank
    Current Level 
  }
*/





