import { useRef, useState } from 'react';
import { useScrollReveal, useMultiReveal } from '../hooks/useScrollReveal';
import { Play, Pause, CheckCircle2, Zap, Shield, Clock } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Application du gel',
    description: 'Un gel révolutionnaire à base de peroxyde est appliqué avec précision sur chaque dent.',
    image: '/flaesh/flaesh_aply_green_gel.webp',
  },
  {
    number: '02',
    title: 'Activation par lumière',
    description: 'La lampe LED bleue haute intensité active le gel et décompose les pigments en profondeur.',
    image: '/flaesh/flaesh_activate_green_gel_with_light.webp',
  },
];

const benefits = [
  { icon: <Zap className="w-5 h-5" />, text: 'Résultats visibles en 1 séance' },
  { icon: <Shield className="w-5 h-5" />, text: 'Sans sensibilité, sans douleur' },
  { icon: <Clock className="w-5 h-5" />, text: 'Séance de 45 à 60 minutes' },
  { icon: <CheckCircle2 className="w-5 h-5" />, text: 'Jusqu\'à 8 teintes plus blanc' },
];

export const FlaeshSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const { ref: badgeRef, isVisible: badgeVisible } = useScrollReveal();
  const { ref: headingRef, isVisible: headingVisible } = useScrollReveal();
  const { ref: subRef, isVisible: subVisible } = useScrollReveal();
  const { ref: videoContainerRef, isVisible: videoVisible } = useScrollReveal();
  const { ref: benefitsRef, isVisible: benefitsVisible } = useScrollReveal();
  const { setRef: setStepRef, visible: stepsVisible } = useMultiReveal(2);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
      setHasStarted(true);
    }
  };

  return (
    <section
      id="flaesh"
      className="relative py-24 md:py-36 overflow-hidden bg-[#f0f6fa] dark:bg-[#07111f] transition-colors duration-1000"
    >
      {/* ── Background decoration ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse_at_top,_rgba(14,165,233,0.12)_0%,_transparent_65%)]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_bottom_right,_rgba(125,211,252,0.08)_0%,_transparent_65%)]" />
        {/* Thin top separator line */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-300/40 dark:via-sky-500/30 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* ── Header ── */}
        <div className="text-center mb-16 md:mb-24">
          <div
            ref={badgeRef as React.RefObject<HTMLDivElement>}
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-200 dark:border-sky-500/30 bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-300 text-sm font-medium mb-6 reveal-fade ${badgeVisible ? 'visible' : ''}`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
            Blanchiment professionnel au cabinet
          </div>

          <h2
            ref={headingRef as React.RefObject<HTMLHeadingElement>}
            className={`text-4xl md:text-6xl font-bold mb-6 reveal ${headingVisible ? 'visible' : ''}`}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-slate-800 to-slate-500 dark:from-white dark:to-gray-400">
              Votre sourire mérite{' '}
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-cyan-400">
              d'éclater
            </span>
          </h2>

          <p
            ref={subRef as React.RefObject<HTMLParagraphElement>}
            className={`text-lg md:text-xl text-slate-500 dark:text-gray-400 max-w-2xl mx-auto reveal-fade ${subVisible ? 'visible' : ''}`}
          >
            Dentismart propose le blanchiment <strong className="text-slate-700 dark:text-gray-200">fläsh.</strong> —
            la technologie d'éclaircissement dentaire professionnelle la plus avancée du marché.
          </p>
        </div>

        {/* ── Main layout : video left + benefits right ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20">

          {/* Video block */}
          <div
            ref={videoContainerRef as React.RefObject<HTMLDivElement>}
            className={`relative reveal ${videoVisible ? 'visible' : ''}`}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-sky-500/10 border border-white/60 dark:border-white/10 group">
              {/* Glow ring */}
              <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-br from-sky-400/30 via-transparent to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" />

              <video
                ref={videoRef}
                src="/flaesh/flaesh_imagefilm_english_1080-1080p-1.mp4"
                className="w-full aspect-square object-cover"
                playsInline
                loop
                preload="metadata"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />

              {/* Overlay + play button */}
              <div
                className={`absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-500 ${hasStarted && isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}
                onClick={togglePlay}
              >
                <button
                  aria-label={isPlaying ? 'Mettre en pause' : 'Lancer la vidéo'}
                  className="w-20 h-20 rounded-full bg-white/90 dark:bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-transform duration-200 cursor-pointer"
                >
                  {isPlaying
                    ? <Pause className="w-8 h-8 text-sky-600" />
                    : <Play className="w-8 h-8 text-sky-600 translate-x-0.5" />
                  }
                </button>
              </div>

              {/* Flaesh logo overlay top-left */}
              <div className="absolute top-4 left-4 z-20">
                <div className="bg-white/90 dark:bg-black/60 backdrop-blur-sm rounded-xl px-3 py-2">
                  <img
                    src="/flaesh/FLAESH_LOGO_GRAU_1.svg"
                    alt="fläsh logo"
                    className="h-6 w-auto opacity-80"
                  />
                </div>
              </div>
            </div>

            {/* Floating key visual pill */}
            <div className="absolute -bottom-6 -right-4 md:-right-8 z-20">
              <div className="bg-white dark:bg-[#0b1b33] border border-slate-200 dark:border-white/10 rounded-2xl shadow-xl p-3 flex items-center gap-3">
                <img
                  src="/flaesh/flaesh_keyvisual_katalog-2.webp"
                  alt="Résultat fläsh"
                  className="w-14 h-14 rounded-xl object-cover"
                />
                <div>
                  <p className="text-xs text-slate-500 dark:text-gray-400 font-medium">Résultat</p>
                  <p className="text-sm font-bold text-slate-800 dark:text-white">Jusqu'à 8 teintes</p>
                  <p className="text-xs text-sky-500 font-semibold">en 1 séance ✓</p>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits block */}
          <div
            ref={benefitsRef as React.RefObject<HTMLDivElement>}
            className={`reveal-right ${benefitsVisible ? 'visible' : ''} delay-200`}
          >
            {/* Flaesh logo large */}
            <div className="mb-8">
              <img
                src="/flaesh/FLAESH_LOGO_GRAU_1.svg"
                alt="fläsh"
                className="h-12 w-auto dark:invert dark:brightness-200 opacity-80"
              />
              <p className="mt-3 text-sky-500 dark:text-sky-400 text-lg font-semibold">
                Prêt à afficher votre plus beau sourire ?
              </p>
            </div>

            <p className="text-slate-600 dark:text-gray-300 text-base leading-relaxed mb-8">
              Votre dentiste propose des soins professionnels d'éclaircissement dentaire directement
              dans le cabinet. La technologie fläsh est sans sensibilité, rapide et donne des
              résultats immédiats visibles dès la première séance.
            </p>

            {/* Benefits list */}
            <ul className="space-y-4 mb-10">
              {benefits.map((b, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-slate-700 dark:text-gray-200"
                  style={{ animationDelay: `${0.1 + i * 0.1}s` }}
                >
                  <span className="flex-shrink-0 w-9 h-9 rounded-full bg-sky-100 dark:bg-sky-500/15 text-sky-600 dark:text-sky-300 flex items-center justify-center">
                    {b.icon}
                  </span>
                  <span className="font-medium">{b.text}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-cyan-400 hover:from-sky-600 hover:to-cyan-500 text-white font-semibold px-7 py-3.5 rounded-full shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Prendre rendez-vous
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* ── Step-by-step process ── */}
        <div className="mt-8">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest text-sky-500 dark:text-sky-400 font-semibold mb-3">Comment ça marche ?</p>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white">
              Le protocole fläsh en 2 étapes
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((step, i) => (
              <div
                key={i}
                ref={setStepRef(i) as (el: HTMLElement | null) => void}
                className={`reveal ${stepsVisible[i] ? 'visible' : ''}`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="group relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-500 hover:-translate-y-1">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    {/* Step number */}
                    <div className="absolute top-4 left-4 text-5xl font-black text-white/20 leading-none select-none">
                      {step.number}
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-6">
                    <span className="text-xs font-bold text-sky-500 uppercase tracking-widest">
                      Étape {step.number}
                    </span>
                    <h4 className="text-lg font-bold text-slate-800 dark:text-white mt-1 mb-2">
                      {step.title}
                    </h4>
                    <p className="text-slate-500 dark:text-gray-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom CTA banner ── */}
        <div className="mt-20 relative rounded-3xl overflow-hidden">
          {/* Background image */}
          <img
            src="/flaesh/FR_LEAFLET_TITEL.webp"
            alt="fläsh résultat sourire"
            className="absolute inset-0 w-full h-full object-cover object-top opacity-30 dark:opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sky-600/90 via-sky-500/80 to-cyan-500/70" />

          <div className="relative z-10 px-8 py-14 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8 text-white">
            <div>
              <img
                src="/flaesh/FLAESH_LOGO_GRAU_1.svg"
                alt="fläsh"
                className="h-8 w-auto invert brightness-200 mb-4 opacity-90"
              />
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Idéal pour compléter votre traitement.
              </h3>
              <p className="text-white/80 text-base max-w-lg">
                Blanchiment avant prothèses, couronnes ou implants — pour un résultat parfaitement harmonieux.
              </p>
            </div>
            <a
              href="#contact"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-sky-600 font-bold px-8 py-4 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-transform duration-200 whitespace-nowrap"
            >
              Réserver ma séance
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
