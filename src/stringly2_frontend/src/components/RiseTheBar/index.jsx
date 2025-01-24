// import React, { useEffect, useRef } from "react";
// import "../RiseTheBar/style.scss";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const RiseTheBar = () => {
//   const containerRef = useRef(null);
//   const imageContainerRef1 = useRef(null);
//   const imageContainerRef2 = useRef(null);
//   const headerRef1 = useRef(null);
//   const headerRef2 = useRef(null);
//   const imageRef1 = useRef(null);
//   const imageRef2 = useRef(null);

//   useEffect(() => {
//     if (
//       !containerRef.current ||
//       !imageContainerRef1.current ||
//       !imageContainerRef2.current
//     )
//       return;

//     // Pinning the section
//     ScrollTrigger.create({
//       trigger: containerRef.current,
//       start: "top top",
//       end: "bottom+=200%",
//       pin: true,
//       pinSpacing: true,
//     });

//     // Animation for ImageContainerRef1
//     gsap.to(imageContainerRef1.current, {
//       opacity: 0,
//       zIndex: 0,
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top top",
//         end: "center center",
//         scrub: true,
//       },
//     });

//     // Header animation for ImageContainerRef1
//     gsap.to(headerRef1.current, {
//       y: -50,
//       scale: 0.6,
//       opacity: 0,
//       scrollTrigger: {
//         trigger: imageContainerRef1.current,
//         start: "top center",
//         end: "center top",
//         scrub: true,
//       },
//     });

//     // Staggered image animation for ImageContainerRef1
//     const images1 = gsap.utils.toArray(imageRef1.current.children);
//     images1.forEach((image, index) => {
//       gsap.fromTo(
//         image,
//         {
//           y: 2400,
//           opacity: 0,
//           scale: 0.8,
//           rotation: 10 * (index % 2 === 0 ? 1 : -13),
//         },
//         {
//           y: 0,
//           opacity: 1,
//           scale: 1,
//           rotation: 10 * (index % 2 === 0 ? 1 : -1),
//           scrollTrigger: {
//             trigger: imageContainerRef1.current,
//             start: "top bottom",
//             end: "center center",
//             scrub: true,
//           },
//         }
//       );
//     });

//     // Animation for ImageContainerRef2
//     gsap.fromTo(
//       imageContainerRef2.current,
//       { opacity: 0, zIndex: -1 },
//       {
//         opacity: 1,
//         zIndex: 1,
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "center center",
//           end: "bottom top",
//           scrub: true,
//         },
//       }
//     );

//     // Header animation for ImageContainerRef2
//     gsap.to(headerRef2.current, {
//       y: 80,
//       scale: 0.9,
//       opacity: 0,
//       scrollTrigger: {
//         trigger: imageContainerRef2.current,
//         start: "top center",
//         end: "bottom top",
//         scrub: true,
//       },
//     });

//     // Staggered image animation for ImageContainerRef2
//     const images2 = gsap.utils.toArray(imageRef2.current.children);
//     images2.forEach((image, index) => {
//       gsap.fromTo(
//         image,
//         { y: 1000, opacity: 0.5, scale: 0.8, rotate: 0 },
//         {
//           y: -0,
//           opacity: 1,
//           scale: 1,
//           rotation: 10 * (index % 2 === 0 ? 1 : -1),
//           scrollTrigger: {
//             trigger: imageContainerRef2.current,
//             start: "top bottom",
//             end: "center center",
//             scrub: true,
//           },
//         }
//       );
//     });

//     return () => {
//       ScrollTrigger.killAll(); // Clean-up ScrollTrigger instances
//     };
//   }, []);

//   useEffect(() => {
//     if (!imageRef2.current) return;
//     if (imageRef2.current) {
//       gsap.fromTo(
//         imageRef2.current,
//         { y: 100 }, // Starting position
//         {
//           y: 0, // End position
//           duration: 1,
//           ease: "power1.out",
//           delay: 0.5,
//         }
//       );
//     } else {
//       gsap.fromTo(
//         imageRef2.current,
//         { y: 0 }, // Starting position
//         {
//           y: 100, // End position
//           duration: 1,
//           ease: "power1.out",
//           delay: 0.5,
//         }
//       );
//     }
//   }, [imageRef2, imageRef1]);

//   return (
//     <div
//       ref={containerRef}
//       className="relative flex flex-col mx-auto justify-center items-center w-full h-screen"
//     >
//       {/* Image section 1 */}
//       <div
//         ref={imageContainerRef1}
//         className="absolute inset-0 flex items-center justify-center bg-half-moon-gradient-red"
//       >
//         <div
//           ref={headerRef1}
//           className="flex items-center jusify-center text-center font-sf text-[70px] font-semibold text-black"
//         >
//           Raise the Bar,{" "}
//           <span>
//             <img
//               src="./landing/RiseComponent/button-toggle-red.svg"
//               alt="Red toggle"
//             />
//           </span>
//           Your Way
//         </div>
//         <div
//           ref={imageRef1}
//           className="absolute w-full h-full flex justify-center items-center gap-[60px]"
//         >
//           {[
//             {
//               img: "property1_image1",
//               text: ["TUNE", "INTO", "YOUR", "VIBE!"],
//             },
//             { img: "property1_image2", text: ["Swipe.", "Match.", "Connect."] },
//             {
//               img: "property1_image3",
//               text: ["DOWNLOAD.", "AND", "FIND YOUR.", "STRING"],
//             },
//             {
//               img: "property1_image4",
//               text: ["PULLTHE", "STRNGS", "OF", "YOUR", "VIBE!"],
//             },
//           ].map((item, index) => (
//             <div
//               key={index}
//               className={`group relative h-[550px] w-[260px] transition-transform ${
//                 index === 0 && "md:left-[45px] xl:left-[75px]"
//               } ${index === 1 && "left-[20px] xl:left-[50px] z-20"} ${
//                 index === 2 && "left-[-10px] z-10"
//               } ${index === 3 && "md:left-[-40px] xl:left-[-85px]"}`}
//               style={{
//                 backgroundImage: `url('./landing/RiseComponent/black-phone.png')`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 boxSizing: "border-box",
//               }}
//             >
//               {/* Image on Top */}
//               <img
//                 src={`./landing/RiseComponent/${item.img}.png`}
//                 alt={`Image ${index + 1}`}
//                 loading="lazy"
//                 className="absolute inset-0 transition-transform px-[8px] py-4 w-full h-full transition-opacity flex items-center justify-center duration-500 opacity-100 group-hover:opacity-0 group-hover:translate-y-10"
//               />

//               {/* Text to Show on Hover */}
//               <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                 <p
//                   className={`font-sf text-white leading-[42px] h-full flex flex-col items-left justify-center font-semibold text-[32px] scale-x-[-1] transition-transform duration-500 group-hover:scale-x-[1]`}
//                 >
//                   {item.text.map((word, indx) => (
//                     <span key={indx} className={`inline-block`}>
//                       {word}
//                     </span>
//                   ))}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Image section 2 */}
//       <div
//         ref={imageContainerRef2}
//         className="absolute inset-0 flex items-start justify-center bg-half-moon-gradient-blue"
//       >
//         <div
//           ref={headerRef2}
//           className="flex items-center justify-between text-center font-sf text-[70px] font-semibold text-black"
//         >
//           Raise the Bar,{" "}
//           <span>
//             <img
//               src="./landing/RiseComponent/button-toggle-blue.svg"
//               alt="Blue toggle"
//             />
//           </span>
//           Your Way
//         </div>
//         <div
//           ref={imageRef2}
//           className="absolute w-full h-full flex justify-center transition-all items-center gap-[60px]"
//         >
//           {[
//             {
//               img: "property2_image2",
//               text: ["DUAL", "DATING", "AND", "NETWORKING"],
//             },
//             { img: "property2_image1", text: ["Engage", "Your", "Network"] },
//             { img: "property2_image3", text: ["Uncover", "your", "network"] },
//             {
//               img: "property2_image4",
//               text: ["Dive into ", "your", "connections"],
//             },
//           ].map((item, index) => (
//             <div
//               key={index}
//               className={`group relative h-[550px] w-[260px] transition-transform ${
//                 index === 0 && "md:left-[45px] xl:left-[75px]"
//               } ${index === 1 && "left-[20px] xl:left-[50px] z-20"} ${
//                 index === 2 && "left-[-10px] z-10"
//               } ${index === 3 && "md:left-[-40px] xl:left-[-85px]"}`}
//               style={{
//                 backgroundImage: `url('./landing/RiseComponent/black-phone.png')`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 boxSizing: "border-box",
//               }}
//             >
//               {/* Image on Top */}
//               <img
//                 src={`./landing/RiseComponent/${item.img}.png`}
//                 alt={`Image ${index + 1}`}
//                 loading="lazy"
//                 className="absolute inset-0 transition-transform transition-opacity px-[8px] py-3 w-full h-full duration-500 opacity-100 group-hover:opacity-0 group-hover:translate-y-20"
//               />

//               {/* Text to Show on Hover */}
//               <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                 <p
//                   className={`font-sf text-white leading-[42px] h-full flex flex-col items-left justify-center font-semibold text-[32px] scale-x-[-1] transition-transform duration-500 group-hover:scale-x-[1]`}
//                 >
//                   {item.text.map((word, indx) => (
//                     <span key={indx} className={`inline-block`}>
//                       {word}
//                     </span>
//                   ))}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
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
    if (
      !containerRef.current ||
      !imageContainerRef1.current ||
      !imageContainerRef2.current
    )
      return;

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
        {
          y: 2400,
          opacity: 0,
          scale: 0.8,
          rotation: 10 * (index % 2 === 0 ? 1 : -13),
        },
        {
          y: 0,
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
          y: -0,
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
    if (imageRef2.current) {
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
    } else {
      gsap.fromTo(
        imageRef2.current,
        { y: 0 }, // Starting position
        {
          y: 100, // End position
          duration: 1,
          ease: "power1.out",
          delay: 0.5,
        }
      );
    }
  }, [imageRef2, imageRef1]);

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
        <div
          ref={headerRef1}
          className="flex items-center jusify-center text-center font-sf text-[70px] font-semibold text-black"
        >
          Raise the Bar,{" "}
          <span>
            <img
              src="./landing/RiseComponent/button-toggle-red.svg"
              alt="Red toggle"
            />
          </span>
          Your Way
        </div>
        <div
          ref={imageRef1}
          className="absolute w-full h-full flex justify-center items-center gap-[60px]"
        >
          {[
            {
              img: "property1_image1",
              text: ["TUNE", "INTO", "YOUR", "VIBE!"],
            },
            { img: "property1_image2", text: ["Swipe.", "Match.", "Connect."] },
            {
              img: "property1_image3",
              text: ["DOWNLOAD.", "AND", "FIND YOUR.", "STRING"],
            },
            {
              img: "property1_image4",
              text: ["PULLTHE", "STRNGS", "OF", "YOUR", "VIBE!"],
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`group relative h-[550px] w-[260px] transition-transform ${
                index === 0 && "md:left-[45px] xl:left-[75px]"
              } ${index === 1 && "left-[20px] xl:left-[50px] z-20"} ${
                index === 2 && "left-[-10px] z-10"
              } ${index === 3 && "md:left-[-40px] xl:left-[-85px]"}`}
              style={{
                backgroundImage: `url('./landing/RiseComponent/black-phone.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxSizing: "border-box",
              }}
            >
              {/* Image on Top */}
              <img
                src={`./landing/RiseComponent/${item.img}.png`}
                alt={`Image ${index + 1}`}
                loading="lazy"
                className="absolute inset-0 transition-transform px-[8px] py-4 w-full h-full transition-opacity flex items-center justify-center duration-500 opacity-100 group-hover:opacity-0 group-hover:translate-y-10"
              />

              {/* Text to Show on Hover */}
              <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p
                  className={`font-sf text-white leading-[42px] h-full flex flex-col items-left justify-center font-semibold text-[32px] scale-x-[-1] transition-transform duration-500 group-hover:scale-x-[1]`}
                >
                  {item.text.map((word, indx) => (
                    <span key={indx} className={`inline-block`}>
                      {word}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image section 2 */}
      <div
        ref={imageContainerRef2}
        className="absolute inset-0 flex items-start justify-center bg-half-moon-gradient-blue"
      >
        <div
          ref={headerRef2}
          className="flex items-center justify-between text-center font-sf text-[70px] font-semibold text-black"
        >
          Raise the Bar,{" "}
          <span>
            <img
              src="./landing/RiseComponent/button-toggle-blue.svg"
              alt="Blue toggle"
            />
          </span>
          Your Way
        </div>
        <div
          ref={imageRef2}
          className="absolute w-full h-full flex justify-center transition-all items-center gap-[60px]"
        >
          {[
            {
              img: "property2_image2",
              text: ["DUAL", "DATING", "AND", "NETWORKING"],
            },
            { img: "property2_image1", text: ["Engage", "Your", "Network"] },
            { img: "property2_image3", text: ["Uncover", "your", "network"] },
            {
              img: "property2_image4",
              text: ["Dive into ", "your", "connections"],
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`group relative h-[550px] w-[260px] transition-transform ${
                index === 0 && "md:left-[45px] xl:left-[75px]"
              } ${index === 1 && "left-[20px] xl:left-[50px] z-20"} ${
                index === 2 && "left-[-10px] z-10"
              } ${index === 3 && "md:left-[-40px] xl:left-[-85px]"}`}
              style={{
                backgroundImage: `url('./landing/RiseComponent/black-phone.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxSizing: "border-box",
              }}
            >
              {/* Image on Top */}
              <img
                src={`./landing/RiseComponent/${item.img}.png`}
                alt={`Image ${index + 1}`}
                loading="lazy"
                className="absolute inset-0 transition-transform transition-opacity px-[8px] py-3 w-full h-full duration-500 opacity-100 group-hover:opacity-0 group-hover:translate-y-10"
              />

              {/* Text to Show on Hover */}
              <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p
                  className={`font-sf text-white leading-[42px] h-full flex flex-col items-left justify-center font-semibold text-[32px] scale-x-[-1] transition-transform duration-500 group-hover:scale-x-[1]`}
                >
                  {item.text.map((word, indx) => (
                    <span key={indx} className={`inline-block`}>
                      {word}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RiseTheBar;
