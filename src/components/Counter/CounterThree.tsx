import { motion } from "framer-motion";
import Container from "../common/Container";
import Counter from "../common/Counter";
import { useInView } from 'react-intersection-observer';
const CounterThree = () => {
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0,
      });
  return (
    <div>
      <Container>
        <div ref={ref} className="text-center py-16 lg:py-32 lg:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {[
              { value: 660, label: "HAPPY CLIENTS" },
              { value: 894, label: "STORES" },
              { value: 500, label: "AWWARDS" },
              { value: 640, label: "AWESOME FEATURE" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h1 className="lg:text-[3.125rem] text-[2.813rem] Mulish-semibold text-red-600 pb-4">

                  {
                inView && (
                    <Counter   value={item.value} />
                )
               } 
                </h1>
                <p className="Mulish-semibold text-base text-black">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CounterThree;

