import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import { FaUserCircle } from 'react-icons/fa';
import { UserContext } from '../contexts/UserContext'; // ✅ Import UserContext

const Navbar = () => {
  const { user, setUser } = useContext(UserContext); // ✅ Get user and setUser from context
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null); // ✅ Clear global user state
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4 shadow-sm custom-font">
      <Link className="navbar-brand d-flex align-items-center" to="/">
        <img
          src="/logo.png"
          alt="Logo"
          width="250"
          height="80"
          className="d-inline-block align-top me-2"
          style={{ objectFit: 'contain' }}
        />
      </Link>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
          <li className="nav-item mx-2">
            <Link className="nav-link nav-link-hover" to="/">Home</Link>
          </li>
          <li className="nav-item mx-2">
            <Link className="nav-link nav-link-hover" to="/Contests">Contests</Link>
          </li>
          <li className="nav-item mx-2">
            <Link className="nav-link nav-link-hover" to="/leaderboard">Leaderboard</Link>
          </li>
          <li className="nav-item mx-2">
            <Link className="nav-link nav-link-hover" to="/about">About Us</Link>
          </li>
          <li className="nav-item mx-2">
            <Link className="nav-link nav-link-hover" to="/contact">Contact Us</Link>
          </li>
        </ul>

        <div className="d-flex align-items-center">
          {user ? (
            <>
              <span className="me-3 fw-bold">{user.email}</span>
              <Link to="/profile" className="me-3">
                <FaUserCircle size={28} />
              </Link>
              <button onClick={handleLogout} className="btn btn-outline-danger btn-sm">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/create-account" className="btn btn-outline-primary me-2">Create Account</Link>
              <Link to="/login" className="btn btn-primary">Login</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
