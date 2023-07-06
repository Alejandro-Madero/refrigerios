const Input = (props) => {
  return (
    <>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        className={props.classes}
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
