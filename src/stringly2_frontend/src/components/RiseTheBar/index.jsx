import React, { useEffect, useRef, useState } from "react";  
import "../RiseTheBar/style.scss";  
import { gsap } from "gsap";  
import { ScrollTrigger } from "gsap/ScrollTrigger";  

gsap.registerPlugin(ScrollTrigger);  

const RiseTheBar = () => {  
    const containerRef = useRef(null);  
    const ImageContainerRef1 = useRef(null);  
    const ImageContainerRef2 = useRef(null);  
    const headerRef1 = useRef(null);  
    const headerRef2 = useRef(null);  
    const imageRef1 = useRef(null);  
    const imageRef2 = useRef(null);  
    
    useEffect(() => {
    if (!containerRef.current || !ImageContainerRef1.current || !ImageContainerRef2.current) return;

    // Pinning the section
    ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom+=300%",
        pin: true,
        pinSpacing: true,
    });

    // Animation for ImageContainerRef1
    gsap.to(ImageContainerRef1.current, {
        y: -20,
        opacity: 0,
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom center",
            scrub: true,
            pinSpacing: true
        },
    });

    // Header animation for ImageContainerRef1
    gsap.to(headerRef1.current, {
        y: -50,
        scale: 0.6,
        opacity: 0,
        scrollTrigger: {
            trigger: ImageContainerRef1.current,
            start: "top center",
            end: "center top",
            scrub: true,
        },
    });

    // Animate images container with staggered entrance for ImageContainerRef1
    const images1 = gsap.utils.toArray(imageRef1.current.children);
    images1.forEach((image, index) => {
        gsap.fromTo(
            image,
            { y: 2400, opacity: 0, scale: 0.8, rotate : 0 },
            {
                y: -50,
                opacity: 1,
                scale: 1,
                rotation: 10 * (index % 2 === 0 ? 1 : -1),
                scrollTrigger: {
                    trigger: ImageContainerRef1.current,
                    start: "top bottom",
                    end: "center center",
                    scrub: true,
                },
            }
        );
    });

    // Animation for ImageContainerRef2
    gsap.to(ImageContainerRef2.current, {
        y: -700,
        scrollTrigger: {
            trigger: containerRef.current,
            start: "center center",
            end: "bottom top",
            scrub: true,
            pinSpacing: true
        },
    });

    // Header animation for ImageContainerRef2
    gsap.to(headerRef2.current, {
        y: -90,
        scale: 0.6,
        opacity: 0,
        scrollTrigger: {
            trigger: ImageContainerRef2.current,
            start: "top center",
            end: "bottom top",
            scrub: true,
        },
    });

    // Animate images container with staggered entrance for ImageContainerRef2
    const images2 = gsap.utils.toArray(imageRef2.current.children);
    images2.forEach((image, index) => {
        gsap.fromTo(
            image,
            { y: 1000, opacity: 0, scale: 0.8, rotate : 0 },
            {
                y: -50,
                opacity: 1,
                rotation: 10 * (index % 2 === 0 ? 1 : -1),
                scale: 1,
                scrollTrigger: {
                    trigger: ImageContainerRef2.current,
                    start: "top bottom",
                    end: "center center",
                    scrub: true,
                },
            }
        );
    });

    return () => {
        ScrollTrigger.killAll(); // Clean-up ScrollTrigger instances
    };
}, []);


    return (  
        <div  
            ref={containerRef}  
            className={`relative flex flex-col mx-auto justify-center items-center w-full h-screen`}  
        >  

            {/* Image section 1 */}  
            <div ref={ImageContainerRef1} className="bg-half-moon-gradient-red flex items-center justify-center absolute top-0">  
                <div ref={headerRef1} className="flex items-center text-center font-sf text-[70px] leading-[72px] font-semibold text-black">  
                    Raise the Bar, <span>  
                        <img src="./landing/RiseComponent/button-toggle-red.svg" alt="Red toggle" />  
                    </span>  
                    Your Way  
                </div>  
                <div ref={imageRef1} className={` absolute w-full h-full flex justify-center items-center gap-10`}>  
                    {/* Images for First Container */}  
                    {["Property1-image-3", "Property1-image-1","Property1-image-2", "Property1-image-4"].map((img, index) => (  
                        <div key={index} className={`group relative ${index % 2 === 0 ? 'h-[445px] w-[270px] transform rotate-[0deg]' : 'h-[485px] w-[325px] transform rotate-[0deg]'} ${index === 1 && 'w-[325px] z-20 left-[45px]'} ${index === 0 && 'left-[80px]'} ${index === 2 && 'left-[30px] z-10'} ${index === 3 && 'left-[-5px] w-[390px]'} hover:scale-105 transition-transform`}>  
                            <img src={`./landing/RiseComponent/${img}.png`} alt={`Image ${index + 1}`} className="absolute transition-opacity duration-500 opacity-100 group-hover:opacity-0" />  
                            <img src={`./landing/RiseComponent/section-1(Black${index + 1}).png`} alt={`Hovered Image ${index + 1}`} className="absolute transition-opacity duration-500 opacity-0  group-hover:opacity-100" />  
                        </div>  
                    ))}  
                </div>  
            </div>  

            {/* Image section 2 */}  
            <div ref={ImageContainerRef2} className=" bg-half-moon-gradient-blue  flex items-center justify-center absolute top-[100vh]">  
                <div ref={headerRef2} className="flex items-center text-center font-sf text-[70px] leading-[72px] font-semibold text-black">  
                    Raise the Bar, <span>  
                        <img src="./landing/RiseComponent/button-toggle-blue.svg" alt="Blue toggle" />  
                    </span>  
                    Your Way  
                </div>  
                <div ref={imageRef2} className="absolute w-full h-full flex justify-center items-center gap-10 transition-all duration-500">  
                    {/* Images for Second Container */}  
                    {["Property2Component3", "Property2Component4", "Property2Component2", "Property2Component1"].map((img, index) => (  
                        <div key={index} className={`group relative ${index % 2 === 0 ? 'h-[445px] w-[270px] transform rotate-[0deg]' : 'h-[485px] w-[325px] transform rotate-[0deg]'} ${index === 0 && 'w-[330px] left-[110px]'} ${index === 1 && 'w-[325px] z-20 left-[20px]'} ${index === 2 && 'left-[-20px] top-[10px] z-10'} ${index === 3 && 'left-[-65px]'} hover:scale-105 transition-transform`}>  
                            <img src={`./landing/RiseComponent/${img}.png`} alt={`Second Image ${index + 1}`} className="absolute transition-opacity duration-500 opacity-100 group-hover:opacity-0" />  
                            <img src={`./landing/RiseComponent/Property2Black${index + 1}.png`} alt={`Hovered Second Image ${index + 1}`} className="absolute transition-opacity duration-500 opacity-0 group-hover:opacity-100" />  
                        </div>  
                    ))}  
                </div>  
            </div>  
        </div>  
    );  
};  

export default RiseTheBar;