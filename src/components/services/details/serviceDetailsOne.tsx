import DeskImage from "../../../assets/image/office-desk.jpg";
import Container from "../../common/Container";
import Model from "../../common/VideoBtn";
const serviceDetailsOne = () => {
  const VideoIDOne = "lR8FTt_BR00";
  const VideoIDTwo = "2jzzh-73Kvo";
  return (
    <Container>
      <div className="flex flex-col lg:flex-row py-12 lg:pt-32 lg:pb-20 ">
        {/* Text Content Section */}
        <div className="w-full lg:w-1/2 lg:pl-8 lg:my-16 my-8 space-y-4">
          <p className=" text-fontPrimary  leading-relaxed">
            but the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum. You
            need to be sure there isn't anything
          </p>
          <p className="text-fontPrimary leading-relaxed">
            embarrassing hidden in the middle of text. All the Lorem Ipsum
            generators tend toitrepeat predefined chunks. Necessary, making this
            the first true generator on the Internet.
          </p>

          <h2 className="Mulish-medium lg:pt-8  text-4xl text-gray-900 mb-4 dark:text-white">
            Our Working Process
          </h2>

          <ul className="list-disc text-fontPrimary list-inside  space-y-3 lg:pt-2">
            <li>Yet this above sewed flirted opened ouch</li>
            <li>Goldfinch realistic sporadic ingenuous</li>
            <li>Abominable this abidin far successfully then like piquan</li>
            <li>Risus commodo viverra</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
          </ul>
        </div>
        {/* Image Section */}
        <div className="w-full lg:w-1/2  relative">
          <img
            src={DeskImage}
            alt="Office Computer desk"
            className=" h-[640px] w-full object-cover rounded-md shadow-xl"
          />
          <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
            <Model videoId={VideoIDOne} />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:pb-32 pb-12">
        {/* Image Section */}
        <div className="w-full lg:w-1/2  relative">
          <img
            src={DeskImage}
            alt="Office Computer desk"
            className=" h-full lg:h-[640px] w-full object-cover rounded-md shadow-xl"
          />
          <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
            <Model videoId={VideoIDTwo} />
          </div>
        </div>

        {/* Text Content Section */}
        <div className="w-full lg:w-1/2 lg:pl-8 lg:my-16 my-8 space-y-4">
          <p className=" text-fontPrimary  leading-relaxed">
            but the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum. You
            need to be sure there isn't anything
          </p>
          <p className="text-fontPrimary leading-relaxed">
            embarrassing hidden in the middle of text. All the Lorem Ipsum
            generators tend toitrepeat predefined chunks. Necessary, making this
            the first true generator on the Internet.
          </p>

          <h2 className="Mulish-medium lg:pt-8  text-4xl text-gray-900 mb-4 dark:text-white">
            Process of metal
          </h2>

          <ul className="list-disc text-fontPrimary list-inside  space-y-3 lg:pt-2">
            <li>Yet this above sewed flirted opened ouch</li>
            <li>Goldfinch realistic sporadic ingenuous</li>
            <li>Abominable this abidin far successfully then like piquan</li>
            <li>Risus commodo viverra</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default serviceDetailsOne;
