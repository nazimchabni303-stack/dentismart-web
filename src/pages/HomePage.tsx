import { ReactLenis } from 'lenis/react';
import { Navbar } from '../components/Navbar';
import { ParticleHero } from '../components/ParticleHero';
import { ServicesSection } from '../components/ServicesSection';
import { PhotoScroll } from '../components/PhotoScroll';
import { AvantApresSection } from '../components/AvantApresSection';
import { ReviewsSection } from '../components/ReviewsSection';
import { Footer } from '../components/Footer';
import { FlaeshSection } from '../components/FlaeshSection';

export const HomePage = () => {
  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.0, syncTouch: false, smoothWheel: true }}>
      <main className="bg-slate-50 dark:bg-[#0b1b33] min-h-screen text-slate-600 dark:text-gray-300 font-sans selection:bg-sky-500/30 selection:text-sky-900 transition-colors duration-1000">
        <Navbar />
        
        <div id="home">
          <ParticleHero />
        </div>
        
        <ServicesSection />
        
        <FlaeshSection />
        
        <PhotoScroll />

        <AvantApresSection />
        
        <ReviewsSection />

        <Footer />
      </main>
    </ReactLenis>
  );
};
