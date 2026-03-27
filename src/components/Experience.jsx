import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      title: "Freelance Audio/Video Technician & Technical Director",
      company:
        "Tecnoconference, Studiovisio, CST Ciccarelli, Tecnoservice2000, LiveOn",
      period: "2019 - 2026",
      description: [
        "Produzione audio/video professionale per eventi live",
        "Gestione di impianti audio, luci e video per concerti, conferenze e eventi aziendali",
        "Coordinamento tecnico e direzione tecnica per eventi di grandi dimensioni",
        "Installazione e configurazione di attrezzature professionali",
        "Gestione clienti e supporto tecnico in tempo reale",
      ],
    },
    {
      title: "Software Design Project",
      company: "Sapienza Università di Roma",
      period: "2024",
      description: [
        "Progetto di Software Design con focus su OOP (Object-Oriented Programming)",
        "Utilizzo di UML per la modellazione del software",
        "Lavoro di gruppo con sistema di versionamento Git",
        "Sviluppo di applicazioni software seguendo best practices",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Esperienza <span className="text-[#2B6CB0]">Professionale</span>
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-[#222222]"></div>
                )}

                <div className="flex gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 bg-[#2B6CB0]/10 border border-[#2B6CB0]/30 rounded-full flex items-center justify-center">
                    <FaBriefcase className="text-[#2B6CB0]" size={20} />
                  </div>

                  {/* Content */}
                  <div className="flex-grow bg-[#111111] border border-[#222222] rounded-xl p-6 hover:border-[#2B6CB0] transition-colors duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white">
                          {exp.title}
                        </h3>
                        <p className="text-[#2B6CB0] font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-400 text-sm">
                        <FaCalendarAlt />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.description.map((desc, descIndex) => (
                        <li
                          key={descIndex}
                          className="text-gray-400 flex items-start space-x-2"
                        >
                          <span className="text-[#2B6CB0] mt-1.5">•</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
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

export default Experience;
