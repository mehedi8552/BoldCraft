import headImage from "../../../assets/image/page-header-bg.jpg";

const blogDetailsHead = () => {
  return (
   
    <div
      className="relative bg-cover bg-center h-[400px] text-white flex items-center justify-center md:py-72 py-40"
      style={{ backgroundImage: `url(${headImage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-25"></div>

      {/* Text content */}
      <div className="relative text-center md:mx-20">
        <h1 className="text-3xl md:text-7xl text-red-500 Mulish-bold mt-36">
          The Home of the Future 
        </h1>
        <h1 className="text-3xl md:text-7xl md:mx-20 text-red-500 Mulish-bold mt-4">
          Could Bebes
        </h1>

        {/* Meta details */}
        <div className="flex justify-center items-center flex-wrap gap-4  text-gray-300 pt-12 md:pt-32 pb-16">
          <span className="flex items-center gap-1">
            <i className="far fa-clock"></i>
            <p>Nov 11, 2024</p>
          </span>
          <span className="flex items-center gap-1">
            <i className="far fa-user"></i>
            <p>Md Mehedi</p>
          </span>
          <span className="flex items-center gap-1">
            <i className="far fa-comment"></i>
            <p>15 Comments</p>
          </span>
          <span className="flex items-center gap-1">
            <i className="far fa-heart"></i>
            <p>Like</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default blogDetailsHead;

