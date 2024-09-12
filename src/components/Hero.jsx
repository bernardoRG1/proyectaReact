import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Facts } from "./Facts";
import { HeroGrid } from "./HeroGrid";

export const Hero = () => {


  return (
    <section className='hero-section h-screen snap-start relative overflow-hidden'>
  
      <div className="shape absolute w-[40rem]  h-[15rem] top-[350px] left-40"></div>
  
      <div className='px-40 h-full backdrop-blur-3xl'>
         <div className='px-25 mt-12 h-full flex-wrap flex-col  justify-between  relative'>

            
            <h1 className=" w-full title text-[3.5rem] pt-12">
              Empower your ideas, 
              Boost your success.
            </h1>
            
            <p className=" hero-paragraph  mt-4 text-xl text-red-500">
              Somos un equipo estratega y comercial, aliados de tu marca.
            </p>
            
            <div className="mt-12 w-full flex justify-between items-center">
              <div className="w-1/2  justify-start flex   facts-container ">
                <Facts />
              </div>
              
              <div className=" flex items-end justify-end w-1/2">
                <HeroGrid />
              </div>
            </div>
         </div>
         
      </div> 

    </section>
  );
};
