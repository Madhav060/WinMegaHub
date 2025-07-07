import React, { useState } from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail, ArrowRight, Trophy, Star } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-2 rounded-lg">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                WinMegaHub
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your ultimate destination for exciting contests and competitions where talent meets opportunity. Join thousands of winners today!
            </p>
            <div className="flex items-center space-x-2 text-sm text-yellow-400">
              <Star className="w-4 h-4 fill-current" />
              <span>Trusted by 50,000+ participants</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4 relative">
              Quick Links
              <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500"></div>
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '#' },
                { name: 'About Us', href: '#' },
                { name: 'Contact Us', href: '#' },
                { name: 'Terms & Conditions', href: '#' },
                { name: 'Privacy Policy', href: '#' }
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4 relative">
              Follow Us
              <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500"></div>
            </h3>
            <p className="text-gray-300 mb-4">Stay connected with us for latest updates and contests:</p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, color: 'hover:text-blue-400', href: '#' },
                { icon: Instagram, color: 'hover:text-pink-400', href: '#' },
                { icon: Twitter, color: 'hover:text-blue-300', href: '#' },
                { icon: Youtube, color: 'hover:text-red-400', href: '#' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`bg-slate-700 p-3 rounded-full ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4 relative">
              Newsletter
              <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500"></div>
            </h3>
            <p className="text-gray-300 mb-4">Subscribe for contest updates and exclusive offers:</p>
            
            {isSubscribed ? (
              <div className="bg-green-500/20 border border-green-500 rounded-lg p-4 text-center">
                <Mail className="w-6 h-6 mx-auto mb-2 text-green-400" />
                <p className="text-green-400 font-medium">Successfully subscribed!</p>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-200"
                  />
                </div>
                <button
                  onClick={handleSubscribe}
                  className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-medium py-3 rounded-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 WinMegaHub. All Rights Reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;