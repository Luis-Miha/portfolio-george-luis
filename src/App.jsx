import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

/**
 * App.jsx - Componente principale dell'applicazione portfolio
 * Single Page Application con smooth scroll tra le sezioni
 *
 * Struttura:
 * - Navbar (fissa in alto con glassmorphism)
 * - Hero (sezione introduttiva con typing effect)
 * - About (chi sono con statistiche)
 * - Skills (competenze con barre progresso)
 * - Projects (portfolio con griglia progetti)
 * - Contact (form contatti e social)
 * - Footer (copyright e link)
 */
function App() {
  // Effetto per gestire il dark mode di default
  useEffect(() => {
    // Imposta dark mode di default se non c'è una preferenza salvata
    const savedTheme = localStorage.getItem("theme");
    if (!savedTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      {/* Navbar fissa con navigazione */}
      <Navbar />

      {/* Contenuto principale */}
      <main>
        {/* Sezione Hero con typing effect */}
        <Hero />

        {/* Sezione About con statistiche */}
        <About />

        {/* Sezione Skills con barre progresso */}
        <Skills />

        {/* Sezione Projects con griglia portfolio */}
        <Projects />

        {/* Sezione Contact con form */}
        <Contact />
      </main>

      {/* Footer con copyright */}
      <Footer />
    </div>
  );
}

export default App;
