'use client';
import React from 'react';
import { GameWin, GameLosses, MatchPlayed } from '@/icons/icons';

export default function GameStats() {
  return (
    <div className="grid col-span-4 grid-flow-col-dense my-auto" id="uman">
      <div className="items-center mx-auto" id="win">
        <GameWin className='overflow-visible' />
      </div>
      <div className="items-center mx-auto" id="lose">
        <GameLosses className='overflow-visible' />
      </div>
      <div className="items-center mx-auto" id="total">
        <MatchPlayed className='overflow-visible' />
      </div>
    </div>
  );
} 