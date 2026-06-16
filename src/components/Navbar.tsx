import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // On home page, use anchor links. On other pages, link back to home with hash.
  const navLinks = isHome
    ? [
        { name: 'Accueil', href: '#home' },
        { name: 'Le Cabinet', href: '#clinic' },
        { name: 'Soins', href: '#services' },
        { name: 'Avant/Après', href: '#results' },
        { name: 'Blog', href: '#blog' },
        { name: 'Avis', href: '#reviews' },
        { name: 'Contact', href: '#location' },
      ]
    : [
        { name: 'Accueil', href: '/' },
        { name: 'Le Cabinet', href: '/#clinic' },
        { name: 'Soins', href: '/#services' },
        { name: 'Avant/Après', href: '/#results' },
        { name: 'Blog', href: '/#blog' },
        { name: 'Avis', href: '/#reviews' },
        { name: 'Contact', href: '/#location' },
      ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);

    // If we're on home and it's an anchor link, scroll to section
    if (isHome && href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const renderLink = (link: { name: string; href: string }, className: string, onClick?: () => void) => {
    // If it's a hash link on the home page, use <a>
    if (link.href.startsWith('#')) {
      return (
        <a
          key={link.name}
          href={link.href}
          onClick={onClick}
          className={className}
        >
          {link.name}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-500 transition-all group-hover:w-full"></span>
        </a>
      );
    }

    // If it has a hash (like /#services), use Link to navigate then scroll
    if (link.href.includes('#')) {
      return (
        <Link
          key={link.name}
          to={link.href}
          onClick={onClick}
          className={className}
        >
          {link.name}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-500 transition-all group-hover:w-full"></span>
        </Link>
      );
    }

    // Regular Link
    return (
      <Link
        key={link.name}
        to={link.href}
        onClick={onClick}
        className={className}
      >
        {link.name}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-500 transition-all group-hover:w-full"></span>
      </Link>
    );
  };

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
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-slate-800 via-slate-600 to-sky-500 dark:from-white dark:via-sky-200 dark:to-sky-500 transition-colors duration-1000">
                Denti<span className="text-sky-500">Smart</span>
              </span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) =>
                renderLink(
                  link,
                  "text-[15px] sm:text-[16px] font-medium text-slate-600 dark:text-gray-300 hover:text-sky-500 dark:hover:text-white transition-colors relative group",
                  () => handleNavClick(link.href)
                )
              )}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex">
              <a
                href="tel:0770030343"
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white/98 dark:bg-[#0b1b33]/98 backdrop-blur-3xl md:hidden flex flex-col px-6 transition-colors duration-500"
          >
            {/* Center content vertically but allow scrolling if needed */}
            <div className="flex flex-col h-full overflow-y-auto pt-32 pb-8">
              <div className="flex flex-col gap-6 w-full max-w-sm mx-auto my-auto">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4, ease: "easeOut" }}
                  >
                    {renderLink(
                      link,
                      "block w-full text-center py-3 text-3xl font-bold text-slate-800 dark:text-gray-100 hover:text-sky-500 dark:hover:text-sky-400 transition-colors",
                      () => handleNavClick(link.href)
                    )}
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="mt-12 flex flex-col gap-5 w-full max-w-sm mx-auto"
              >
                <div className="w-16 h-1 bg-sky-500/20 mx-auto rounded-full mb-2"></div>
                <div className="text-center">
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">
                    Prendre rendez-vous
                  </p>
                  <p className="text-xs text-slate-400 dark:text-slate-500 mb-4">
                    Urgence ou consultation simple
                  </p>
                </div>
                <a
                  href="tel:0770030343"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-3 bg-sky-500 text-white w-full py-4 rounded-full font-bold text-lg shadow-[0_8px_30px_rgba(14,165,233,0.3)] hover:bg-sky-600 transition-all hover:scale-[1.02] active:scale-95"
                >
                  <Phone size={22} />
                  <span>0770 03 03 43</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
