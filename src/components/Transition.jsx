import { motion } from "framer-motion"
export const Transition = (OgCOmponent) => {
  return (
    <>
      <OgCOmponent/> 
      <motion.div
         className="slide-isssssn"
         intial={{scaleY: 0}}
         animate={{scaleY: 0}}
         exit={{scaleY:1}}
         Transition={{duration:1, ease: (0.22,0.36, 1 )}}
      />
      <motion.div
       className="slide-out"
       intial={{scaleY: 1}}
       animate={{scaleY: 0}}
       exit={{scaleY:0}}
       Transition={{duration:1, ease: (0.22,0.36, 1 )}}/>
    </>
  )
}

