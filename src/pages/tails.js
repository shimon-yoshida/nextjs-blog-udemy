import styles from "../styles/Yashima.module.css";

const tails = () => {
  return (
    <>
      <h1>テスト・テスト</h1>
      <div className={styles.typing}>
        <div className={styles.typing_effect}>Yashima Gakuen HighSchool</div>
      </div>

      <div className={styles.transparent_shadow}>
        <div className={styles.margin_right}>
          <div className={`${styles.margin_bottom} ${styles.align_center}`}>box-shadow</div>

          <img
            className={styles.box_shadow}
            src="https://stackdiary.com/wp-content/uploads/2022/02/logo.png"
            alt="box-shadow example (transparent)"
          />
        </div>

        <div>
          <div className={`${styles.margin_bottom} ${styles.align_center}`}>drop-shadow</div>

          <img
            className={styles.drop_shadow}
            src="https://stackdiary.com/wp-content/uploads/2022/02/logo.png"
            alt="drop-shadow example (transparent)"
          />
        </div>
      </div>
    </>
  );
};

export default tails;
