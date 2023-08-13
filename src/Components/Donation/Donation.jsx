import styles from "./Donation.module.css";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";

const Donation = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={styles.donation}>
      <p>¿Te sirvió y querés colaborar?</p>
      {theme === "dark" ? (
        <a
          href="https://cafecito.app/alemadero"
          rel="noreferrer"
          target="_blank"
        >
          <img
            srcSet="https://cdn.cafecito.app/imgs/buttons/button_6.png 1x, https://cdn.cafecito.app/imgs/buttons/button_6_2x.png 2x, https://cdn.cafecito.app/imgs/buttons/button_6_3.75x.png 3.75x"
            src="https://cdn.cafecito.app/imgs/buttons/button_6.png"
            alt="Invitame un café en cafecito.app"
          />
        </a>
      ) : (
        <a
          href="https://cafecito.app/alemadero"
          rel="noreferrer"
          target="_blank"
        >
          <img
            srcSet="https://cdn.cafecito.app/imgs/buttons/button_5.png 1x, https://cdn.cafecito.app/imgs/buttons/button_5_2x.png 2x, https://cdn.cafecito.app/imgs/buttons/button_5_3.75x.png 3.75x"
            src="https://cdn.cafecito.app/imgs/buttons/button_5.png"
            alt="Invitame un café en cafecito.app"
          />
        </a>
      )}
    </div>
  );
};

export default Donation;
