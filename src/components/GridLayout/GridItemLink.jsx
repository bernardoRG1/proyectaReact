import React from 'react'
import { motion } from 'framer-motion';

export const GridItemLink = ({ href, bgImage, title, className }) => {
   return (
      <a
        href={href}
        className={className}
        style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <motion.div
          className=" inset-0 flex items-center justify-center transition-opacity duration-300"
          whileHover={{ opacity: 1 }}
        >
          <span className="text-lg font-semibold">{title}</span>
        </motion.div>
        <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 text-white p-4 transform -translate-y-full transition-transform duration-300 hover:translate-y-0">
          <span className="text-lg font-semibold">{title}</span>
        </div>
      </a>
    );
}
