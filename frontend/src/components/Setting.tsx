import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/main/_setting.module.scss";

const Setting = () => {
  return (
    <button className={styles.setting_button}>
      <FontAwesomeIcon icon={faGear} />
    </button>
  );
};

export default Setting;
