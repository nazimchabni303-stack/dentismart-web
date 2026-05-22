import { FeatureHighlight } from './FeatureHighlight';
import { Sparkles, ScanFace, Syringe, Microscope } from 'lucide-react';

export const ServicesSection = () => {
  const services = [
    {
      title: "Dentisterie Esthétique",
      icon: <Sparkles className="w-12 h-12 text-[#98c0ef]" />,
      features: [
        "Facettes dentaires sur-mesure",
        "Blanchiment professionnel",
        "Sourire hollywoodien",
      ],
      align: "left"
    },
    {
      title: "Aligneurs Invisibles",
      icon: <ScanFace className="w-12 h-12 text-[#d8bd10]" />,
      features: [
        "Traitement orthodontique discret",
        "Confort optimal",
        "Résultats prévisibles en 3D",
      ],
      align: "right"
    },
    {
      title: "Implantologie Avancée",
      icon: <Syringe className="w-12 h-12 text-[#98c0ef]" />,
      features: [
        "Implants haut de gamme",
        "Chirurgie guidée",
        "Restauration complète",
      ],
      align: "left"
    },
    {
      title: "Soins sous Microscope",
      icon: <Microscope className="w-12 h-12 text-[#d8bd10]" />,
      features: [
        "Précision microscopique",
        "Traitements radiculaires réussis",
        "Préservation tissulaire",
      ],
      align: "right"
    }
  ];

  return (
    <section id="services" className="py-12 md:py-20 relative bg-[#0b1b33] overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#98c0ef]/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#d8bd10]/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500 mb-4 md:mb-6 leading-tight">
            L'Excellence Dentaire
          </h2>
          <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Nous combinons l'expertise médicale et les technologies de pointe pour vous offrir des soins d'exception.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="w-full">
              <div className="bg-white/5 border border-white/10 p-5 md:p-8 rounded-2xl md:rounded-3xl backdrop-blur-sm hover:bg-white/10 transition-colors duration-500 h-full">
                <FeatureHighlight
                  title={service.title}
                  icon={service.icon}
                  features={service.features.map((f, i) => <span key={i} className="text-lg text-gray-300">{f}</span>)}
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
