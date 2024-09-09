import { FaArrowRightLong } from "react-icons/fa6";
import videoItalia from '../assets/ITALIA.mp4'
import cervezaAmarilla from '../assets/CERVEZA-AMARILLA.png'
import cervezaRosa from '../assets/CERVEZA-ROSA.png'
export const HeroGrid = () => {
  return (
    <div className='flex flex-col justify-between items-center w-[600px] h-[500px] gap-2'>
      <div className="fisrt-line w-full h-[50%] overflow-hidden">
         <div className="image-container ">
            <video src={videoItalia} loop autoPlay muted></video>
   
         </div>
      </div>
       <div className="second-line flex w-full h-[50%] justify-between gap-2">
         <div className="image-container w-[50%] bg-[url('./assets/MAZATUN.webp')] bg-imag bg-cover">

            </div> 
         <div className="image-container  w-[50%] bg-yellow-500 relative overflow-hidden">
            <img src={cervezaAmarilla} alt="cerveza amarilla" width={100} className='absolute bottom-[-120px] left-[20px]'/>
            <img src={cervezaRosa} alt="cerveza rosa" width={100}  className='absolute top-[-60px] right-[-40px] rotate-[270deg]'/>
            </div>  
      </div>
      <p className="text-start w-full flex items-center gap-x-4 text-lg hover:text-red-500">Portafolio de proyectos <FaArrowRightLong/></p>
    </div>
  )
}
