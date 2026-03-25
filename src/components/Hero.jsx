import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiArrowDown, FiDownload } from "react-icons/fi";

/**
 * Componente Hero - Sezione hero con typing effect e particelle animate
 * Include: testo animato, bottoni CTA, foto profilo con bordo animato
 */
const Hero = () => {
  // Array di testi per il typing effect
  const typingTexts = [
    "Ciao, sono George Luis Mihalache",
    "Frontend Developer",
    "React Enthusiast",
  ];

  // Stato per il testo corrente e l'indice del carattere
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState("");

  // Effetto per il typing animation
  useEffect(() => {
    const currentFullText = typingTexts[currentTextIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Fase di scrittura
          if (currentCharIndex < currentFullText.length) {
            setDisplayText(currentFullText.substring(0, currentCharIndex + 1));
            setCurrentCharIndex((prev) => prev + 1);
          } else {
            // Testo completo, pausa prima di cancellare
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          // Fase di cancellazione
          if (currentCharIndex > 0) {
            setDisplayText(currentFullText.substring(0, currentCharIndex - 1));
            setCurrentCharIndex((prev) => prev - 1);
          } else {
            // Passa al testo successivo
            setIsDeleting(false);
            setCurrentTextIndex((prev) => (prev + 1) % typingTexts.length);
          }
        }
      },
      isDeleting ? 50 : 100,
    ); // Velocità diversa per scrittura/cancellazione

    return () => clearTimeout(timeout);
  }, [currentCharIndex, isDeleting, currentTextIndex]);

  // Funzione per scroll alla sezione progetti
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background con gradiente animato */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a]">
        {/* Particelle animate decorative */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary-500/30 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                y: [null, Math.random() * -500],
                opacity: [0.3, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        {/* Cerchio gradiente decorativo */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary-500/20 to-transparent rounded-full blur-3xl"
        />
      </div>

      {/* Contenuto principale */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Foto profilo con bordo animato */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mb-8 mx-auto w-40 h-40 relative"
        >
          {/* Bordo animato */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 via-blue-500 to-purple-500 p-1"
          >
            {/* Placeholder avatar */}
            <div className="w-full h-full rounded-full bg-[#111111] flex items-center justify-center">
              <span className="text-4xl font-bold text-primary-500">GLM</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Testo con typing effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 min-h-[80px] md:min-h-[100px]">
            {displayText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-0.5 h-8 md:h-12 bg-primary-500 ml-1"
            />
          </h1>
        </motion.div>

        {/* Sottotitolo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
        >
          Trasformo idee in esperienze web moderne e interattive. Specializzato
          in React, JavaScript e UI/UX design.
        </motion.p>

        {/* Bottoni CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* Bottone primario - Guarda progetti */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToProjects}
            className="px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg shadow-lg shadow-primary-500/30 transition-colors flex items-center gap-2"
          >
            Guarda i miei progetti
            <FiArrowDown className="animate-bounce" />
          </motion.button>

          {/* Bottone secondario - Scarica CV */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#" // [DA SOSTITUIRE] - Inserisci link al CV PDF
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-primary-500 text-primary-500 hover:bg-primary-500/10 font-semibold rounded-lg transition-colors flex items-center gap-2"
          >
            Scarica CV
            <FiDownload />
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center pt-2"
          >
            <motion.div
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-gray-500 rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
