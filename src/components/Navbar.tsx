import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'Soins', href: '#services' },
    { name: 'Avant/Après', href: '#results' },
    { name: 'Avis', href: '#reviews' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-4' : 'py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between rounded-full bg-white/80 dark:bg-[#0b1b33]/80 border border-slate-200 dark:border-white/10 backdrop-blur-md px-6 py-3 shadow-xl transition-colors duration-1000">
            {/* Logo */}
            <a href="#home" className="flex items-center">
              <span className="text-2xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-slate-800 via-slate-600 to-sky-500 dark:from-white dark:via-sky-200 dark:to-sky-500 transition-colors duration-1000">
                Denti<span className="text-sky-500">Smart</span>
              </span>
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[15px] sm:text-[16px] font-medium text-slate-600 dark:text-gray-300 hover:text-sky-500 dark:hover:text-white transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-500 transition-all group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex">
              <a
                href="#contact"
                className="flex items-center gap-2 bg-sky-500 text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-sky-600 transition-colors shadow-[0_0_15px_rgba(14,165,233,0.3)]"
              >
                <Phone size={16} />
                <span>0770 03 03 43</span>
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-slate-800 dark:text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white/95 dark:bg-[#0b1b33]/95 backdrop-blur-xl md:hidden pt-28 px-6 transition-colors duration-1000"
          >
            <div className="flex flex-col gap-6 items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-medium text-slate-600 dark:text-gray-300 hover:text-sky-500 dark:hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-2 bg-sky-500 text-white px-8 py-4 rounded-full font-semibold text-lg mt-8 shadow-[0_0_15px_rgba(14,165,233,0.3)]"
              >
                <Phone size={20} />
                <span>0770 03 03 43</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
