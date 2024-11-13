import TelePhoneImg from "../../assets/telephone-for-contact-page.jpg";
import { motion } from "framer-motion";
import Container from "../common/Container";
const ContactUs = () => {
  return (
    <Container>
      <section className="flex flex-col md:flex-row gap-10 lg:py-24 py-12">
        {/* Image Section */}
        <div className="md:w-1/2 pt-2">
          <img
            src={TelePhoneImg}
            alt="Contact Us"
            className="rounded-lg shadow-xl object-cover w-full h-[620px]"
          />
        </div>
        <div className="md:w-1/2  ">
          <h1 className="text-6xl text-black font-bold mb-4 Mulish-bold">
            Contact Us.
          </h1>
          <p className=" mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            cupiditate aperiam neque.
          </p>
          {/* Contact Form */}
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-500"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-500"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-500"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-500 h-32 resize-none"
            ></textarea>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-fit border  p-3 bg-red-500 text-white rounded-md hover:bg-white hover:text-red-500 hover:border hover:border-red-500 transition duration-300"
            >
              SUBMIT NOW
            </motion.button>
          </form>
        </div>
      </section>
    </Container>
  );
};

export default ContactUs;
