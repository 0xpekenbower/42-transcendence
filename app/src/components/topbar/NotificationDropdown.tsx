'use client'

export default function NotificationDropdown() {
  return (
    <div className="absolute right-0 mt-2 w-[300px] sm:w-[400px] bg-[#2A3744] rounded-xl shadow-lg z-50 overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-600">
        <h3 className="text-xl font-semibold text-white">Notifications</h3>
      </div>
      
      {/* Notification List */}
      <div className="max-h-[300px] sm:max-h-[400px] overflow-y-auto">
        {/* Sample notifications */}
        <div className="px-6 py-4 border-b border-gray-600 hover:bg-[#374151] transition-colors">
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center">
              <span className="text-white">W</span>
            </div>
            <div>
              <p className="text-white font-medium">Won a Match!</p>
              <p className="text-gray-400 text-sm">You won against Player123</p>
              <p className="text-gray-500 text-xs mt-1">2 hours ago</p>
            </div>
          </div>
        </div>

        <div className="px-6 py-4 border-b border-gray-600 hover:bg-[#374151] transition-colors">
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center">
              <span className="text-white">F</span>
            </div>
            <div>
              <p className="text-white font-medium">New Friend Request</p>
              <p className="text-gray-400 text-sm">Player456 wants to be friends</p>
              <p className="text-gray-500 text-xs mt-1">5 hours ago</p>
            </div>
          </div>
        </div>

        <div className="px-6 py-4 border-b border-gray-600 hover:bg-[#374151] transition-colors">
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 rounded-full bg-purple-500 flex items-center justify-center">
              <span className="text-white">A</span>
            </div>
            <div>
              <p className="text-white font-medium">Achievement Unlocked!</p>
              <p className="text-gray-400 text-sm">You earned "First Blood"</p>
              <p className="text-gray-500 text-xs mt-1">1 day ago</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 bg-[#374151]">
        <button className="text-blue-400 hover:text-blue-300 text-sm font-medium w-full text-center">
          View All Notifications
        </button>
      </div>
    </div>
  )
} 