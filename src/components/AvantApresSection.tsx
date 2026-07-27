import { useState, useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ChevronLeft, ChevronRight, Sparkles, Award, CheckCircle2 } from 'lucide-react';

export const AvantApresSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: subtitleRef, isVisible: subtitleVisible } = useScrollReveal();
  const { ref: sliderRef, isVisible: sliderVisible } = useScrollReveal();
  const { ref: galleryRef, isVisible: galleryVisible } = useScrollReveal();
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

        {/* Featured Case & Gallery Below Slider */}
        <div 
          ref={galleryRef as React.RefObject<HTMLDivElement>}
          className={`mt-16 md:mt-24 max-w-6xl mx-auto reveal-fade ${galleryVisible ? 'visible' : ''}`}
        >
          <div className="text-center mb-10 md:mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 dark:bg-sky-500/20 text-sky-600 dark:text-sky-400 font-semibold text-sm mb-4 border border-sky-500/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              <span>Réalisations cliniques en images</span>
            </div>
            <h3 className="text-2xl md:text-4xl font-bold text-slate-800 dark:text-white mb-3">
              D'autres transformations concrètes
            </h3>
            <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
              Découvrez la précision de nos traitements et l'évolution remarquable du sourire de nos patients avant et après leur prise en charge au sein de notre clinique.
            </p>
          </div>

          {/* Featured Card (Uploaded Image) */}
          <div className="mb-10 md:mb-12 bg-white dark:bg-white/5 rounded-3xl p-4 md:p-8 border border-slate-200/80 dark:border-white/10 shadow-xl dark:shadow-2xl backdrop-blur-md transition-all duration-500 hover:shadow-2xl hover:border-sky-500/30">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center">
              <div className="lg:col-span-7 overflow-hidden rounded-2xl relative group bg-slate-900/5 dark:bg-black/20 border border-slate-100 dark:border-white/5">
                <div className="absolute top-4 left-4 z-10 flex gap-2">
                  <span className="bg-sky-500/90 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md backdrop-blur-sm flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> Cas à la une
                  </span>
                </div>
                <img
                  src="/avant-apres/resultat-sourire.jpg"
                  alt="Transformation Avant et Après chez DentiSmart"
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <span className="text-white text-sm font-medium">
                    Photo clinique réelle • DentiSmart Clinique Dentaire
                  </span>
                </div>
              </div>
              <div className="lg:col-span-5 flex flex-col justify-center text-left lg:pl-2">
                <div className="flex items-center gap-2 text-sky-500 font-semibold text-sm uppercase tracking-wider mb-2">
                  <Award className="w-4 h-4" />
                  <span>Excellence Esthétique</span>
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white mb-4 leading-snug">
                  Réhabilitation complète du sourire & Blanchiment
                </h4>
                <p className="text-slate-600 dark:text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                  Grâce à nos protocoles sur mesure, nous corrigeons les imperfections visuelles, les colorations profondes et les légers désalignements pour rendre au sourire tout son éclat et son harmonie naturelle.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-sm text-slate-700 dark:text-gray-300 font-medium">
                      Résultat visible dès les premières séances
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-sm text-slate-700 dark:text-gray-300 font-medium">
                      Respect total de l'émail et de la gencive
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-sm text-slate-700 dark:text-gray-300 font-medium">
                      Esthétique harmonieuse et durable
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Gallery Grid (Détartrage results) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                src: '/avant-apres/detartrage-1.webp',
                title: 'Détartrage en profondeur',
                desc: 'Élimination complète du tartre et polissage professionnel pour des dents saines.',
                tag: 'Détartrage'
              },
              {
                src: '/avant-apres/detartrage-2.webp',
                title: 'Soins des gencives & Éclat',
                desc: 'Retrouvez une hygiène impeccable et prévenez les inflammations gingivales.',
                tag: 'Hygiène'
              },
              {
                src: '/avant-apres/detartrage-3.webp',
                title: 'Nettoyage & Propreté absolue',
                desc: 'Un sourire clarifié et une haleine fraîche grâce aux ultrasons de dernière génération.',
                tag: 'Polissage'
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group bg-white dark:bg-white/5 rounded-2xl overflow-hidden border border-slate-200/80 dark:border-white/10 shadow-lg dark:shadow-xl hover:shadow-2xl hover:border-sky-500/40 transition-all duration-500 flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-900/5 dark:bg-black/20">
                  <span className="absolute top-3 left-3 z-10 bg-black/60 backdrop-blur-md text-white text-xs font-medium px-3 py-1 rounded-full shadow">
                    {item.tag}
                  </span>
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-5 flex flex-col flex-grow justify-between">
                  <div>
                    <h5 className="font-bold text-slate-800 dark:text-white text-base md:text-lg mb-1.5 group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
                      {item.title}
                    </h5>
                    <p className="text-slate-600 dark:text-gray-400 text-xs md:text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

