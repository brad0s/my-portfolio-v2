import { useEffect, useRef, useState } from 'react';

export const useIntersectionObserver = (options) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction = (entries, observer) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [containerRef, options]);

  return [containerRef, isVisible];
};
