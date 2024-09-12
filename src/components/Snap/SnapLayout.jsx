import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SnapItem } from '../SnapItem';
import delmarlogo from '../../assets/logos/delmar.webp';
import buzzlogo from '../../assets/logos/buzz.png';
import sandyLogo from '../../assets/logos/SANDY.png';
import { useEffect } from 'react';

export const SnapLayout = () => {
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        // Snap functionality
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
        // Parallax effect for the background
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

    useEffect(() => {
        // Disable smooth scroll on the page when SnapLayout is active
        const disablePageScroll = () => {
            document.body.style.overflow = "hidden";
        };

        const enablePageScroll = () => {
            document.body.style.overflow = "auto";
        };

        // Trigger to disable scroll when entering SnapLayout
        ScrollTrigger.create({
            trigger: ".snap-section", // When SnapLayout is reached
            start: "top top",
            end: "bottom bottom",
            onEnter: disablePageScroll, // Disable page scroll
            onLeaveBack: enablePageScroll, // Enable scroll when going back
        });

        // Trigger to re-enable scroll after leaving SnapLayout
        ScrollTrigger.create({
            trigger: ".snap-section .panel:last-child", // Last SnapItem
            start: "bottom bottom",
            onLeave: enablePageScroll, // Re-enable page scroll after Snap layout
        });

    }, []);

    return (
        <div className="wrapper snap-section"> 
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
                title="Playa"
            />
            <SnapItem 
                bgClass="bg-sunset" 
                logoSrc={sandyLogo}
                description="Yet another description here." 
                title="Sunset"
            />

            <div className="fixed space-y-6 top-2/4 right-10 z-50">
                <div className="bg-white/25 size-2 rounded-full bullet bullet-1 opacity-0"></div>
                <div className="bg-white/25 size-2 rounded-full bullet bullet-2"></div>
                <div className="bg-white/25 size-2 rounded-full bullet bullet-3"></div>
            </div>
        </div>
    );
};
