import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';

interface CounterProps {
  value: number;
}

const Counter = ({ value }: CounterProps) => {
  const count = useMotionValue(0);
  const roundedCount = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, value, { duration: 2 });
    return controls.stop;
  }, [value, count]);

  return (
    <motion.div>
      <motion.span>
        {roundedCount}
      </motion.span>
    </motion.div>
  );
};

export default Counter;

