import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(43,108,176,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(43,108,176,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2B6CB0]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#2B6CB0]/5 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-[#2B6CB0]/10 border border-[#2B6CB0]/20 rounded-full px-4 py-2">
              <span className="w-2 h-2 bg-[#2B6CB0] rounded-full animate-pulse"></span>
              <span className="text-[#2B6CB0] text-sm font-medium">
                Disponibile per nuove opportunità
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Ciao, sono{" "}
              <span className="text-[#2B6CB0]">George Luis Mihalache</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 font-light">
              Junior Front-End Developer{" "}
              <span className="text-[#2B6CB0]">| React · Vite · Node.js</span>
            </p>

            <div className="flex items-center space-x-2 text-gray-400">
              <FaMapMarkerAlt />
              <span>Roma, Italia</span>
            </div>

            <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
              Specializzato in React/Vite/Tailwind con background in Ingegneria
              Informatica alla Sapienza. 7 anni di esperienza tecnica come
              freelance nella produzione audio/video professionale per eventi
              live.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                className="inline-flex items-center space-x-2 bg-[#2B6CB0] hover:bg-[#1a4a7a] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                <span>Contattami</span>
                <FaArrowRight />
              </a>
              <a
                href="#"
                className="inline-flex items-center space-x-2 border-2 border-[#2B6CB0] text-[#2B6CB0] hover:bg-[#2B6CB0] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                <span>Scarica CV</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 pt-4">
              <a
                href="https://github.com/Luis-Miha/portfolio-george-luis"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#111111] border border-[#222222] rounded-lg text-gray-400 hover:text-white hover:border-[#2B6CB0] transition-all duration-200"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/george-luis-mihalache-318058387/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#111111] border border-[#222222] rounded-lg text-gray-400 hover:text-[#2B6CB0] hover:border-[#2B6CB0] transition-all duration-200"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="mailto:Luis_99@hotmail.it"
                className="p-3 bg-[#111111] border border-[#222222] rounded-lg text-gray-400 hover:text-[#2B6CB0] hover:border-[#2B6CB0] transition-all duration-200"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </motion.div>

          {/* Right Content - Code Block */}
          <motion.div variants={itemVariants} className="hidden lg:block">
            <div className="bg-[#111111] border border-[#222222] rounded-xl p-6 shadow-2xl">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-500 text-sm ml-2">portfolio.js</span>
              </div>
              <pre className="text-sm text-gray-300 font-mono overflow-x-auto">
                <code>{`const developer = {
  name: "George Luis Mihalache",
  role: "Junior Front-End Developer",
  location: "Roma, Italia",
  skills: [
    "React.js",
    "Vite",
    "Tailwind CSS",
    "Node.js"
  ],
  passion: "Building beautiful",
  focus: "user experiences"
};

export default developer;`}</code>
              </pre>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
