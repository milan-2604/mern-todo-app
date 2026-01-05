import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
function Navbar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await fetch(`${import.meta.env.VITE_API_URL}/api/v1/logout`, {
        method: "POST",
        credentials: "include",
      });

      // redirect to signin page after logout
      navigate('/signin');
    } catch (err) {
      console.error("Logout failed");
    }
  };
  return (

      <nav className="w-full bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <h3 className="text-lg sm:text-xl font-bold tracking-wide">TODO</h3>

        {/* Menu */}
        <ul className="flex gap-2 sm:gap-4 text-[10px] sm:text-sm font-medium flex-nowrap justify-end overflow-x-auto">
          <li>
            <Link
              to='/'
              className="inline-block px-2 py-1 sm:px-4 sm:py-2 bg-gray-800 rounded-md hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap text-center"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to='/aboutus'
              className="inline-block px-2 py-1 sm:px-4 sm:py-2 bg-gray-800 rounded-md hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap text-center"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to='/signup'
              className="inline-block px-2 py-1 sm:px-4 sm:py-2 bg-gray-800 rounded-md hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap text-center"
            >
              Sign Up
            </Link>
          </li>
          <li>
            <Link
              to='/signin'
              className="inline-block px-2 py-1 sm:px-4 sm:py-2 bg-gray-800 rounded-md hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap text-center"
            >
              Sign In
            </Link>
          </li>
          <li>
            <Link
                onClick={handleLogout}
              className="inline-block px-2 py-1 sm:px-4 sm:py-2 bg-gray-800 rounded-md hover:bg-red-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap text-center"
            >
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
