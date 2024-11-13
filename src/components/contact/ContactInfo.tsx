import Container from "../common/Container";
import { FaHeadphonesAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const ContactInfo = () => {
  return (
    <div className="bg-gray-50">
      <Container>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-10  lg:py-36 py-16">
        <div className="space-y-4 bg-white p-6 rounded-md border border-slate-200  mt-12">
          <i className="h-20 w-20 bg-white flex items-center justify-center border border-slate-200 rounded-full -mt-16 text-red-500 hover:bg-red-500 hover:text-white">
            <FaHeadphonesAlt className=" text-2xl" />
          </i>
          <h1 className="Mulish-bold text-black">Contact With Phone Number</h1>
          <div>
            <p>+008 254 365 456</p>
            <p>+008 254 365 406</p>
          </div>
        </div>
        <div className="space-y-4 bg-white p-6 rounded-md border border-slate-200 mt-12">
          <i className="h-20 w-20 bg-white flex items-center justify-center border border-slate-200 rounded-full -mt-16  text-red-500 hover:bg-red-500 hover:text-white">
            <MdEmail className=" text-2xl" />
          </i>
          <h1 className="Mulish-bold text-black">Email Address</h1>
          <div>
            <p>admin@gmail.com</p>
            <p>example@gmail.com</p>
          </div>
        </div>
        <div className="space-y-4 bg-white p-6 rounded-md border border-slate-200 mt-12">
          <i className="h-20 w-20 bg-white flex items-center justify-center border border-slate-200 rounded-full -mt-16  text-red-500 hover:bg-red-500 hover:text-white">
            <FaLocationDot className=" text-2xl" />
          </i>
          <h1 className="Mulish-bold text-black">Location</h1>
          <p>5678 Mirpur Main Road, cities 58000 GBnagla, example 54786</p>
        </div>
      </section>
      </Container>
    </div>
  );
};

export default ContactInfo;
