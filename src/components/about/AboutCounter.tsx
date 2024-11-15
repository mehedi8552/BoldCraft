import Container from "../common/Container";
import Counter from "../common/Counter";
import { useInView } from "react-intersection-observer";
const AboutCounter = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
    <div>
      <Container>
        <div className="text-center pb-12">
          <h1 className="Mulish-medium lg:text-4xl text-[1.625rem] text-gray-900  dark:text-white">
            Our Fun Facts
          </h1>
          <div
            ref={ref}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-14 "
          >
            <div>
              <h1 className="lg:text-7xl text-[2.813rem] Mulish-semibold text-red-600 pb-6">
                {inView && <Counter value={199} />}
              </h1>
              <p>
                The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced below for those.
              </p>
            </div>
            <div>
              <h1 className="lg:text-7xl text-[2.813rem] Mulish-semibold text-red-600 pb-6">
                {inView && <Counter value={575} />}
              </h1>
              <p>
                The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced below for those.
              </p>
            </div>
            <div>
              <h1 className="lg:text-7xl text-[2.813rem] Mulish-semibold text-red-600 pb-6">
                {inView && <Counter value={69} />}
              </h1>
              <p>
                The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced below for those.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutCounter;
