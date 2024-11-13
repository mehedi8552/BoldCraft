import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import Image from "../../../assets/protfolioDetails/protfolio-details-one.jpg";
import ImageTwo from "../../../assets/protfolioDetails/protfolio-details-two.jpg";
import ImageFive from "../../../assets/protfolioDetails/protfolio-details-five.jpg";
import Container from "../../common/Container";
import VideoBtn from "../../common/VideoBtn";
const ProtfolioDetailsBody = () => {
  const VideoIDTwo = "2jzzh-73Kvo";
  return (
    <div>
      <Container>
        <div className="container mx-auto lg:px-48 py-8 md:py-24 text-gray-700">
          {/* Title */}
          <h1 className="text-3xl md:text-[3.375rem] Mulish-bold  text-gray-900 mb-2 md:pb-6">Trydo</h1>
          <hr className="border-t-2 border-gray-300 w-full mb-6 lg:md:mb-8" />

          {/* Subtitle */}
          <p className="text-2xl Mulish-regular text-black mb-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p>

          {/* Description */}
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis. Ut labore et dolore magna aliqua.
          </p>

          {/* Project Details */}
          <div className="flex flex-col md:flex-row md:space-x-12 mb-8">
            <div>
              <p className="text-gray-500 Mulish-medium text-base">Branch</p>
              <p className="Mulish-medium text-[1.375rem] text-gray-900">Ability</p>
            </div>
            <div>
              <p className="text-gray-500 Mulish-medium text-base">Project Types</p>
              <p className="Mulish-medium text-[1.375rem] text-gray-900">Website</p>
            </div>
            <div>
              <p className="text-gray-500 Mulish-medium text-base">Program</p>
              <p className="Mulish-medium text-[1.375rem] text-gray-900">View Project</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <FaLinkedin size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
        {/* image section */}
        <div className="flex justify-center mb-8 relative">
          <img
            src={Image}
            alt="Office Computer desk"
            className="w-full rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
            <VideoBtn videoId={VideoIDTwo} />
          </div>
        </div>

        {/* 2nd image section */}
        <div className="flex justify-center mb-8 relative">
          <img
            src={ImageTwo}
            alt="Office Computer desk"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* 3rd image section */}
        <div className="flex justify-center mb-8 relative">
          <img
            src={ImageFive}
            alt="Office Computer desk"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </Container>
    </div>
  );
};

export default ProtfolioDetailsBody;
