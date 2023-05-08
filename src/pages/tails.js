import styles from "../styles/Yashima.module.css";
import Accordion from "@/components/Accordion";
import BergerCss from "@/components/BergerCss";

const tails = () => {
  return (
    <>
      <h1>テスト・テスト</h1>

<div className="animate-fade-in bg-slate-600 w-60 h-60">テスト</div>


<BergerCss>
  <div>テスト</div>
</BergerCss>


      <Accordion open={false} title={'テストタイトル１'}>
      

<text>

あああああああああああああああああああああああああああああああああああああああああああああああああああ
</text>

      </Accordion>

      <Accordion open={false} title={'テストタイトル2'}>aaa</Accordion>
      <Accordion open={false} title={'テストタイトル3'}>ssss</Accordion>
      <div className={styles.css_dynamic_sidebar}>
        <nav className={styles.nav_test}>
          <a className={`${styles.a_test}`} href="#">
            Menu #1
          </a>
          <a className={`${styles.a_test}`} href="#">
            Menu #2
          </a>
          <a className={`${styles.a_test}`} href="#">
            Menu #3
          </a>
        </nav>

        <div className={styles.site_content}>
          <p className={`${styles.p_test}`}>Also work with Tab selector (for accessibility)</p>
          <p className={`${styles.p_test}`}>Hover over the sidebar</p>
          <a className={`${styles.a_test} text-white`} href="#">
            Menu #1
          </a>
          <a className={`${styles.a_test} text-white`} href="#">
            Menu #2
          </a>
          <a className={`${styles.a_test} text-white`} href="#">
            Menu #3
          </a>
        </div>
      </div>

      <div className={styles.typing}>
        <div className={styles.typing_effect}>Yashima Gakuen HighSchool</div>
      </div>

      <div className={styles.transparent_shadow}>
        <div className={styles.margin_right}>
          <div className={`${styles.margin_bottom} ${styles.align_center}`}>
            box-shadow
          </div>

          <img
            className={styles.box_shadow}
            src="https://stackdiary.com/wp-content/uploads/2022/02/logo.png"
            alt="box-shadow example (transparent)"
          />
        </div>

        <div>
          <div className={`${styles.margin_bottom} ${styles.align_center}`}>
            drop-shadow
          </div>

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
