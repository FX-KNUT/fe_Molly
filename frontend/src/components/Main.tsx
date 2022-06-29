import Login from "./Login";
import Start from "./Start";
import Setting from "./Setting";
import styles from "../styles/main/_main.module.scss";

const Main = () => {
  return (
    <div className={styles.main_container}>
      <Start></Start>
      <div>
        <Login></Login>
        <Setting></Setting>
      </div>
    </div>
  );
};

export default Main;
