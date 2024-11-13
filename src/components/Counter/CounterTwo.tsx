
import Container from "../common/Container";
import Counter from "../common/Counter";
import { useInView } from 'react-intersection-observer';



const CounterTwo = () => {

    const { ref, inView } = useInView({
      /* Optional options */
      threshold: 0,
    });
  return (
    <div className="bg-gradient-to-r from-[#F62217] to-[#F00D57] text-white">
      <Container>
        <div ref={ref} className=" text-center py-16 lg:py-32 lg:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div>
              <h1 className="lg:text-7xl text-[2.813rem] Mulish-semibold text-white pb-6">
               {
                inView && (
                    <Counter  start={0}  value={199} duration={2.75} />
                )
               } 
              </h1>
              <p>
                The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced below for those.
              </p>
            </div>
            <div>
              <h1 className="lg:text-7xl text-[2.813rem] Mulish-semibold text-white pb-6">
              {
                inView && (
                    <Counter  start={0}  value={543} duration={2.75} />
                )
               } 
              </h1>
              <p>
                The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced below for those.
              </p>
            </div>
            <div>
              <h1 className="lg:text-7xl text-[2.813rem] Mulish-semibold text-white pb-6">
              {
                inView && (
                    <Counter  start={0}  value={19} duration={2.75} />
                )
               } 
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

export default CounterTwo;

