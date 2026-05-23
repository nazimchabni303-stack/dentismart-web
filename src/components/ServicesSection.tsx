import { useScrollReveal, useMultiReveal } from '../hooks/useScrollReveal';
import { FeatureHighlight } from './FeatureHighlight';
import { Sparkles, ScanFace, Syringe, Microscope } from 'lucide-react';

export const ServicesSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: subtitleRef, isVisible: subtitleVisible } = useScrollReveal();
  const { setRef: setCardRef, visible: cardVisible } = useMultiReveal(4);

  const services = [
    {
      title: "Dentisterie Esthétique",
      icon: <Sparkles className="w-12 h-12 text-sky-500" />,
      features: ["Facettes dentaires sur-mesure", "Blanchiment professionnel", "Sourire hollywoodien"],
    },
    {
      title: "Aligneurs Invisibles",
      icon: <ScanFace className="w-12 h-12 text-sky-400" />,
      features: ["Traitement orthodontique discret", "Confort optimal", "Résultats prévisibles en 3D"],
    },
    {
      title: "Implantologie Avancée",
      icon: <Syringe className="w-12 h-12 text-sky-500" />,
      features: ["Implants haut de gamme", "Chirurgie guidée", "Restauration complète"],
    },
    {
      title: "Soins sous Microscope",
      icon: <Microscope className="w-12 h-12 text-sky-400" />,
      features: ["Précision microscopique", "Traitements radiculaires réussis", "Préservation tissulaire"],
    }
  ];

  return (
    <section
      id="services"
      className="py-12 md:py-20 relative bg-slate-50 dark:bg-[#0b1b33] overflow-hidden transition-colors duration-1000"
      style={{ contain: 'layout style' }}
    >
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,_rgba(14,165,233,0.07)_0%,_transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,_rgba(125,211,252,0.07)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Titre — apparaît en premier */}
        <div className="text-center mb-10 md:mb-16">
          <h2
            ref={titleRef as React.RefObject<HTMLHeadingElement>}
            className={`text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-slate-800 to-slate-500 dark:from-white dark:to-gray-500 mb-4 md:mb-6 leading-tight transition-colors duration-700 reveal ${titleVisible ? 'visible' : ''}`}
          >
            L'Excellence Dentaire
          </h2>
          <p
            ref={subtitleRef as React.RefObject<HTMLParagraphElement>}
            className={`text-base md:text-xl text-slate-600 dark:text-gray-400 max-w-2xl mx-auto px-4 transition-colors duration-700 reveal-fade ${subtitleVisible ? 'visible' : ''}`}
          >
            Nous combinons l'expertise médicale et les technologies de pointe pour vous offrir des soins d'exception.
          </p>
        </div>

        {/* Chaque carte apparaît INDIVIDUELLEMENT quand elle entre dans la vue */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={setCardRef(index)}
              className={`w-full reveal ${cardVisible[index] ? 'visible' : ''}`}
            >
              <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 p-5 md:p-8 rounded-2xl md:rounded-3xl shadow-sm hover:shadow-xl hover:border-sky-200 dark:hover:bg-white/10 transition-shadow duration-300 h-full">
                <FeatureHighlight
                  title={service.title}
                  icon={service.icon}
                  features={service.features.map((f, i) => (
                    <span key={i} className="text-lg text-slate-600 dark:text-gray-300">{f}</span>
                  ))}
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
