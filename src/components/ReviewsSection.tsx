import { ReviewStars } from './ReviewCards';
import { motion } from "framer-motion";
import React from "react";

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: { text: string; name: string; rating: number }[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 15,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map((review, i) => (
                <div 
                  className="p-8 rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 shadow-md hover:shadow-lg dark:hover:bg-white/10 transition-all duration-500 w-full" 
                  key={i}
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
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

export const ReviewsSection = () => {
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
    <section id="reviews" className="bg-slate-50 dark:bg-[#0b1b33] relative overflow-hidden py-10 md:py-20 transition-colors duration-1000">
      
      {/* Title Shared */}
      <div className="text-center mb-10 md:mb-16 z-20 relative px-4 pt-4 md:pt-10">
        <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-slate-800 to-slate-500 dark:from-white dark:to-gray-500 mb-4 md:mb-6 transition-colors duration-1000">
          Ce que disent nos patients
        </h2>
        <p className="text-base md:text-xl text-slate-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-1000">
          La satisfaction de nos patients est priorité absolue.
        </p>
      </div>

      {/* Desktop Version: Infinite Scroll Column */}
      <div className="hidden md:flex justify-center h-[600px] overflow-hidden relative max-w-7xl mx-auto px-6">
        {/* Fade masks for smooth entrance/exit */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-50 dark:from-[#0b1b33] to-transparent z-10 pointer-events-none transition-colors duration-1000" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-50 dark:from-[#0b1b33] to-transparent z-10 pointer-events-none transition-colors duration-1000" />
        
        <TestimonialsColumn testimonials={reviews} duration={25} className="w-full max-w-[400px] mx-auto" />
      </div>

      {/* Mobile Version: Animated Stack */}
      <div className="md:hidden flex flex-col gap-6 px-4 pb-16 w-full max-w-md mx-auto relative z-10">
        {reviews.map((review, index) => (
          <motion.div
            key={`mobile-${index}`}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
            className="bg-white dark:bg-gradient-to-br dark:from-white/5 dark:to-transparent border border-slate-200 dark:border-white/10 rounded-2xl p-6 shadow-md dark:shadow-xl relative overflow-hidden transition-all duration-1000"
          >
            {/* Decorative Glow ultra-léger */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_center,_rgba(14,165,233,0.1)_0%,_transparent_70%)] rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <ReviewStars rating={review.rating} className="text-[#d8bd10] mb-3 relative z-10" />
            <p className="text-base text-slate-600 dark:text-gray-300 italic mb-5 relative z-10 leading-relaxed">"{review.text}"</p>
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-10 h-10 rounded-full bg-sky-500 flex items-center justify-center text-white font-bold text-lg shadow-[0_0_15px_rgba(14,165,233,0.3)]">
                {review.name.charAt(0)}
              </div>
              <p className="text-slate-800 dark:text-white font-semibold text-lg">{review.name}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
