import { Link } from 'react-router-dom';
import { useScrollReveal, useMultiReveal } from '../hooks/useScrollReveal';
import { servicesData } from '../data/servicesData';
import { ChevronRight } from 'lucide-react';

export const ServicesSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: subtitleRef, isVisible: subtitleVisible } = useScrollReveal();
  const { setRef: setCardRef, visible: cardVisible } = useMultiReveal(servicesData.length);

  return (
    <section
      id="services"
      className="py-16 md:py-28 relative bg-slate-50 dark:bg-[#0b1b33] overflow-hidden transition-colors duration-1000"
      style={{ contain: 'layout style' }}
    >
      {/* Background glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,_rgba(14,165,233,0.07)_0%,_transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,_rgba(125,211,252,0.07)_0%,_transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.04)_0%,_transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* ── Header ── */}
        <div className="text-center mb-14 md:mb-20">
          <h2
            ref={titleRef as React.RefObject<HTMLHeadingElement>}
            className={`text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-slate-800 to-slate-500 dark:from-white dark:to-gray-500 mb-4 md:mb-6 leading-tight transition-colors duration-700 reveal ${titleVisible ? 'visible' : ''}`}
          >
            Nos Services Dentaires
          </h2>
          <p
            ref={subtitleRef as React.RefObject<HTMLParagraphElement>}
            className={`text-base md:text-xl text-slate-600 dark:text-gray-400 max-w-2xl mx-auto px-4 transition-colors duration-700 reveal-fade ${subtitleVisible ? 'visible' : ''}`}
          >
            Une prise en charge complète, de la prévention aux soins les plus avancés, avec les dernières technologies.
          </p>
        </div>

        {/* ── Services grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {servicesData.map((service, index) => {
            const isExclusive = index < 3;
            
            return (
            <Link
              to={`/soins/${service.slug}`}
              key={index}
              ref={setCardRef(index) as (el: HTMLElement | null) => void}
              className={`reveal ${cardVisible[index] ? 'visible' : ''} block`}
              style={{ animationDelay: `${index * 0.06}s` }}
            >
              <div className={`group relative rounded-2xl p-6 h-full transition-all duration-400 hover:-translate-y-1 cursor-pointer ${
                isExclusive 
                  ? 'bg-gradient-to-br from-amber-50/50 to-white dark:from-amber-500/5 dark:to-white/[0.04] border-[1.5px] border-amber-300 dark:border-amber-600/60 shadow-[0_0_15px_rgba(251,191,36,0.15)] hover:shadow-[0_0_25px_rgba(251,191,36,0.3)] hover:border-amber-400 dark:hover:border-amber-500' 
                  : 'bg-white dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/[0.08] hover:shadow-xl hover:shadow-sky-500/5 dark:hover:bg-white/[0.07] hover:border-sky-200 dark:hover:border-sky-500/30'
              }`}>
                {/* Exclusive Badge */}
                {isExclusive && (
                  <div className="absolute -top-3 -right-2 bg-gradient-to-r from-yellow-400 to-amber-500 text-amber-950 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full shadow-md z-10 border border-white/40 whitespace-nowrap transform rotate-3 group-hover:rotate-0 transition-transform">
                    Exclusivité Dentismart
                  </div>
                )}

                {/* Gradient accent bar top */}
                <div className={`absolute top-0 left-6 right-6 h-[2px] rounded-full bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl ${service.bgLight} ${service.bgDark} ${service.textColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-3 transition-colors duration-700">
                  {service.title}
                </h3>

                {/* Features list */}
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-500 dark:text-gray-400">
                      <span className={`mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* "En savoir plus" link */}
                <span className={`inline-flex items-center gap-1 text-xs font-semibold ${service.textColor} group-hover:gap-2 transition-all duration-300 mt-auto`}>
                  En savoir plus
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>

                {/* Hover glow */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none`} />
              </div>
            </Link>
          )})}
        </div>

        {/* ── Bottom note ── */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-400 dark:text-gray-500">
            Chaque soin est adapté à vos besoins. Prenez rendez-vous pour un diagnostic personnalisé.
          </p>
        </div>

      </div>
    </section>
  );
};
