import styles from './Tooltip.module.css';
import { tooltipMessages } from '../../Utils/tooltipMessages';

const Tooltip = ({ children, classes, onClick, id }) => {
  return (
    <div className={`${styles.tooltip} ${classes ?? ''}`} onClick={onClick}>
      {children}
      <p>{tooltipMessages.get(id)}</p>
    </div>
  );
};

export default Tooltip;
