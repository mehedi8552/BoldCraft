import ImageOne from "../../assets/team-work-vidopopup-page-one.jpg";
import ImagTwo from "../../assets/team-work-vidopopup-page-two.jpg";
import PageHeader from "../common/PageHeader";
import Model from "../common/VideoBtn";


const VideoBody = () => {
  const VideoIDOne = "lR8FTt_BR00";
  const VideoIDTwo = "2jzzh-73Kvo";

  return (
    <>
          <PageHeader
        title="Video Popup"
        path="/video-popup"
        breadcrumbPath="Video Popup"
      />
    <div className="lg:py-12 lg:px-28">
      <div className="flex flex-col lg:flex-row py-10 px-8 md:space-x-6 gap-4">
        <div className="w-full lg:w-1/2  relative">
          <img
            src={ImageOne}
            alt="Office Computer desk"
            className=" h-fit w-fit md:h-[414px] md:w-full object-cover rounded-md"
          />
          <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
            <Model videoId ={VideoIDOne} />
          </div>
        </div>
        <div className="w-full lg:w-1/2 relative">
          <img
            src={ImagTwo}
            alt="Office Computer desk"
            className=" h-fit w-fit md:h-[414px] md:w-full object-cover rounded-md"
          />
          <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
            <Model videoId ={VideoIDTwo} />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default VideoBody;
