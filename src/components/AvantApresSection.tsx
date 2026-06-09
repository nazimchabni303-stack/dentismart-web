import { useState, useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const AvantApresSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: subtitleRef, isVisible: subtitleVisible } = useScrollReveal();
  const { ref: sliderRef, isVisible: sliderVisible } = useScrollReveal();
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (e.buttons === 1) { // Left mouse button pressed
      handleMove(e.clientX);
    }
  };

  return (
    <section
      id="results"
      className="py-12 md:py-20 relative bg-slate-50 dark:bg-[#0b1b33] overflow-hidden transition-colors duration-1000"
      style={{ contain: 'layout style' }}
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-10 md:mb-20">
          <h2
            ref={titleRef as React.RefObject<HTMLHeadingElement>}
            className={`text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-slate-800 to-slate-500 dark:from-white dark:to-gray-500 mb-4 md:mb-6 transition-colors duration-700 reveal ${titleVisible ? 'visible' : ''}`}
          >
            Résultats Avant / Après
          </h2>
          <p
            ref={subtitleRef as React.RefObject<HTMLParagraphElement>}
            className={`text-base md:text-xl text-slate-600 dark:text-gray-400 max-w-2xl mx-auto px-4 transition-colors duration-700 reveal-fade ${subtitleVisible ? 'visible' : ''}`}
          >
            Faites glisser le curseur pour comparer les résultats de nos soins. Un sourire éclatant et naturel vous attend.
          </p>
        </div>

        <div 
          ref={sliderRef as React.RefObject<HTMLDivElement>}
          className={`max-w-4xl mx-auto reveal-scale ${sliderVisible ? 'visible' : ''}`}
        >
          <div 
            ref={containerRef}
            className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-2xl md:rounded-3xl overflow-hidden cursor-ew-resize select-none border border-slate-200 dark:border-white/10 shadow-xl"
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onMouseDown={(e) => handleMove(e.clientX)}
          >
            {/* After Image (Background) */}
            <img
              src="/avant-apres/apres.webp"
              alt="Résultat Après"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            
            {/* Before Image (Foreground, clipped) */}
            <div 
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src="/avant-apres/avant.webp"
                alt="Résultat Avant"
                className="absolute inset-0 w-full h-full object-cover max-w-none"
              />
            </div>
            
            {/* Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center pointer-events-none"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-sky-500 ring-4 ring-white/30 backdrop-blur-sm">
                <ChevronLeft className="w-5 h-5 -mr-1" />
                <ChevronRight className="w-5 h-5 -ml-1" />
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-6 left-6 pointer-events-none">
              <span className="bg-black/50 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide shadow-lg">
                Avant
              </span>
            </div>
            <div className="absolute top-6 right-6 pointer-events-none">
              <span className="bg-sky-500/80 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide shadow-lg">
                Après
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
