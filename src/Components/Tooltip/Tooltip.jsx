import styles from './Tooltip.module.css';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeProvider';
import { tooltipMessages } from '../../Utils/tooltipMessages';

const Tooltip = ({ children, classes, onClick, id }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`${styles.tooltip} ${classes ?? ''}`}
      style={theme === 'dark' ? { fontWeight: 600 } : { fontWeight: 500 }}
      onClick={onClick}
    >
      {children}
      <p>{tooltipMessages.get(id)}</p>
    </div>
  );
};

export default Tooltip;
