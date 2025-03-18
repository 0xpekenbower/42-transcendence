'use client';
import React, { useState } from 'react';
import { format } from 'date-fns';
import Calendar from '@/components/Calendar';

interface DashboardCalendarProps {
  onDateChange?: (date: Date | undefined) => void;
}

export default function DashboardCalendar({ onDateChange }: DashboardCalendarProps) {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  
  const handleDateSelect = (newDate: Date | undefined) => {
    setDate(newDate);
    setShowCalendar(false);
    if (onDateChange) {
      onDateChange(newDate);
    }
  };

  const handleQuickSelect = (days: number) => {
    const newDate = new Date();
    newDate.setDate(newDate.getDate() + days);
    handleDateSelect(newDate);
  };

  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-4 bg-gradient-to-b from-[#1E2934] to-[#1a232d]">
      <div className="text-white text-2xl font-medium mb-6 text-center bg-[#2A3744] px-6 py-3 rounded-xl shadow-md w-full max-w-[280px]">
        {date ? format(date, 'MMMM d, yyyy') : 'Select a date'}
      </div>
      
      <div className="flex flex-wrap gap-3 justify-center mb-6 w-full max-w-[280px]">
        <button 
          onClick={() => handleQuickSelect(0)} 
          className="flex-1 px-3 py-3 bg-[#2E424F] hover:bg-[#415d70] text-white rounded-xl text-sm transition-colors shadow-md"
        >
          Today
        </button>
        <button 
          onClick={() => handleQuickSelect(1)} 
          className="flex-1 px-3 py-3 bg-[#2E424F] hover:bg-[#415d70] text-white rounded-xl text-sm transition-colors shadow-md"
        >
          Tomorrow
        </button>
        <button 
          onClick={() => handleQuickSelect(7)} 
          className="flex-1 px-3 py-3 bg-[#2E424F] hover:bg-[#415d70] text-white rounded-xl text-sm transition-colors shadow-md"
        >
          Next Week
        </button>
      </div>
      
      <button 
        onClick={() => setShowCalendar(!showCalendar)} 
        className="px-6 py-3 bg-gradient-to-r from-[#3E586D] to-[#2E424F] hover:from-[#415d70] hover:to-[#364f5d] text-white rounded-xl text-sm mb-6 transition-colors shadow-md w-full max-w-[280px]"
      >
        {showCalendar ? 'Hide Calendar' : 'Pick a Date'}
      </button>
      
      {showCalendar ? (
        <div className="w-full max-w-[300px] transition-all duration-300 ease-in-out transform scale-100 opacity-100">
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleDateSelect}
            className="rounded-xl border border-[#415d70] bg-[#2A3744] text-white shadow-lg"
          />
        </div>
      ) : null}
    </div>
  );
} 