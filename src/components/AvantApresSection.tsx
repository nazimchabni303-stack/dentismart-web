import { motion } from 'framer-motion';

export const AvantApresSection = () => {
  const images = [
    '/assets/avant-apres-1.webp',
    '/assets/avant-apres-2.webp',
    '/assets/avant-apres-3.webp',
  ];

  return (
    <section id="results" className="py-12 md:py-20 relative bg-white dark:bg-[#0b1b33] overflow-hidden transition-colors duration-1000">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-10 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-slate-800 to-slate-500 dark:from-white dark:to-gray-500 mb-4 md:mb-6 transition-colors duration-1000">
            Résultats Avant / Après
          </h2>
          <p className="text-base md:text-xl text-slate-600 dark:text-gray-400 max-w-2xl mx-auto px-4 transition-colors duration-1000">
            Des sourires éclatants et des dents saines grâce à nos protocoles de détartrage et soins esthétiques avancés.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="group relative rounded-2xl md:rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 shadow-md dark:shadow-none aspect-[4/3] md:aspect-square transition-all duration-1000"
            >
              <img 
                src={img} 
                alt="Résultat avant après détartrage" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                <span className="text-white font-medium px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                  Résultat DentiSmart
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
