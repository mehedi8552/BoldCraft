import Container from "../common/Container";
import Counter from "../common/Counter";

const TrustClient = () => {
  return (
    <Container className=" md:pt-16 pb-32">
      <h1 className="Mulish-medium lg:text-4xl text-[1.625rem] text-gray-900  text-center -mt-5">
        Our Fun Facts
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-8 md:mt-12">
        <div className="rounded-lg text-center shadow-lg relative group">
          <span className="text-[#f9004d] text-7xl mb-4 Mulish-semibold  flex items-center justify-center">
            <Counter value={255} /> <sup>+</sup>
          </span>
          <p>
            We've successfully delivered over 250 projects across various
            industries, each tailored to meet our clients' unique.
          </p>
        </div>
        <div className="rounded-lg text-center shadow-lg relative group">
          <span className="text-[#f9004d] text-7xl mb-4 Mulish-semibold  flex items-center justify-center">
            <Counter value={199} /> <sup>+</sup>
          </span>

          <p>
            With more than 500 satisfied clients, we take pride in building
            long-term partnerships.
          </p>
        </div>
        <div className="rounded-lg text-center shadow-lg relative group">
          <span className="text-[#f9004d] text-7xl mb-4 Mulish-semibold  flex items-center justify-center">
            <Counter value={10} /> <sup>+</sup>
          </span>

          <p>
            With a decade of expertise, our seasoned team has the skills and
            knowledge.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default TrustClient;
