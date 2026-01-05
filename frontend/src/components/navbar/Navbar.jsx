import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

// We don't need Navbar.css anymore, everything is handled by Tailwind

function Navbar() {
  const navigate = useNavigate();
  const { isAuth, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    navigate("/signin");
  };

  // Reusable styles for navigation links to keep JSX clean
  const linkStyle = "px-3 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all duration-300 hover:bg-white/10 hover:text-white text-gray-300";
  const activeBtnStyle = "px-4 py-2 text-xs sm:text-sm font-bold bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transition-all duration-300";

  return (
    <nav className="sticky top-0 z-50 w-full bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
            TODO
          </div>
        </Link>

        {/* Navigation Links */}
        <ul className="flex items-center gap-1 sm:gap-4">
          
          {/* Always visible links */}
          <li>
            <Link to="/" className={linkStyle}>
              Home
            </Link>
          </li>

          <li>
            <Link to="/aboutus" className={linkStyle}>
              About
            </Link>
          </li>

          {/* 🔓 NOT LOGGED IN */}
          {!isAuth && (
            <>
              <li>
                <Link to="/signin" className={linkStyle}>
                  Log In
                </Link>
              </li>
              <li>
                <Link to="/signup" className={activeBtnStyle}>
                  Sign Up
                </Link>
              </li>
            </>
          )}

          {/* 🔐 LOGGED IN */}
          {isAuth && (
            <>
              <li>
                <Link to="/todo" className={`${linkStyle} text-blue-400`}>
                  My List
                </Link>
              </li>
              <li>
                <button 
                  onClick={handleLogout} 
                  className="px-3 py-2 text-xs sm:text-sm font-medium text-red-400 border border-red-500/30 rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300"
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;