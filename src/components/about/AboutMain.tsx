import DeskImage from "../../assets/image/office-desk.jpg";
import Container from "../common/Container";

const AboutMain = () => {
  return (
    <Container>
      <div className="flex flex-col lg:flex-row  py-16 lg:pt-28 lg:pb-24 md:gap-7">
        {/* Text Content Section */}
        <div className="w-full lg:w-3/5  lg:pl-8 my-24 space-y-4">
          <h1 className="Mulish-bold text-4xl lg:text-6xl   text-black">
            About
          </h1>
          <p className=" text-fontPrimary  leading-relaxed">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which dont look even slightly
            believable. If you are going to use a passage of Lorem Ipsum Ipsum
            available, but the majority have suffered alteration in some form,
            by injected humour, or randomised words which dont look even
            slightly believable. If you are going.
          </p>
          <div>
            <div className=" flex flex-col md:flex-row gap-8 lg:pt-10">
              <div>
                <h2 className="Mulish-medium text-[1.625rem] lg:text-3xl text-gray-900 mb-4">
                  Who we are
                </h2>
                <p className=" text-fontPrimary  leading-relaxed">
                  There are many vtions of passages of Lorem Ipsum available,
                  but the majority have suffered.
                </p>
              </div>
              <div>
                <h2 className="Mulish-medium text-[1.625rem]  lg:text-3xl text-gray-900 mb-4">
                  Who we are
                </h2>
                <p className=" text-fontPrimary  leading-relaxed">
                  There are many vtions of passages of Lorem Ipsum available,
                  but the majority have suffered.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Image Section */}
        <div className="w-full lg:w-2/5 ">
          <img
            src={DeskImage}
            alt="Office Computer desk"
            className=" lg:h-[650px] h-fit w-full object-cover rounded-md"
          />
        </div>
      </div>
    </Container>
  );
};

export default AboutMain;
