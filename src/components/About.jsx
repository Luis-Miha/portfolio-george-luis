import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaUniversity,
  FaSchool,
  FaCertificate,
} from "react-icons/fa";

const About = () => {
  const education = [
    {
      institution: "Sapienza Università di Roma",
      degree: "Ingegneria Informatica",
      period: "2019 - Presente",
      icon: FaUniversity,
    },
    {
      institution: "ITCG Enrico Fermi",
      degree: "Diploma Informatica/Economia",
      period: "2018",
      icon: FaSchool,
    },
  ];

  const certifications = [
    {
      name: "Front-End Development Certificate",
      issuer: "FormaTemp/E-Work",
      year: "2026",
      hours: "240h React.js, Vite, MySQL",
      icon: FaCertificate,
    },
    {
      name: "Cisco Networking Academy",
      issuer: "Cisco",
      year: "2018",
      hours: "",
      icon: FaCertificate,
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Su di <span className="text-[#2B6CB0]">Me</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left - Bio */}
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                Junior Front-End Developer specializzato in{" "}
                <span className="text-[#2B6CB0]">React/Vite/Tailwind</span> con
                background in Ingegneria Informatica alla Sapienza.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                7 anni di esperienza tecnica maturata come freelance nella
                produzione audio/video professionale per eventi live, lavorando
                con aziende leader del settore come Tecnoconference,
                Studiovisio, CST Ciccarelli, Tecnoservice2000 e LiveOn.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Ho completato una certificazione Front-End di{" "}
                <span className="text-[#2B6CB0]">240 ore</span> presso
                FormaTemp/E-Work (2026), approfondendo React.js, Vite e MySQL.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Oltre all'italiano (madrelingua), parlo rumeno (C2), inglese
                (C1) e francese (B1).
              </p>
            </div>

            {/* Right - Education & Certifications */}
            <div className="space-y-8">
              {/* Education */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
                  <FaGraduationCap className="text-[#2B6CB0]" />
                  <span>Istruzione</span>
                </h3>
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <div
                      key={index}
                      className="bg-[#111111] border border-[#222222] rounded-lg p-4 hover:border-[#2B6CB0] transition-colors duration-300"
                    >
                      <div className="flex items-start space-x-3">
                        <edu.icon className="text-[#2B6CB0] mt-1" size={20} />
                        <div>
                          <h4 className="text-white font-medium">
                            {edu.institution}
                          </h4>
                          <p className="text-gray-400">{edu.degree}</p>
                          <p className="text-gray-500 text-sm">{edu.period}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
                  <FaCertificate className="text-[#2B6CB0]" />
                  <span>Certificazioni</span>
                </h3>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="bg-[#111111] border border-[#222222] rounded-lg p-4 hover:border-[#2B6CB0] transition-colors duration-300"
                    >
                      <div className="flex items-start space-x-3">
                        <cert.icon className="text-[#2B6CB0] mt-1" size={20} />
                        <div>
                          <h4 className="text-white font-medium">
                            {cert.name}
                          </h4>
                          <p className="text-gray-400">
                            {cert.issuer} · {cert.year}
                          </p>
                          {cert.hours && (
                            <p className="text-gray-500 text-sm">
                              {cert.hours}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
