import React, { createContext, useState, useEffect, useRef } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const isInitialized = useRef(false);

  // Load user from localStorage on initial app load
  useEffect(() => {
    if (isInitialized.current) return; // Prevent double execution in StrictMode
    
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Failed to parse stored user:', error);
        localStorage.removeItem('user'); // Clear corrupted data
      }
    }
    setLoading(false);
    isInitialized.current = true;
  }, []);

  // Automatically update localStorage whenever user state changes
  useEffect(() => {
    if (!isInitialized.current) return; // Don't update storage during initial load
    
    if (user) {
      // On login or user update, store user object
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      // On logout (when user is set to null), remove from storage
      localStorage.removeItem('user');
    }
  }, [user]);

  const value = {
    user,
    setUser,
    loading,
  };

  // Render children only after the initial loading is complete
  return (
    <UserContext.Provider value={value}>
      {!loading && children}
    </UserContext.Provider>
  );
};