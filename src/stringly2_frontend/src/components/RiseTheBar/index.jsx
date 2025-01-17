// import React, { useEffect, useRef, useState } from "react";  
// import "../RiseTheBar/style.scss";  
// import { gsap } from "gsap";  
// import { ScrollTrigger } from "gsap/ScrollTrigger";  

// gsap.registerPlugin(ScrollTrigger);  

// const RiseTheBar = () => {  
//     const containerRef = useRef(null);  
//     const ImageContainerRef1 = useRef(null);  
//     const ImageContainerRef2 = useRef(null);  
//     const headerRef1 = useRef(null);  
//     const headerRef2 = useRef(null);  
//     const imageRef1 = useRef(null);  
//     const imageRef2 = useRef(null);  
    
//     useEffect(() => {
//     if (!containerRef.current || !ImageContainerRef1.current || !ImageContainerRef2.current) return;

//     // Pinning the section
//     ScrollTrigger.create({
//         trigger: containerRef.current,
//         start: "top top",
//         end: "bottom+=300%",
//         pin: true,
//         pinSpacing: true,
//     });

//     // Animation for ImageContainerRef1
//     gsap.to(ImageContainerRef1.current, {
//         y: -20,
//         opacity: 0,
//         scrollTrigger: {
//             trigger: containerRef.current,
//             start: "top top",
//             end: "bottom center",
//             scrub: true,
//             pinSpacing: true
//         },
//     });

//     // Header animation for ImageContainerRef1
//     gsap.to(headerRef1.current, {
//         y: -50,
//         scale: 0.6,
//         opacity: 0,
//         scrollTrigger: {
//             trigger: ImageContainerRef1.current,
//             start: "top center",
//             end: "center top",
//             scrub: true,
//         },
//     });

//     // Animate images container with staggered entrance for ImageContainerRef1
//     const images1 = gsap.utils.toArray(imageRef1.current.children);
//     images1.forEach((image, index) => {
//         gsap.fromTo(
//             image,
//             { y: 2400, opacity: 0, scale: 0.8, rotate : 0 },
//             {
//                 y: -50,
//                 opacity: 1,
//                 scale: 1,
//                 rotation: 10 * (index % 2 === 0 ? 1 : -1),
//                 scrollTrigger: {
//                     trigger: ImageContainerRef1.current,
//                     start: "top bottom",
//                     end: "center center",
//                     scrub: true,
//                 },
//             }
//         );
//     });

//     // Animation for ImageContainerRef2
//     gsap.to(ImageContainerRef2.current, {
//         y: -700,
//         scrollTrigger: {
//             trigger: containerRef.current,
//             start: "center center",
//             end: "bottom top",
//             scrub: true,
//             pinSpacing: true
//         },
//     });

//     // Header animation for ImageContainerRef2
//     gsap.to(headerRef2.current, {
//         y: -90,
//         scale: 0.6,
//         opacity: 0,
//         scrollTrigger: {
//             trigger: ImageContainerRef2.current,
//             start: "top center",
//             end: "bottom top",
//             scrub: true,
//         },
//     });

//     // Animate images container with staggered entrance for ImageContainerRef2
//     const images2 = gsap.utils.toArray(imageRef2.current.children);
//     images2.forEach((image, index) => {
//         gsap.fromTo(
//             image,
//             { y: 1000, opacity: 0, scale: 0.8, rotate : 0 },
//             {
//                 y: -50,
//                 opacity: 1,
//                 rotation: 10 * (index % 2 === 0 ? 1 : -1),
//                 scale: 1,
//                 scrollTrigger: {
//                     trigger: ImageContainerRef2.current,
//                     start: "top bottom",
//                     end: "center center",
//                     scrub: true,
//                 },
//             }
//         );
//     });

//     return () => {
//         ScrollTrigger.killAll(); // Clean-up ScrollTrigger instances
//     };
// }, []);


//     return (  
//         <div  
//             ref={containerRef}  
//             className={`relative flex flex-col mx-auto justify-center items-center w-full h-screen`}  
//         >  

//             {/* Image section 1 */}  
//             <div ref={ImageContainerRef1} className="bg-half-moon-gradient-red flex items-center justify-center absolute top-0 h-[700px]">  
//                 <div ref={headerRef1} className="flex items-center text-center font-sf text-[70px] leading-[72px] font-semibold text-black">  
//                     Raise the Bar, <span>  
//                         <img src="./landing/RiseComponent/button-toggle-red.svg" alt="Red toggle" />  
//                     </span>  
//                     Your Way  
//                 </div>  
//                 <div ref={imageRef1} className={` absolute w-full h-full flex justify-center items-center gap-10`}>  
//                     {/* Images for First Container */}  
//                     {["Property1-image-3", "Property1-image-1","Property1-image-2", "Property1-image-4"].map((img, index) => (  
//                         <div key={index} className={`group relative ${index % 2 === 0 ? 'h-[445px] w-[270px] transform rotate-[0deg]' : 'h-[485px] w-[325px] transform rotate-[0deg]'} ${index === 1 && 'w-[325px] z-20 left-[45px]'} ${index === 0 && 'left-[80px]'} ${index === 2 && 'left-[30px] z-10'} ${index === 3 && 'left-[-5px] w-[390px]'} hover:scale-105 transition-transform`}>  
//                             <img loading="lazy" src={`./landing/RiseComponent/${img}.png`} alt={`Image ${index + 1}`} className="absolute transition-opacity duration-500 opacity-100 group-hover:opacity-0" />  
//                             <img loading="lazy" src={`./landing/RiseComponent/section-1(Black${index + 1}).png`} alt={`Hovered Image ${index + 1}`} className="absolute transition-opacity duration-500 opacity-0  group-hover:opacity-100" />  
//                         </div>  
//                     ))}  
//                 </div>  
//             </div>  

//             {/* Image section 2 */}  
//             <div ref={ImageContainerRef2} className=" bg-half-moon-gradient-blue  flex items-center justify-center absolute top-[100vh] h-[700px]">  
//                 <div ref={headerRef2} className="flex items-center text-center font-sf text-[70px] leading-[72px] font-semibold text-black">  
//                     Raise the Bar, <span>  
//                         <img src="./landing/RiseComponent/button-toggle-blue.svg" alt="Blue toggle" />  
//                     </span>  
//                     Your Way  
//                 </div>  
//                 <div ref={imageRef2} className="absolute w-full h-full flex justify-center items-center gap-10 transition-all duration-500">  
//                     {/* Images for Second Container */}  
//                     {["Property2Component3", "Property2Component4", "Property2Component2", "Property2Component1"].map((img, index) => (  
//                         <div key={index} className={`group relative ${index % 2 === 0 ? 'h-[445px] w-[270px] transform rotate-[0deg]' : 'h-[485px] w-[325px] transform rotate-[0deg]'} ${index === 0 && 'w-[330px] left-[110px]'} ${index === 1 && 'w-[325px] z-20 left-[20px]'} ${index === 2 && 'left-[-20px] top-[10px] z-10'} ${index === 3 && 'left-[-65px]'} hover:scale-105 transition-transform`}>  
//                             <img loading="lazy" src={`./landing/RiseComponent/${img}.png`} alt={`Second Image ${index + 1}`} className="absolute transition-opacity duration-500 opacity-100 group-hover:opacity-0" />  
//                             <img loading="lazy" src={`./landing/RiseComponent/Property2Black${index + 1}.png`} alt={`Hovered Second Image ${index + 1}`} className="absolute transition-opacity duration-500 opacity-0 group-hover:opacity-100" />  
//                         </div>  
//                     ))}  
//                 </div>  
//             </div>  
//         </div>  
//     );  
// };  

// export default RiseTheBar;

import React, { useEffect, useRef } from "react";
import "../RiseTheBar/style.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RiseTheBar = () => {
    const containerRef = useRef(null);
    const imageContainerRef1 = useRef(null);
    const imageContainerRef2 = useRef(null);
    const headerRef1 = useRef(null);
    const headerRef2 = useRef(null);
    const imageRef1 = useRef(null);
    const imageRef2 = useRef(null);

    useEffect(() => {
        if (!containerRef.current || !imageContainerRef1.current || !imageContainerRef2.current) return;

        // Pinning the section
        ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top top",
            end: "bottom+=200%",
            pin: true,
            pinSpacing: true,
        });

        // Animation for ImageContainerRef1
        gsap.to(imageContainerRef1.current, {
            opacity: 0,
            zIndex: 0,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "center center",
                scrub: true,
            },
        });

        // Header animation for ImageContainerRef1
        gsap.to(headerRef1.current, {
            y: -50,
            scale: 0.6,
            opacity: 0,
            scrollTrigger: {
                trigger: imageContainerRef1.current,
                start: "top center",
                end: "center top",
                scrub: true,
            },
        });

        // Staggered image animation for ImageContainerRef1
        const images1 = gsap.utils.toArray(imageRef1.current.children);
        images1.forEach((image, index) => {
            gsap.fromTo(
                image,
                { y: 2400, opacity: 0, scale: 0.8, rotate: 0 },
                {
                    y: -250,
                    opacity: 1,
                    scale: 1,
                    rotation: 10 * (index % 2 === 0 ? 1 : -1),
                    scrollTrigger: {
                        trigger: imageContainerRef1.current,
                        start: "top bottom",
                        end: "center center",
                        scrub: true,
                    },
                }
            );
        });

        // Animation for ImageContainerRef2
        gsap.fromTo(
            imageContainerRef2.current,
            { opacity: 0, zIndex: -1 },
            {
                opacity: 1,
                zIndex: 1,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "center center",
                    end: "bottom top",
                    scrub: true,
                },
            }
        );

        // Header animation for ImageContainerRef2
        gsap.to(headerRef2.current, {
            y: 80,
            scale: 0.9,
            opacity: 0,
            scrollTrigger: {
                trigger: imageContainerRef2.current,
                start: "top center",
                end: "bottom top",
                scrub: true,
            },
        });

        // Staggered image animation for ImageContainerRef2
        const images2 = gsap.utils.toArray(imageRef2.current.children);
        images2.forEach((image, index) => {
            gsap.fromTo(
                image,
                { y: 1000, opacity: 0.5, scale: 0.8, rotate: 0 },
                {
                    y: -250,
                    opacity: 1,
                    scale: 1,
                    rotation: 10 * (index % 2 === 0 ? 1 : -1),
                    scrollTrigger: {
                        trigger: imageContainerRef2.current,
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
   
    
    useEffect(() => {
        if (!imageRef2.current) return; 
        gsap.fromTo(
            imageRef2.current,
            { y: 100 }, // Starting position
            {
                y: 0, // End position
                duration: 1, 
                ease: "power1.out",
                delay: 0.5,
            }
        );
    }, [imageRef2]);
    
    

    return (
        <div
            ref={containerRef}
            className="relative flex flex-col mx-auto justify-center items-center w-full h-screen"
        >
            {/* Image section 1 */}
            <div
                ref={imageContainerRef1}
                className="absolute inset-0 flex items-center justify-center bg-half-moon-gradient-red"
            >
                <div ref={headerRef1} className="flex items-center jusify-center text-center font-sf text-[70px] font-semibold text-black">
                    Raise the Bar,{" "}
                    <span>
                        <img
                            src="./landing/RiseComponent/button-toggle-red.svg"
                            alt="Red toggle"
                        />
                    </span>
                    Your Way
                </div>
                <div ref={imageRef1} className="absolute w-full h-full flex justify-center items-center gap-10">
                    {["Property1-image-3", "Property1-image-1", "Property1-image-2", "Property1-image-4"].map(
                        (img, index) => (
                            <div
                                key={index}
                                className={`group hover:scale-105 transition-transform group relative ${index === 0 && 'left-[100px] xl:left-[240px] md:w-[230px] xl:w-[390px]'} ${index === 1 && 'md:w-[280px] xl:w-[390px] top-[-30px] z-20 left-[-5px] xl:left-[35px]'} ${index === 2 && 'left-[40px] xl:left-[50px] md:w-[230px] xl:w-[390px] z-10'} ${index === 3 && 'left-[-75px] xl:left-[-160px] xl:top-[-30px] md:w-[260px] xl:w-[390px]'} `}
                            >
                                <img
                                    src={`./landing/RiseComponent/${img}.png`}
                                    alt={`Image ${index + 1}`}
                                    loading="lazy"
                                    className="absolute transition-opacity duration-500 opacity-100 group-hover:opacity-0"
                                />
                                <img
                                    src={`./landing/RiseComponent/section-1(Black${index + 1}).png`}
                                    alt={`Hovered Image ${index + 1}`}
                                    loading="lazy"
                                    className="absolute transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                                />
                            </div>
                        )
                    )}
                </div>
            </div>

            {/* Image section 2 */}
            <div
                ref={imageContainerRef2}
                className="absolute inset-0 flex items-start justify-center bg-half-moon-gradient-blue"
            >
                <div ref={headerRef2} className="z-80 flex items-center justify-between text-center font-sf text-[70px] font-semibold text-black">
                    Raise the Bar,{" "}
                    <span>
                        <img
                            src="./landing/RiseComponent/button-toggle-blue.svg"
                            alt="Blue toggle"
                        />
                    </span>
                    Your Way
                </div>
                <div ref={imageRef2} className="absolute w-full h-full flex justify-center transition-all items-center gap-10">
                    {["Property2Component3", "Property2Component4", "Property2Component2", "Property2Component1"].map(
                        (img, index) => (
                            <div
                                key={index}
                                className={`group hover:scale-105 transition-transform group relative ${index === 1 && 'md:w-[270px] xl:w-[330px] left-[-60px] z-20'} ${index === 0 && 'md:w-[270px] xl:w-[390px] md:left-[75px] xl:left-[165px]'} ${index === 2 && 'left-[-10px] md:w-[230px] xl:w-[300px] z-10'} ${index === 3 && 'md:left-[-90px] xl:left-[-135px] md:w-[220px] xl:w-[300px]'}`}
                            >
                                <img
                                    src={`./landing/RiseComponent/${img}.png`}
                                    alt={`Second Image ${index + 1}`}
                                    loading="lazy"
                                    className="absolute transition-opacity duration-500 opacity-100 group-hover:opacity-0"
                                />
                                <img
                                    src={`./landing/RiseComponent/Property2Black${index + 1}.png`}
                                    alt={`Hovered Second Image ${index + 1}`}
                                    loading="lazy"
                                    className="absolute transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                                />
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default RiseTheBar;
