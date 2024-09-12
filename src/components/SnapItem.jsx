import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const SnapItem = ({ bgClass, logoSrc, description, title }) => {
  const logoRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);



    // Animación para el título
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, x: -200 }, // Comienza fuera de la pantalla a la izquierda
      {
        opacity: 1,
        x: 0,
        duration: 4,
        ease: "power1.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );

    // Animación para la descripción
    gsap.fromTo(
      descriptionRef.current,
      { opacity: 0, x: 200 }, // Comienza fuera de la pantalla a la derecha
      {
        opacity: 1,
        x: 0,
        duration: 2,
        ease: "power1.out",
        scrollTrigger: {
          trigger: descriptionRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section className={`parallax panel h-screen snap-start relative bg-image ${bgClass}`}>
      <div className='px-40 h-full'>
        <div className='px-25 h-full flex flex-col justify-center gap-1 relative top-[-140px]'>
          <img 
            src={logoSrc} 
            width={800} 
            alt="Logo" 
            ref={logoRef} 
          />
          <h1 
            className='text-4xl mt-2 max-w-screen-lg' 
            ref={descriptionRef}
          >
            {description}
          </h1>
        </div>
      </div>
      <div 
        className="absolute top-[90%] text-2xl right-10 section-title text-white p-2 rounded-md" 
        ref={titleRef}
      >
        {title}
      </div>
    </section>
  );
};
