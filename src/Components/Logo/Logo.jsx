import { ReactComponent as Refrigerios } from '../../assets/refrigerios.svg';
import styles from './Logo.module.css';

const Logo = ({ classes }) => {
  return (
    <div className={`${styles['logo-container']} ${classes}`}>
      <Refrigerios className={styles.logo} />
    </div>
  );
};

export default Logo;
