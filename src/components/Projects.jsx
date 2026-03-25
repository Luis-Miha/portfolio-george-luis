import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiFolder } from "react-icons/fi";
import useIntersection from "../hooks/useIntersection";
import { projects } from "../data/projects";

/**
 * Componente Projects - Sezione portfolio con griglia di card progetti
 * Layout: 3 colonne desktop, 1 colonna mobile
 * Ogni card: immagine placeholder, titolo, descrizione, tag tech, bottoni demo/github
 * Hover effect: elevazione + overlay scuro con bottoni in evidenza
 */
const Projects = () => {
  // Hook per animazioni al scroll
  const [sectionRef, isVisible] = useIntersection({ threshold: 0.1 });

  // Varianti per le animazioni
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-4 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        {/* Titolo della sezione */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            I Miei Progetti
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Una selezione dei miei lavori più recenti e significativi. Ogni
            progetto rappresenta una sfida unica e un'opportunità di crescita.
          </p>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Griglia progetti */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative bg-[#111111] border border-gray-800 rounded-2xl overflow-hidden hover:border-primary-500/50 transition-all duration-300"
            >
              {/* Immagine/Placeholder del progetto */}
              <div
                className="h-48 relative overflow-hidden"
                style={{ background: project.image }}
              >
                {/* Overlay scuro al hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {/* Bottone Demo */}
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-primary-500 rounded-full text-white hover:bg-primary-600 transition-colors"
                    aria-label="Vedi demo live"
                  >
                    <FiExternalLink className="w-5 h-5" />
                  </motion.a>

                  {/* Bottone GitHub */}
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/20 backdrop-blur rounded-full text-white hover:bg-white/30 transition-colors"
                    aria-label="Vedi codice su GitHub"
                  >
                    <FiGithub className="w-5 h-5" />
                  </motion.a>
                </div>

                {/* Badge "Featured" per progetti in evidenza */}
                {project.featured && (
                  <div className="absolute top-3 right-3 px-3 py-1 bg-primary-500 text-white text-xs font-semibold rounded-full">
                    Featured
                  </div>
                )}
              </div>

              {/* Contenuto della card */}
              <div className="p-6">
                {/* Icona cartella */}
                <div className="flex items-center justify-between mb-3">
                  <FiFolder className="w-8 h-8 text-primary-500" />

                  {/* Link icon (visibile su mobile) */}
                  <div className="flex gap-3 md:hidden">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-primary-500 transition-colors"
                    >
                      <FiExternalLink className="w-5 h-5" />
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-primary-500 transition-colors"
                    >
                      <FiGithub className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Titolo progetto */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-500 transition-colors">
                  {project.title}
                </h3>

                {/* Descrizione */}
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tag tecnologie */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-800/50 text-gray-400 text-xs font-mono rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottoni Demo e GitHub (desktop) */}
              <div className="hidden md:flex border-t border-gray-800 divide-x divide-gray-800">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 flex items-center justify-center gap-2 text-gray-400 hover:text-primary-500 hover:bg-primary-500/10 transition-colors"
                >
                  <FiExternalLink className="w-4 h-4" />
                  <span className="text-sm font-medium">Demo Live</span>
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 flex items-center justify-center gap-2 text-gray-400 hover:text-primary-500 hover:bg-primary-500/10 transition-colors"
                >
                  <FiGithub className="w-4 h-4" />
                  <span className="text-sm font-medium">GitHub</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">Vuoi vedere altri progetti?</p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#" // [DA SOSTITUIRE] - Inserisci link al tuo GitHub
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary-500 text-primary-500 hover:bg-primary-500/10 font-semibold rounded-lg transition-colors"
          >
            <FiGithub className="w-5 h-5" />
            Vedi tutto su GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
