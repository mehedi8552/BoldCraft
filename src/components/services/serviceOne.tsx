import ServiceData from "../../assets/MapData/serviceData";
// import Container from "../common/Container";
import { motion } from "framer-motion";
import PageHeader from "../common/PageHeader";
const serviceOne = () => {
  return (
    <div>
      <PageHeader title="Service" path="/service" breadcrumbPath="Service" />

      <div className="bg-slate-50 py-16">
        <div className="px-8 lg:px-36">
          <div className=" ">
            <div className=" space-y-4 lg:space-y-8  py-14 px-4 text-center">
              <h1 className="Mulish-bold text-4xl lg:text-section-title  text-primaryColors ">
                Digital Marketing
              </h1>
              <p className="Mulish-regular  text-sectionTitle text-gray-600 lg:px-64 ">
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
                    className="cursor-pointer hover:shadow-lg p-4 py-8 rounded-md space-x-2 space-y-4 gradient-hover group border border-slate-100"
                  >
                    <span className="text-6xl group-hover:text-white text-red-500 ">
                      {data.icons}
                    </span>
                    <h1 className="Mulish-medium  text-fontPrimary group-hover:text-white ">
                      {data.name}
                    </h1>
                    <p className="Mulish-regular text-fontPrimary text-gray-600 group-hover:text-white ">
                      {data.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default serviceOne;
