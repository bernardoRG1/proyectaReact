import { motion } from "framer-motion";
import { GridLayout } from "../components/GridLayout/GridLayout";
import Nav from "../components/Nav";

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
        <Nav/>
        <div className="absolute top-60 left-0 w-full">
        
          <GridLayout/>
        </div>

    </motion.div>
  )
}
