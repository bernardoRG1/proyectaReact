import { motion } from "framer-motion";

export const Agencia = () => {
  return (
    <div className="page">
      <motion.h1 
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
      
      >Agebcua</motion.h1>
    </div>
  )
}
