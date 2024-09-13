import React from 'react';
import { motion } from 'framer-motion';

export const GridItemVideo = ({ href, videoSrc, title, className }) => {
  return (
    <a href={href} className={className} style={{ position: "relative", overflow: "hidden" }}>
      <motion.div
        className="inset-0 flex items-center justify-center transition-opacity duration-300"
        whileHover={{ opacity: 1 }}
        style={{ position: 'absolute', inset: '0', zIndex: '2' }}
      >
        <span className="text-lg font-semibold">{title}</span>
      </motion.div>
      
      {/* Video as background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 text-white p-4 transform -translate-y-full transition-transform duration-300 hover:translate-y-0" style={{ zIndex: '3' }}>
        <span className="text-lg font-semibold">{title}</span>
      </div>
    </a>
  );
}
