import { motion } from "framer-motion";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import SkilledTeamData from "../../assets/MapData/skilledteamData";
import Container from "./Container";

const SkilledTeam = () => {
  return (
    <div className="py-16 lg:py-28 bg-white dark:bg-[#1F2228]">
      <Container>
        <div className="text-center space-y-6 ">
          <h1 className="Mulish-bold text-4xl lg:text-6xl lg:text-section-title text-black dark:text-white">
          Our Skilled Team
          </h1>
          <p className="Mulish-regular text-fontPrimary  lg:px-64 ">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-7 lg:pt-14 lg:gap-7 cursor-pointer">
          {SkilledTeamData.map(({ id, name, position, imageUrl }) => (
            <motion.div
              key={id}
              className="relative group lg:w-full lg:h-[32.5rem] w-fit h-80 rounded-lg overflow-hidden shadow-lg"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, transform: "translateY(10px)" }}
              animate={{ opacity: 1, transform: "translateY(0px)" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {/* Background Image */}
              <img
                src={imageUrl}
                alt={name}
                className="w-full lg:h-full object-cover"
              />

              {/* Overlay with animation */}
              <motion.div
                className={`absolute inset-0 gradient-bg opacity-0 group-hover:opacity-90 transition duration-700 ease-in-out flex flex-col justify-center items-center`}
                initial={{ opacity: 0, transform: "translateY(10px)" }}
                whileHover={{ opacity: 1, transform: "translateY(0px)" }}
              >
                {/* Social Icons */}
                <div className="flex space-x-4 mb-4 text-white text-xl">
                  {[
                    <FaFacebookF key="facebook" />,
                    <FaLinkedinIn key="linkedin" />,
                    <FaTwitter key="twitter" />,
                  ].map((Icon, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, translateY: 100 }}
                      animate={{ opacity: 1, translateY: 0 }}
                      transition={{
                        delay: index * 0.2,
                        duration: 0.5,
                        ease: "easeInOut",
                      }}
                    >
                      {Icon}
                    </motion.span>
                  ))}
                </div>

                {/* Text Content */}
                <div className="text-center">
                  <h3 className="text-white font-semibold text-lg">{name}</h3>
                  <p className="text-gray-300 text-sm">{position}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default SkilledTeam;
