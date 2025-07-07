import React, { useState, useEffect } from 'react';
import { Trophy, Target, Users, Star, Award, CheckCircle, Zap, Heart, ArrowRight, Sparkles, TrendingUp, Shield, Globe } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: '50K+', label: 'Active Participants', icon: Users },
    { number: '200+', label: 'Contests Hosted', icon: Trophy },
    { number: '$2M+', label: 'Prizes Awarded', icon: Award },
    { number: '98%', label: 'Success Rate', icon: Star }
  ];

  const offerings = [
    {
      icon: Trophy,
      title: 'Online Contests',
      description: 'Participate in various competitions and win exciting rewards.',
      color: 'from-amber-400 to-orange-500'
    },
    {
      icon: Target,
      title: 'Skill-Based Challenges',
      description: 'Test your expertise and gain recognition in your field.',
      color: 'from-yellow-400 to-amber-500'
    },
    {
      icon: Award,
      title: 'Exclusive Prizes & Recognition',
      description: 'Win cash, certificates, and exclusive merchandise.',
      color: 'from-orange-400 to-red-500'
    },
    {
      icon: Shield,
      title: 'Transparent & Fair Play',
      description: 'Equal chances for everyone, always maintained.',
      color: 'from-red-400 to-pink-500'
    },
    {
      icon: Users,
      title: 'Community Engagement',
      description: 'Connect, share, and grow together with like-minded people.',
      color: 'from-pink-400 to-red-500'
    },
    {
      icon: TrendingUp,
      title: 'Learning & Growth',
      description: 'Every contest is a step toward self-improvement.',
      color: 'from-amber-500 to-orange-600'
    }
  ];

  const whyChoose = [
    {
      icon: Globe,
      title: 'Diverse Competition Categories',
      description: 'Academic quizzes, creativity challenges, and much more.'
    },
    {
      icon: Sparkles,
      title: 'User-Friendly Experience',
      description: 'Intuitive and seamless navigation for all users.'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'High standards of fairness and transparency maintained.'
    },
    {
      icon: Zap,
      title: 'Regular Contests & Events',
      description: 'Stay excited with fresh challenges every week.'
    },
    {
      icon: Heart,
      title: 'Passion-Driven Community',
      description: 'Ambitious people just like you, working toward excellence.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 to-red-700 text-white py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-40 h-40 bg-orange-300/30 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-red-300/30 rounded-full blur-xl animate-pulse delay-300"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-amber-300/30 rounded-full blur-xl animate-pulse delay-700"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
                <Trophy className="w-16 h-16 text-yellow-300" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-yellow-300">WinMegaHub</span>
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 max-w-4xl mx-auto leading-relaxed">
              Your ultimate destination for exciting contests where{' '}
              <span className="text-yellow-300 font-semibold">talent meets opportunity</span>
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-r from-orange-500 to-red-600 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              Empowering <span className="text-orange-600">Talent</span> Worldwide
            </h2>
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-orange-100">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We provide a transparent, fair, and rewarding platform for individuals to showcase their skills, knowledge, and creativity. Our goal is to foster a dynamic community of passionate participants who love challenges and winning rewards.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you're a student, a professional, or someone seeking thrilling challenges, our platform is designed to{' '}
                <span className="text-orange-600 font-semibold">bring out the best in you</span>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="bg-gradient-to-r from-orange-500 to-red-600 p-3 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Mission</h2>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-orange-100">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At WinMegaHub, our mission is to create a competitive yet fun environment that empowers participants to push their limits and achieve greatness. We believe talent deserves recognition — our contests are a gateway to endless possibilities.
              </p>
              <div className="bg-gradient-to-r from-orange-500 to-red-600 p-6 rounded-xl text-white text-center">
                <h3 className="text-xl font-bold mb-2">We believe talent deserves recognition</h3>
                <p className="text-orange-100">Our contests are a gateway to endless possibilities</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What We Offer */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What We Offer</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the amazing features that make WinMegaHub your perfect competition platform
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((offer, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-orange-100">
                <div className={`bg-gradient-to-r ${offer.color} p-6 text-white`}>
                  <offer.icon className="w-10 h-10 mb-4" />
                  <h3 className="text-xl font-bold">{offer.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 leading-relaxed">{offer.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-16 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose WinMegaHub?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Here's what sets us apart from other competition platforms
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {whyChoose.map((item, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 group border border-orange-100">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-orange-500 to-red-600 p-3 rounded-full flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-gradient-to-r from-orange-600 to-red-700 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-orange-300/30 rounded-full blur-xl animate-bounce"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-red-300/30 rounded-full blur-xl animate-bounce delay-300"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm animate-pulse">
                <Sparkles className="w-12 h-12 text-yellow-300" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              WinMegaHub is more than just a platform – it's a{' '}
              <span className="text-yellow-300">movement!</span>
            </h2>
            <p className="text-xl text-orange-100 mb-8 leading-relaxed">
              Join us today and be part of a passionate community that thrives on{' '}
              <span className="text-yellow-300 font-semibold">skills, passion, and competition.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-yellow-400 to-amber-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-yellow-500 hover:to-amber-600 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg">
                <span>Join the Movement</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-all duration-200 border border-white/30">
                Explore Contests
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;