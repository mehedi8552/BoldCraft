import BrandOne from "../../assets/image/Sposer/brand-01.png";
import BrandTwo from "../../assets/image/Sposer/brand-02.png";
import BrandThree from "../../assets/image/Sposer/brand-03.png";
import BrandFour from "../../assets/image/Sposer/brand-04.png";
import BrandFive from "../../assets/image/Sposer/brand-05.png";
import BrandSix from "../../assets/image/Sposer/brand-06.png";
import Container from "../common/Container";

const Sponser = () => {
  return (
    <Container >
      <div className="flex items-center  flex-wrap justify-center gap-8  lg:gap-16 mt-6 py-16 lg:pt-10 lg:pb-28">
        <div>
          <img
            className=" lg:h-fit h-12  hover:scale-110 transition duration-300"
            src={BrandOne}
            alt="ms"
          />
        </div>
        <div>
          <img
            className=" lg:h-fit h-12  hover:scale-110 transition duration-300"
            src={BrandTwo}
            alt="jes"
          />
        </div>
        <div>
          <img
            className=" lg:h-fit h-12  hover:scale-110 transition duration-300"
            src={BrandThree}
            alt="hand crafted"
          />
        </div>
        <div>
          <img
            className=" lg:h-fit h-12  hover:scale-110 transition duration-300"
            src={BrandFour}
            alt="studio"
          />
        </div>
        <div>
          <img
            className=" lg:h-fit h-12  hover:scale-110 transition duration-300"
            src={BrandFive}
            alt="fashion live style"
          />
        </div>
        <div>
          <img
            className=" lg:h-fit h-12  hover:scale-110 transition duration-300"
            src={BrandSix}
            alt="pure"
          />
        </div>
        <div>
          <img
            className=" lg:h-fit h-12  hover:scale-110 transition duration-300"
            src={BrandOne}
            alt="jes"
          />
        </div>
        <div>
          <img
            className=" lg:h-fit h-12  hover:scale-110 transition duration-300"
            src={BrandTwo}
            alt="hand crafted"
          />
        </div>
        <div>
          <img
            className=" lg:h-fit h-12  hover:scale-110 transition duration-300"
            src={BrandThree}
            alt="studio"
          />
        </div>
      </div>
    </Container>
  );
};

export default Sponser;
