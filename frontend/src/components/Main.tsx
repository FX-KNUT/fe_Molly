import { faGear, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/main/_main.module.scss";

const Main = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.user_container}>
        <button className={styles.login_button}>
          <FontAwesomeIcon icon={faUser} />
        </button>
        <button className={styles.setting_button}>
          <FontAwesomeIcon icon={faGear} />
        </button>
      </div>
      <div className={styles.game_container}>
        <button className={styles.start_button}>Start !</button>
        <button className={styles.howto_button}>How To Play</button>
      </div>
    </div>
  );
};

export default Main;
