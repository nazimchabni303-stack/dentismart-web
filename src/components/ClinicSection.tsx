import { motion } from 'framer-motion';

// Real clinic photos
const clinicImages = [
  "/clinic-photos/photo_9.jpeg",
  "/clinic-photos/photo_10.jpeg",
  "/clinic-photos/photo_11.jpeg",
  "/clinic-photos/photo_12.jpeg"
];

export const ClinicSection = () => {
  return (
    <section id="clinic" className="py-24 bg-slate-50 dark:bg-[#0b1b33] relative overflow-hidden transition-colors duration-1000">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-800 dark:text-white tracking-tight">
            Découvrez <span className="text-sky-500">Le Cabinet</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Un espace moderne, équipé des dernières technologies pour vous garantir des soins en toute sérénité.
          </p>
        </motion.div>

        {/* CSS Grid for a nice masonry-like or dynamic gallery layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden h-64 md:h-[500px] relative group"
          >
            <div className="absolute inset-0 bg-sky-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            <img 
              src={clinicImages[0]} 
              alt="Accueil du cabinet" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-3xl overflow-hidden h-64 md:h-[238px] relative group"
          >
            <div className="absolute inset-0 bg-sky-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            <img 
              src={clinicImages[1]} 
              alt="Salle de soin" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-3xl overflow-hidden h-64 md:h-[238px] relative group"
          >
            <div className="absolute inset-0 bg-sky-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            <img 
              src={clinicImages[2]} 
              alt="Équipement moderne" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
