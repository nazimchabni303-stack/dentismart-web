import { useParams, Link, Navigate } from 'react-router-dom';
import { useScrollReveal, useMultiReveal } from '../hooks/useScrollReveal';
import { servicesData } from '../data/servicesData';
import { ArrowLeft, CheckCircle2, Phone, ChevronRight } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { useEffect } from 'react';

export const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = servicesData.find((s) => s.slug === slug);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();
  const { ref: descRef, isVisible: descVisible } = useScrollReveal();
  const { ref: benefitsRef, isVisible: benefitsVisible } = useScrollReveal();
  const { setRef: setDetailRef, visible: detailsVisible } = useMultiReveal(service?.details.length ?? 2);
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollReveal();

  if (!service) {
    return <Navigate to="/" replace />;
  }

  // Find related services (excluding current)
  const related = servicesData.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="bg-slate-50 dark:bg-[#0b1b33] min-h-screen text-slate-600 dark:text-gray-300 font-sans transition-colors duration-1000">

        {/* ── Hero ── */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src={service.heroImage}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-[#0b1b33]" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Breadcrumb */}
            <div
              ref={heroRef as React.RefObject<HTMLDivElement>}
              className={`reveal-fade ${heroVisible ? 'visible' : ''}`}
            >
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium mb-8 transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Retour à l'accueil
              </Link>

              <div className="flex items-center gap-2 text-white/50 text-sm mb-6">
                <Link to="/" className="hover:text-white/80 transition-colors">Accueil</Link>
                <ChevronRight className="w-3.5 h-3.5" />
                <span className="text-white/80">Services</span>
                <ChevronRight className="w-3.5 h-3.5" />
                <span className="text-white">{service.title}</span>
              </div>
            </div>

            <div className={`reveal ${heroVisible ? 'visible' : ''}`}>
              {/* Icon badge */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} text-white mb-6 shadow-lg`}>
                {service.icon}
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                {service.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/70 max-w-2xl">
                {service.description}
              </p>
            </div>
          </div>
        </section>

        {/* ── Content ── */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6">

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

              {/* Main content — 3 cols */}
              <div className="lg:col-span-3">
                <div
                  ref={descRef as React.RefObject<HTMLDivElement>}
                  className={`reveal ${descVisible ? 'visible' : ''}`}
                >
                  <p className="text-lg md:text-xl text-slate-600 dark:text-gray-300 leading-relaxed mb-12">
                    {service.longDescription}
                  </p>
                </div>

                {/* Detail cards */}
                <div className="space-y-6">
                  {service.details.map((detail, i) => (
                    <div
                      key={i}
                      ref={setDetailRef(i) as (el: HTMLElement | null) => void}
                      className={`reveal ${detailsVisible[i] ? 'visible' : ''}`}
                      style={{ animationDelay: `${i * 0.15}s` }}
                    >
                      <div className="group bg-white dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/[0.08] rounded-2xl p-8 hover:shadow-lg hover:shadow-sky-500/5 dark:hover:bg-white/[0.06] transition-all duration-400">
                        {/* Number badge */}
                        <div className="flex items-center gap-4 mb-4">
                          <span className={`flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${service.color} text-white text-sm font-bold flex items-center justify-center`}>
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                            {detail.title}
                          </h3>
                        </div>
                        <p className="text-slate-500 dark:text-gray-400 leading-relaxed pl-14">
                          {detail.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar — 2 cols */}
              <div className="lg:col-span-2">
                {/* Benefits card */}
                <div
                  ref={benefitsRef as React.RefObject<HTMLDivElement>}
                  className={`sticky top-32 reveal-right ${benefitsVisible ? 'visible' : ''}`}
                >
                  <div className="bg-white dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/[0.08] rounded-2xl p-8">
                    <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-6">
                      Pourquoi choisir Dentismart ?
                    </h3>
                    <ul className="space-y-4 mb-8">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${service.textColor}`} />
                          <span className="text-slate-600 dark:text-gray-300 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#contact"
                      className={`w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r ${service.color} text-white font-semibold px-6 py-3.5 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all duration-300`}
                    >
                      <Phone className="w-4 h-4" />
                      Prendre rendez-vous
                    </a>
                  </div>

                  {/* Image preview card */}
                  <div className="mt-6 rounded-2xl overflow-hidden border border-slate-200/80 dark:border-white/[0.08] shadow-sm">
                    <img
                      src={service.heroImage}
                      alt={service.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Related services ── */}
        <section className="py-16 md:py-20 bg-slate-100/50 dark:bg-[#060e1a] border-t border-slate-200/50 dark:border-white/5 transition-colors duration-1000">
          <div className="max-w-7xl mx-auto px-6">
            <div
              ref={ctaRef as React.RefObject<HTMLDivElement>}
              className={`reveal ${ctaVisible ? 'visible' : ''}`}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-10">
                Découvrez nos autres soins
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {related.map((s) => (
                <Link
                  key={s.slug}
                  to={`/soins/${s.slug}`}
                  className="group bg-white dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/[0.08] rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-sky-500/5 dark:hover:bg-white/[0.06] transition-all duration-400 hover:-translate-y-1"
                >
                  <div className="h-36 overflow-hidden">
                    <img
                      src={s.heroImage}
                      alt={s.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-8 h-8 rounded-lg ${s.bgLight} ${s.bgDark} ${s.textColor} flex items-center justify-center`}>
                        {s.icon}
                      </div>
                      <h3 className="font-bold text-slate-800 dark:text-white text-sm">
                        {s.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-gray-400 line-clamp-2">
                      {s.description}
                    </p>
                    <span className={`inline-flex items-center gap-1 text-xs font-semibold mt-3 ${s.textColor} group-hover:gap-2 transition-all`}>
                      En savoir plus
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};
