import styles from './Logo.module.css';
import { ReactComponent as Refrigerios } from '../../assets/refrigerios.svg';
import { ReactComponent as Aircraft } from '../../assets/aircraft.svg';

const Logo = ({ classes, children }) => {
  return (
    <div className={`${styles['logo-container']} ${classes}`}>
      {children}
      <Aircraft className={styles.aircraft} />
      <Refrigerios className={styles.logo} />
    </div>
  );
};

export default Logo;
