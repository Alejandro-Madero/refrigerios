const Month = ({ value, children }) => {
  return (
    <option key={value} value={value}>
      {children}
    </option>
  );
};

export default Month;
