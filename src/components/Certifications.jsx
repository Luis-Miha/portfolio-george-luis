import { motion } from "framer-motion";
import { FaCertificate, FaAward } from "react-icons/fa";

const Certifications = () => {
  const certifications = [
    {
      title: "Front-End Development Certificate",
      issuer: "FormaTemp/E-Work",
      year: "2026",
      description: "Corso intensivo di 240 ore su React.js, Vite e MySQL",
      icon: FaCertificate,
    },
    {
      title: "Cisco Networking Academy",
      issuer: "Cisco",
      year: "2018",
      description: "Certificazione in networking fundamentals",
      icon: FaAward,
    },
  ];

  const languages = [
    { language: "Italiano", level: "Madrelingua", code: "C2" },
    { language: "Rumeno", level: "Madrelingua", code: "C2" },
    { language: "Inglese", level: "Avanzato", code: "C1" },
    { language: "Francese", level: "Intermedio", code: "B1" },
  ];

  return (
    <section id="certifications" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Certificazioni & <span className="text-[#2B6CB0]">Lingue</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Certifications */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center space-x-2">
                <FaCertificate className="text-[#2B6CB0]" />
                <span>Certificazioni</span>
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-[#111111] border border-[#222222] rounded-xl p-6 hover:border-[#2B6CB0] transition-colors duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#2B6CB0]/10 border border-[#2B6CB0]/30 rounded-lg flex items-center justify-center">
                        <cert.icon className="text-[#2B6CB0]" size={24} />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">
                          {cert.title}
                        </h4>
                        <p className="text-gray-400 text-sm">
                          {cert.issuer} · {cert.year}
                        </p>
                        <p className="text-gray-500 text-sm mt-1">
                          {cert.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center space-x-2">
                <span className="text-xl">🌐</span>
                <span>Lingue</span>
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {languages.map((lang, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-[#111111] border border-[#222222] rounded-xl p-4 hover:border-[#2B6CB0] transition-colors duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-white font-medium">
                          {lang.language}
                        </h4>
                        <p className="text-gray-400 text-sm">{lang.level}</p>
                      </div>
                      <span className="bg-[#2B6CB0]/10 text-[#2B6CB0] text-sm font-semibold px-3 py-1 rounded-full">
                        {lang.code}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
