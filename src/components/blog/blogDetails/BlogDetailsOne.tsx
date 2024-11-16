import Image from "../../../assets/team-work-vidopopup-page-two.jpg";
import VideoBtn from "../../common/VideoBtn";
import Container from "../../common/Container";
const BlogDetails = () => {

  const VideoIDTwo = "2jzzh-73Kvo";
  return (
    <Container>
      <div className="container mx-auto px-4 pt-14 md:pt-28">
        {/* Top paragraph */}
        <p className=" mb-8 leading-relaxed">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks.
        </p>

        {/* Center image */}
        <div className="flex justify-center mb-8 relative">
          <img
            src={Image}
            alt="Office Computer desk"
           className="w-full max-w-2xl rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
            <VideoBtn videoId={VideoIDTwo} />
          </div>
        </div>

        {/* Bottom paragraph */}
        <p className=" mb-8 leading-relaxed">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks.
        </p>

        {/* Highlighted quote */}
        <blockquote className="text-center text-2xl font-bold text-gray-900 italic my-6 lg:my-12 mx-auto  lg:mx-44 dark:text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes.
        </blockquote>

        {/* Additional bottom paragraph */}
        <p className=" leading-relaxed">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks. Necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable.
        </p>
      </div>
     
    </Container>
  );
};

export default BlogDetails;
