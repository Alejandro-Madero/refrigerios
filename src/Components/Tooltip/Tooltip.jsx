import styles from "./Tooltip.module.css";

const tooltips = new Map([
  [
    "holidays",
    "Si el turno es feriado y además es domingo (o sábado noche en el caso de que aplique a tu dependencia), débes sumar una unidad a cada uno de los casilleros",
  ],
  [
    "saturdays",
    "En dependencias donde el turno inicie un sábado y finalice un domingo, se abonará un refrigerio simple adicional en concepto de domingo.",
  ],
]);

const Tooltip = ({ children, classes, onClick, type }) => {
  return (
    <div className={`${styles.tooltip} ${classes ?? ""}`} onClick={onClick}>
      {children}
      <p>{tooltips.get(type)}</p>
    </div>
  );
};

export default Tooltip;
