'use client';

import React from 'react'
import Link from 'next/link';
import {Ihome, Ichat, Ifriends, Igame, Irank, Ihistroy, Isettings} from '@/icons/icons'
import { FaStore } from 'react-icons/fa';

const navigation = [
    {name: 'Home', href: '/dashboard', icon:Ihome },
    {name: 'Chat', href: '/chat', icon:Ichat },
    {name: 'Friends', href: '/friends', icon:Ifriends },
    {name: 'Game', href: '/game', icon:Igame },
    {name: 'Rank', href: '/rank', icon:Irank },
    {name: 'Store', href: '/store', icon: FaStore },
    {name: 'History', href: '/histroy', icon:Ihistroy },
    {name: 'Settings', href: '/settings', icon:Isettings }
];

export default function Sidebar(){
    return (
          <div className="fixed w-[100px] h-[40%] top-1/2 -translate-y-1/2 items-center rounded-4xl ml-[30px]  bg-[#2E424F]">
            <div className="flex flex-col h-full justify-between items-center p-4 gap-3 overflow-auto ">
              {navigation.map((item) =>(
                  <Link key={item.name} href={item.href} className=" items-center group">
                    {item.name === 'Store' ? (
                      <item.icon className="text-5xl w-[50px] h-[50px] fill-[#C1C1C1]" />
                    ) : (
                      <item.icon className="text-5xl w-[50px] h-[50px] fill-[#C1C1C1]" />
                    )}
                  </Link>
              ))}
            </div>
          </div>
      );
}
