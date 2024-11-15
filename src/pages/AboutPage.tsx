import AboutMain from "../components/about/AboutMain";
import AboutCounter from "../components/about/AboutCounter";
import AboutFindWork from "../components/about/AboutFindWork";
import SkilledTeam from "../components/common/SkilledTeam";
import Client from "../components/common/Client";
import Sponser from "../components/clientLogo/Sponser";

const AboutPage = () => {
  return (
    <>
      <AboutMain />
      <AboutCounter />
      <AboutFindWork />
      <SkilledTeam />
      <Client />
      <Sponser />
    </>
  );
};

export default AboutPage;
