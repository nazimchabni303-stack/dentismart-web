export const PhotoScroll = () => {
  const images = [
    "/clinic-photos/photo_1.jpeg",
    "/clinic-photos/photo_2.jpeg",
    "/clinic-photos/photo_3.jpeg",
    "/clinic-photos/photo_4.jpeg",
    "/clinic-photos/photo_5.jpeg",
    "/clinic-photos/photo_6.jpeg",
    "/clinic-photos/photo_7.jpeg",
    "/clinic-photos/photo_8.jpeg",
  ] as const;

  // Technique robuste sans trou ni saut :
  // - On répète la série de base assez de fois pour qu'elle dépasse la
  //   largeur de n'importe quel écran (REPEAT).
  // - On rend cette séquence DEUX fois d'affilée dans UN SEUL flex avec un
  //   gap UNIFORME partout (y compris entre les deux moitiés).
  // - On translate le track de -50% : comme les deux moitiés sont identiques
  //   et que le gap est uniforme, le point d'arrivée est rigoureusement
  //   superposable au point de départ → boucle parfaitement continue.
  const REPEAT = 4;
  const sequence = Array.from({ length: REPEAT }, () => images).flat();
  const track = [...sequence, ...sequence]; // doublé pour le -50%

  return (
    <>
      <style>{`
        @keyframes photo-scroll {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(-50%, 0, 0); }
        }

        .photo-track {
          display: flex;
          align-items: stretch;
          width: max-content;
          gap: 1rem;                 /* gap UNIFORME (mobile) */
          animation: photo-scroll 60s linear infinite;
          will-change: transform;
          transform: translate3d(0, 0, 0);
          backface-visibility: hidden;
        }
        @media (min-width: 768px) {
          .photo-track { gap: 1.5rem; } /* gap UNIFORME (desktop) */
        }

        /* Pause au survol pour laisser regarder une photo (desktop only) */
        @media (hover: hover) {
          .photo-viewport:hover .photo-track {
            animation-play-state: paused;
          }
        }

        .photo-item {
          flex-shrink: 0;
          border-radius: 12px;
          overflow: hidden;
        }

        @media (hover: hover) {
          .photo-item:hover img {
            transform: scale(1.05);
          }
        }

        .photo-item img {
          transition: transform 0.4s ease;
          will-change: auto;
        }

        @media (prefers-reduced-motion: reduce) {
          .photo-track { animation: none; }
        }
      `}</style>

      <div
        className="photo-section w-full py-6 md:py-10 bg-slate-50 dark:bg-[#0b1b33] relative overflow-hidden transition-colors duration-1000"
      >
        {/* Gradients latéraux */}
        <div className="absolute top-0 left-0 bottom-0 w-[8%] bg-gradient-to-r from-slate-50 dark:from-[#0b1b33] to-transparent z-10 pointer-events-none transition-colors duration-1000" />
        <div className="absolute top-0 right-0 bottom-0 w-[8%] bg-gradient-to-l from-slate-50 dark:from-[#0b1b33] to-transparent z-10 pointer-events-none transition-colors duration-1000" />

        {/* Conteneur de défilement */}
        <div className="photo-viewport w-full overflow-hidden py-4">
          <ul className="photo-track">
            {track.map((image, index) => (
              <li
                key={index}
                className="photo-item w-44 h-44 md:w-64 md:h-64 lg:w-72 lg:h-72 shadow-lg"
                aria-hidden={index >= sequence.length ? "true" : undefined}
              >
                <img
                  src={image}
                  alt={`Gallery image ${(index % images.length) + 1}`}
                  className="w-full h-full object-cover"
                  width={600}
                  height={600}
                  loading="eager"
                  decoding="async"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
