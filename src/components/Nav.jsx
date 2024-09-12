import { HiOutlineBars3 } from "react-icons/hi2";
import '../index.css';
import { useEffect, useState } from 'react';
import logo from '../assets/proyectaw.png';
import brand from '../assets/brand.png'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export const Nav = () => {

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
      <nav className={`fixed w-full bg-zinc-900 z-50 p-8 flex items-center justify-between transition-opacity duration-1000 nav-animated`}>
         <div><img src={logo} width={300} alt="proyecta logo" /></div>
         <div>
            {/* {<HiOutlineBars3 fontSize={34}/> */}
            <img src={brand} width={120} alt="" />
         </div>
      </nav>
   );
}

export default Nav;
