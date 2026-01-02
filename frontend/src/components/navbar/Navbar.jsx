import React from 'react'

function Navbar() {
  return (

<nav className="w-full bg-gray-900 text-white">
  <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
    <h3 className="text-lg sm:text-xl font-bold tracking-wide">
      TODO
    </h3>

    <ul className="flex gap-3 sm:gap-6 text-xs sm:text-sm font-medium">
      <li className="cursor-pointer hover:text-blue-400 transition">HOME</li>
      <li className="cursor-pointer hover:text-blue-400 transition">About Us</li>
      <li className="cursor-pointer hover:text-blue-400 transition">Sign Up</li>
      <li className="cursor-pointer hover:text-blue-400 transition">Sign In</li>
    </ul>
  </div>
</nav>

  )
}

export default Navbar
