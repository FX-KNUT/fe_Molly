import styles from "../styles/_gameboard.module.scss";
const Gameboard = () => {
  return (
    <div>
      <div className={styles.timebar}>time</div>
      <div className={styles.smf}>smf</div>
      <div className={styles.mole}>
        <div className={styles.border}>1</div>
        <div className={styles.border}>2</div>
        <div className={styles.border}>3</div>
        <div className={styles.border}>4</div>
        <div className={styles.border}>5</div>
        <div className={styles.border}>6</div>
        <div className={styles.border}>7</div>
        <div className={styles.border}>8</div>
        <div className={styles.border}>9</div>
      </div>

      <div className={styles.itemBox}>
        <div className={styles.items}>item1</div>
        <div className={styles.items}>item2</div>
        <div className={styles.items}>item3</div>
        <div className={styles.items}>item4</div>
        <div className={styles.items}>item5</div>
        <div className={styles.items}>item6</div>
      </div>
    </div>
  );
};
export default Gameboard;
