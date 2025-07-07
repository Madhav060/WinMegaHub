import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { UserContext } from './contexts/UserContext';
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
import Certificates from './pages/Certificates';

function App() {
  const { user } = useContext(UserContext);

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
          <Route path="/certificates" element={<Certificates/>} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/contest/:title" element={<ContestDetails />} />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/profile"
            element={user ? <Profile /> : <Navigate to="/login" />}
          />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;