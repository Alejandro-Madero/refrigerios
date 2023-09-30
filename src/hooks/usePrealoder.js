import { useEffect } from 'react';

const usePreloader = () => {
  useEffect(() => {
    const preloaderEl = document.querySelector('.preloader-container');

    setTimeout(() => {
      preloaderEl.classList.add('hidden');
      setTimeout(() => {
        preloaderEl.remove();
      }, 2000);
    }, 800);
  }, []);
};

export default usePreloader;
