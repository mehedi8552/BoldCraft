import { motion } from "framer-motion";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import skilledteamDataThree from "../../assets/MapData/skilledteamDataThree";
import Container from "../common/Container";

const HomeSkiledTeam = () => {
  return (
    <Container className="pb-32">
      <div className="text-left mb-12">
        <h2 className="text-orange-500 text-lg font-bold">
          .: Skilled Team :.
        </h2>
        <h1 className="text-4xl md:text-5xl font-bold mt-4">
          Experts solutions.
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  lg:gap-4 cursor-pointer">
        {skilledteamDataThree.map(({ id, name, position, imageUrl }) => (
          <motion.div
            key={id}
            className="relative group lg:w-full lg:h-full w-fit h-80 rounded-lg overflow-hidden shadow-lg"
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
              className={`absolute inset-0 gradient-bg opacity-0 group-hover:opacity-90 transition duration-700 ease-in-out flex flex-col justify-center items-center `}
              initial={{ opacity: 0, transform: "translateY(10px)" }}
              whileHover={{ opacity: 1, transform: "translateY(0px)" }}
            >
              {/* Social Icons */}
              {/* Text Content */}
              <div className="absolute inset-x-0 bottom-0 p-4 text-center">
                <h3 className="text-white font-semibold text-lg">{name}</h3>
                <p className="text-gray-300 text-sm">{position}</p>
              </div>

              {/* Social Icons */}
              <div className="absolute inset-x-0 bottom-20 flex justify-center space-x-4 text-white text-xl">
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
            </motion.div>
          </motion.div>
        ))}
      </div>
    </Container>
  );
};

export default HomeSkiledTeam;
