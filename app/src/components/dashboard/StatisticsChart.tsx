'use client';
import React, { useState } from 'react';
import dynamic from "next/dynamic";
const StatsGame = dynamic(() => import('@/components/Stats'), { ssr: false });

export default function StatisticsChart() {
  const [chartDropDown, setchartDropDown] = useState(false);
  const [timeDropDown, settimeDropDown] = useState(false);
  const [chartType, setChartType] = useState("BarChart");
  const [TimeFrame, setTimeFrame] = useState("Months");

  const toggleDropdownChart = () => {
    setchartDropDown(!chartDropDown);
  };
  
  const toggleDropdownTime = () => {
    settimeDropDown(!timeDropDown);
  };

  return (
    <div className="flex flex-rows">
      <div className="overflow-visible items-center justify-items-center mt-[50px] ml-[15px]" id="grap">
        <StatsGame width={1640} height={450} type={chartType} time={TimeFrame} />
      </div>
      <div className='flex flex-col gap-16'>
        <div className="justify-items-center items-center top-1/2 -translate-y-1/2 mr-[20px] relative">
          <button
            onClick={toggleDropdownChart}
            className="text-white bg-[#2E424F] hover:bg-[#415d70] font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
            type="button"
          >
            ChartType
            <svg className="w-2.5 h-2.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l4 4 4-4" />
            </svg>
          </button>
          {chartDropDown && (
            <div className="absolute z-10 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-44 dark:bg-gray-700">
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                <li>
                  <button onClick={() => [setChartType("BarChart"), setchartDropDown(false)]} className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Bar Chart
                  </button>
                </li>
                <li>
                  <button onClick={() => [setChartType("LineChart"), setchartDropDown(false)]} className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Line Chart
                  </button>
                </li>
                <li>
                  <button onClick={() => [setChartType("AreaChart"), setchartDropDown(false)]} className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Area Chart
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="justify-items-center items-center mr-[50px] relative">
          <button
            onClick={toggleDropdownTime}
            className="text-white bg-[#2E424F] hover:bg-[#415d70] font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
            type="button"
          >
            TimeFrame
            <svg className="w-2.5 h-2.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l4 4 4-4" />
            </svg>
          </button>
          {timeDropDown && (
            <div className="absolute z-10 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-44 dark:bg-gray-700">
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                <li>
                  <button onClick={() => [setTimeFrame("Weeks"), settimeDropDown(false)]} className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Weeks
                  </button>
                </li>
                <li>
                  <button onClick={() => [setTimeFrame("Months"), settimeDropDown(false)]} className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Months
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 