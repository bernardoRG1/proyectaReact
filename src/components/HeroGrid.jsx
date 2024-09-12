import { FaArrowRightLong } from "react-icons/fa6";
import videoItalia from '../assets/ITALIA.mp4';
import cervezaAmarilla from '../assets/CERVEZA-AMARILLA.png';
import cervezaRosa from '../assets/CERVEZA-ROSA.png';
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const HeroGrid = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animación de aparición en secuencia para los elementos del grid
    gsap.fromTo(
      ".grid-item",  // Selecciona los elementos que tienen la clase grid-item
      { opacity: 0, y: 50 },  // Comienza con opacidad 0 y desplazado hacia abajo
      { 
        opacity: 1, 
        y: 0, 
        duration: 1.5, 
        ease: "power4.out", 
        scrollTrigger: {
          trigger: ".hero-grid", // El contenedor del grid activa la animación
          start: "top 75%",      // Inicia cuando el top del grid llega al 75% del viewport
        },
        stagger: 0.3 // Retraso entre la animación de cada elemento
      }
    );
  }, []);

  return (
    <div className='hero-grid flex flex-col justify-between items-center w-[400px] max-w-[600px] h-[330px] gap-2'>
      <div className="fisrt-line w-full h-[50%] overflow-hidden grid-item">
        <div className="image-container">
          <video src={videoItalia} loop autoPlay muted></video>
        </div>
      </div>
      
      <div className="second-line flex w-full h-[50%] justify-between gap-2">
        <div className="image-container w-[50%] bg-[url('./assets/MAZATUN.webp')] bg-imag bg-cover grid-item"></div>
        
        <div className="image-container w-[50%] bg-yellow-500 relative overflow-hidden grid-item">
          <img src={cervezaAmarilla} alt="cerveza amarilla" width={100} className='absolute bottom-[-120px] left-[20px]'/>
          <img src={cervezaRosa} alt="cerveza rosa" width={100} className='absolute top-[-60px] right-[-40px] rotate-[270deg]'/>
        </div>
      </div>
      <a href="/portafolio" className="text-start w-full flex items-center gap-x-4 text-lg hover:text-red-500 grid-item">
        Portafolio de proyectos <FaArrowRightLong/>
      </a>
    </div>
  );
}
