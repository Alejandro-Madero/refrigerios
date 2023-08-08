import styles from "./Card.module.css";

const Card = ({ children, classes }) => {
  return <div className={`${styles.card} ${classes ?? ""}`}>{children}</div>;
};

export default Card;
