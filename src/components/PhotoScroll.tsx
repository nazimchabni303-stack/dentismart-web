export const PhotoScroll = () => {
  const images = [
    "/assets/gallery-1.png",
    "/assets/gallery-2.png",
    "/assets/gallery-3.png",
    "/assets/treatment.jpg",
  ];

  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <>
      <style>{`
        @keyframes scroll-right {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(-50%, 0, 0); }
        }

        /* 
          CRITICAL: translate3d force la création de la couche GPU
          AVANT que l'élément entre dans la vue.
          Sans ça, le navigateur freeze au moment du scroll.
        */
        .photo-track {
          animation: scroll-right 22s linear infinite;
          will-change: transform;
          transform: translate3d(0, 0, 0); /* pre-promote GPU layer */
          backface-visibility: hidden;
        }

        /*
          contain: strict isole cet élément du reste de la page.
          Les recalculs de layout n'affectent plus les sections voisines.
        */
        .photo-section {
          contain: layout style;
        }

        .photo-item {
          flex-shrink: 0;
          border-radius: 12px;
          overflow: hidden;
        }

        /* Désactiver hover sur mobile pour éviter les lag tactiles */
        @media (hover: hover) {
          .photo-item:hover img {
            transform: scale(1.05);
          }
        }

        .photo-item img {
          transition: transform 0.4s ease;
          will-change: auto; /* Évite l'abus de will-change */
        }
      `}</style>

      <div
        className="photo-section w-full py-6 md:py-10 bg-slate-50 dark:bg-[#0b1b33] relative overflow-hidden transition-colors duration-1000"
      >
        {/* Gradients latéraux */}
        <div className="absolute top-0 left-0 bottom-0 w-[8%] bg-gradient-to-r from-slate-50 dark:from-[#0b1b33] to-transparent z-10 pointer-events-none transition-colors duration-1000" />
        <div className="absolute top-0 right-0 bottom-0 w-[8%] bg-gradient-to-l from-slate-50 dark:from-[#0b1b33] to-transparent z-10 pointer-events-none transition-colors duration-1000" />

        {/* Conteneur de défilement */}
        <div className="w-full overflow-hidden">
          <div className="photo-track flex gap-4 md:gap-6 w-max py-4">
            {duplicatedImages.map((image, index) => (
              <div
                key={index}
                className="photo-item w-44 h-44 md:w-64 md:h-64 lg:w-72 lg:h-72 shadow-lg"
              >
                <img
                  src={image}
                  alt={`Gallery image ${(index % images.length) + 1}`}
                  className="w-full h-full object-cover"
                  loading="eager"
                  decoding="async"
                  fetchPriority={index < 4 ? "high" : "low"}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
