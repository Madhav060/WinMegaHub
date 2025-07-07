import React, { useState, useEffect } from "react";
import { Clock, Trophy, Calendar, Users, ArrowRight, Filter, Search, Star, Award, Target, Zap, ChevronDown } from "lucide-react";

const allContests = {
  ongoing: [
    {
      image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=250&fit=crop",
      title: "Photography Contest",
      deadline: "2025-04-15T23:59:59",
      category: "Photography",
      participants: 1240,
      prize: "$5,000",
      difficulty: "Intermediate",
      description: "Capture the beauty of nature in stunning photographs",
      accentColor: "from-red-500 to-orange-600"
    },
    {
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=250&fit=crop",
      title: "Poetry Slam",
      deadline: "2025-04-16T23:59:59",
      category: "Literature",
      participants: 856,
      prize: "$3,000",
      difficulty: "Beginner",
      description: "Express your emotions through powerful poetry",
      accentColor: "from-amber-500 to-yellow-600"
    },
    {
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
      title: "Code Challenge",
      deadline: "2025-04-20T23:59:59",
      category: "Coding",
      participants: 2100,
      prize: "$10,000",
      difficulty: "Advanced",
      description: "Solve complex algorithms and win exciting prizes",
      accentColor: "from-orange-500 to-red-600"
    },
    {
      image: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=400&h=250&fit=crop",
      title: "Design Challenge",
      deadline: "2025-04-22T23:59:59",
      category: "Design",
      participants: 924,
      prize: "$4,000",
      difficulty: "Intermediate",
      description: "Create amazing artwork with your creativity",
      accentColor: "from-yellow-500 to-amber-600"
    },
  ],
  upcoming: [
    { 
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=250&fit=crop",
      title: "Short Story Contest", 
      category: "Literature", 
      participants: 0,
      prize: "$6,000",
      difficulty: "Beginner",
      description: "Write compelling short stories that captivate readers",
      startDate: "2025-05-01",
      accentColor: "from-red-500 to-pink-600"
    },
    { 
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop",
      title: "Music Battle", 
      category: "Music", 
      participants: 0,
      prize: "$8,000",
      difficulty: "Intermediate",
      description: "Showcase your musical talent and compete with the best",
      startDate: "2025-05-15",
      accentColor: "from-orange-500 to-amber-600"
    },
    { 
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
      title: "Science Quiz", 
      category: "Science", 
      participants: 0,
      prize: "$3,500",
      difficulty: "Beginner",
      description: "Test your knowledge and win exciting prizes",
      startDate: "2025-05-20",
      accentColor: "from-yellow-500 to-orange-600"
    },
    { 
      image: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=400&h=250&fit=crop",
      title: "Startup Pitch", 
      category: "Business", 
      participants: 0,
      prize: "$15,000",
      difficulty: "Advanced",
      description: "Present your innovative startup ideas to investors",
      startDate: "2025-06-01",
      accentColor: "from-amber-500 to-red-600"
    },
  ],
  past: [
    { 
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=250&fit=crop",
      title: "Winter Hackathon", 
      category: "Coding", 
      participants: 1500, 
      prize: "$8,000", 
      winner: "Team Alpha",
      accentColor: "from-amber-300 to-orange-400"
    },
    { 
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      title: "Logo Design", 
      category: "Design", 
      participants: 680, 
      prize: "$4,500", 
      winner: "Sarah Johnson",
      accentColor: "from-yellow-300 to-amber-400"
    },
    { 
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=250&fit=crop",
      title: "Music Composition", 
      category: "Music", 
      participants: 420, 
      prize: "$3,000", 
      winner: "Mike Chen",
      accentColor: "from-orange-300 to-red-400"
    },
  ],
};

const Contests = () => {
  const [filter, setFilter] = useState("ongoing");
  const [category, setCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [timers, setTimers] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedTimers = {};
      allContests.ongoing.forEach((contest) => {
        const timeLeft = new Date(contest.deadline) - new Date();
        updatedTimers[contest.title] =
          timeLeft > 0 ? formatTime(timeLeft) : "Expired";
      });
      setTimers(updatedTimers);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  const categories = [
    "All",
    ...new Set(
      [
        ...allContests.ongoing,
        ...allContests.upcoming,
        ...allContests.past,
      ].map((c) => c.category)
    ),
  ];

  const getFilteredContests = () => {
    let contests = allContests[filter];
    if (category !== "All") {
      contests = contests.filter((c) => c.category === category);
    }
    if (searchTerm) {
      contests = contests.filter((c) => 
        c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return contests;
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Beginner": return "bg-yellow-100 text-yellow-800";
      case "Intermediate": return "bg-amber-100 text-amber-800";
      case "Advanced": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "ongoing": return "bg-gradient-to-r from-red-500 to-orange-600";
      case "upcoming": return "bg-gradient-to-r from-amber-500 to-yellow-600";
      case "past": return "bg-gradient-to-r from-orange-500 to-red-600";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-white">
      {/* Header Section */}
     <div className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-r from-orange-500/70 to-red-600/70">
  {/* Background elements with 0.3 opacity */}
  <div className="absolute inset-0">
    <div className="absolute top-0 left-0 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-200/30 rounded-full blur-3xl"></div>
    <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-amber-200/30 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>
  </div>
  
  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
    <div className="flex justify-center mb-6">
      <div className="bg-white/30 p-4 rounded-full backdrop-blur-sm shadow-lg">
        <Trophy className="w-12 h-12 text-yellow-300" />
      </div>
    </div>
    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
      Discover Exciting <br />
      <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-300 bg-clip-text text-transparent">
        Contests
      </span>
    </h1>
    <p className="text-xl md:text-2xl text-orange-50 mb-8 max-w-3xl mx-auto">
      Compete, showcase your skills, and win amazing prizes in our vibrant community
    </p>
    
    {/* Stats with 0.3 opacity */}
    <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-12">
      <div className="bg-white/30 p-4 rounded-xl backdrop-blur-sm hover:scale-105 transition-transform">
        <div className="text-2xl font-bold text-yellow-300">50K+</div>
        <div className="text-orange-50 text-sm">Participants</div>
      </div>
      <div className="bg-white/30 p-4 rounded-xl backdrop-blur-sm hover:scale-105 transition-transform">
        <div className="text-2xl font-bold text-yellow-300">$2M+</div>
        <div className="text-orange-50 text-sm">Prize Money</div>
      </div>
      <div className="bg-white/30 p-4 rounded-xl backdrop-blur-sm hover:scale-105 transition-transform">
        <div className="text-2xl font-bold text-yellow-300">200+</div>
        <div className="text-orange-50 text-sm">Contests</div>
      </div>
    </div>
    
    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <button className="bg-gradient-to-r from-yellow-400 to-amber-500 px-8 py-4 rounded-full text-gray-800 font-semibold text-lg hover:from-yellow-500 hover:to-amber-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
        Explore Contests <ArrowRight className="w-5 h-5 ml-2 inline" />
      </button>
      <button className="bg-white/30 border-2 border-white/40 px-8 py-4 rounded-full text-white font-semibold text-lg hover:bg-white/40 transition-all duration-300 shadow-lg">
        How It Works
      </button>
    </div>
  </div>
  
  {/* Floating Elements with 0.3 opacity */}
  <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-r from-yellow-400/30 to-amber-500/30 rounded-full opacity-30 animate-pulse"></div>
  <div className="absolute bottom-10 right-10 w-12 h-12 bg-gradient-to-r from-amber-400/30 to-yellow-500/30 rounded-full opacity-30 animate-bounce"></div>
  <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-gradient-to-r from-yellow-400/30 to-amber-500/30 rounded-full opacity-30 animate-ping"></div>
</div>

      <div className="container mx-auto px-6 py-12 -mt-10">
        {/* Filters and Search */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-orange-100">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Filter Buttons */}
            <div className="flex bg-orange-50 rounded-xl p-1 shadow-inner">
              {["ongoing", "upcoming", "past"].map((type) => (
                <button
                  key={type}
                  className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 ${
                    filter === type 
                      ? `bg-gradient-to-r ${type === 'ongoing' ? 'from-red-500 to-orange-600' : type === 'upcoming' ? 'from-amber-500 to-yellow-600' : 'from-orange-500 to-red-600'} text-white shadow-md` 
                      : "text-orange-600 hover:text-orange-800"
                  }`}
                  onClick={() => setFilter(type)}
                >
                  {type === 'ongoing' ? <Zap className="w-4 h-4" /> : 
                   type === 'upcoming' ? <Calendar className="w-4 h-4" /> : 
                   <Award className="w-4 h-4" />}
                  <span>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="w-5 h-5 text-orange-400" />
              </div>
              <input
                type="text"
                placeholder="Search contests..."
                className="w-full pl-10 pr-4 py-3 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-orange-50"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <div className="relative w-full lg:w-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Filter className="w-5 h-5 text-orange-400" />
              </div>
              <select
                className="w-full pl-10 pr-8 py-3 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent appearance-none bg-orange-50"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {categories.map((cat, idx) => (
                  <option key={idx} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <ChevronDown className="w-5 h-5 text-orange-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Contest Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getFilteredContests().map((contest, idx) => (
            <div key={idx} className="group bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-orange-100 hover:border-orange-300 transform hover:-translate-y-1">
              {/* Contest Image */}
              <div className="relative overflow-hidden h-48">
                <img 
                  src={contest.image} 
                  alt={contest.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full text-white ${getStatusColor(filter)} shadow-lg`}>
                    {filter.charAt(0).toUpperCase() + filter.slice(1)}
                  </span>
                </div>
                {/* Participants */}
                {contest.participants > 0 && (
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm shadow-lg">
                    <Users className="w-4 h-4 inline mr-1" />
                    {contest.participants.toLocaleString()}
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium bg-orange-100 text-orange-800 px-3 py-1 rounded-full">
                      {contest.category}
                    </span>
                  </div>
                  {contest.prize && (
                    <div className="text-right">
                      <div className="text-emerald-600 font-bold text-lg">{contest.prize}</div>
                      <div className="text-xs text-orange-600">Prize Pool</div>
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold mb-2">{contest.title}</h3>
                {contest.description && (
                  <p className="text-gray-600 text-sm mb-4">{contest.description}</p>
                )}

                {/* Difficulty */}
                {contest.difficulty && (
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2 text-orange-600">
                      <Target className="w-5 h-5" />
                      <span className="text-sm">Difficulty</span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(contest.difficulty)}`}>
                      {contest.difficulty}
                    </span>
                  </div>
                )}

                {/* Timer for Ongoing */}
                {filter === "ongoing" && (
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-100 mb-4">
                    <div className="flex items-center space-x-2 text-orange-700">
                      <Clock className="w-5 h-5" />
                      <span className="text-sm font-medium">Time Remaining</span>
                    </div>
                    <div className="text-lg font-bold text-orange-800 mt-1">
                      {timers[contest.title] || "Loading..."}
                    </div>
                  </div>
                )}

                {/* Start Date for Upcoming */}
                {filter === "upcoming" && contest.startDate && (
                  <div className="bg-amber-50 p-4 rounded-lg border border-amber-100 mb-4">
                    <div className="flex items-center space-x-2 text-amber-700">
                      <Calendar className="w-5 h-5" />
                      <span className="text-sm font-medium">Starts On</span>
                    </div>
                    <div className="text-lg font-bold text-amber-800 mt-1">
                      {new Date(contest.startDate).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </div>
                  </div>
                )}

                {/* Winner for Past */}
                {filter === "past" && contest.winner && (
                  <div className="bg-red-50 p-4 rounded-lg border border-red-100 mb-4">
                    <div className="flex items-center space-x-2 text-red-700">
                      <Star className="w-5 h-5" />
                      <span className="text-sm font-medium">Winner</span>
                    </div>
                    <div className="text-lg font-bold text-red-800 mt-1">
                      {contest.winner}
                    </div>
                  </div>
                )}

                {/* Action Button */}
                <div className="mt-4">
                  {filter === "ongoing" && (
                    <button className={`w-full bg-gradient-to-r ${contest.accentColor} px-4 py-3 rounded-xl text-white font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                      Join Now <ArrowRight className="w-4 h-4 ml-2 inline" />
                    </button>
                  )}
                  {filter === "upcoming" && (
                    <button className="w-full bg-gradient-to-r from-gray-100 to-gray-200 border border-gray-300 px-4 py-3 rounded-xl text-gray-700 font-semibold hover:from-gray-200 hover:to-gray-300 transition-all duration-300 transform hover:scale-105">
                      Get Notified <ArrowRight className="w-4 h-4 ml-2 inline" />
                    </button>
                  )}
                  {filter === "past" && (
                    <button className="w-full bg-gradient-to-r from-gray-800 to-gray-900 px-4 py-3 rounded-xl text-white font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                      View Results <ArrowRight className="w-4 h-4 ml-2 inline" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {getFilteredContests().length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl shadow-sm border border-orange-200">
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-full p-8 w-32 h-32 mx-auto mb-6 flex items-center justify-center shadow-inner">
              <Search className="w-16 h-16 text-orange-300" />
            </div>
            <h3 className="text-2xl font-semibold text-orange-800 mb-2">No contests found</h3>
            <p className="text-orange-600 mb-6 max-w-md mx-auto">Try adjusting your filters or search terms to find what you're looking for</p>
            <button 
              onClick={() => {
                setCategory("All");
                setSearchTerm("");
              }}
              className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-all duration-200 shadow-md"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contests;