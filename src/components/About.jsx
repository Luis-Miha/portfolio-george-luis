import { motion } from "framer-motion";
import { FiCalendar, FiFolder, FiCoffee } from "react-icons/fi";
import useIntersection from "../hooks/useIntersection";
import { stats } from "../data/projects";

/**
 * Componente About - Sezione "Chi Sono" con paragrafo e card statistiche
 * Include: testo descrittivo, 3 card con icone animate, illustrazione laterale
 */
const About = () => {
  // Hook per animazioni al scroll
  const [sectionRef, isVisible] = useIntersection({ threshold: 0.2 });

  // Mapping delle icone per le statistiche
  const iconMap = {
    calendar: FiCalendar,
    folder: FiFolder,
    coffee: FiCoffee,
  };

  // Varianti per le animazioni
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        {/* Titolo della sezione */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Chi Sono
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full" />
        </motion.div>

        {/* Contenuto principale */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Testo descrittivo */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-300 leading-relaxed mb-6"
            >
              {/* [DA SOSTITUIRE] - Inserisci il tuo testo personale */}
              Sono un Frontend Developer appassionato di creare esperienze web
              moderne e intuitive. Con una solida base in React e JavaScript,
              trasformo design in codice pulito e performante.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-300 leading-relaxed mb-6"
            >
              {/* [DA SOSTITUIRE] - Inserisci il tuo testo personale */}
              Amo imparare nuove tecnologie e mettermi alla sfida con progetti
              complessi. Quando non sto codando, probabilmente sto esplorando le
              ultime tendenze del web design o bevendo il mio caffè preferito.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-300 leading-relaxed"
            >
              {/* [DA SOSTITUIRE] - Inserisci il tuo testo personale */}
              Attualmente focalizzato su React, TypeScript e architetture
              moderne per applicazioni scalabili. Sempre aperto a nuove
              opportunità e collaborazioni interessanti.
            </motion.p>
          </motion.div>

          {/* Illustrazione laterale - Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden md:flex justify-center"
          >
            <div className="relative w-72 h-72">
              {/* Cerchio di sfondo */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-blue-500/20 rounded-3xl"
              />

              {/* Codice decorativo */}
              <div className="absolute inset-4 bg-[#111111] rounded-2xl p-6 font-mono text-sm overflow-hidden">
                <div className="text-gray-500">// Il mio setup quotidiano</div>
                <div className="text-primary-400 mt-2">
                  const developer = {"{"}
                </div>
                <div className="text-gray-300 ml-4">
                  cafe: <span className="text-green-400">"espresso"</span>,
                </div>
                <div className="text-gray-300 ml-4">
                  editor: <span className="text-green-400">"VS Code"</span>,
                </div>
                <div className="text-gray-300 ml-4">
                  framework: <span className="text-green-400">"React"</span>,
                </div>
                <div className="text-gray-300 ml-4">
                  music: <span className="text-green-400">"lo-fi beats"</span>
                </div>
                <div className="text-primary-400">{"}"}</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Card statistiche */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
        >
          {stats.map((stat) => {
            const IconComponent = iconMap[stat.icon];

            return (
              <motion.div
                key={stat.id}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-[#111111] border border-gray-800 rounded-2xl p-8 text-center hover:border-primary-500/50 transition-colors"
              >
                {/* Icona */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500/10 rounded-full mb-4">
                  <IconComponent className="w-8 h-8 text-primary-500" />
                </div>

                {/* Numero */}
                <motion.h3
                  initial={{ scale: 0 }}
                  animate={isVisible ? { scale: 1 } : {}}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    delay: 0.5 + stat.id * 0.1,
                  }}
                  className="text-4xl font-bold text-white mb-2"
                >
                  {stat.number}
                </motion.h3>

                {/* Label */}
                <p className="text-gray-400 font-medium">{stat.label}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
