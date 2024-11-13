import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ISliderWithLeftRightArrowProps } from "../../types";
import PortfolioCard from "../portfolio/PortfolioCard";
import "../../components/portfolio/protfoliSlideCommonStyle.css";
const SliderWithLeftRightArrow = ({
  portfolioItems,
}: ISliderWithLeftRightArrowProps) => {
  return (
    <>
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={4}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="mySwiper"
        style={{ overflow: "hidden" }}
        loop={true}
      >
        {portfolioItems.map((post) => (
          <SwiperSlide key={post.id} style={{ overflow: "visible" }}>
            <PortfolioCard post={post} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SliderWithLeftRightArrow;
