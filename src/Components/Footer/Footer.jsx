import styles from "./Footer.module.css";
import Disclaimer from "../Disclaimer/Disclaimer";
import Donation from "../Donation/Donation";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Donation />
      <Disclaimer />
    </footer>
  );
};

export default Footer;
