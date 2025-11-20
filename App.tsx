
import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { ProjectCard } from './components/ProjectCard';
import { PROJECTS, SPARE_PARTS, FIELD_NOTES } from './constants';
import { NavLink } from './types';
import { Github, Twitter, Linkedin, Dribbble, ExternalLink, ArrowRight } from 'lucide-react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<NavLink>(NavLink.HOME);
  const [scrollY, setScrollY] = useState(0);
  const [projectFilter, setProjectFilter] = useState<'All' | 'Work' | 'Side Projects'>('All');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (view: NavLink) => {
    if (view === currentView && view === NavLink.HOME) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setCurrentView(view);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  const scrollToSection = (id: string) => {
    if (currentView !== NavLink.HOME) {
      setCurrentView(NavLink.HOME);
      // Allow state update to render HOME before scrolling
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const filteredProjects = PROJECTS.filter(project => {
    if (projectFilter === 'All') return true;
    return project.type === projectFilter;
  });

  return (
    <div className="min-h-screen bg-background selection:bg-primary selection:text-black flex flex-col overflow-x-hidden">
      <Navbar currentView={currentView} onNavigate={handleNavigate} />

      {currentView === NavLink.HOME && (
        <div className="animate-fade-in-up w-full">
          {/* Hero Section */}
          <section id={NavLink.HOME} className="relative h-[115vh] md:h-screen w-full overflow-hidden flex flex-col">
            
            {/* Text Content - Grid Aligned via Container */}
            <div className="w-full max-w-[1200px] mx-auto px-6 h-full relative z-30 pointer-events-none pt-32 md:pt-48">
                <div className="max-w-2xl pointer-events-auto space-y-6">
                  <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-none">
                    <span className="block">PETER</span>
                    <span className="block text-gray-500">OSMENDA</span>
                  </h1>
                  
                  <div className="flex flex-col items-start gap-4">
                    <span className="text-primary font-mono text-sm tracking-[0.3em] uppercase pl-1">Product Designer</span>
                    
                    <div className="w-12 h-px bg-gradient-to-r from-primary/50 to-transparent"></div>
                    
                    <p className="max-w-md text-gray-400 text-sm md:text-base leading-relaxed font-light pl-1">
                      Specializing in complex systems, human-computer interaction, and futuristic interfaces.
                    </p>
                  </div>
                </div>
            </div>

            {/* Visual Focus: Pulsing Rings - Bottom Right */}
            {/* Adjusted md translate values to push rings into bottom right corner */}
            <div className="absolute bottom-0 right-0 translate-x-[25%] translate-y-[10%] md:translate-x-[35%] md:translate-y-[30%] z-10 pointer-events-none">
              <div className="relative w-[600px] h-[600px] md:w-[1400px] md:h-[1400px] flex items-center justify-center">
                
                {/* Layer 0: Deep Background Glow (Slowest) */}
                <div 
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ transform: `translateY(${scrollY * 0.05}px)` }}
                >
                   <div className="w-full h-full bg-primary/5 rounded-full blur-[150px] animate-pulse"></div>
                </div>

                {/* Layer 1: Outer Orbit (Slow) */}
                <div 
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ transform: `translateY(${scrollY * 0.1}px)` }}
                >
                  <div className="w-[95%] h-[95%] border border-white/5 rounded-full animate-[spin_80s_linear_infinite]"></div>
                </div>
                
                {/* Layer 2: Dashed Structure (Medium-Slow) */}
                <div 
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ transform: `translateY(${scrollY * 0.15}px)` }}
                >
                  <div className="w-[75%] h-[75%] border border-dashed border-white/10 rounded-full animate-[spin_60s_linear_infinite_reverse]"></div>
                </div>

                {/* Layer 3: Geometric Markers (Medium) */}
                <div 
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ transform: `translateY(${scrollY * 0.2}px)` }}
                >
                    <div className="w-[85%] h-[85%] animate-[spin_50s_linear_infinite] relative">
                        <div className="absolute top-0 left-1/2 w-px h-16 bg-gradient-to-b from-transparent to-white/20"></div>
                        <div className="absolute bottom-0 left-1/2 w-px h-16 bg-gradient-to-t from-transparent to-white/20"></div>
                        <div className="absolute left-0 top-1/2 w-16 h-px bg-gradient-to-r from-transparent to-white/20"></div>
                        <div className="absolute right-0 top-1/2 w-16 h-px bg-gradient-to-l from-transparent to-white/20"></div>
                    </div>
                </div>

                {/* Layer 4: Main Structure (Medium-Fast) */}
                <div 
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ transform: `translateY(${scrollY * 0.3}px)` }}
                >
                    <div className="w-[55%] h-[55%] border border-white/10 rounded-full animate-[spin_40s_linear_infinite]">
                        <div className="absolute top-1/2 -right-1.5 w-3 h-3 bg-primary/50 rounded-full blur-[2px]"></div>
                    </div>
                </div>
                
                {/* Layer 5: Eccentric Inner Ring (Fast) */}
                <div 
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ transform: `translateY(${scrollY * 0.4}px)` }}
                >
                   <div className="w-[40%] h-[40%] border border-white/5 rounded-full animate-[spin_25s_linear_infinite_reverse] border-t-primary/40 border-r-transparent border-b-transparent border-l-transparent rotate-45 shadow-[0_0_20px_rgba(0,240,255,0.2)]"></div>
                </div>

                {/* Layer 6: Pulse Core Ring (Faster) */}
                <div 
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ transform: `translateY(${scrollY * 0.5}px)` }}
                >
                   <div className="w-[30%] h-[30%] border-2 border-primary/10 rounded-full animate-pulse shadow-[0_0_40px_rgba(0,240,255,0.15)]"></div>
                </div>
                
                {/* Layer 7: Fast Spinner & Core (Fastest) */}
                <div 
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ transform: `translateY(${scrollY * 0.6}px)` }}
                >
                   <div className="w-[25%] h-[25%] border border-white/20 rounded-full border-t-transparent border-b-transparent animate-[spin_6s_linear_infinite]"></div>
                   <div className="absolute w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse"></div>
                   <div className="absolute w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_20px_white] animate-pulse"></div>
                </div>

                {/* Orbital Particles (Mixed Speeds) */}
                <div 
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ transform: `translateY(${scrollY * 0.25}px)` }}
                >
                   <div className="w-[65%] h-[65%] animate-[spin_20s_linear_infinite]">
                      <div className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_white]"></div>
                   </div>
                </div>
              </div>
            </div>

             {/* Bottom Fade Overlay */}
            <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-background via-background/80 to-transparent z-20 pointer-events-none"></div>
          </section>

          {/* Work Section - Single Column Stack */}
          <section id={NavLink.WORK} className="py-24 w-full relative z-10">
            
             {/* Filter Controls */}
             <div className="max-w-[1200px] mx-auto px-6 mb-20">
                 <div className="flex items-center gap-6 border-b border-white/10 pb-4">
                   {(['All', 'Work', 'Side Projects'] as const).map((filter) => (
                     <button 
                       key={filter}
                       onClick={() => setProjectFilter(filter)}
                       className={`text-sm font-mono uppercase tracking-widest transition-colors relative group py-1 ${projectFilter === filter ? 'text-primary' : 'text-gray-500 hover:text-white'}`}
                     >
                       {filter}
                       <span className={`absolute bottom-[-17px] left-0 w-full h-px bg-primary transition-opacity duration-300 ${projectFilter === filter ? 'opacity-100' : 'opacity-0'}`}></span>
                     </button>
                   ))}
                 </div>
             </div>

            <div className="flex flex-col gap-32 w-full">
              {filteredProjects.map(project => (
                // Wrapper for centering text content is handled inside ProjectCard
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>

          {/* Spare Parts Section - Masonry Grid */}
          <section id={NavLink.SPARE} className="py-24 w-full relative z-10 bg-surfaceHighlight/10">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="mb-12 border-b border-white/10 pb-6 flex flex-col md:flex-row justify-between items-end gap-4">
                  <div>
                    <span className="text-xs font-mono text-primary/80 uppercase tracking-widest mb-2 block">Playground</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">SPARE PARTS</h2>
                    <p className="text-gray-400 font-mono text-sm max-w-lg">
                        Experimental sketches, visual explorations, and rapid prototypes.
                    </p>
                  </div>
                </div>

                <div className="columns-2 md:columns-3 gap-4 space-y-4">
                  {SPARE_PARTS.map((item) => (
                      <div key={item.id} className="break-inside-avoid group relative overflow-hidden rounded-sm bg-[#0a0a0a] border border-white/5 hover:border-primary/30 transition-all duration-300 mb-4">
                        {/* Image */}
                        <img 
                          src={item.imageUrl} 
                          alt={item.title}
                          className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100"
                        />
                        
                        {/* Overlay Content */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                            <span className="text-primary font-mono text-[10px] mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                              EXP_{item.id}
                            </span>
                            <h4 className="text-white font-bold text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 leading-tight">
                              {item.title}
                            </h4>
                        </div>

                        {/* Corner Accent */}
                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primary">
                            <ExternalLink size={12} />
                        </div>
                      </div>
                  ))}
                </div>
            </div>
          </section>

          {/* About / Philosophy Section */}
          <section id={NavLink.ABOUT} className="py-32 relative z-10">
            <div className="max-w-[1200px] mx-auto px-6">
              <div className="max-w-3xl">
                <div className="space-y-8 text-center md:text-left">
                    <div className="flex flex-col md:items-start items-center">
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">PHILOSOPHY</h2>
                      <div className="w-12 h-1 bg-primary"></div>
                    </div>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      Design is no longer just about pixels; it's about defining the relationship between biological and artificial intelligence. 
                      My work focuses on creating transparent, ethical, and highly efficient interfaces that reduce cognitive load while increasing capability.
                    </p>
                    <p className="text-gray-400 leading-relaxed font-light">
                      With a background in cognitive science and industrial design, I approach digital products as tools for thought—extensions of the human mind.
                    </p>
                    
                    <div className="pt-8 grid grid-cols-3 gap-8 border-t border-white/10">
                      <div className="flex flex-col items-center md:items-start">
                          <span className="text-3xl font-bold text-white">5+</span>
                          <span className="text-[10px] text-gray-500 font-mono uppercase tracking-widest mt-1">Years</span>
                      </div>
                      <div className="flex flex-col items-center md:items-start">
                          <span className="text-3xl font-bold text-white">30+</span>
                          <span className="text-[10px] text-gray-500 font-mono uppercase tracking-widest mt-1">Projects</span>
                      </div>
                      <div className="flex flex-col items-center md:items-start">
                          <span className="text-3xl font-bold text-white">12</span>
                          <span className="text-[10px] text-gray-500 font-mono uppercase tracking-widest mt-1">Awards</span>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {currentView === NavLink.FIELD_NOTES && (
        <div className="pt-32 pb-24 px-6 max-w-[1200px] mx-auto min-h-screen animate-fade-in-up w-full">
          <div className="max-w-4xl">
            <div className="mb-16 border-b border-white/10 pb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                <span className="text-primary font-mono text-sm tracking-[0.3em] uppercase">Field Notes</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
                THOUGHTS &<br />OBSERVATIONS
              </h1>
              <p className="text-gray-400 max-w-xl leading-relaxed">
                A collection of raw ideas, design theory, and industry observations. 
                Updated sporadically as I explore new frontiers in digital product design.
              </p>
            </div>

            <div className="space-y-0">
              {FIELD_NOTES.map((note) => (
                <div 
                  key={note.id} 
                  className="group py-8 border-b border-white/5 hover:border-white/20 transition-colors cursor-pointer"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
                    <div className="md:col-span-3">
                      <span className="font-mono text-xs text-gray-500 block mb-1">{note.date}</span>
                      <span className="inline-block px-2 py-1 border border-white/10 rounded text-[10px] text-primary font-mono uppercase tracking-wider">
                        {note.category}
                      </span>
                    </div>
                    <div className="md:col-span-8">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                        {note.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        {note.preview}
                      </p>
                      <div className="flex items-center gap-2 text-xs font-mono text-white/50 group-hover:text-white transition-colors uppercase tracking-widest">
                        Read Entry <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-black pt-24 pb-6 relative z-10 border-t border-white/10 overflow-hidden mt-auto w-full">
        <div className="max-w-[1200px] mx-auto px-6">
          
          <div className="flex flex-col md:flex-row justify-between items-start mb-24 md:mb-32 gap-12">
             {/* Call to action / Header */}
             <div>
               <h3 className="text-2xl md:text-3xl font-normal text-white tracking-tight">Experience the unknown</h3>
             </div>

             {/* Navigation Links */}
             <div className="flex gap-16 md:gap-24">
                <div className="flex flex-col gap-6">
                   <span className="text-sm font-medium text-white">Sitemap</span>
                   <nav className="flex flex-col gap-3">
                      <button onClick={() => handleNavigate(NavLink.HOME)} className="text-sm text-gray-500 hover:text-white text-left transition-colors">Home</button>
                      <button onClick={() => scrollToSection(NavLink.WORK)} className="text-sm text-gray-500 hover:text-white text-left transition-colors">Work</button>
                      <button onClick={() => scrollToSection(NavLink.SPARE)} className="text-sm text-gray-500 hover:text-white text-left transition-colors">Spare Parts</button>
                      <button onClick={() => handleNavigate(NavLink.FIELD_NOTES)} className="text-sm text-gray-500 hover:text-white text-left transition-colors">Field Notes</button>
                   </nav>
                </div>
                <div className="flex flex-col gap-6">
                   <span className="text-sm font-medium text-white">Connect</span>
                   <nav className="flex flex-col gap-3">
                      <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Twitter</a>
                      <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">LinkedIn</a>
                      <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">GitHub</a>
                      <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Email</a>
                   </nav>
                </div>
             </div>
          </div>
        </div>

        {/* Huge UNKNOWN Text with Parallax - Full Width Container */}
        <div className="w-full px-4 md:px-8">
          <div className="relative w-full flex justify-between leading-none select-none pointer-events-none">
            {['U', 'N', 'K', 'N', 'O', 'W', 'N'].map((letter, i) => (
               <span 
                 key={i} 
                 className="text-[13.5vw] font-bold text-white tracking-tighter"
                 style={{
                    // Parallax effect: letters move at slightly different rates
                    transform: `translateY(${ (i % 2 === 0 ? 10 : -10) + (scrollY * 0.02 * (i % 2 === 0 ? 1 : -1)) }px)`
                 }}
               >
                 {letter}
               </span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
