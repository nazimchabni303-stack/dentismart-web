import { useScrollReveal, useMultiReveal } from '../hooks/useScrollReveal';
import { ReviewStars } from './ReviewCards';

/* Colonne défilante desktop — animation CSS pure */
const TestimonialsColumn = (props: {
  className?: string;
  testimonials: { text: string; name: string; rating: number }[];
  duration?: number;
}) => {
  const duration = props.duration || 25;

  return (
    <div className={props.className} style={{ overflow: 'hidden' }}>
      <style>{`
        @keyframes scroll-up {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(0, -50%, 0); }
        }
        .reviews-track {
          animation: scroll-up ${duration}s linear infinite;
          will-change: transform;
          backface-visibility: hidden;
        }
      `}</style>
      <div className="reviews-track flex flex-col gap-6 pb-6">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex flex-col gap-6">
            {props.testimonials.map((review, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 shadow-md w-full"
              >
                <ReviewStars rating={review.rating} className="text-[#d8bd10] mb-4" />
                <p className="text-slate-600 dark:text-gray-300 italic mb-6">"{review.text}"</p>
                <div className="flex items-center gap-4 mt-5">
                  <div className="w-12 h-12 rounded-full bg-sky-500 flex items-center justify-center text-white font-bold text-xl shadow-[0_0_15px_rgba(14,165,233,0.3)]">
                    {review.name.charAt(0)}
                  </div>
                  <div className="flex flex-col">
                    <div className="font-semibold text-slate-800 dark:text-white tracking-tight leading-5">{review.name}</div>
                    <div className="leading-5 text-sky-500 opacity-80 tracking-tight text-sm mt-1">Patient Vérifié</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export const ReviewsSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: subtitleRef, isVisible: subtitleVisible } = useScrollReveal();
  const { setRef: setCardRef, visible: cardVisible } = useMultiReveal(4);

  const reviews = [
    {
      name: "Amine K.",
      text: "Une clinique exceptionnelle ! L'équipe est très professionnelle et le matériel est à la pointe de la technologie. Le détartrage a été totalement indolore.",
      rating: 5,
    },
    {
      name: "Sarah M.",
      text: "Je recommande vivement DentiSmart. La pose de mes facettes s'est déroulée à merveille, le résultat est naturel et magnifique. Le cabinet est d'une propreté irréprochable.",
      rating: 5,
    },
    {
      name: "Karim B.",
      text: "Excellente prise en charge pour mon traitement Invisalign. L'équipe prend le temps d'expliquer chaque étape. Un accueil très chaleureux.",
      rating: 4.5,
    },
    {
      name: "Nadir D.",
      text: "Des dentistes à l'écoute qui prennent le temps de vous rassurer. Je n'ai plus peur d'aller chez le dentiste grâce à eux !",
      rating: 5,
    },
  ];

  return (
    <section
      id="reviews"
      className="bg-slate-50 dark:bg-[#0b1b33] relative overflow-hidden py-10 md:py-20 transition-colors duration-1000"
      style={{ contain: 'layout style' }}
    >
      {/* Titre */}
      <div className="text-center mb-10 md:mb-16 z-20 relative px-4 pt-4 md:pt-10">
        <h2
          ref={titleRef as React.RefObject<HTMLHeadingElement>}
          className={`text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-slate-800 to-slate-500 dark:from-white dark:to-gray-500 mb-4 md:mb-6 transition-colors duration-700 reveal ${titleVisible ? 'visible' : ''}`}
        >
          Ce que disent nos patients
        </h2>
        <p
          ref={subtitleRef as React.RefObject<HTMLParagraphElement>}
          className={`text-base md:text-xl text-slate-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-700 reveal-fade ${subtitleVisible ? 'visible' : ''}`}
        >
          La satisfaction de nos patients est priorité absolue.
        </p>
      </div>

      {/* Desktop : colonne infinie CSS */}
      <div className="hidden md:flex justify-center h-[600px] overflow-hidden relative max-w-7xl mx-auto px-6">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-50 dark:from-[#0b1b33] to-transparent z-10 pointer-events-none transition-colors duration-700" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-50 dark:from-[#0b1b33] to-transparent z-10 pointer-events-none transition-colors duration-700" />
        <TestimonialsColumn testimonials={reviews} duration={28} className="w-full max-w-[420px] mx-auto" />
      </div>

      {/* Mobile : chaque carte se révèle individuellement */}
      <div className="md:hidden flex flex-col gap-6 px-4 pb-16 w-full max-w-md mx-auto relative z-10">
        {reviews.map((review, index) => (
          <div
            key={`mobile-${index}`}
            ref={setCardRef(index)}
            className={`bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-6 shadow-md relative overflow-hidden reveal ${cardVisible[index] ? 'visible' : ''}`}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_center,_rgba(14,165,233,0.08)_0%,_transparent_70%)] -translate-y-1/2 translate-x-1/2" />
            <ReviewStars rating={review.rating} className="text-[#d8bd10] mb-3 relative z-10" />
            <p className="text-base text-slate-600 dark:text-gray-300 italic mb-5 relative z-10 leading-relaxed">"{review.text}"</p>
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-10 h-10 rounded-full bg-sky-500 flex items-center justify-center text-white font-bold text-lg shadow-[0_0_15px_rgba(14,165,233,0.3)]">
                {review.name.charAt(0)}
              </div>
              <p className="text-slate-800 dark:text-white font-semibold text-lg">{review.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
