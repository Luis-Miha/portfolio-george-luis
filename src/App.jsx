import { motion } from "framer-motion";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <footer className="bg-[#111111] border-t border-[#222222] py-8 text-center text-gray-500">
        <p>
          © {new Date().getFullYear()} George Luis Mihalache. Tutti i diritti
          riservati.
        </p>
      </footer>
    </div>
  );
}

export default App;
