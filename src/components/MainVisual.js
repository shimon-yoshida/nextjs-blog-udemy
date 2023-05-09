import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green"; // デフォルトのテーマを読み込んでいます（コアスタイルのみ読み込む設定も可能）
import styles from "../styles/Yashima.module.css";

const MainVisual = () => {
  return (
    <>
      <div className="box md:w-2/3 mx-auto flex justify-center">
        <Splide
          aria-label="お気に入りの写真"
          options={{
            type: "fade",
            autoplay: true,
            rewind: true,
            // width: "100%",
            gap: "1rem",
            arrows: false,
            pauseOnHover: false, // カーソルが乗ってもスクロールを停止させない
            pauseOnFocus: false, // 矢印をクリックしてもスクロールを停止させない
            interval: 5000, // 自動再生の間隔
            speed: 3000, // スライダーの移動時間
          }}
          className="flex justify-center"
        >
          <SplideSlide>
            <img
              src="/images/スライダー1.png"
              alt="Image 1"
              className="animate-fade-in w-full h-auto"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="/images/スライダー2.png"
              alt="Image 2"
              className="w-full h-auto"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="/images/スライダー3.png"
              alt="Image 2"
              className="w-full h-auto"
            />
          </SplideSlide>
        </Splide>
        <div className="center text-white">
          <div className={styles.typing}>
            <p className={`${styles.typing_effect} text-2xl`}>私の居場所がここにある</p>
            {/* <p className={`${styles.typing_effect}`}>私の居場所がここにある</p> */}
          </div>
        </div>
        <div className="center_2 text-white">
          <div className={styles.typing}>
            <div className={styles.typing_effect_2}>
              Yashima Gakuen HighSchool
            </div>
          </div>
        </div>
        {/* <div className={styles.typing}>
          <div className={styles.typing_effect}>Yashima Gakuen HighSchool</div>
        </div> */}
      </div>

      {/* 画像の高さを揃えて表示させるために以下スタイルを適用 */}
      <style jsx="true">{`
        .box {
          position: relative;
        }
        .center {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .center_2 {
          position: absolute;
          top: 85%;
          left: 70%;
          transform: translate(-50%, -50%);
        }
      `}</style>
    </>
  );
};

export default MainVisual;
