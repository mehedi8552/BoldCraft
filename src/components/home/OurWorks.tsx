import { portfolioItemsOne } from "../../data/portfolioLists";
import Container from "../common/Container";
import SliderWithLeftRightArrow from "../common/SliderWithLeftRightArrow";

const OurWorks = () => {
  return (
    <div className="py-32">
      <Container className="grid grid-cols-1 md:grid-cols-2">
        <div className="text-left mb-8">
          <h2 className="text-section-title font-bold dark:text-white">Our Works</h2>
          <p className="Mulish-regular mt-4">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
        </div>
      </Container>
      <Container>
        <div className="pt-10">
          <SliderWithLeftRightArrow portfolioItems={portfolioItemsOne} />
        </div>
      </Container>
    </div>
  );
};

export default OurWorks;
