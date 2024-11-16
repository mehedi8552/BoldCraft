import ServiceData from "../../assets/MapData/serviceData";
import Container from "../common/Container";
import { motion } from "framer-motion";
const serviceTwo = () => {
  return (
    <div className="bg-backgroundColor py-14">
    <Container>
      <div className=" ">
        <div className=" space-y-4 lg:space-y-8  py-14 px-4 text-center">
          <h1 className="Mulish-bold text-4xl lg:text-section-title  text-primaryColors dark:text-white">
          Strategy
          </h1>
          <p className="Mulish-regular text-fontPrimary  lg:px-64 ">
            There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-4 ">
          {ServiceData.map((data) => {
            return (
              <motion.div
                whileHover={{ opacity: 1, y: -5 }}
                transition={{ duration: 0.3 }}
                className="cursor-pointer hover:shadow-lg p-4 py-16 text-center rounded-md space-x-2 space-y-4 hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500 group border border-slate-100"
              >
                <span className="text-6xl flex justify-center  group-hover:text-white text-red-500 ">
                  {data.icons}
                </span>
                <h1 className="Mulish-medium  text-fontPrimary group-hover:text-white dark:text-white">
                  {data.name}
                </h1>
                <p className="Mulish-regular text-fontPrimary  group-hover:text-white ">
                  {data.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Container>
  </div>
  );
};

export default serviceTwo;
