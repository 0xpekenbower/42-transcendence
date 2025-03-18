'use client';
import React from 'react';
import Calendar from '@/components/Calendar';

export default function CalendarWidget() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      numberOfMonths={3}
      className="items-center text-white self-center place-content-center justify-items-center"
    />
  );
} 