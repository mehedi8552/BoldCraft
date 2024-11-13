import Container from "../../common/Container";
import ImageTwo from "../../../assets/image/blogdetails.jpg";
const BlogDetailsTwo = () => {
  return (
    <Container>
      <div className="container mx-auto px-4 py-8 md:py-16 flex flex-col md:flex-row items-start gap-8 pb-14 md:pb-28">
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-gray-700 space-y-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo.
          </p>

          {/* Ordered & Unordered Lists */}
          <h3 className="text-2xl py-6   Mulish-medium">
            Ordered & Unordered Lists.
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Yet this above sewed flirted opened ouch</li>
            <li>Goldfinch realistic sporadic ingenuous</li>
            <li>Abominable this abidin far successfully then like piquan</li>
            <li>Risus commodo viverra</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
          </ul>

          <h3 className="text-2xl py-6   Mulish-medium">
            Ordered & Unordered Lists.
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Yet this above sewed flirted opened ouch</li>
            <li>Goldfinch realistic sporadic ingenuous</li>
            <li>Abominable this abidin far successfully then like piquan</li>
            <li>Risus commodo viverra</li>
          </ul>
        </div>
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={ImageTwo}
            alt="Silhouette of a person with a tripod"
            className="rounded-lg shadow-lg w-full h-full md:h-[43.75rem] object-cover"
          />
          <p className="text-center text-gray-500 mt-2 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </p>
        </div>
      </div>
    </Container>
  );
};

export default BlogDetailsTwo;
