import headImage from "../../../assets/image/bg-image-about-find-work.jpg";

const blogDetailsHead = () => {
  return (
    <div
      className="w-full h-[500px]  md:h-[560px] bg-gray-800 bg-cover bg-center"
      style={{ backgroundImage: `url(${headImage})` }}
    >
      {/* Dark overlay */}
      <div className="flex flex-col items-center justify-center h-full space-y-3 px-6 bg-gray-900 bg-opacity-70">
        {/* Text content */}
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl text-red-500 Mulish-bold mt-20 md:mt-36">
            The Home of the Future
          </h1>
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl text-red-500 Mulish-bold mt-2 md:mt-4">
            Could Bebes
          </h1>

          {/* Meta details */}
          <div className="flex justify-center items-center flex-wrap gap-4 text-gray-300 pt-8 md:pt-12 pb-8 md:pb-16">
            <span className="flex items-center gap-1">
              <i className="far fa-clock"></i>
              <p className="text-sm sm:text-base">Nov 11, 2024</p>
            </span>
            <span className="flex items-center gap-1">
              <i className="far fa-user"></i>
              <p className="text-sm sm:text-base">Md Mehedi</p>
            </span>
            <span className="flex items-center gap-1">
              <i className="far fa-comment"></i>
              <p className="text-sm sm:text-base">15 Comments</p>
            </span>
            <span className="flex items-center gap-1">
              <i className="far fa-heart"></i>
              <p className="text-sm sm:text-base">Like</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default blogDetailsHead;

