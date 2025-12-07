import { useEffect, useRef } from 'react';

export const useScrollEffect = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observerRef.current = observer;

    const observeAll = () => {
      const elements = document.querySelectorAll('.fade-in-up');
      elements.forEach((el) => {
        // avoid re-observing elements
        try {
          observer.observe(el);
        } catch (e) {
          /* ignore already-observed errors */
        }
      });
    };

    observeAll();

    // Watch for dynamically added elements (route changes, lazy load, etc.)
    const mo = new MutationObserver((mutations) => {
      mutations.forEach((m) => {
        m.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;
          if (node.classList && node.classList.contains('fade-in-up')) {
            observer.observe(node);
          }
          // also check descendants
          const descendants = node.querySelectorAll && node.querySelectorAll('.fade-in-up');
          if (descendants && descendants.length) {
            descendants.forEach((d) => observer.observe(d));
          }
        });
      });
    });

    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      mo.disconnect();
    };
  }, []);

  return observerRef;
};