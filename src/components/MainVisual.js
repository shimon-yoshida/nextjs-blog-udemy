import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green"; // デフォルトのテーマを読み込んでいます（コアスタイルのみ読み込む設定も可能）

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
            }
          }
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

        }
      `}</style>
    </>
  );
};

export default MainVisual;
