
import Container from "../common/Container";
import AboutOne from "../../assets/image/about-1.webp";
import "./AboutAgency.css";

const AboutAgency = () => {
  return (
    <>
      <Container className="relative pt-24 mb-40 grid grid-cols-1 lg:grid-cols-2 justify-center items-center z-10">
        <div>
          <h1 className="text-section-title font-bold mt-4 dark:text-white">About</h1>
          <p className="Mulish-light mt-4">
            Driving brand growth with innovative strategies, focusing on digital
            content, future trends, and crafting solutions to enhance visibility
            and engagement through digital experiences.
          </p>
          <div className="flex flex-col md:flex-row mt-8 gap-4">
            <div>
              <h3 className="text-section-subtitle Mulish-medium mt-8 dark:text-white">
                Who We Are
              </h3>
              <p className="Mulish-light mt-2">
                Innovative creators dedicated to transforming brands through
                strategic, bold, and visionary approaches.
              </p>
            </div>
            <div>
              <h3 className="text-section-subtitle Mulish-medium mt-8 dark:text-white">
                What We Do
              </h3>
              <p className="Mulish-light mt-2">
                Crafting strategic solutions to enhance brand visibility and
                engagement through digital experiences.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:flex lg:justify-end relative mt-10 lg:-mt-[220px] z-20">
          <img
            src={AboutOne}
            alt="About Agency Image One"
            className="w-full lg:w-auto object-cover rounded-[8px] shadow-lg"
            width="472"
            height="743"
          />
        </div>
      </Container>
    </>
  );
};

export default AboutAgency;
