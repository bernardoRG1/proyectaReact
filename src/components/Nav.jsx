import { HiOutlineBars3 } from "react-icons/hi2";
import '../index.css';
import { useEffect, useState } from 'react';
import logo from '../assets/proyectaw.png';

export const Nav = () => {
   const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
      setTimeout(() => {
         setIsVisible(true);
      }, 500); // Retraso para que la animación comience después de cargar
   }, []);

   return (
      <nav className={`fixed w-full z-50 p-8 flex items-center justify-between transition-opacity duration-1000 ${isVisible ? 'nav-animation' : 'opacity-0'}`}>
         <div><img src={logo} width={100} alt="proyecta logo" /></div>
         <div>
            <HiOutlineBars3 fontSize={34}/>
         </div>
      </nav>
   );
}

export default Nav;
