import { motion } from "framer-motion";

export const Portfolio = () => {
  return (
    <motion.div className="page"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
        >
      <h1>hpña</h1>
    </motion.div>
  )
}
