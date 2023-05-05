import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green"; // デフォルトのテーマを読み込んでいます（コアスタイルのみ読み込む設定も可能）

const spride = () => {
  return (
    <>
     <div className="box">
      <Splide 
        aria-label="お気に入りの写真"
        options={{
          autoplay : true,
          rewind: true,
          width: "100%",
          gap: "1rem",
        }}
      >
       
        <SplideSlide>
          <img src="/images/スライダー1.png" alt="Image 1" className="w-full h-auto" />
        </SplideSlide>
        <SplideSlide>
          <img src="/images/スライダー2.png" alt="Image 2" className="w-full h-auto" />
        </SplideSlide>
        <SplideSlide>
          <img src="/images/スライダー3.png" alt="Image 2" className="w-full h-auto" />
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
      `}</style>
    </>
  );
};

export default spride;
