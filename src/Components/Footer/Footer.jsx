import styles from './Footer.module.css';
import Disclaimer from '../Disclaimer/Disclaimer';
import Donation from '../Donation/Donation';

const Footer = () => {
  return (
    <>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
        preserveAspectRatio='none'
        className={styles.wave}
      >
        <path d='M0,224L48,202.7C96,181,192,139,288,117.3C384,96,480,96,576,112C672,128,768,160,864,181.3C960,203,1056,213,1152,208C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z' />
      </svg>

      <footer className={styles.footer}>
        <div className={styles['footer-content']}>
          <Donation />
          <Disclaimer />
        </div>
      </footer>
    </>
  );
};

export default Footer;
