import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green"; // デフォルトのテーマを読み込んでいます（コアスタイルのみ読み込む設定も可能）

const spride = () => {
  return (
    <>
      <div className="box">
        <Splide
          hasTrack={false}
          aria-label="お気に入りの写真"
          options={{
            type: "fade",
            // speed: 100,
            autoplay: true,
            rewind: true,
            gap: "1rem",
            pauseOnHover: false, // カーソルが乗ってもスクロールを停止させない
            pauseOnFocus: false, // 矢印をクリックしてもスクロールを停止させない
            interval: 5000, // 自動再生の間隔
            speed: 3000, // スライダーの移動時間
            // height:300,
            // breakpoints: {
            //   640: {
            //     // width: "100%",
            //     // height:300,
            //   },
            //   500: {
            //     width: "100%",
            //     height:"100%",
            //   },
            // }
          }}
          role="group"
        >
          <SplideTrack>
            <SplideSlide>
              <div className="splide_slide w-full h-auto">
              <img
                src="/images/スライダー1.png"
                alt="Image 1"
                className="splide_slide w-full h-auto"
              />
              </div>
            </SplideSlide>
            <SplideSlide>
              <img
                src="/images/スライダー2.png"
                alt="Image 2"
                className="splide_slide w-full h-auto"
              />
            </SplideSlide>
            <SplideSlide>
              <img
                src="/images/スライダー3.png"
                alt="Image 2"
                className="splide_slide w-full h-auto"
              />
            </SplideSlide>
          </SplideTrack>
        </Splide>
        <p className="center text-3xl text-white">私の居場所がここにある</p>
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

        .splide_slide img {
          transition: 8s ease-out;
        }
        .splide_slide.is-active img {
          transform: scale(1.15);
          transition-delay: 0s;
        }
        .splide_slide img {
          height: auto;
          width: 100%;
        }
      `}</style>
    </>
  );
};

export default spride;
