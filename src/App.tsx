import { ReactLenis } from 'lenis/react';
import { Navbar } from './components/Navbar';
import { ParticleHero } from './components/ParticleHero';
import { ServicesSection } from './components/ServicesSection';
import { PhotoScroll } from './components/PhotoScroll';
import { AvantApresSection } from './components/AvantApresSection';
import { ReviewsSection } from './components/ReviewsSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <ReactLenis root>
      <main className="bg-[#0b1b33] min-h-screen text-white font-sans selection:bg-[#98c0ef]/30 selection:text-white">
        <Navbar />
        
        <div id="home">
          <ParticleHero />
        </div>
        
        <ServicesSection />
        
        <PhotoScroll />

        <AvantApresSection />
        
        <ReviewsSection />

        <Footer />
      </main>
    </ReactLenis>
  );
}

export default App;
