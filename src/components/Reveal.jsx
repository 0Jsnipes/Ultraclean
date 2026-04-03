/* eslint-disable react/prop-types */
import { motion, useReducedMotion } from 'framer-motion';

const Reveal = ({
  as = 'div',
  children,
  className,
  delay = 0,
  amount = 0.18,
  once = true,
  x = 0,
  y = 34,
  scale = 0.98,
  ...props
}) => {
  const shouldReduceMotion = useReducedMotion();
  const MotionComponent = motion[as] || motion.div;

  return (
    <MotionComponent
      className={className}
      initial={
        shouldReduceMotion
          ? { opacity: 0 }
          : { opacity: 0, x, y, scale, filter: 'blur(8px)' }
      }
      transition={{
        delay,
        duration: shouldReduceMotion ? 0.24 : 0.72,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once, amount }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0, y: 0, scale: 1, filter: 'blur(0px)' }}
      {...props}
    >
      {children}
    </MotionComponent>
  );
};

export default Reveal;
