import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "Nexus Hardware Shop",
      description:
        "E-shop hardware ad alte prestazioni con catalogo prodotti responsive, filtri dinamici e carrello personalizzato.",
      tech: ["React", "Vite", "Tailwind CSS"],
      liveUrl: "https://nexus-hardware-gaming-premium-shop.vercel.app/",
      githubUrl:
        "https://github.com/Luis-Miha/NEXUS-Hardware-Gaming-Premium-Shop",
      previewUrl: "https://nexus-hardware-gaming-premium-shop.vercel.app/",
    },
    {
      title: "La Tavola Restaurant App",
      description:
        "Menu digitale e sistema di ordinazione con gestione dati in tempo reale e UI mobile-first.",
      tech: ["React", "Vite", "Tailwind CSS"],
      liveUrl: "https://la-tavola-three.vercel.app/",
      githubUrl: "https://github.com/Luis-Miha/la-tavola",
      previewUrl: "https://la-tavola-three.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-[#111111]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Progetti <span className="text-[#2B6CB0]">Recenti</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#0a0a0a] border border-[#222222] rounded-xl overflow-hidden hover:border-[#2B6CB0] transition-colors duration-300"
              >
                {/* Preview Container with iframe */}
                <div className="relative h-64 bg-[#1a1a1a] overflow-hidden group">
                  <iframe
                    src={project.previewUrl}
                    title={project.title}
                    className="w-[200%] h-[200%] scale-50 origin-top-left pointer-events-none"
                    style={{
                      border: "none",
                      transform: "scale(0.5)",
                      transformOrigin: "top left",
                      width: "200%",
                      height: "200%",
                    }}
                    sandbox="allow-same-origin"
                  />

                  {/* Overlay with links */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-[#2B6CB0] hover:bg-[#1a4a7a] text-white px-4 py-2 rounded-lg transition-colors duration-200"
                      >
                        <FaExternalLinkAlt />
                        <span>Vai al sito</span>
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 border border-white text-white hover:bg-white hover:text-black px-4 py-2 rounded-lg transition-colors duration-200"
                      >
                        <FaGithub />
                        <span>GitHub</span>
                      </a>
                    </div>
                  </div>

                  {/* Badge */}
                  <div className="absolute top-4 left-4 bg-[#2B6CB0]/90 text-white text-xs px-2 py-1 rounded">
                    Preview
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-[#2B6CB0]/10 text-[#2B6CB0] text-sm px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center space-x-4 mt-4 pt-4 border-t border-[#222222]">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-[#2B6CB0] hover:text-white transition-colors duration-200 text-sm"
                    >
                      <FaExternalLinkAlt size={14} />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      <FaGithub size={14} />
                      <span>Codice</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
