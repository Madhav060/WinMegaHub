import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Contests from './pages/Contests';
import Leaderboard from './pages/Leaderboard';
import About from './pages/About';
import Contact from './pages/Contact';
import CreateAccount from './pages/CreateAccount';
import Login from './pages/Login';
import Profile from './pages/Profile';
import ContestDetails from './pages/ContextDetails';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    setIsLoggedIn(!!storedUser);
  }, []);

  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contests" element={<Contests />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/contest/:title" element={<ContestDetails />} />
          <Route 
            path="/login" 
            element={<Login setIsLoggedIn={setIsLoggedIn} />} 
          />

          <Route 
            path="/profile" 
            element={isLoggedIn ? <Profile /> : <Navigate to="/login" />} 
          />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
