import Container from "../common/Container";
import Counter from "../common/Counter";
import { useInView } from "react-intersection-observer";
import PageHeader from "../common/PageHeader";
const CounterOne = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
    <div>
            <PageHeader
        title="Counter"
        path="/counters"
        breadcrumbPath="Counter"
      />
      <Container>
        <div ref={ref} className="text-center py-16 lg:py-32 lg:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div>
              <h1 className="lg:text-7xl text-[2.813rem] Mulish-semibold text-red-600 pb-6">
                {inView && <Counter  value={199}  />}
              </h1>
              <p>
                The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced below for those.
              </p>
            </div>
            <div>
              <h1 className="lg:text-7xl text-[2.813rem] Mulish-semibold text-red-600 pb-6">
              {inView && <Counter  value={549}  />}
              </h1>
              <p>
                The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced below for those.
              </p>
            </div>
            <div>
              <h1 className="lg:text-7xl text-[2.813rem] Mulish-semibold text-red-600 pb-6">
              {inView && <Counter  value={99}  />}
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

export default CounterOne;
