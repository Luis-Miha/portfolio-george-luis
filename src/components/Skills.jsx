import { motion } from "framer-motion";
import {
  FiCode,
  FiTool,
  FiBookOpen,
  FiCpu,
  FiMonitor,
  FiGitBranch,
  FiGithub,
  FiZap,
  FiLayout,
  FiFigma,
} from "react-icons/fi";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiGit,
  SiVite,
  SiNodedotjs,
  SiNextdotjs,
} from "react-icons/si";
import useIntersection from "../hooks/useIntersection";
import { skills } from "../data/projects";

/**
 * Componente Skills - Sezione competenze con barre di progresso animate
 * Divisa in categorie: Frontend, Tools, In arrivo
 * Ogni skill con icona e barra progresso animata al scroll
 */
const Skills = () => {
  // Hook per animazioni al scroll
  const [sectionRef, isVisible] = useIntersection({ threshold: 0.1 });

  // Mapping delle icone per ogni skill
  const skillIcons = {
    React: SiReact,
    JavaScript: SiJavascript,
    TypeScript: SiTypescript,
    HTML5: SiHtml5,
    CSS3: SiCss3,
    "Tailwind CSS": SiTailwindcss,
    Git: SiGit,
    GitHub: FiGithub,
    Vite: SiVite,
    "VS Code": FiMonitor,
    Figma: FiFigma,
    "Node.js": SiNodedotjs,
    "Next.js": SiNextdotjs,
  };

  // Categorie di skills con icone
  const categories = [
    {
      key: "frontend",
      title: "Frontend",
      icon: FiCode,
      description: "Tecnologie per lo sviluppo di interfacce utente",
    },
    {
      key: "tools",
      title: "Strumenti",
      icon: FiTool,
      description: "Strumenti di sviluppo e design",
    },
    {
      key: "learning",
      title: "In Arrivo",
      icon: FiBookOpen,
      description: "Tecnologie che sto imparando",
    },
  ];

  // Varianti per le animazioni
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  // Componente per singola skill con barra progresso
  const SkillBar = ({ skill, index, categoryKey }) => {
    const IconComponent = skillIcons[skill.name] || FiCpu;
    const delay = categoryKey === "learning" ? 0.3 : 0.1;

    return (
      <motion.div variants={itemVariants} className="group">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <motion.div
              whileHover={{ scale: 1.2, rotate: 10 }}
              className="p-2 bg-primary-500/10 rounded-lg group-hover:bg-primary-500/20 transition-colors"
            >
              <IconComponent className="w-5 h-5 text-primary-500" />
            </motion.div>
            <span className="text-gray-300 font-medium">{skill.name}</span>
          </div>
          <span className="text-primary-500 font-mono text-sm">
            {skill.level}%
          </span>
        </div>

        {/* Barra progresso */}
        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={isVisible ? { width: `${skill.level}%` } : {}}
            transition={{
              duration: 1,
              delay: delay + index * 0.1,
              ease: "easeOut",
            }}
            className={`h-full rounded-full ${
              categoryKey === "learning"
                ? "bg-gradient-to-r from-yellow-500 to-orange-500"
                : "bg-gradient-to-r from-primary-500 to-blue-500"
            }`}
          />
        </div>
      </motion.div>
    );
  };

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-4 bg-[#111111]">
      <div className="max-w-6xl mx-auto">
        {/* Titolo della sezione */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Le Mie Skills
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Tecnologie e strumenti che utilizzo per creare esperienze web
            moderne e performanti.
          </p>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Grid delle categorie */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {categories.map((category) => {
            const CategoryIcon = category.icon;
            const categorySkills = skills[category.key];

            return (
              <motion.div
                key={category.key}
                variants={itemVariants}
                className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-6 hover:border-primary-500/30 transition-colors"
              >
                {/* Header della categoria */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary-500/10 rounded-xl">
                    <CategoryIcon className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {category.title}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Lista delle skill */}
                <div className="space-y-4">
                  {categorySkills.map((skill, index) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill}
                      index={index}
                      categoryKey={category.key}
                    />
                  ))}
                </div>

                {/* Badge per "In Arrivo" */}
                {category.key === "learning" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : {}}
                    transition={{ delay: 1 }}
                    className="mt-4 pt-4 border-t border-gray-800"
                  >
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500/10 text-yellow-500 text-sm rounded-full">
                      <FiZap className="w-4 h-4" />
                      In fase di apprendimento
                    </span>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Sezione extra: Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <h3 className="text-xl font-bold text-white mb-6">
            Altre Competenze
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Problem Solving",
              "Team Work",
              "Comunicazione",
              "Creatività",
              "Attenzione ai Dettagli",
              "Apprendimento Continuo",
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-gray-300 hover:border-primary-500/50 hover:text-primary-500 transition-colors cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
