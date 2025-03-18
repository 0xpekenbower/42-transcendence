'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Avatar from "@/3DModules/Avatar";

interface StoreItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'avatar' | 'animation' | 'accessory' | 'background';
  image: string;
  model?: string;
  isOwned: boolean;
  isEquipped: boolean;
}

export default function StorePage() {
  const [activeCategory, setActiveCategory] = useState<'avatar' | 'animation' | 'accessory' | 'background'>('avatar');
  const [selectedItem, setSelectedItem] = useState<StoreItem | null>(null);
  const [userCoins, setUserCoins] = useState(1500);

  // Mock store items data
  const storeItems: StoreItem[] = [
    {
      id: '1',
      name: 'Warrior Avatar',
      description: 'A fierce warrior avatar with battle armor',
      price: 500,
      category: 'avatar',
      image: '/default-avatar.jpg',
      model: 'Warrior',
      isOwned: false,
      isEquipped: false
    },
    {
      id: '2',
      name: 'Mage Avatar',
      description: 'A powerful mage with mystical abilities',
      price: 700,
      category: 'avatar',
      image: '/default-avatar.jpg',
      model: 'Mage',
      isOwned: true,
      isEquipped: false
    },
    {
      id: '3',
      name: 'Victory Dance',
      description: 'Show off your victory with this dance animation',
      price: 300,
      category: 'animation',
      image: '/default-avatar.jpg',
      model: 'Dance',
      isOwned: false,
      isEquipped: false
    },
    {
      id: '4',
      name: 'Golden Crown',
      description: 'A majestic crown for your avatar',
      price: 1000,
      category: 'accessory',
      image: '/default-avatar.jpg',
      isOwned: false,
      isEquipped: false
    },
    {
      id: '5',
      name: 'Space Background',
      description: 'A cosmic background for your profile',
      price: 800,
      category: 'background',
      image: '/default-avatar.jpg',
      isOwned: false,
      isEquipped: false
    },
    {
      id: '6',
      name: 'Wave Animation',
      description: 'A friendly wave animation',
      price: 250,
      category: 'animation',
      image: '/default-avatar.jpg',
      model: 'Wave',
      isOwned: false,
      isEquipped: false
    },
  ];

  const filteredItems = storeItems.filter(item => item.category === activeCategory);

  const handlePurchase = (item: StoreItem) => {
    if (userCoins >= item.price && !item.isOwned) {
      setUserCoins(userCoins - item.price);
      const updatedItems = storeItems.map(storeItem => 
        storeItem.id === item.id ? { ...storeItem, isOwned: true } : storeItem
      );
      setSelectedItem({ ...item, isOwned: true });
    }
  };

  const handleEquip = (item: StoreItem) => {
    if (item.isOwned) {
      const updatedItems = storeItems.map(storeItem => 
        storeItem.category === item.category 
          ? { ...storeItem, isEquipped: storeItem.id === item.id }
          : storeItem
      );
      setSelectedItem({ ...item, isEquipped: true });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Header */}
        <div className="col-span-1 md:col-span-3 bg-[#1E2934] rounded-2xl p-6 shadow-lg">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-white">Store</h1>
              <p className="text-gray-400">Customize your avatar and profile</p>
            </div>
            <div className="bg-[#2A3744] px-6 py-3 rounded-xl flex items-center">
              <span className="text-yellow-400 font-bold text-xl mr-2">{userCoins}</span>
              <span className="text-white">Coins</span>
            </div>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="col-span-1 md:col-span-3 bg-[#1E2934] rounded-2xl p-4 shadow-lg">
          <div className="flex space-x-4 overflow-x-auto">
            <button 
              className={`px-6 py-3 rounded-xl text-white font-medium ${activeCategory === 'avatar' ? 'bg-blue-600' : 'bg-[#2A3744]'}`}
              onClick={() => setActiveCategory('avatar')}
            >
              Avatars
            </button>
            <button 
              className={`px-6 py-3 rounded-xl text-white font-medium ${activeCategory === 'animation' ? 'bg-blue-600' : 'bg-[#2A3744]'}`}
              onClick={() => setActiveCategory('animation')}
            >
              Animations
            </button>
            <button 
              className={`px-6 py-3 rounded-xl text-white font-medium ${activeCategory === 'accessory' ? 'bg-blue-600' : 'bg-[#2A3744]'}`}
              onClick={() => setActiveCategory('accessory')}
            >
              Accessories
            </button>
            <button 
              className={`px-6 py-3 rounded-xl text-white font-medium ${activeCategory === 'background' ? 'bg-blue-600' : 'bg-[#2A3744]'}`}
              onClick={() => setActiveCategory('background')}
            >
              Backgrounds
            </button>
          </div>
        </div>

        {/* Store Items Grid */}
        <div className="col-span-1 md:col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className={`bg-[#1E2934] rounded-xl overflow-hidden shadow-lg cursor-pointer transition-transform hover:scale-105 ${selectedItem?.id === item.id ? 'ring-2 ring-blue-500' : ''}`}
                onClick={() => setSelectedItem(item)}
              >
                <div className="h-40 bg-[#2A3744] relative">
                  <Image 
                    src={item.image} 
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-bold text-white">{item.name}</h3>
                    <div className="flex items-center">
                      <span className="text-yellow-400 font-bold">{item.price}</span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    {item.isOwned ? (
                      <span className="text-green-500 text-sm">Owned</span>
                    ) : (
                      <span className="text-blue-400 text-sm">Available</span>
                    )}
                    {item.isEquipped && (
                      <span className="text-purple-500 text-sm">Equipped</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Item Preview and Purchase */}
        <div className="col-span-1">
          <div className="bg-[#1E2934] rounded-xl shadow-lg overflow-hidden h-full">
            {selectedItem ? (
              <div className="flex flex-col h-full">
                <div className="h-[400px] bg-[#2A3744] relative">
                  <Canvas
                    camera={{ position: [0.25, 2, 10], fov: 20, zoom: 1 }}
                  >
                    <ambientLight intensity={1.0} />
                    <directionalLight intensity={1.0} position={[5, 10, 5]} />
                    <Environment preset="sunset" />
                    <Avatar />
                  </Canvas>
                </div>
                <div className="p-6 flex-grow">
                  <h2 className="text-xl font-bold text-white mb-2">{selectedItem.name}</h2>
                  <p className="text-gray-400 mb-4">{selectedItem.description}</p>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-white">Price:</span>
                    <span className="text-yellow-400 font-bold">{selectedItem.price} Coins</span>
                  </div>
                  
                  {selectedItem.isOwned ? (
                    <button 
                      className={`w-full py-3 rounded-xl font-medium ${selectedItem.isEquipped ? 'bg-purple-700 text-white' : 'bg-blue-600 text-white'}`}
                      onClick={() => handleEquip(selectedItem)}
                    >
                      {selectedItem.isEquipped ? 'Equipped' : 'Equip'}
                    </button>
                  ) : (
                    <button 
                      className={`w-full py-3 rounded-xl font-medium ${userCoins >= selectedItem.price ? 'bg-green-600 text-white' : 'bg-gray-600 text-gray-300'}`}
                      onClick={() => handlePurchase(selectedItem)}
                      disabled={userCoins < selectedItem.price}
                    >
                      {userCoins >= selectedItem.price ? 'Purchase' : 'Not Enough Coins'}
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full p-6 text-center">
                <p className="text-gray-400 mb-4">Select an item to preview</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 