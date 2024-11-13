import TeamImg from "../../../assets/team-work-vidopopup-page-one.jpg";

const serviceDetails = () => {
  return (
    <div
      className="w-full bg-gray-800 bg-cover bg-center"
      style={{ backgroundImage: `url(${TeamImg})` }}
    >
      <div className="text-center py-36 lg:py-56 space-y-3 px-6 bg-gray-900 bg-opacity-70">
        <h1 className="md:text-7xl text-5xl text-[2.5rem] Mulish-bold bg-gradient-to-r from-purple-500 via-yellow-500 to-red-500 inline-block text-transparent bg-clip-text">
          WEBSITE DEVELOPMENT
        </h1>
        <p className="pt-2 text-base lg:text-[1.375rem] text-gray-300">
          Fresh From The Press Discription
        </p>
      </div>
    </div>
  );
};

export default serviceDetails;
