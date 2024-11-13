import headImage from "../../assets/image/bg-image-1.jpg";
const MapHead = () => {
  return (
    <div
      className="w-full h-fit  bg-cover bg-center"
      style={{ backgroundImage: `url(${headImage})` }}
    >
      <div className="text-center py-36 bg-gray-900 bg-opacity-70">
        <h1 className=" Mulish-bold text-section-title bg-gradient-to-r from-red-500  to-pink-500 inline-block text-transparent bg-clip-text">
          Google Map
        </h1>
        <p className="pt-2">
          <span className="text-white">Home</span>
          <span className="text-slate-300"> / </span>
          <span className="text-red-500">Google Map</span>
        </p>
      </div>
    </div>
  );
};

export default MapHead;
