import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css/sea-green'; // デフォルトのテーマを読み込んでいます（コアスタイルのみ読み込む設定も可能）

const spride = () => {
  return (
    <>
      <Splide aria-label="お気に入りの写真">
        <SplideSlide>
          <img src="/images/スライダー1.png" alt="Image 1" />
        </SplideSlide>
        <SplideSlide>
          <img src="/images/スライダー2.png" alt="Image 2" />
        </SplideSlide>
        <SplideSlide>
          <img src="/images/スライダー3.png" alt="Image 2" />
        </SplideSlide>
      </Splide>
    </>
  );
};

export default spride;
