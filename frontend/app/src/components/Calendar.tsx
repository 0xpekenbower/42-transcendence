"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CalendarProps {
  mode?: "single" | "range";
  selected?: Date;
  onSelect?: (date: Date) => void;
  numberOfMonths?: number;
  className?: string;
}

export default function Calendar({
  mode = "single",
  selected,
  onSelect,
  numberOfMonths = 3,
  className = "",
}: CalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [hoveredDate, setHoveredDate] = useState<Date | null>(null);
  const [monthsPerRow, setMonthsPerRow] = useState(3);
  
  // Calculate how many months to show per row based on container width
  useEffect(() => {
    // Set months per row based on available width
    // For 890px width, we can fit 3 months comfortably
    setMonthsPerRow(3);
  }, []);

  // Get days in month
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Get day of week for first day of month (0 = Sunday, 1 = Monday, etc.)
  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  // Format date as YYYY-MM-DD
  const formatDate = (date: Date) => {
    return date.toISOString().split("T")[0];
  };

  // Check if a date is selected
  const isSelected = (date: Date) => {
    if (!selected) return false;
    return formatDate(date) === formatDate(selected);
  };

  // Check if a date is today
  const isToday = (date: Date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  // Navigate to previous month
  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - monthsPerRow, 1));
  };

  // Navigate to next month
  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + monthsPerRow, 1));
  };

  // Handle date selection
  const handleDateClick = (date: Date) => {
    if (onSelect) {
      onSelect(date);
    }
  };

  // Generate calendar grid
  const renderCalendarMonth = (monthOffset = 0) => {
    const month = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + monthOffset, 1);
    const year = month.getFullYear();
    const monthIndex = month.getMonth();
    const daysInMonth = getDaysInMonth(year, monthIndex);
    const firstDayOfMonth = getFirstDayOfMonth(year, monthIndex);
    
    const monthName = month.toLocaleString('default', { month: 'long' });
    
    // Create array for days of the week
    const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    
    // Create array for calendar days
    const calendarDays = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      calendarDays.push(<div key={`empty-${i}`} className="h-7 w-7"></div>);
    }
    
    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, monthIndex, day);
      const isDateSelected = isSelected(date);
      const isDateToday = isToday(date);
      
      calendarDays.push(
        <div
          key={`day-${day}`}
          className={`h-7 w-7 flex items-center justify-center cursor-pointer transition-all text-sm border border-gray-700
            ${isDateSelected ? 'bg-blue-500 text-white font-bold shadow-md' : 'hover:bg-gray-700/50'}
            ${isDateToday && !isDateSelected ? 'border border-blue-400 text-blue-400 font-semibold' : ''}
          `}
          onClick={() => handleDateClick(date)}
          onMouseEnter={() => setHoveredDate(date)}
          onMouseLeave={() => setHoveredDate(null)}
        >
          {day}
        </div>
      );
    }
    
    // Calculate remaining cells to make all months have the same number of rows
    // Most months will need 6 rows (42 cells) to display properly
    const totalCells = 42; // 6 rows × 7 days
    const remainingCells = totalCells - (firstDayOfMonth + daysInMonth);
    
    // Add empty cells after the last day of the month
    for (let i = 0; i < remainingCells; i++) {
      calendarDays.push(<div key={`empty-end-${i}`} className="h-7 w-7"></div>);
    }
    
    return (
      <div className="calendar-month flex-1 h-full">
        <div className="text-center mb-2 font-medium text-blue-300 text-sm ">
          {monthName} <span className="text-gray-400  mt-4"></span>
        </div>
        
        {/* <div className="w-full h-px bg-gray-700 mb-4"></div> */}
        
        <div className="grid grid-cols-7 gap-2 mb-4 border-[#1E2934] border bg-[#1E2934] rounded-full">
          {daysOfWeek.map((day) => (
            <div key={day} className="h-6 w-7 flex items-center justify-center text-gray-400 text-xs font-medium">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-2 border-[#1E2934] border bg-[#1E2934]">
          {calendarDays}
        </div>
      </div>
    );
  };

  // Create rows of months
  const renderMonthRows = () => {
    const rows = [];
    const totalMonths = numberOfMonths;
    
    for (let i = 0; i < totalMonths; i += monthsPerRow) {
      const monthsInRow = Math.min(monthsPerRow, totalMonths - i);
      
      rows.push(
        <div key={`row-${i}`} className="flex gap-3 w-full mb-3 h-[145px] ">
          {Array.from({ length: monthsInRow }, (_, j) => (
            <div key={j} className="flex-1">
              {renderCalendarMonth(i + j)}
            </div>
          ))}
        </div>
      );
    }
    
    return rows;
  };

  return (
    <div className={`p-3 rounded-lg h-[400px] w-full ${className}`}>
      <div className="flex items-center justify-between mb-3 border-[#1E2934] border bg-[#1E2934] rounded-full p-2  shadow-md">
        <button
          onClick={prevMonth}
          className="p-1 rounded-full hover:bg-[#3A4A5A] transition-colors text-blue-300"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <div className="font-bold text-white text-sm">
          {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })} - 
          {new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 2, 1).toLocaleString('default', { month: 'long', year: 'numeric' })}
        </div>
        <button
          onClick={nextMonth}
          className="p-1 rounded-full hover:bg-[#3A4A5A] transition-colors text-blue-300"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
      
      <div className="overflow-y-auto h-[330px] pr-1 ">
        {renderMonthRows()}
      </div>
    </div>
  );
}