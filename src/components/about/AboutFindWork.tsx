import ImageAbout from "../../assets/image/bg-image-about-find-work.jpg";

const AboutFindWork = () => {
  return (
    <div className=" items-end lg:items-start  lg:py-12  lg:relative">
      <div className="lg:absolute  lg:right-32 lg:top-56">
        <div className="  lg:w-[45.625rem] lg:h-[25rem] w-full  bg-gray-900 text-white rounded-lg p-8 mb-8 lg:mb-0 lg:mr-8 shadow-lg">
          <div className="lg:py-20 lg:px-10">
            <h2 className="text-3xl font-semibold text-red-500 mb-4">
              Find Your Work Now
            </h2>
            <p className="text-gray-300 mb-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that.
            </p>
            <button className="px-6 py-2 border border-gray-300 text-gray-300 rounded-lg hover:bg-gray-700 transition duration-300">
              GET STARTED
            </button>
          </div>
        </div>
      </div>
      <div className="lg:w-4/5 w-full flex justify-self-start ">
        <img
          src={ImageAbout}
          // Replace with actual image path
          alt="People in a Modern Room"
          className="rounded-lg lg:h-[700px] h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default AboutFindWork;
