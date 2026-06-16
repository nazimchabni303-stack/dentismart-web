import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const LocationSection = () => {
  return (
    <section id="location" className="py-24 bg-white dark:bg-[#0b1b33] relative overflow-hidden transition-colors duration-1000">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-800 dark:text-white tracking-tight">
            Nous <span className="text-sky-500">Trouver</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Notre cabinet est idéalement situé et facilement accessible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1 bg-slate-50 dark:bg-white/5 rounded-3xl p-8 border border-slate-100 dark:border-white/10 shadow-lg flex flex-col justify-center space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="bg-sky-100 dark:bg-sky-500/20 text-sky-500 p-3 rounded-2xl">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 dark:text-white mb-1">Adresse</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  DentiSmart Clinique Dentaire<br />
                  Chéraga, Alger
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-sky-100 dark:bg-sky-500/20 text-sky-500 p-3 rounded-2xl">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 dark:text-white mb-1">Téléphone</h3>
                <a href="tel:0770030343" className="text-slate-600 dark:text-slate-400 hover:text-sky-500 transition-colors">
                  0770 03 03 43
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-sky-100 dark:bg-sky-500/20 text-sky-500 p-3 rounded-2xl">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 dark:text-white mb-1">Horaires</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Samedi - Jeudi: 9h00 - 21h00<br />
                  Vendredi: 14h00 - 22h00
                </p>
              </div>
            </div>
          </motion.div>

          {/* Map Container */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 rounded-3xl overflow-hidden shadow-lg border border-slate-100 dark:border-white/10 h-[400px] lg:h-full relative bg-slate-100 dark:bg-white/5 flex items-center justify-center group"
          >
            <iframe 
              src="https://maps.google.com/maps?q=DentiSmart+clinique+dentaire+Cheraga+Alger&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 z-10"
              title="DentiSmart Localisation"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
