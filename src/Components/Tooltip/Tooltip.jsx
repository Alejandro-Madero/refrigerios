import styles from './Tooltip.module.css';
import { tooltipMessages } from '../../Utils/tooltipMessages';

const Tooltip = ({ children, classes, onClick, id }) => {
  return (
    <div className={`${styles.tooltip} ${classes ?? ''}`} onClick={onClick}>
      {children}
      {id ? <p>{tooltipMessages.get(id)}</p> : null}
    </div>
  );
};

export default Tooltip;
