// src/components/AnimatedPage.jsx
import { motion } from 'framer-motion';

const animations = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -100 },
};

function AnimatedPage({ children }) { // Recebe 'children'
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      {children} {/* E renderiza 'children' aqui dentro */}
    </motion.div>
  );
}

export default AnimatedPage;