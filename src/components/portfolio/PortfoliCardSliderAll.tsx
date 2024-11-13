import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import PortfolioCard from "./PortfolioCard";
import { portfolioItemsOne } from "../../data/portfolioLists";
import "./protfoliSlideCommonStyle.css";

const PortfoliCardSliderAll = () => {
  return (
    <Swiper
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Pagination, Navigation]}
      spaceBetween={30}
      slidesPerView={4}
      breakpoints={{
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="mySwiper"  
      style={{ overflow: "visible" }}
    >
      {portfolioItemsOne.map((post) => (
        <SwiperSlide key={post.id} style={{ overflow: "visible" }}>
          <PortfolioCard post={post} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PortfoliCardSliderAll;
