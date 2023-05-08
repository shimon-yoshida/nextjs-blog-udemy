import Bstyles from "../styles/Yashima.module.css";

const BergerCss = () => {
    return (
        <div className={Bstyles.css_dynamic_sidebar}>
        <nav className={Bstyles.nav_test}>
          <a className={`${Bstyles.a_test}`} href="#">
            Menu #1
          </a>
          <a className={`${Bstyles.a_test}`} href="#">
            Menu #2
          </a>
          <a className={`${Bstyles.a_test}`} href="#">
            Menu #3
          </a>
        </nav>

        <div className={Bstyles.site_content}>
          <p className={`${Bstyles.p_test}`}>Also work with Tab selector (for accessibility)</p>
          <p className={`${Bstyles.p_test}`}>Hover over the sidebar</p>
          <a className={`${Bstyles.a_test} text-white`} href="#">
            Menu #1
          </a>
          <a className={`${Bstyles.a_test} text-white`} href="#">
            Menu #2
          </a>
          <a className={`${Bstyles.a_test} text-white`} href="#">
            Menu #3
          </a>
        </div>
      </div>
    );
}
import styles from "../styles/Yashima.module.css";


export default BergerCss;