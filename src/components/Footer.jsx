import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiHeart } from "react-icons/fi";

/**
 * Componente Footer - Footer del sito portfolio
 * Include: testo "Fatto con ❤️ e React", anno dinamico, link social
 */
const Footer = () => {
  // Anno corrente dinamico
  const currentYear = new Date().getFullYear();

  // Link social nel footer
  const socialLinks = [
    {
      name: "GitHub",
      icon: FiGithub,
      url: "#", // [DA SOSTITUIRE] - Inserisci link GitHub
    },
    {
      name: "LinkedIn",
      icon: FiLinkedin,
      url: "#", // [DA SOSTITUIRE] - Inserisci link LinkedIn
    },
  ];

  return (
    <footer className="py-8 px-4 bg-[#0a0a0a] border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright e crediti */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-gray-400 text-sm"
          >
            <span>Fatto con</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <FiHeart className="w-4 h-4 text-red-500 fill-current" />
            </motion.span>
            <span>e React da George Luis Mihalache</span>
          </motion.div>

          {/* Anno corrente */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-500 text-sm"
          >
            © {currentYear} Tutti i diritti riservati
          </motion.div>

          {/* Link social */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={social.name}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-primary-500 transition-colors"
                  aria-label={social.name}
                >
                  <IconComponent className="w-5 h-5" />
                </motion.a>
              );
            })}
          </motion.div>
        </div>

        {/* Testo aggiuntivo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-4 pt-4 border-t border-gray-800/50 text-center"
        >
          <p className="text-gray-600 text-xs">
            {/* [DA SOSTITUIRE] - Personalizza il testo */}
            Costruito con React, Tailwind CSS e Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
