import Sponser from "../components/clientLogo/Sponser";
import AboutAgency from "../components/home/AboutAgency";
import BannerSection from "../components/home/BannerSection";
import HomeService from "../components/home/HomeService";
import LatestNews from "../components/home/LatestNews";
import OurWorks from "../components/home/OurWorks";
import Client from "../components/common/Client";
import AboutCounter from "../components/about/AboutCounter";
const HomePage = () => {
  return (
    <>
      <BannerSection />
      <AboutAgency />
      <HomeService />
      <OurWorks />
      <AboutCounter/>
      <Client />
      <LatestNews />
      <Sponser />
    </>
  );
};

export default HomePage;
