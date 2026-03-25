import { useState, useEffect } from "react";

/**
 * Hook personalizzato per tracciare la sezione attiva durante lo scroll
 * Utilizza Intersection Observer API per determinare quale sezione è visibile
 *
 * @param {string[]} sectionIds - Array degli ID delle sezioni da tracciare
 * @param {number} offset - Offset in pixel dal top della viewport (default: 100)
 * @returns {string} - ID della sezione attualmente attiva
 */
const useScrollSpy = (sectionIds, offset = 100) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    // Funzione per determinare quale sezione è in viewport
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      // Itera sulle sezioni dall'ultima alla prima
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);

        if (section) {
          const sectionTop = section.offsetTop;

          // Se lo scroll è oltre l'inizio della sezione, è quella attiva
          if (scrollPosition >= sectionTop) {
            setActiveSection(sectionIds[i]);
            return;
          }
        }
      }

      // Se nessuna sezione è attiva, usa la prima
      if (sectionIds.length > 0) {
        setActiveSection(sectionIds[0]);
      }
    };

    // Aggiungi listener per lo scroll
    window.addEventListener("scroll", handleScroll);

    // Chiamata iniziale per impostare la sezione attiva
    handleScroll();

    // Cleanup del listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds, offset]);

  return activeSection;
};

export default useScrollSpy;
