import React, { useContext, useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FiUser, FiLogOut, FiSun, FiMoon } from 'react-icons/fi';
import { HiOutlineMenu, HiX } from 'react-icons/hi';
import { UserContext } from '../contexts/UserContext';

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleLogout = () => {
    setUser(null);
    navigate('/login');
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (userMenuOpen && !e.target.closest('.user-menu')) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [userMenuOpen]);

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-md sticky top-0 z-50 font-[Poppins]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex justify-between items-center h-24">
          {/* Logo Section */}
          <Link to="/" className="flex items-center group">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-16 w-auto object-contain transition-all duration-300 group-hover:scale-110 group-hover:brightness-110"
              style={{ maxWidth: '280px' }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            <div className="flex space-x-8">
              {[
                { to: '/', label: 'Home' },
                { to: '/contests', label: 'Contests' },
                { to: '/leaderboard', label: 'Leaderboard' },
                { to: '/about', label: 'About' },
                { to: '/contact', label : 'Contact'}
              ].map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `text-lg font-semibold transition-all duration-200 px-4 py-2 rounded-lg relative
                    ${isActive
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                      : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 hover:bg-gray-100 dark:hover:text-blue-400 dark:hover:bg-gray-800'}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            <div className="h-6 w-px bg-gray-300 dark:bg-gray-600 mx-4" />

            <div className="flex items-center space-x-6">
              <button
                onClick={toggleTheme}
                className="p-3 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition"
              >
                {darkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
              </button>

              {user ? (
                <div className="relative user-menu">
                  <button
                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                    className="flex items-center space-x-3 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition"
                  >
                    <div className="h-11 w-11 rounded-full bg-blue-50 dark:bg-gray-800 flex items-center justify-center">
                      <FiUser className="text-blue-600 dark:text-blue-400" size={24} />
                    </div>
                    <div className="text-left hidden xl:block">
                      <p className="text-lg font-semibold text-gray-900 dark:text-white">
                        {user.name}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {user.email}
                      </p>
                    </div>
                  </button>

                  {userMenuOpen && (
                    <div className="absolute right-0 mt-3 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 z-50">
                      <Link
                        to="/profile"
                        className="block px-5 py-4 text-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                      >
                        Profile Settings
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-5 py-4 text-lg text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition flex items-center"
                      >
                        <FiLogOut className="mr-3" /> Sign Out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex space-x-4">
                  <Link
                    to="/login"
                    className="px-5 py-2.5 text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/create-account"
                    className="px-6 py-2.5 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow transition"
                  >
                    Get Started
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-3 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl"
            >
              {darkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-3 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl"
            >
              {mobileMenuOpen ? <HiX size={28} /> : <HiOutlineMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className={`absolute right-0 top-0 h-full w-72 bg-white dark:bg-gray-900 shadow-xl transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-8">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">Menu</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl"
              >
                <HiX className="text-gray-600 dark:text-gray-300" size={24} />
              </button>
            </div>

            {user && (
              <div className="flex items-center space-x-3 mb-6">
                <div className="h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-800 flex items-center justify-center">
                  <FiUser className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">{user.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{user.email}</p>
                </div>
              </div>
            )}

            <nav className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/contests', label: 'Contests' },
                { to: '/leaderboard', label: 'Leaderboard' },
                { to: '/about', label: 'About' },
                { to: '/profile', label: 'Profile', protected: true },
              ].map((item) => (
                (!item.protected || user) && (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-xl text-lg transition
                      ${isActive
                        ? 'bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-blue-400'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}`
                    }
                  >
                    {item.label}
                  </NavLink>
                )
              ))}
            </nav>
          </div>

          <div className="p-6">
            {user ? (
              <button
                onClick={handleLogout}
                className="w-full flex items-center justify-center space-x-2 px-4 py-3 text-lg text-red-600 hover:bg-red-50 dark:hover:bg-gray-800 rounded-xl transition"
              >
                <FiLogOut /> <span>Sign Out</span>
              </button>
            ) : (
              <div className="space-y-4">
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full px-4 py-3 text-lg text-center text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition"
                >
                  Sign In
                </Link>
                <Link
                  to="/create-account"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full px-4 py-3 text-lg text-center text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-xl transition"
                >
                  Create Account
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;