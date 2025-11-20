
import React, { useState, useEffect } from 'react';
import { NavLink } from '../types';
import { Menu, X, Hexagon } from 'lucide-react';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: NavLink) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (view: NavLink) => {
    setMenuOpen(false);
    onNavigate(view);
  };

  const navItems = [NavLink.HOME, NavLink.FIELD_NOTES];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-6 ${scrolled ? 'bg-background/80 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
        <div 
          onClick={() => handleNavClick(NavLink.HOME)} 
          className="cursor-pointer flex items-center gap-2 group"
        >
          <Hexagon className="w-8 h-8 text-white group-hover:text-primary transition-colors duration-300" strokeWidth={1.5} />
          <span className="font-bold text-xl tracking-tighter text-white">DIGITAL UNKNOWN</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item)}
              className={`text-sm font-mono uppercase tracking-widest transition-colors ${currentView === item ? 'text-primary' : 'text-gray-400 hover:text-white'}`}
            >
              {item.replace('-', ' ')}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white relative w-8 h-8 flex items-center justify-center focus:outline-none z-50" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
           <div className={`absolute transition-all duration-300 transform origin-center ${menuOpen ? 'opacity-0 rotate-180 scale-50' : 'opacity-100 rotate-0 scale-100'}`}>
             <Menu size={24} />
           </div>
           <div className={`absolute transition-all duration-300 transform origin-center ${menuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-50'}`}>
             <X size={24} />
           </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-surface border-b border-white/10 p-6 md:hidden flex flex-col gap-4 backdrop-blur-xl animate-fade-in-up shadow-2xl shadow-black">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item)}
              className={`text-left text-sm font-mono uppercase tracking-widest py-4 border-b border-white/5 last:border-0 ${currentView === item ? 'text-primary' : 'text-gray-300 hover:text-white'}`}
            >
              {item.replace('-', ' ')}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};
