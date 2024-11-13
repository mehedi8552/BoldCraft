import Container from "../../common/Container";
import ImageThree from "../../../assets/protfolioDetails/protfolio-details-three.jpg";
import ImageFour from "../../../assets/protfolioDetails/protfolio-details-four.jpg";

const OurMoreProjects = () => {
  return (
    <Container>
      <div className="text-center lg:pt-20 pt-10 lg:pb-32 pb-16">
        <div className="text-center space-y-2 lg:pb-10 lg:space-y-4 ">
          <h1 className="Mulish-semibold text-lg text-red-500">Related Work</h1>
          <p className="Mulish-bold text-3xl lg:text-[3.375rem] text-black pb-12">Our More Projects</p>
        </div>
        <section className="flex flex-col md:flex-row   gap-6">
          <div className="md:w-1/2 ">
            <div className="space-y-6">
              <img src={ImageThree} className="w-full rounded-md shadow-xl" alt="" />
              <div className="text-center space-y-2">
                <h1 className="Mulish-semibold text-2xl ">Design Management</h1>
                <p className="text-gray-500 Mulish-medium text-base">
                  Technique
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2  ">
            <div className="space-y-6">
              <img src={ImageFour} className="w-full rounded-md shadow-xl" alt="" />
              <div className="text-center space-y-2">
                <h1 className="Mulish-semibold text-2xl ">Plan Analysis</h1>
                <p className="text-gray-500 Mulish-medium text-base">Planing</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
};

export default OurMoreProjects;
