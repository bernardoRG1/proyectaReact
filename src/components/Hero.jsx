import { ArrowDown } from "./ArrowDown"
import { Facts } from "./Facts"
import { HeroGrid } from "./HeroGrid"

export const Hero = () => {
  return (
    <section className='hero-section  h-screen snap-start relative'>
  
      <div className="shape absolute w-[40rem]  h-[15rem] top-[350px] left-40"></div>
  
      <div className='px-40 h-full backdrop-blur-3xl '>
         <div className='px-25 h-full flex-wrap flex flex-col   justify-center gap-1 relative '>
            <span className="opacity-90 text-xl mb-2 text-red-500">What We Do</span>
            <h1 className="text-7xl ">Empower your ideas, <br />
            Boost your success. </h1>
            <p className="mb-20 mt-4 text-xl text-red-500 ">Somos un equipo estratega y
            comercial, aliados de tu marca.</p>
            <div className="facts-container">
              <Facts/>
        
            </div>
            <div className="mt-[-40px] ml-[200px]">
              <HeroGrid/>
            </div>
  
         </div>
         
      </div> 
      <div className="arrow absolute bg-red-500">
        <ArrowDown/>
      </div>
    </section>
  )
}
