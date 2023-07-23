import styles from "./Input.module.css";

const Input = (props) => {
  console.log(props.errors);
  return (
    <>
      <label htmlFor={props.id} className={`${styles[`label-${props.theme}`]}`}>
        {props.label}
      </label>
      <input
        type={props.type}
        className={`${styles.input} ${styles[`input-${props.theme}`]} ${
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
