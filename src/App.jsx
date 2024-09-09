import { useGSAP } from "@gsap/react";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import Nav from "./components/Nav";
import { FaBehance, FaFacebookF, FaInstagram } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Video } from "./components/Video";
import { SnapItem } from "./components/SnapItem";
import { useEffect } from "react";
import SmoothScroll from "./components/SmoothScroll/SmoothScroll";
import delmarlogo from './assets/logos/delmar.webp'
import buzzlogo from './assets/logos/buzz.png'
import sandyLogo from './assets/logos/SANDY.png'
import { HorizontalNav } from "./components/HorizontalNav";
import { HeroGrid } from "./components/HeroGrid";

export default function App() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    ScrollTrigger.defaults({
      scroller: ".wrapper",
    });

    // Efecto para las bullets en el lateral derecho
    gsap.utils.toArray(".panel").forEach((panel, index) => {
      gsap.to(`.bullet-${index + 1}`, {
        background: "#fff",
        scrollTrigger: {
          trigger: panel,
          start: "top center",
          end: "bottom center",
          toggleActions: "play reverse play reverse",
        },
      });
    });
  });

  // Añadir Parallax a las imágenes de fondo y al video
  useEffect(() => {
    gsap.utils.toArray(".parallax").forEach((section) => {
      gsap.to(section, {
        backgroundPositionY: "50%", // Cambia la velocidad de desplazamiento de la imagen o video
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom", // Empieza cuando el top del panel está en el bottom del viewport
          end: "bottom top", // Termina cuando el bottom del panel está en el top del viewport
          scrub: true, // Efecto de desplazamiento suave
        },
      });
    });
  }, []);

  // Animación para el HorizontalNav
  useEffect(() => {
    ScrollTrigger.create({
      trigger: ".hero-section", // Asegúrate de que ".snap-item" sea el selector correcto para la segunda sección
      start: "top center", // Inicia cuando la segunda sección llega al centro de la pantalla
      end: "bottom center", // Finaliza cuando la segunda sección sale del viewport
      onEnter: () => gsap.to(".horizontal-nav", { opacity: 1, x: 0, duration: 1.5, ease: "power4.out" }), // Aparece
      onLeaveBack: () => gsap.to(".horizontal-nav", { opacity: 0, x: -100, duration: 1.5, ease: "power4.out" }) // Desaparece
    });
  }, []);

  return (
    <>
      <Nav />

      <div className="horizontal-nav fixed opacity-0 h-[70vh] bg0 bottom-0 w-24 flex  flex-col justify-between items-center p-10 z-50 -translate-x-full">
        <HorizontalNav />
      </div>
      <div className="wrapper">
        <Video  />
        <Hero  />
        <SnapItem 
          bgClass="bg-delMar" 
          logoSrc={delmarlogo}
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque nisi cum officia asperiores praesentium mollitia perspiciatis eaque et consectetur ipsam." 
        />
        <SnapItem 
          bgClass="bg-playa" 
          logoSrc={buzzlogo}
          description="Another description here." 
        />
        <SnapItem 
          bgClass="bg-sunset" 
          logoSrc={sandyLogo}
          description="Yet another description here." 
        />
        <About />
         <Contact />
      </div>
      
   



      <div className="fixed space-y-6 top-2/4 right-10 z-50">
        <div className="bg-white/25 size-2 rounded-full bullet-1"></div>
        <div className="bg-white/25 size-2 rounded-full bullet-2"></div>
        <div className="bg-white/25 size-2 rounded-full bullet-3"></div>
      </div>
      

    </>
  );
}
