import ServiceData from "../../assets/MapData/serviceData";
import { motion } from "framer-motion";
import Container from "../common/Container";
import { Link } from "react-router-dom";

export default function HomeService() {
  return (
    <div className="bg-banner-service bg-cover bg-center bg-no-repeat">
      <Container className="py-32 flex flex-col md:flex-row justify-between ">
        <div className="mt-[30px]">
          <h1 className="text-section-title font-bold">Services</h1>
          <p className="Mulish-regular mt-4">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
          <button className="mt-9 ">
            <Link to="/service" className="relative text-[#1f1f25] hover:text-red-500 text-link Mulish-medium pb-1 transition-all duration-500 ease-in-out hover:after:w-full after:content-[''] after:w-[40px] after:h-[2px] after:bg-red-500 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-500 after:ease-in-out">Request Custom Service</Link>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 mt-10 md:mt-0 gap-4 ">
          {ServiceData.slice(0, 4).map((data) => {
            return (
              <motion.div
                whileHover={{ opacity: 1, y: -5 }}
                transition={{ duration: 0.3 }}
                className="cursor-pointer hover:shadow-lg md:p-4 py-8 rounded-md space-x-2 space-y-4 gradient-hover group "
              >
                <span className="text-6xl group-hover:text-white text-red-500">
                  {data.icons}
                </span>
                <h1 className="Mulish-medium  text-card-title group-hover:text-white ">
                  {data.name}
                </h1>
                <p className="Mulish-regular text-fontPrimary text-gray-600 group-hover:text-white ">
                  {data.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
