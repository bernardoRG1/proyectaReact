import { useEffect, useState, useRef } from 'react';
import Odometer from 'react-odometerjs';
import './facts.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export const Facts = () => {
   const [experience, setExperience] = useState(0);
   const [projects, setProjects] = useState(0);
   const [brands, setBrands] = useState(0);
   const factSectionRef = useRef(null);
   const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
      const observer = new IntersectionObserver(
         ([entry]) => {
            if (entry.isIntersecting) {
               setIsVisible(true);
               observer.unobserve(factSectionRef.current); // Deja de observar una vez que ya se ha activado
            }
         },
         {
            threshold: 0.3, // El porcentaje del elemento visible para que se considere como "visible"
         }
      );

      if (factSectionRef.current) {
         observer.observe(factSectionRef.current);
      }

      return () => {
         if (factSectionRef.current) {
            observer.unobserve(factSectionRef.current);
         }
      };
   }, []);

   useEffect(() => {
      if (isVisible) {
         const timeoutId = setTimeout(() => {
            setExperience(30);
            setProjects(100);
            setBrands(50);
         }, 300); // Cambié el tiempo a 500 ms para un inicio más rápido

         return () => {
            clearTimeout(timeoutId);
         };
      }
   }, [isVisible]);

   useGSAP(() => {
      const timeline = gsap.timeline();
      timeline.from(".fact-item", {
         delay: 1,
         x: -100,
         stagger: .5,
         opacity: 0
      })
   }, {scope:factSectionRef})
   return (
      <div ref={factSectionRef} className='fact-container'>
         <div className='fact-item'>
            <div className='count-container'>
               <Odometer value={experience} className='' />
               <span className='indicator ml-4'>+</span>
            </div>
            <p>Years of experience</p>
         </div>

         <div className='fact-item'>
            <div className='count-container'>
               <Odometer value={brands} className='' />
               <span className='indicator'>+</span>
            </div>
            <p>Satisfied brands</p>
         </div>

         <div className='fact-item'>
            <div className='count-container'>
               <Odometer value={projects} className='' />
               <span className='indicator'>+</span>
            </div>
            <p>Projects</p>
         </div>
      </div>
   );
};
