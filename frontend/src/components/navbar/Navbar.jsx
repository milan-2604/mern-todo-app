import React from 'react'

function Navbar() {
  return (

      <nav className="w-full bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <h3 className="text-lg sm:text-xl font-bold tracking-wide">TODO</h3>

        {/* Menu */}
        <ul className="flex gap-2 sm:gap-4 text-[10px] sm:text-sm font-medium flex-nowrap justify-end overflow-x-auto">
          <li>
            <a
              href="#"
              className="inline-block px-2 py-1 sm:px-4 sm:py-2 bg-gray-800 rounded-md hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap text-center"
            >
              HOME
            </a>
          </li>
          <li>
            <a
              href="#"
              className="inline-block px-2 py-1 sm:px-4 sm:py-2 bg-gray-800 rounded-md hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap text-center"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="inline-block px-2 py-1 sm:px-4 sm:py-2 bg-gray-800 rounded-md hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap text-center"
            >
              Sign Up
            </a>
          </li>
          <li>
            <a
              href="#"
              className="inline-block px-2 py-1 sm:px-4 sm:py-2 bg-gray-800 rounded-md hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap text-center"
            >
              Sign In
            </a>
          </li>
          <li>
            <a
              href="#"
              className="inline-block px-2 py-1 sm:px-4 sm:py-2 bg-gray-800 rounded-md hover:bg-red-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap text-center"
            >
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
