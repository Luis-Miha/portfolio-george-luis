import { motion } from "framer-motion";
import {
  FaReact,
  FaCss3,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaDatabase,
  FaJava,
  FaPython,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiVite,
  SiBootstrap,
  SiCypress,
  SiPostman,
  SiMysql,
} from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      title: "Framework & Librerie",
      skills: [
        { name: "React.js", icon: FaReact, level: 90 },
        { name: "Tailwind CSS", icon: SiTailwindcss, level: 90 },
        { name: "Bootstrap 5", icon: SiBootstrap, level: 80 },
      ],
    },
    {
      title: "Tecnologie Core",
      skills: [
        { name: "JavaScript ES6+", icon: FaJs, level: 90 },
        { name: "HTML5", icon: FaHtml5, level: 95 },
        { name: "CSS3", icon: FaCss3, level: 90 },
        { name: "Flexbox & Grid", icon: FaCss3, level: 85 },
      ],
    },
    {
      title: "Build Tools & Testing",
      skills: [
        { name: "Vite", icon: SiVite, level: 90 },
        { name: "NPM", icon: FaJs, level: 85 },
        { name: "Cypress", icon: SiCypress, level: 70 },
        { name: "Postman", icon: SiPostman, level: 80 },
      ],
    },
    {
      title: "Gestione Dati & Backend",
      skills: [
        { name: "RESTful API", icon: FaDatabase, level: 80 },
        { name: "JSON", icon: FaJs, level: 90 },
        { name: "Node.js", icon: FaNodeJs, level: 75 },
        { name: "MySQL", icon: SiMysql, level: 70 },
      ],
    },
    {
      title: "Linguaggi di Programmazione",
      skills: [
        { name: "Java", icon: FaJava, level: 75 },
        { name: "Python", icon: FaPython, level: 70 },
        { name: "C/C++", icon: FaJs, level: 65 },
      ],
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Git", icon: FaGitAlt, level: 85 },
        { name: "GitHub", icon: FaGitAlt, level: 85 },
        { name: "Docker", icon: FaDocker, level: 60 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-[#111111]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Competenze <span className="text-[#2B6CB0]">Tecniche</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="bg-[#0a0a0a] border border-[#222222] rounded-xl p-6 hover:border-[#2B6CB0] transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold text-white mb-4">
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-3">
                        <skill.icon className="text-[#2B6CB0]" size={18} />
                        <span className="text-gray-300 text-sm">
                          {skill.name}
                        </span>
                      </div>
                      <div className="w-24 h-2 bg-[#222222] rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-[#2B6CB0] rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
