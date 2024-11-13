import headImage from "../../assets/image/page-header-bg.jpg";

const BlogHeader = () => {
  return (
    <>
      {/* Page Header */}
      <div className="relative">
        {/* Background Image with Overlay */}
        <div className="absolute right-0 left-0 top-0 bottom-0 -z-50 inset-0  bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 " />
        </div>
        {/* Content */}
        <div
          className="w-full h-fit  bg-cover bg-center "
          style={{ backgroundImage: `url(${headImage})` }}
        >
          <div className="text-center py-44 bg-gray-900 bg-opacity-70">
            <h1 className=" Mulish-bold text-section-title bg-gradient-to-r from-red-500  to-pink-500 inline-block text-transparent bg-clip-text">
              Blog
            </h1>
            <p className="pt-2 text-lg">
              <span className="text-white">Home</span>
              <span className="text-slate-300"> / </span>
              <span className="text-red-500">Blog</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogHeader;
