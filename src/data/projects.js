/**
 * Dati dei progetti per la sezione Portfolio
 * Ogni progetto contiene: titolo, descrizione, tecnologie, immagine, link demo e repo
 *
 * [DA SOSTITUIRE] - Sostituisci i placeholder con i tuoi progetti reali
 */

export const projects = [
  {
    id: 1,
    title: "Gaming Hardware Store",
    description:
      "E-commerce completo per componenti gaming con carrello dinamico, filtri avanzati e checkout integrato. Design moderno e responsive ottimizzato per l'esperienza utente.",
    technologies: ["React", "Tailwind CSS", "JavaScript", "LocalStorage"],
    image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    demoLink: "#", // [DA SOSTITUIRE] - Inserisci link demo live
    githubLink: "#", // [DA SOSTITUIRE] - Inserisci link repository GitHub
    featured: true,
  },
  {
    id: 2,
    title: "MetricFlow Dashboard",
    description:
      "Dashboard analytics SaaS con grafici interattivi, metriche in tempo reale e sistema di notifiche. Interfaccia intuitiva per la gestione dei dati business.",
    technologies: ["React", "Chart.js", "Tailwind CSS", "API REST"],
    image: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    demoLink: "#", // [DA SOSTITUIRE] - Inserisci link demo live
    githubLink: "#", // [DA SOSTITUIRE] - Inserisci link repository GitHub
    featured: true,
  },
  {
    id: 3,
    title: "StreamVibe",
    description:
      "Clone Netflix con integrazione API TMDB, ricerca avanzata, lista preferiti e player video. Esperienza streaming fluida con design cinematico.",
    technologies: ["React", "TMDB API", "Tailwind CSS", "React Router"],
    image: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    demoLink: "#", // [DA SOSTITUIRE] - Inserisci link demo live
    githubLink: "#", // [DA SOSTITUIRE] - Inserisci link repository GitHub
    featured: true,
  },
  {
    id: 4,
    title: "La Tavola",
    description:
      "App food delivery per ristorante con menu interattivo, personalizzazione ordini e sistema di prenotazione. Soluzione completa per la ristorazione.",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Form Handling"],
    image: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    demoLink: "#", // [DA SOSTITUIRE] - Inserisci link demo live
    githubLink: "#", // [DA SOSTITUIRE] - Inserisci link repository GitHub
    featured: false,
  },
  {
    id: 5,
    title: "NexTalk",
    description:
      "Chat app real-time con UI moderna, supporto temi dark/light e sistema di notifiche push. Comunicazione istantanea con design elegante.",
    technologies: ["React", "WebSocket", "Tailwind CSS", "Context API"],
    image: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    demoLink: "#", // [DA SOSTITUIRE] - Inserisci link demo live
    githubLink: "#", // [DA SOSTITUIRE] - Inserisci link repository GitHub
    featured: false,
  },
];

/**
 * Dati per le card statistiche nella sezione About
 * [DA SOSTITUIRE] - Aggiorna con i tuoi dati reali
 */
export const stats = [
  {
    id: 1,
    number: "2+",
    label: "Anni di Esperienza",
    icon: "calendar",
  },
  {
    id: 2,
    number: "15+",
    label: "Progetti Completati",
    icon: "folder",
  },
  {
    id: 3,
    number: "∞",
    label: "Caffè Bevuti",
    icon: "coffee",
  },
];

/**
 * Dati per le skill nella sezione Skills
 * [DA SOSTITUIRE] - Aggiorna con le tue competenze reali
 */
export const skills = {
  frontend: [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "TypeScript", level: 75 },
    { name: "HTML5", level: 95 },
    { name: "CSS3", level: 90 },
    { name: "Tailwind CSS", level: 88 },
  ],
  tools: [
    { name: "Git", level: 85 },
    { name: "GitHub", level: 80 },
    { name: "Vite", level: 85 },
    { name: "VS Code", level: 90 },
    { name: "Figma", level: 70 },
  ],
  learning: [
    { name: "Node.js", level: 40 },
    { name: "Next.js", level: 35 },
  ],
};

export default projects;
