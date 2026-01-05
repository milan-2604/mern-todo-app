import React from "react";

function AboutUs() {
  const techStack = [
    { name: "MongoDB", color: "text-green-500", bg: "bg-green-500/10" },
    { name: "Express.js", color: "text-slate-300", bg: "bg-slate-300/10" },
    { name: "React", color: "text-blue-400", bg: "bg-blue-400/10" },
    { name: "Node.js", color: "text-emerald-400", bg: "bg-emerald-400/10" },
  ];

  return (
    <div className="relative flex-grow bg-slate-950 px-6 py-16 overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <div className="inline-block px-4 py-1 mb-4 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-bold uppercase tracking-widest">
            Milestone Project #1
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            About This <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Project</span>
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed">
            This application marks my transition from frontend explorer to full-stack developer. 
            It is a complete MERN environment featuring a dedicated backend, secure database 
            integration, and a responsive user interface.
          </p>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {techStack.map((tech) => (
            <div key={tech.name} className={`${tech.bg} border border-slate-800 p-4 rounded-2xl text-center shadow-sm`}>
              <span className={`text-sm font-bold ${tech.color}`}>{tech.name}</span>
            </div>
          ))}
        </div>

        {/* MERN Architecture Concept */}
        

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Mission Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-6 bg-purple-500 rounded-full"></span>
              The Goal
            </h3>
            <p className="text-slate-400 leading-relaxed">
              The objective was to master RESTful API architecture, state management, 
              and CRUD operations. Special focus was placed on writing clean, scalable 
              code and implementing secure authentication to mimic real-world production 
              environments.
            </p>
          </div>

          {/* Bio Section */}
          <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">The Developer</h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              My name is <span className="text-white font-semibold">Milan Oli</span>. 
              Currently pursuing my MCA in Dehradun, Uttarakhand, I am passionate about 
              bridging the gap between beautiful design and robust logic.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/milan-2604" className="text-sm font-bold text-purple-400 hover:text-purple-300 transition-colors">GitHub</a>
              <a href="https://www.linkedin.com/in/milan2604/" className="text-sm font-bold text-purple-400 hover:text-purple-300 transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>

    {/* Project Philosophy Closing (Simplified) */}
        <div className="mt-24 text-center">
          <p className="text-slate-500 text-sm font-medium tracking-widest uppercase opacity-50">
            "Learning by building. One project at a time."
          </p>
        </div>
      </div>
    </div> 
  );
}

export default AboutUs;