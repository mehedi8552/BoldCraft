import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import PortfolioCard from "./PortfolioCard";
import { PortfolioItem } from "../../data/portfolioLists";
import "./protfoliSlideCommonStyle.css";

const PortfoliCardSlider = ({
  portfolioItems,
}: {
  portfolioItems: PortfolioItem[];
}) => {
  return (
    <Swiper
      pagination={{ clickable: true }}
      modules={[Pagination]}
      spaceBetween={20}
      slidesPerView={3}
      breakpoints={{
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="mySwiper"
      style={{ overflow: "visible" }}
      loop={true}
    >
      {portfolioItems.map((post) => (
        <SwiperSlide key={post.id} style={{ overflow: "visible" }}>
          <PortfolioCard post={post} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PortfoliCardSlider;

