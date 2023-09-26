import { useEffect, useState } from 'react';

const useObserver = ({ options, setIsIntersected }) => {
  const [element, setElement] = useState(null);

  useEffect(() => {
    const handleIntersect = (entries, observer) => {
      if (entries[0]?.isIntersecting) {
        setIsIntersected(true);
        observer.unobserve(element);
        observer.disconnect();
      }
    };
    const observer = new IntersectionObserver(handleIntersect, options);

    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [element, options, setIsIntersected]);

  return [setElement];
};
export default useObserver;
