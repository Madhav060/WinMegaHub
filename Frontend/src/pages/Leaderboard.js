import React, { useState } from 'react';
import { ChevronDown, Trophy, Medal, Award, TrendingUp, TrendingDown, Minus, Calendar, Clock, Users } from 'lucide-react';

const Leaderboard = () => {
  const [timeFilter, setTimeFilter] = useState('Monthly');
  const [tableView, setTableView] = useState('Table View');
  
  // Sample leaderboard data
  const leaderboardData = [
    {
      id: 1,
      name: 'Dianne Russell',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b1e5?w=150&h=150&fit=crop&crop=face',
      meetings: 50,
      totalTime: '40.4 hr',
      previousTime: '38.4 hr',
      change: 2.4,
      trend: 'up'
    },
    {
      id: 2,
      name: 'Marvin McKinney',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      meetings: 45,
      totalTime: '36.2 hr',
      previousTime: '39.5 hr',
      change: -1.2,
      trend: 'down'
    },
    {
      id: 3,
      name: 'Brooklyn Simmons',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      meetings: 40,
      totalTime: '32.4 hr',
      previousTime: '30.4 hr',
      change: 2.0,
      trend: 'up'
    },
    {
      id: 4,
      name: 'Brooklyn Simmons',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      meetings: 36,
      totalTime: '30.0 hr',
      previousTime: '30.0 hr',
      change: 0.0,
      trend: 'same'
    },
    {
      id: 5,
      name: 'Jerome Bell',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      meetings: 28,
      totalTime: '26.6 hr',
      previousTime: '28.2 hr',
      change: -2.4,
      trend: 'down'
    },
    {
      id: 6,
      name: 'Marvin McKinney',
      avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face',
      meetings: 22,
      totalTime: '22.5 hr',
      previousTime: '22.5 hr',
      change: 0.0,
      trend: 'same'
    },
    {
      id: 7,
      name: 'Darlene Robertson',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
      meetings: 18,
      totalTime: '14.4 hr',
      previousTime: '16.0 hr',
      change: -1.5,
      trend: 'down'
    },
    {
      id: 8,
      name: 'Floyd Miles',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face',
      meetings: 16,
      totalTime: '13.4 hr',
      previousTime: '12.4 hr',
      change: 1.0,
      trend: 'up'
    },
    {
      id: 9,
      name: 'Marvin McKinney',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      meetings: 12,
      totalTime: '12.0 hr',
      previousTime: '13.4 hr',
      change: -1.5,
      trend: 'down'
    },
    {
      id: 10,
      name: 'Ronald Richards',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face',
      meetings: 8,
      totalTime: '11.5 hr',
      previousTime: '10.4 hr',
      change: 2.4,
      trend: 'up'
    }
  ];

  // Current user data (sticky at bottom)
  const currentUser = {
    id: 847,
    rank: 847,
    name: 'John Doe',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    meetings: 3,
    totalTime: '2.1 hr',
    previousTime: '1.8 hr',
    change: 0.3,
    trend: 'up'
  };

  const getRankIcon = (position) => {
    if (position === 1) return <Trophy className="w-5 h-5 text-yellow-500" />;
    if (position === 2) return <Medal className="w-5 h-5 text-gray-400" />;
    if (position === 3) return <Award className="w-5 h-5 text-orange-400" />;
    return null;
  };

  const getTrendIcon = (trend, change) => {
    if (trend === 'up') return <TrendingUp className="w-4 h-4 text-green-500" />;
    if (trend === 'down') return <TrendingDown className="w-4 h-4 text-red-500" />;
    return <Minus className="w-4 h-4 text-gray-400" />;
  };

  const getTrendColor = (trend) => {
    if (trend === 'up') return 'text-green-600';
    if (trend === 'down') return 'text-red-600';
    return 'text-gray-500';
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Contest Leaderboard
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Track your performance and compete with other participants
              </p>
            </div>
            
            {/* Stats Cards */}
            <div className="flex gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 px-4 py-3 rounded-lg">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <div>
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">Total Participants</p>
                    <p className="text-lg font-bold text-blue-700 dark:text-blue-300">1,247</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">All Teams</span>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Time Filter */}
              <div className="relative">
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                  <Calendar className="w-4 h-4" />
                  {timeFilter}
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              
              {/* Table View */}
              <div className="relative">
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                  {tableView}
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8 pb-32">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
          {/* Table Header */}
          <div className="bg-gray-50 dark:bg-gray-700/50 px-6 py-4 border-b border-gray-200 dark:border-gray-600">
            <div className="grid grid-cols-12 gap-4 items-center text-sm font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
              <div className="col-span-1">Position</div>
              <div className="col-span-4">Name</div>
              <div className="col-span-2 text-center">No of Meeting</div>
              <div className="col-span-2 text-center">Total Times</div>
              <div className="col-span-2 text-center">Previous Times</div>
              <div className="col-span-1 text-center">Changes</div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {leaderboardData.map((participant, index) => (
              <div key={participant.id} className="px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                <div className="grid grid-cols-12 gap-4 items-center">
                  {/* Position */}
                  <div className="col-span-1">
                    <div className="flex items-center gap-2">
                      {getRankIcon(index + 1)}
                      <span className="text-lg font-bold text-gray-900 dark:text-white">
                        {index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Name */}
                  <div className="col-span-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={participant.avatar}
                        alt={participant.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {participant.name}
                      </span>
                    </div>
                  </div>

                  {/* Meetings */}
                  <div className="col-span-2 text-center">
                    <span className="text-gray-900 dark:text-white font-medium">
                      {participant.meetings}
                    </span>
                  </div>

                  {/* Total Time */}
                  <div className="col-span-2 text-center">
                    <span className="text-gray-900 dark:text-white font-medium">
                      {participant.totalTime}
                    </span>
                  </div>

                  {/* Previous Time */}
                  <div className="col-span-2 text-center">
                    <span className="text-gray-600 dark:text-gray-400">
                      {participant.previousTime}
                    </span>
                  </div>

                  {/* Changes */}
                  <div className="col-span-1 text-center">
                    <div className="flex items-center justify-center gap-1">
                      {getTrendIcon(participant.trend)}
                      <span className={`text-sm font-medium ${getTrendColor(participant.trend)}`}>
                        {participant.change === 0 ? '0.0 hr' : `${Math.abs(participant.change)} hr`}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sticky Current User Position */}
      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t-2 border-blue-500 shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                <span className="text-sm font-bold text-blue-700 dark:text-blue-300">
                  Your Rank: #{currentUser.rank}
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-12 gap-4 items-center flex-1 ml-8">
              {/* Position */}
              <div className="col-span-1">
                <span className="text-lg font-bold text-gray-900 dark:text-white">
                  {currentUser.rank}
                </span>
              </div>

              {/* Name */}
              <div className="col-span-4">
                <div className="flex items-center gap-3">
                  <img
                    src={currentUser.avatar}
                    alt={currentUser.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-blue-500"
                  />
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {currentUser.name} (You)
                  </span>
                </div>
              </div>

              {/* Meetings */}
              <div className="col-span-2 text-center">
                <span className="text-gray-900 dark:text-white font-medium">
                  {currentUser.meetings}
                </span>
              </div>

              {/* Total Time */}
              <div className="col-span-2 text-center">
                <span className="text-gray-900 dark:text-white font-medium">
                  {currentUser.totalTime}
                </span>
              </div>

              {/* Previous Time */}
              <div className="col-span-2 text-center">
                <span className="text-gray-600 dark:text-gray-400">
                  {currentUser.previousTime}
                </span>
              </div>

              {/* Changes */}
              <div className="col-span-1 text-center">
                <div className="flex items-center justify-center gap-1">
                  {getTrendIcon(currentUser.trend)}
                  <span className={`text-sm font-medium ${getTrendColor(currentUser.trend)}`}>
                    {currentUser.change} hr
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;