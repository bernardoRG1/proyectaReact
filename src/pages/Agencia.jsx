import { motion } from "framer-motion";

export const Agencia = () => {
  return (
    <div className="page">
      <motion.h1 
        initial={{
          y: '100%',
        }}
        animate={{
          opacity: 0,
        }}
        exit={{
          y: "-100%",
        }}
      
      >Agebcua</motion.h1>
    </div>
  )
}
