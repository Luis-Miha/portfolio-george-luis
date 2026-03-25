import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import useScrollSpy from "../hooks/useScrollSpy";

/**
 * Componente Navbar - Barra di navigazione fissa con glassmorphism
 * Include: logo, link di navigazione, toggle dark/light mode, menu hamburger mobile
 */
const Navbar = () => {
  // Stato per il dark mode (default: dark)
  const [isDark, setIsDark] = useState(true);

  // Stato per il menu mobile
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Stato per tracciare se siamo in scroll
  const [isScrolled, setIsScrolled] = useState(false);

  // ID delle sezioni per lo scroll spy
  const sectionIds = ["hero", "about", "skills", "projects", "contact"];
  const activeSection = useScrollSpy(sectionIds, 100);

  // Effetto per caricare la preferenza dark mode da localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDark(savedTheme === "dark");
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);

  // Effetto per rilevare lo scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Funzione per toggle dark/light mode
  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  // Funzione per scroll smooth a una sezione
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  // Link di navigazione
  const navLinks = [
    { id: "hero", label: "Home" },
    { id: "about", label: "Chi Sono" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Progetti" },
    { id: "contact", label: "Contatti" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/10 dark:bg-[#0a0a0a]/80 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo con iniziali */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0 cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-blue-500 bg-clip-text text-transparent">
              GLM
            </span>
          </motion.div>

          {/* Link di navigazione desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  activeSection === link.id
                    ? "text-primary-500"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.label}
                {/* Indicatore sezione attiva */}
                {activeSection === link.id && (
                  <motion.span
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Toggle dark/light mode e menu mobile */}
          <div className="flex items-center space-x-4">
            {/* Bottone toggle tema */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Toggle dark/light mode"
            >
              {isDark ? (
                <FiSun className="w-5 h-5 text-yellow-400" />
              ) : (
                <FiMoon className="w-5 h-5 text-gray-700" />
              )}
            </motion.button>

            {/* Menu hamburger per mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Toggle menu mobile"
            >
              {isMobileMenuOpen ? (
                <FiX className="w-5 h-5" />
              ) : (
                <FiMenu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#111111]/95 backdrop-blur-lg"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    activeSection === link.id
                      ? "bg-primary-500/20 text-primary-500"
                      : "text-gray-300 hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
