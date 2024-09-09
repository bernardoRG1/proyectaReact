import React from "react";
import videoBg from "../assets/DEMOREEL.mp4";

export const Video = () => {
  return (
    <section className=" parallax h-screen relative bg-video snap-start">
      <video
        src={videoBg}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
      />
    </section>
  );
};
