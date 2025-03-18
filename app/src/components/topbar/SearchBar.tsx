 'use client'
import { BarSearchIcon } from '@/icons/icons'

export default function SearchBar() {
  return (
    <div className="flex items-center justify-start rounded-[25px] w-full sm:w-[300px] md:w-[400px] lg:w-[500px] h-[50px] bg-[#374151] ml-[110px]">
      <BarSearchIcon className='ml-[20px] w-[35px] h-[50px]'/>
      <input 
        type="text" 
        placeholder="Search Here" 
        className="ml-[10px] bg-[#374151] items-center overflow-auto text-lg text-white outline-none"
      />
    </div>
  )
}