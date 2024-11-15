import headImage from "../../assets/team-for-contact-page.jpg";

const ContactHead = () => {
  return (
    <div
      className="w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${headImage})` }}
    >
      <div className="text-center py-36 lg:py-56 space-y-3 px-6 bg-gray-900 bg-opacity-70">
        <h1 className=" Mulish-bold text-section-title lg:text-7xl bg-gradient-to-r from-red-500  to-pink-500 inline-block text-transparent bg-clip-text">
          Contact With Us
        </h1>
        <p className="pt-2 lg:text-[1.375rem] text-slate-300 px-6">
          Contrary to popular belief, Lorem Ipsum is not simply random text.
        </p>
      </div>
    </div>
  );
};

export default ContactHead;
