import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="relative flex flex-1 items-center justify-center bg-slate-950 px-6 overflow-hidden">
      
      {/* Background Decorative Glows */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content: Text and CTA */}
        <div className="text-center lg:text-left space-y-8">
          <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-semibold tracking-wide">
            Productivity Reimagined
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.1] tracking-tight">
            Your Goals <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Deserve a Plan.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Stop juggling tasks in your head. Break down your ideas into actionable steps and track your progress with our minimal, high-performance interface.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <Link
              to="/todo"
              className="w-full sm:w-auto px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all duration-300 shadow-xl shadow-blue-500/20 active:scale-[0.98] text-center"
            >
              Start Planning Now
            </Link>
            <Link
              to="/signup"
              className="w-full sm:w-auto px-10 py-4 bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 font-bold rounded-2xl transition-all duration-300 text-center"
            >
              Join for Free
            </Link>
          </div>
        </div>

        {/* Right Content: Visual "Task Card" Preview (Hidden on mobile, beautiful on PC) */}
        <div className="hidden lg:flex flex-col gap-4 relative">
            {/* Decorative Card 1 */}
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-6 h-6 rounded-full border-2 border-blue-500"></div>
                    <div className="h-4 w-48 bg-slate-800 rounded-full"></div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-[10px]">✓</div>
                    <div className="h-4 w-32 bg-slate-700 rounded-full"></div>
                </div>
            </div>

            {/* Decorative Card 2 */}
            <div className="bg-slate-800 border border-slate-700 p-6 rounded-3xl shadow-2xl -rotate-6 translate-x-12 hover:rotate-0 transition-transform duration-500">
                <div className="flex justify-between items-center">
                    <div className="h-6 w-24 bg-blue-500/20 text-blue-400 text-[10px] font-bold flex items-center justify-center rounded-lg uppercase">In Progress</div>
                    <div className="h-4 w-4 bg-slate-600 rounded-full"></div>
                </div>
                <div className="mt-4 h-5 w-full bg-slate-700 rounded-full"></div>
            </div>
        </div>

      </div>
    </div>
  );
}

export default Home;