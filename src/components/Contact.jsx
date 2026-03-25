import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin, FiSend, FiMapPin } from "react-icons/fi";
import useIntersection from "../hooks/useIntersection";

/**
 * Componente Contact - Sezione contatti con form e link social
 * Include: form UI (Nome, Email, Messaggio), link social con icone grandi,
 * testo "Aperto a opportunità" con pallino verde pulsante
 */
const Contact = () => {
  // Hook per animazioni al scroll
  const [sectionRef, isVisible] = useIntersection({ threshold: 0.1 });

  // Stato del form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Gestione cambio input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Gestione submit (solo UI, nessun backend)
  const handleSubmit = (e) => {
    e.preventDefault();
    // [DA SOSTITUIRE] - Implementare invio effettivo (EmailJS, Formspree, etc.)
    console.log("Form submitted:", formData);
    alert("Grazie per il messaggio! Ti risponderò al più presto.");
    setFormData({ name: "", email: "", message: "" });
  };

  // Link social
  const socialLinks = [
    {
      name: "GitHub",
      icon: FiGithub,
      url: "#", // [DA SOSTITUIRE] - Inserisci link GitHub
      color: "hover:text-gray-100",
    },
    {
      name: "LinkedIn",
      icon: FiLinkedin,
      url: "#", // [DA SOSTITUIRE] - Inserisci link LinkedIn
      color: "hover:text-blue-400",
    },
    {
      name: "Email",
      icon: FiMail,
      url: "mailto:your@email.com", // [DA SOSTITUIRE] - Inserisci tua email
      color: "hover:text-primary-400",
    },
  ];

  // Varianti per animazioni
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
    <section id="contact" ref={sectionRef} className="py-20 px-4 bg-[#111111]">
      <div className="max-w-6xl mx-auto">
        {/* Titolo della sezione */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Contattami
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Hai un progetto in mente o vuoi semplicemente fare due chiacchiere?
            Non esitare a contattarmi!
          </p>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full mt-4" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12"
        >
          {/* Colonna sinistra: Info e Social */}
          <motion.div variants={itemVariants}>
            {/* Stato disponibilità */}
            <div className="mb-8 p-6 bg-[#0a0a0a] border border-gray-800 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                {/* Pallino verde pulsante */}
                <div className="relative">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                </div>
                <span className="text-green-500 font-semibold">
                  Aperto a opportunità lavorative
                </span>
              </div>
              <p className="text-gray-400">
                {/* [DA SOSTITUIRE] - Personalizza il messaggio */}
                Attualmente disponibile per posizioni full-time, freelance o
                collaborazioni su progetti interessanti.
              </p>
            </div>

            {/* Informazioni di contatto */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-500/10 rounded-lg">
                  <FiMapPin className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">
                    Localizzazione
                  </h4>
                  <p className="text-gray-400">
                    {/* [DA SOSTITUIRE] - Inserisci la tua città */}
                    Italia, disponibile per lavoro remoto
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-500/10 rounded-lg">
                  <FiMail className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email</h4>
                  <a
                    href="mailto:your@email.com" // [DA SOSTITUIRE]
                    className="text-gray-400 hover:text-primary-500 transition-colors"
                  >
                    your@email.com
                  </a>
                </div>
              </div>
            </div>

            {/* Link Social */}
            <div className="mt-8">
              <h4 className="text-white font-semibold mb-4">Seguimi</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 bg-[#0a0a0a] border border-gray-800 rounded-xl text-gray-400 ${social.color} transition-all hover:border-primary-500/50`}
                      aria-label={social.name}
                    >
                      <IconComponent className="w-8 h-8" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Colonna destra: Form */}
          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Campo Nome */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Il tuo nome"
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors"
                />
              </div>

              {/* Campo Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="la.tua@email.com"
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors"
                />
              </div>

              {/* Campo Messaggio */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Messaggio
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Raccontami del tuo progetto..."
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors resize-none"
                />
              </div>

              {/* Bottone Submit */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg shadow-lg shadow-primary-500/30 transition-colors flex items-center justify-center gap-2"
              >
                <FiSend className="w-5 h-5" />
                Invia Messaggio
              </motion.button>
            </form>

            {/* Nota privacy */}
            <p className="mt-4 text-xs text-gray-500 text-center">
              I tuoi dati sono al sicuro. Non condivido le informazioni con
              terze parti.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
