import styles from "./Input.module.css";
import { useState } from "react";
import { ReactComponent as Info } from "../../assets/info.svg";
import Tooltip from "../Tooltip/Tooltip";

const Input = (props) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const handleShowTooltip = () => setShowTooltip(true);
  const handleHideTooltip = () => setShowTooltip(false);

  return (
    <>
      <label htmlFor={props.id} className={styles.label}>
        {props.label}
        {props.hasTooltip && (
          <Info
            className={styles.info}
            onMouseEnter={handleShowTooltip}
            onMouseLeave={handleHideTooltip}
            onTouchStart={handleShowTooltip}
            onTouchEnd={handleHideTooltip}
          />
        )}
        {showTooltip && (
          <Tooltip classes={styles["input-tooltip"]} type={props.id}></Tooltip>
        )}
      </label>
      <input
        type={props.type}
        className={`${styles.input} ${
          props.errors.length > 0 ? styles.error : ""
        } `}
        id={props.id}
        name={props.id}
        value={props.value}
        min={props.min}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
    </>
  );
};

export default Input;
