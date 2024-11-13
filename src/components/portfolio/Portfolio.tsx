import Container from "../../components/common/Container";
import PageHeader from "../../components/common/PageHeader";
import PortfolioCard from "./PortfolioCard";
import CustomButton from "../../components/common/CustomButton";
import { portfolioItemsOne } from "../../data/portfolioLists";
import PortfoliCardSlider from "./PortfoliCardSlider";
import PortfoliCardSliderAll from "./PortfoliCardSliderAll";

const Portfolio = () => {
  return (
    <>
      <PageHeader
        title="Portfolio"
        path="/portfolio"
        breadcrumbPath="Portfolio"
      />

      <Container className="py-[80px] md:py-[100px] lg:py-[140px] ">
        <PortfoliCardSlider portfolioItems={portfolioItemsOne} />
      </Container>

      {/* Portfolio Grid */}
      <div className="bg-[#f8f9fc]">
        <Container>
          <div className="text-center pt-[60px] md:pt-[80px] lg:pt-[120px]">
            <h1 className="text-section-title text-black poppins-semibold mb-4">
              All Works
            </h1>
            <p className=" poppins-light">
              There are many variations of passages of Lorem Ipsum available,
              but the <br /> majority have suffered alteration.
            </p>
          </div>

          <div className="grid gap-6 py-16 md:grid-cols-2 lg:grid-cols-3">
            {portfolioItemsOne.map((post) => (
              <PortfolioCard key={post.id} post={post} />
            ))}
          </div>
          <span className="flex justify-center pb-[60px] md:pb-[80px] lg:pb-[100px]">
            <CustomButton to="/" text="View More Project" variant="primary" />
          </span>
        </Container>
      </div>

      <div className="py-[60px] md:py-[80px] lg:py-[100px] !pb-[150px]">
        <Container>
          <div className="text-center pb-[60px] md:pb-[80px] lg:pb-[100px]">
            <h1 className="text-section-title text-black poppins-semibold mb-4">
              All Works
            </h1>
            <p className=" poppins-light">
              There are many variations of passages of Lorem Ipsum available,
              but the <br /> majority have suffered alteration.
            </p>
          </div>
        </Container>
        <Container>
          <PortfoliCardSliderAll />
        </Container>
      </div>
    </>
  );
};

export default Portfolio;
