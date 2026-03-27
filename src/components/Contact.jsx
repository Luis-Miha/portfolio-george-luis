import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

const Contact = () => {
  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "Luis_99@hotmail.it",
      href: "mailto:Luis_99@hotmail.it",
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "Roma, Italia",
      href: null,
    },
    {
      icon: FaGithub,
      label: "GitHub",
      value: "github.com/Luis-Miha",
      href: "https://github.com/Luis-Miha/portfolio-george-luis",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/george-luis-mihalache",
      href: "https://www.linkedin.com/in/george-luis-mihalache-318058387/",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-[#111111]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Contattami
          </h2>

          <p className="text-gray-400 text-lg mb-12 max-w-2xl">
            Sono sempre disponibile per discutere di nuove opportunità
            professionali. Non esitare a contattarmi per qualsiasi domanda o
            proposta di collaborazione.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-[#0a0a0a] border border-[#222222] rounded-xl p-6 hover:border-[#2B6CB0] transition-colors duration-300 ${
                    info.href ? "cursor-pointer" : ""
                  }`}
                >
                  <a
                    href={info.href}
                    target={
                      info.href?.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      info.href?.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-center space-x-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-[#2B6CB0]/10 border border-[#2B6CB0]/30 rounded-lg flex items-center justify-center">
                      <info.icon className="text-[#2B6CB0]" size={20} />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Contact Form CTA */}
            <div className="bg-[#0a0a0a] border border-[#222222] rounded-xl p-8 flex flex-col justify-center items-center text-center">
              <div className="w-16 h-16 bg-[#2B6CB0]/10 border border-[#2B6CB0]/30 rounded-full flex items-center justify-center mb-6">
                <FaEnvelope className="text-[#2B6CB0]" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Invia un messaggio
              </h3>
              <p className="text-gray-400 mb-6">
                Preferisci inviare un'email direttamente? Scrivi a:
              </p>
              <a
                href="mailto:Luis_99@hotmail.it"
                className="text-[#2B6CB0] text-lg font-semibold hover:underline"
              >
                Luis_99@hotmail.it
              </a>

              <div className="flex items-center space-x-4 mt-8 pt-8 border-t border-[#222222]">
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
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
