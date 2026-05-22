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
    <section
      id="services"
      className="py-12 md:py-20 relative bg-slate-50 dark:bg-[#0b1b33] overflow-hidden transition-colors duration-1000"
      style={{ contain: 'layout style' }}
    >
      {/* Dégradés radiaux ultra-légers */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,_rgba(14,165,233,0.07)_0%,_transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,_rgba(125,211,252,0.07)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Titre — sans animation whileInView */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-slate-800 to-slate-500 dark:from-white dark:to-gray-500 mb-4 md:mb-6 leading-tight transition-colors duration-700">
            L'Excellence Dentaire
          </h2>
          <p className="text-base md:text-xl text-slate-600 dark:text-gray-400 max-w-2xl mx-auto px-4 transition-colors duration-700">
            Nous combinons l'expertise médicale et les technologies de pointe pour vous offrir des soins d'exception.
          </p>
        </div>

        {/* Cartes — sans animation whileInView */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="w-full">
              <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 p-5 md:p-8 rounded-2xl md:rounded-3xl shadow-sm dark:shadow-none hover:shadow-xl hover:border-sky-200 dark:hover:bg-white/10 transition-shadow duration-300 h-full">
                <FeatureHighlight
                  title={service.title}
                  icon={service.icon}
                  features={service.features.map((f, i) => <span key={i} className="text-lg text-slate-600 dark:text-gray-300">{f}</span>)}
                  className="p-0 max-w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
