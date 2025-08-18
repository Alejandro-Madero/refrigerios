import { useEffect } from 'react';

const useScroll = (showBtn, setShowBtn) => {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250 && !showBtn) {
        setShowBtn(true);
      }
      if (window.scrollY < 250 && showBtn) {
        setShowBtn(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ showBtn, setShowBtn ]);
};

export default useScroll;
