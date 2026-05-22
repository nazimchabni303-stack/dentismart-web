import { motion } from 'framer-motion';
import { FeatureHighlight } from './FeatureHighlight';
import { Sparkles, ScanFace, Syringe, Microscope } from 'lucide-react';

export const ServicesSection = () => {
  const services = [
    {
      title: "Dentisterie Esthétique",
      icon: <Sparkles className="w-12 h-12 text-sky-500" />,
      features: [
        "Facettes dentaires sur-mesure",
        "Blanchiment professionnel",
        "Sourire hollywoodien",
      ],
    },
    {
      title: "Aligneurs Invisibles",
      icon: <ScanFace className="w-12 h-12 text-sky-400" />,
      features: [
        "Traitement orthodontique discret",
        "Confort optimal",
        "Résultats prévisibles en 3D",
      ],
    },
    {
      title: "Implantologie Avancée",
      icon: <Syringe className="w-12 h-12 text-sky-500" />,
      features: [
        "Implants haut de gamme",
        "Chirurgie guidée",
        "Restauration complète",
      ],
    },
    {
      title: "Soins sous Microscope",
      icon: <Microscope className="w-12 h-12 text-sky-400" />,
      features: [
        "Précision microscopique",
        "Traitements radiculaires réussis",
        "Préservation tissulaire",
      ],
    }
  ];

  return (
    <section id="services" className="py-12 md:py-20 relative bg-slate-50 dark:bg-[#0b1b33] overflow-hidden transition-colors duration-1000">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-sky-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-sky-300/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-slate-800 to-slate-500 dark:from-white dark:to-gray-500 mb-4 md:mb-6 leading-tight transition-colors duration-1000">
            L'Excellence Dentaire
          </h2>
          <p className="text-base md:text-xl text-slate-600 dark:text-gray-400 max-w-2xl mx-auto px-4 transition-colors duration-1000">
            Nous combinons l'expertise médicale et les technologies de pointe pour vous offrir des soins d'exception.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="w-full"
            >
              <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 p-5 md:p-8 rounded-2xl md:rounded-3xl shadow-sm dark:shadow-none hover:shadow-xl hover:border-sky-200 dark:hover:bg-white/10 transition-all duration-500 h-full">
                <FeatureHighlight
                  title={service.title}
                  icon={service.icon}
                  features={service.features.map((f, i) => <span key={i} className="text-lg text-slate-600 dark:text-gray-300">{f}</span>)}
                  className="p-0 max-w-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
