import { useState } from 'react';
import styles from './ScrollToTop.module.css';
import { ReactComponent as ArrowUp } from '../../assets/up-arrow.svg';
import useScroll from '../../hooks/useScroll';

const ScrollToTop = () => {
  const [showBtn, setShowBtn] = useState(false);

  useScroll(showBtn, setShowBtn);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <ArrowUp
      className={`${styles['scroll-icon']} ${showBtn ? styles.visible : null}`}
      onClick={handleScrollToTop}
    />
  );
};

export default ScrollToTop;
