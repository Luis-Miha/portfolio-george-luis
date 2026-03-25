import { useState, useEffect, useRef } from "react";

/**
 * Hook personalizzato per rilevare quando un elemento entra nel viewport
 * Utilizza Intersection Observer API per triggerare animazioni al scroll
 *
 * @param {Object} options - Opzioni per l'Intersection Observer
 * @param {number} options.threshold - Percentuale di visibilità per triggerare (default: 0.1)
 * @param {string} options.rootMargin - Margine attorno al root (default: '0px')
 * @returns {[React.RefObject, boolean]} - Ref da assegnare all'elemento e stato di visibilità
 */
const useIntersection = (options = {}) => {
  const { threshold = 0.1, rootMargin = "0px" } = options;

  // Ref per l'elemento da osservare
  const elementRef = useRef(null);

  // Stato per tracciare se l'elemento è visibile
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    // Se l'elemento non esiste, non fare nulla
    if (!element) return;

    // Crea l'observer con le opzioni specificate
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        // Aggiorna lo stato quando l'elemento entra/esce dal viewport
        if (entry.isIntersecting) {
          setIsVisible(true);

          // Una volta visibile, smetti di osservare (animazione una tantum)
          // Rimuovi questa riga se vuoi che l'animazione si ripeta
          observer.unobserve(element);
        }
      },
      {
        threshold,
        rootMargin,
      },
    );

    // Inizia a osservare l'elemento
    observer.observe(element);

    // Cleanup: smetti di osservare quando il componente si smonta
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin]);

  return [elementRef, isVisible];
};

export default useIntersection;
