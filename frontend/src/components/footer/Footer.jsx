
import React from 'react';
import { Link } from 'react-router-dom'; 

function Footer() {
  return (
    <footer className="w-full bg-slate-950 text-slate-300 border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Copyright Section */}
        <div className="text-center md:text-left">
          <p className="text-sm font-medium">
            © 2026 <span className="font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">TODO</span>.
          </p>
          <p className="text-xs text-slate-500 mt-1">
            Building better habits, one task at a time.
          </p>
        </div>

        {/* Tagline & Legal Links */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <p className="text-sm text-slate-400 font-medium tracking-wide">
            Stay organized. Stay productive.
          </p>
          
         
          <div className="flex gap-4 text-xs text-slate-600 font-medium">
            <span className="hover:text-blue-400 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-blue-400 cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;