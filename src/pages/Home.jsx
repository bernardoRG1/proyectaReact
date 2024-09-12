  import { useGSAP } from "@gsap/react";
  import { About } from "../components/About";
  import { Contact } from "../components/Contact";
  import { Hero } from "../components/Hero";
  import {Nav} from "../components/Nav";
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { Video } from "../components/Video";
  import { SnapItem } from "../components/SnapItem";
  import { useEffect } from "react";
  import delmarlogo from '../assets/logos/delmar.webp'
  import buzzlogo from '../assets/logos/buzz.png'
  import sandyLogo from '../assets/logos/SANDY.png'
  import { HorizontalNav } from "../components/HorizontalNav";


  import { motion } from "framer-motion";

  export const Home = () => {
  
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
      ScrollTrigger.defaults({
        scroller: ".wrapper",
      });
  
  

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
  

    useEffect(() => {
      gsap.utils.toArray(".parallax").forEach((section) => {
        gsap.to(section, {
          backgroundPositionY: "50%", 
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom", 
            end: "bottom top", 
            scrub: true, 
          },
        });
      });
    }, []);
  

    useEffect(() => {
      ScrollTrigger.create({
        trigger: ".hero-section", 
        start: "top center",
        end: "bottom center", 
        onEnter: () => gsap.to(".horizontal-nav", { opacity: 1, x: 0, duration: 1.5, ease: "power4.out" }), 
        onLeaveBack: () => gsap.to(".horizontal-nav", { opacity: 0, x: -100, duration: 1.5, ease: "power4.out" }) 
      });
    }, []);
  
    useEffect(() => {
      const showBullets = () => gsap.to(".bullet", { opacity: 1, x: 0, duration: 1.5, ease: "power4.out" });
      const hideBullets = () => gsap.to(".bullet", { opacity: 0, x: 100, duration: 1.5, ease: "power4.out" });
    
      const parallaxSections = gsap.utils.toArray(".parallax");
    
      parallaxSections.forEach((section, index) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top center",
          end: "bottom center",
          onEnter: showBullets,
          onLeave: index === parallaxSections.length - 1 ? hideBullets : null, 
          onLeaveBack: index === 0 ? hideBullets : null, 
          onEnterBack: showBullets,
        });
      });
    
      
      ScrollTrigger.create({
        trigger: parallaxSections[0], 
        start: "top top",
        onLeaveBack: hideBullets,
      });
    }, []);

  

    return (
      <motion.div className="page"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
        >
        <Nav  />
  
        <div className="horizontal-nav fixed opacity-0 h-[70vh] bg0 bottom-0 w-24 flex  flex-col justify-between items-center p-10 z-50 -translate-x-full">
          <HorizontalNav />
        </div>
        <div className="wrapper"> 
          <Video  />
  
          <Hero  className="hero-section" />
          <SnapItem 
            bgClass="bg-delMar" 
            logoSrc={delmarlogo}
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque nisi cum officia asperiores praesentium mollitia perspiciatis eaque et consectetur ipsam." 
            title="Del Mar"
          
          />
          <SnapItem 
            bgClass="bg-playa" 
            logoSrc={buzzlogo}
            description="Another description here." 
            title="playa"
          />
          <SnapItem 
            bgClass="bg-sunset" 
            logoSrc={sandyLogo}
            description="Yet another description here." 
            title="Sunset"
          />
      
          <About />
          <Contact />
          </div>
    
        
      
  
  
  
        <div className="fixed space-y-6 top-2/4 right-10 z-50">
          <div className="bg-white/25 size-2 rounded-full bullet bullet-1 opacity-0"></div>
          <div className="bg-white/25 size-2 rounded-full bullet bullet-2"></div>
          <div className="bg-white/25 size-2 rounded-full bullet bullet-3"></div>
        </div>
    
    </motion.div>
    );
  }