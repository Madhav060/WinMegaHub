import React, { useState, useEffect } from 'react';
import { Trophy, Star, Users, Calendar, ArrowRight, CheckCircle, Play, Award, Zap, Heart, Sparkles, Target, Gift } from 'lucide-react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveSection(prev => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const ongoingContests = [
    {
      image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=250&fit=crop",
      title: "Photography Contest",
      description: "Capture the beauty around you and stand a chance to win exciting prizes.",
      participants: 1240,
      prize: "$2,500",
      deadline: "5 days left",
      color: "from-red-500 to-orange-600"
    },
    {
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=250&fit=crop",
      title: "Short Story Contest",
      description: "Let your words weave magic. Submit your best short story today.",
      participants: 890,
      prize: "$1,800",
      deadline: "8 days left",
      color: "from-amber-500 to-yellow-600"
    },
    {
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
      title: "Coding Challenge",
      description: "Solve exciting problems and showcase your programming skills.",
      participants: 2150,
      prize: "$5,000",
      deadline: "12 days left",
      color: "from-orange-500 to-red-600"
    },
    {
      image: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=400&h=250&fit=crop",
      title: "Design Challenge",
      description: "Showcase your UI/UX design skills with innovative interfaces.",
      participants: 1680,
      prize: "$3,200",
      deadline: "15 days left",
      color: "from-yellow-500 to-amber-600"
    }
  ];

  const upcomingContests = [
    {
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=250&fit=crop",
      title: "Art Contest",
      description: "Unleash your creativity. Submit your artwork and inspire others.",
      startDate: "Dec 15",
      color: "from-red-500 to-pink-600"
    },
    {
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop",
      title: "Music Battle",
      description: "Showcase your musical talent and compete with the best.",
      startDate: "Dec 20",
      color: "from-orange-500 to-amber-600"
    },
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
      title: "Science Quiz",
      description: "Test your knowledge and win exciting prizes in our quiz challenge.",
      startDate: "Dec 25",
      color: "from-yellow-500 to-orange-600"
    },
    {
      image: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=400&h=250&fit=crop",
      title: "Dance Duel",
      description: "Bring your best moves and compete in our high-energy dance battle.",
      startDate: "Jan 5",
      color: "from-amber-500 to-red-600"
    }
  ];

  const steps = [
    {
      title: "Register",
      description: "Create your free account and get started instantly.",
      icon: <Users className="w-8 h-8" />,
      color: "from-red-500 to-orange-600"
    },
    {
      title: "Choose Contest",
      description: "Pick a contest that aligns with your passion or skill.",
      icon: <Trophy className="w-8 h-8" />,
      color: "from-orange-500 to-amber-600"
    },
    {
      title: "Submit Entry",
      description: "Upload your best work before the deadline.",
      icon: <Play className="w-8 h-8" />,
      color: "from-amber-500 to-yellow-600"
    },
    {
      title: "Win & Celebrate",
      description: "Earn rewards, recognition, and bragging rights!",
      icon: <Award className="w-8 h-8" />,
      color: "from-yellow-500 to-red-600"
    }
  ];

  const stats = [
    { number: "50K+", label: "Active Users", icon: <Users className="w-6 h-6" />, color: "from-red-500 to-orange-600" },
    { number: "1,200+", label: "Contests Hosted", icon: <Trophy className="w-6 h-6" />, color: "from-orange-500 to-amber-600" },
    { number: "$2M+", label: "Prize Money", icon: <Star className="w-6 h-6" />, color: "from-amber-500 to-yellow-600" },
    { number: "98%", label: "Success Rate", icon: <CheckCircle className="w-6 h-6" />, color: "from-yellow-500 to-red-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-white">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-orange-300/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-300/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-amber-300/20 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-red-500 to-orange-600 p-4 rounded-2xl shadow-xl">
                <Sparkles className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
              Welcome to <br />
              <span className="bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 bg-clip-text text-transparent">WinMegaHub!</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Your one-stop destination for exciting contests and rewards. Join thousands of creators and innovators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-red-500 to-orange-600 px-8 py-4 rounded-full text-white font-semibold text-lg hover:from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get Started <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="bg-white border-2 border-orange-200 px-8 py-4 rounded-full text-orange-600 font-semibold text-lg hover:bg-orange-50 transition-all duration-300 shadow-lg">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-r from-red-400 to-orange-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-12 h-12 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full opacity-20 animate-ping"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/70 backdrop-blur-sm shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`bg-gradient-to-r ${stat.color} p-4 rounded-2xl w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <div className="text-white">{stat.icon}</div>
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ongoing Contests */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-r from-red-500 to-orange-600 p-3 rounded-xl shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Ongoing <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Contests</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join these exciting competitions before they end
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ongoingContests.map((contest, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-orange-100 hover:border-orange-300 transform hover:-translate-y-1">
                <div className="relative overflow-hidden">
                  <img 
                    src={contest.image} 
                    alt={contest.title} 
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    {contest.deadline}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm shadow-lg">
                    <Users className="w-4 h-4 inline mr-1" />
                    {contest.participants}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{contest.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{contest.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-emerald-600 font-bold text-lg">{contest.prize}</span>
                    <span className="text-orange-600 text-sm font-medium">Prize Pool</span>
                  </div>
                  <button className={`w-full bg-gradient-to-r ${contest.color} px-4 py-2 rounded-xl text-white font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                    Join Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-r from-orange-200 to-red-200 rounded-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop" 
                alt="About WinMegaHub" 
                className="relative rounded-2xl shadow-2xl z-10"
              />
            </div>
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-red-500 to-orange-600 p-3 rounded-xl shadow-lg mr-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                  About Our <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Platform</span>
                </h2>
              </div>
              <p className="text-xl text-gray-600 mb-8">
                WinMegaHub is more than just a contest platform - it's a community where talent meets opportunity.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-orange-100">
                  <div className="bg-gradient-to-r from-red-500 to-orange-600 p-2 rounded-lg shadow-lg">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Recognize Talent</h3>
                    <p className="text-gray-600">
                      We provide a stage for hidden talents to shine and get the recognition they deserve.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl border border-amber-100">
                  <div className="bg-gradient-to-r from-amber-500 to-yellow-600 p-2 rounded-lg shadow-lg">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Diverse Competitions</h3>
                    <p className="text-gray-600">
                      From art to coding, we host a wide range of contests to match every passion.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Contests */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-r from-amber-500 to-yellow-600 p-3 rounded-xl shadow-lg">
                <Calendar className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Upcoming <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">Contests</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Mark your calendars for these exciting upcoming challenges
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {upcomingContests.map((contest, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-amber-300 transform hover:-translate-y-1">
                <div className="relative overflow-hidden">
                  <img 
                    src={contest.image} 
                    alt={contest.title} 
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute top-4 right-4 bg-gradient-to-r ${contest.color} text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg`}>
                    {contest.startDate}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{contest.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{contest.description}</p>
                  <button className="w-full bg-gradient-to-r from-gray-100 to-gray-200 border border-gray-300 px-4 py-2 rounded-xl text-gray-700 font-semibold hover:from-gray-200 hover:to-gray-300 transition-all duration-300 transform hover:scale-105">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-r from-yellow-500 to-amber-600 p-3 rounded-xl shadow-lg">
                <Gift className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              How It <span className="bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">Works</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get started in just a few simple steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className={`bg-gradient-to-r ${step.color} p-6 rounded-2xl w-20 h-20 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <div className="text-white">{step.icon}</div>
                  </div>
                  <div className="absolute -top-2 -right-2 bg-white border-2 border-orange-200 text-orange-600 font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center shadow-lg">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-500 via-orange-500 to-amber-500 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Showcase Your <span className="text-yellow-300">Talent?</span>
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of creators, innovators, and competitors in our growing community.
            </p>
            <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Started Now <ArrowRight className="w-5 h-5 ml-2 inline" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;