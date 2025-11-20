
import React, { useState, useRef, useEffect } from 'react';
import { Project } from '../types';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Sizing state
  const [windowWidth, setWindowWidth] = useState(0);
  
  // Drag state
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const startXRef = useRef(0);
  
  // Constants
  const GAP = 24; // 24px gap between slides
  const MAX_WIDTH = 1200;
  const MOBILE_BREAKPOINT = 768;
  
  // Update window width
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    // Set initial width
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < MOBILE_BREAKPOINT;

  // Calculate slide dimensions
  const getSlideWidth = () => {
    if (windowWidth === 0) return 0;
    // Slide should be max 1200px, or window width minus standard padding (48px total)
    return Math.min(windowWidth - 48, MAX_WIDTH);
  };

  const slideWidth = getSlideWidth();
  // 4:5 ratio (1.25) for mobile, 16:9 ratio (0.5625) for desktop
  const slideHeight = slideWidth * (isMobile ? 1.25 : 0.5625);

  // Calculate transform to center the current slide
  // Logic: Center of Viewport - Center of Slide - (SlideWidth + Gap) * Index
  const getTransform = () => {
    if (windowWidth === 0) return 0;
    const centerOffset = (windowWidth - slideWidth) / 2;
    const slideShift = currentSlide * (slideWidth + GAP);
    return centerOffset - slideShift + dragOffset;
  };
  
  const nextSlide = () => {
    if (isAnimating || currentSlide >= project.images.length - 1) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => prev + 1);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating || currentSlide <= 0) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => prev - 1);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Drag Handlers
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (isAnimating) return;
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    startXRef.current = clientX;
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const diff = clientX - startXRef.current;
    setDragOffset(diff);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const threshold = slideWidth * 0.15; // Drag 15% to switch
    
    if (dragOffset < -threshold && currentSlide < project.images.length - 1) {
      nextSlide();
    } else if (dragOffset > threshold && currentSlide > 0) {
      prevSlide();
    }
    
    setDragOffset(0);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleDragEnd();
    }
  };

  return (
    <div className="w-full flex flex-col gap-12 mb-24">
      
      {/* Text Content - WRAPPED in max-w container to align with page grid */}
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
          
          {/* Left Column: Title & Category */}
          <div className="md:col-span-5">
              <div className="inline-block px-3 py-1 border border-white/10 rounded-full mb-6">
                <span className="text-xs font-mono text-primary uppercase tracking-widest">
                  {project.category}
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
                {project.title}
              </h2>
          </div>

          {/* Right Column: Description & Metadata */}
          <div className="md:col-span-7 pt-2">
               <p className="text-gray-400 text-lg leading-relaxed mb-8">
                 {project.description}
               </p>

               {/* Metadata Line */}
               <div className="flex flex-wrap items-center gap-8 border-t border-white/10 pt-6">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-600 uppercase tracking-widest mb-1">Year</span>
                    <span className="text-xs font-mono text-white">{project.year}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-600 uppercase tracking-widest mb-1">Platforms</span>
                    <span className="text-xs font-mono text-white">{project.platforms.join(', ')}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-600 uppercase tracking-widest mb-1">Tech</span>
                    <span className="text-xs font-mono text-white">{project.tags.join(', ')}</span>
                  </div>
               </div>
          </div>

        </div>
      </div>

      {/* Carousel Container - Breaks out to full width */}
      {/* Uses negative margin logic to break out of parent container while remaining in flow */}
      <div className="relative w-screen left-1/2 -translate-x-1/2 group">
        
        {/* Carousel Viewport */}
        <div 
          className="w-full overflow-visible relative cursor-grab active:cursor-grabbing touch-pan-y select-none"
          style={{ height: slideHeight }}
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
        >
          <div 
            className={`flex h-full items-center will-change-transform ${isDragging ? '' : 'transition-transform duration-500 ease-out'}`}
            style={{
              transform: `translateX(${getTransform()}px)`
            }}
          >
            {project.images.map((img, idx) => (
              <div 
                key={idx}
                className="relative shrink-0 h-full transition-opacity duration-500"
                style={{ 
                  width: `${slideWidth}px`, 
                  marginRight: `${GAP}px`,
                }}
              >
                 <div className="w-full h-full bg-[#050505] relative overflow-hidden rounded-sm">
                    <img 
                      src={img} 
                      alt={`${project.title} - View ${idx + 1}`} 
                      className="w-full h-full object-cover select-none pointer-events-none"
                      draggable={false}
                    />
                    {/* Overlay for inactive slides to darken them */}
                    <div className={`absolute inset-0 bg-black/60 transition-opacity duration-500 pointer-events-none ${idx === currentSlide ? 'opacity-0' : 'opacity-100'}`}></div>
                 </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls - Positioned relative to the active slide (centered in viewport) */}
        {/* We use a container that matches the content max-width to position arrows correctly relative to the content */}
        <div className="absolute bottom-0 w-full pointer-events-none translate-y-[120%]">
            <div className="max-w-[1200px] mx-auto px-6 flex justify-end gap-2">
               <button 
                 onClick={prevSlide}
                 className="w-12 h-12 flex items-center justify-center rounded-full bg-surface border border-white/10 text-white hover:bg-white hover:text-black transition-colors disabled:opacity-20 pointer-events-auto"
                 disabled={currentSlide === 0 || isAnimating}
                 aria-label="Previous slide"
               >
                 <ChevronLeft size={20} />
               </button>
               <button 
                 onClick={nextSlide}
                 className="w-12 h-12 flex items-center justify-center rounded-full bg-surface border border-white/10 text-white hover:bg-white hover:text-black transition-colors disabled:opacity-20 pointer-events-auto"
                 disabled={currentSlide === project.images.length - 1 || isAnimating}
                 aria-label="Next slide"
               >
                 <ChevronRight size={20} />
               </button>
            </div>
        </div>

      </div>
    </div>
  );
};
