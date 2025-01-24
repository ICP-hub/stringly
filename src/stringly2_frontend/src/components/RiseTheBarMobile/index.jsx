// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const RiseTheBarMobile = () => {
//   const containerRef = useRef(null);
//   const imageContainerRef1 = useRef(null);
//   const imageContainerRef2 = useRef(null);
//   const headerRef1 = useRef(null);
//   const headerRef2 = useRef(null);
//   const imageRef1 = useRef(null);
//   const imageRef2 = useRef(null);

//   useEffect(() => {
//     console.log("mobile view");
//     if (
//       !containerRef.current ||
//       !imageContainerRef1.current ||
//       !imageContainerRef2.current ||
//       !imageRef1.current ||
//       !imageRef2.current
//     )
//       return;

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top top",
//         end: "+=400%",
//         scrub: 1,
//         pin: true,
//         anticipatePin: 1,
//       },
//     });

//     // First section animation
//     tl.to(imageRef1.current, {
//       xPercent: -75,
//       ease: "none",
//       duration: 3,
//     });

//     // Fade out first section and fade in second section
//     tl.to(imageContainerRef1.current, { opacity: 0, duration: 1 }, ">=0")
//       .to(headerRef1.current, { opacity: 0, y: -50, duration: 1 }, "<")
//       .to(imageContainerRef2.current, { opacity: 1, duration: 1 }, "<")
//       .to(headerRef2.current, { opacity: 1, y: 0, duration: 1 }, "<");

//     // Second section animation
//     tl.to(imageRef2.current, {
//       xPercent: -75,
//       ease: "none",
//       duration: 3,
//     });

//     return () => {
//       ScrollTrigger.killAll();
//     };
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="relative border-6 border-red-500 flex overflow-hidden flex-col mx-auto justify-center items-center w-full h-screen"
//     >
//       {/* Image section 1 */}
//       <div
//         ref={imageContainerRef1}
//         className="absolute inset-0 flex items-center justify-center bg-half-moon-gradient-red"
//       >
//         <div
//           ref={headerRef1}
//           className="absolute top-10 left-10 flex items-center justify-center text-center font-sf text-[70px] font-semibold text-black"
//         >
//           Raise the Bar,{" "}
//           <span className="ml-4">
//             <img
//               src="./landing/RiseComponent/button-toggle-red.svg"
//               alt="Red toggle"
//             />
//           </span>
//           Your Way
//         </div>
//         <div
//           ref={imageRef1}
//           className="flex justify-start items-center gap-[60px]"
//           style={{ width: "400%" }}
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
//               className="group relative h-[550px] w-[260px] flex-shrink-0"
//               style={{
//                 backgroundImage: `url('./landing/RiseComponent/black-phone.png')`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
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
//                 <p className="font-sf text-white leading-[42px] h-full flex flex-col items-left justify-center font-semibold text-[32px] scale-x-[-1] transition-transform duration-500 group-hover:scale-x-[1]">
//                   {item.text.map((word, indx) => (
//                     <span key={indx} className="inline-block">
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
//         className="absolute inset-0 flex items-start justify-center bg-half-moon-gradient-blue opacity-0"
//       >
//         <div
//           ref={headerRef2}
//           className="absolute top-10 left-10 flex items-center justify-between text-center font-sf text-[70px] font-semibold text-black opacity-0"
//         >
//           Raise the Bar,{" "}
//           <span className="ml-4">
//             <img
//               src="./landing/RiseComponent/button-toggle-blue.svg"
//               alt="Blue toggle"
//             />
//           </span>
//           Your Way
//         </div>
//         <div
//           ref={imageRef2}
//           className="flex justify-start items-center gap-[60px]"
//           style={{ width: "400%" }}
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
//               className="group relative h-[550px] w-[260px] flex-shrink-0"
//               style={{
//                 backgroundImage: `url('./landing/RiseComponent/black-phone.png')`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             >
//               {/* Image on Top */}
//               <img
//                 src={`./landing/RiseComponent/${item.img}.png`}
//                 alt={`Image ${index + 1}`}
//                 loading="lazy"
//                 className="absolute inset-0 transition-transform px-[8px] py-3 w-full h-full transition-opacity duration-500 opacity-100 group-hover:opacity-0 group-hover:translate-y-20"
//               />

//               {/* Text to Show on Hover */}
//               <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                 <p className="font-sf text-white leading-[42px] h-full flex flex-col items-left justify-center font-semibold text-[32px] scale-x-[-1] transition-transform duration-500 group-hover:scale-x-[1]">
//                   {item.text.map((word, indx) => (
//                     <span key={indx} className="inline-block">
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

// export default RiseTheBarMobile;

// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const RiseTheBarMobile = () => {
//   const containerRef = useRef(null);
//   const imageContainerRef1 = useRef(null);
//   const imageContainerRef2 = useRef(null);
//   const headerRef1 = useRef(null);
//   const headerRef2 = useRef(null);
//   const imageRef1 = useRef(null);
//   const imageRef2 = useRef(null);

//   useEffect(() => {
//     console.log("in mobile");
//     const container = containerRef.current;
//     const imageContainer1 = imageContainerRef1.current;
//     const imageContainer2 = imageContainerRef2.current;
//     const header1 = headerRef1.current;
//     const header2 = headerRef2.current;
//     const image1 = imageRef1.current;
//     const image2 = imageRef2.current;

//     if (
//       !container ||
//       !imageContainer1 ||
//       !imageContainer2 ||
//       !header1 ||
//       !header2 ||
//       !image1 ||
//       !image2
//     ) {
//       return;
//     }

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: container,
//         start: "top top",
//         end: "+=400%",
//         scrub: 1,
//         pin: true,
//         anticipatePin: 1,
//         // Ensure that ScrollTrigger is cleaned up properly when the component unmounts
//         onLeave: () => ScrollTrigger.kill(),
//         onLeaveBack: () => ScrollTrigger.kill(),
//       },
//     });

//     // First section animation
//     tl.to(image1, {
//       xPercent: -75,
//       ease: "none",
//       duration: 3,
//     });

//     // Fade out first section and fade in second section
//     tl.to(imageContainer1, { opacity: 0, duration: 1 }, ">=0")
//       .to(header1, { opacity: 0, y: -50, duration: 1 }, "<")
//       .to(imageContainer2, { opacity: 1, duration: 1 }, "<")
//       .to(header2, { opacity: 1, y: 0, duration: 1 }, "<");

//     // Second section animation
//     tl.to(image2, {
//       xPercent: -75,
//       ease: "none",
//       duration: 3,
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="relative flex overflow-hidden flex-col mx-auto justify-center items-center w-full h-screen"
//     >
//       {/* Image section 1 */}
//       <div
//         ref={imageContainerRef1}
//         className="absolute inset-0 flex items-center justify-center bg-half-moon-gradient-red"
//       >
//         <div
//           ref={headerRef1}
//           className="absolute top-10 flex items-center flex-col justify-center text-center font-sf text-[30px] font-semibold text-black"
//         >
//           Raise the Bar,{" "}
//           <span className="ml-4">
//             <img
//               src="./landing/RiseComponent/button-toggle-red.svg"
//               alt="Red toggle"
//             />
//           </span>
//           Your Way
//         </div>
//         <div
//           ref={imageRef1}
//           className="flex justify-start items-center gap-[60px]"
//           style={{ width: "400%" }}
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
//               className="group relative h-[550px] w-[260px] flex-shrink-0"
//               style={{
//                 backgroundImage: `url('./landing/RiseComponent/black-phone.png')`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
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
//                 <p className="font-sf text-white leading-[42px] h-full flex flex-col items-left justify-center font-semibold text-[32px] scale-x-[-1] transition-transform duration-500 group-hover:scale-x-[1]">
//                   {item.text.map((word, indx) => (
//                     <span key={indx} className="inline-block">
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
//         className="absolute inset-0 flex items-start justify-center bg-half-moon-gradient-blue opacity-0"
//       >
//         <div
//           ref={headerRef2}
//           className="absolute top-10 left-10 flex items-center justify-between text-center font-sf text-[70px] font-semibold text-black opacity-0"
//         >
//           Raise the Bar,{" "}
//           <span className="ml-4">
//             <img
//               src="./landing/RiseComponent/button-toggle-blue.svg"
//               alt="Blue toggle"
//             />
//           </span>
//           Your Way
//         </div>
//         <div
//           ref={imageRef2}
//           className="flex justify-start items-center gap-[60px]"
//           style={{ width: "400%" }}
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
//               className="group relative h-[550px] w-[260px] flex-shrink-0"
//               style={{
//                 backgroundImage: `url('./landing/RiseComponent/black-phone.png')`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             >
//               {/* Image on Top */}
//               <img
//                 src={`./landing/RiseComponent/${item.img}.png`}
//                 alt={`Image ${index + 1}`}
//                 loading="lazy"
//                 className="absolute inset-0 transition-transform px-[8px] py-3 w-full h-full transition-opacity duration-500 opacity-100 group-hover:opacity-0 group-hover:translate-y-20"
//               />

//               {/* Text to Show on Hover */}
//               <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                 <p className="font-sf text-white leading-[42px] h-full flex flex-col items-left justify-center font-semibold text-[32px] scale-x-[-1] transition-transform duration-500 group-hover:scale-x-[1]">
//                   {item.text.map((word, indx) => (
//                     <span key={indx} className="inline-block">
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

// export default RiseTheBarMobile;

// import React, { useEffect, useRef } from "react";
// import "../RiseTheBarMobile/style.scss";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const RiseTheBarMobile = () => {
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
//     ) {
//       return;
//     }

//     // Pinning the section
//     ScrollTrigger.create({
//       trigger: containerRef.current,
//       start: "top top",
//       end: "bottom+=200%",
//       pin: true,
//       pinSpacing: true,
//     });

//     // Horizontal scrolling effect for first image container
//     gsap.to(imageContainerRef1.current, {
//       xPercent: -100 * (imageRef1.current.children.length - 1), // Shift left based on the number of images
//       ease: "none",
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top top",
//         end: "+=2000", // Adjust this value based on the total width of the images
//         scrub: true,
//       },
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

//     // Horizontal scrolling effect for second image container
//     gsap.to(imageContainerRef2.current, {
//       xPercent: -100 * (imageRef2.current.children.length - 1), // Shift left based on the number of images
//       ease: "none",
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "center center",
//         end: "+=2000", // Adjust based on the total width of the images
//         scrub: true,
//       },
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
//   }, [containerRef]);

//   return (
//     <div
//       ref={containerRef}
//       className="relative bg-red flex flex-col mx-auto justify-center items-center w-full h-screen overflow-hidden"
//     >
//       {/* Image section 1 */}
//       <div
//         ref={imageContainerRef1}
//         className="absolute inset-0 flex items-center justify-start bg-half-moon-gradient-red whitespace-nowrap"
//       >
//         <div
//           ref={headerRef1}
//           className="flex items-center justify-center text-center font-sf text-[70px] font-semibold text-black"
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
//         <div ref={imageRef1} className="flex h-full items-center gap-[60px]">
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
//               className={`group relative h-[550px] w-[260px] transition-transform`}
//               style={{
//                 backgroundImage: `url('./landing/RiseComponent/black-phone.png')`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             >
//               <img
//                 src={`./landing/RiseComponent/${item.img}.png`}
//                 alt={`Image ${index + 1}`}
//                 loading="lazy"
//                 className="absolute inset-0 w-full h-full opacity-100 transition-opacity duration-500 group-hover:opacity-0 group-hover:translate-y-10"
//               />
//               <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                 <p className="font-sf text-white leading-[42px] flex flex-col items-left justify-center font-semibold text-[32px] scale-x-[-1] transition-transform duration-500 group-hover:scale-x-[1]">
//                   {item.text.map((word, indx) => (
//                     <span key={indx} className="inline-block">
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
//         className="absolute inset-0 flex items-start justify-start bg-half-moon-gradient-blue whitespace-nowrap"
//       >
//         <div
//           ref={headerRef2}
//           className="flex items-center justify-center text-center font-sf text-[70px] font-semibold text-black"
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
//         <div ref={imageRef2} className="flex h-full items-center gap-[60px]">
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
//               className={`group relative h-[550px] w-[260px] transition-transform`}
//               style={{
//                 backgroundImage: `url('./landing/RiseComponent/black-phone.png')`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             >
//               <img
//                 src={`./landing/RiseComponent/${item.img}.png`}
//                 alt={`Image ${index + 1}`}
//                 loading="lazy"
//                 className="absolute inset-0 w-full h-full opacity-100 transition-opacity duration-500 group-hover:opacity-0 group-hover:translate-y-10"
//               />
//               <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                 <p className="font-sf text-white leading-[42px] flex flex-col items-left justify-center font-semibold text-[32px] scale-x-[-1] transition-transform duration-500 group-hover:scale-x-[1]">
//                   {item.text.map((word, indx) => (
//                     <span key={indx} className="inline-block">
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

// export default RiseTheBarMobile;

import React, { useEffect, useRef } from "react";
import "../RiseTheBarMobile/style.scss"; // Ensure the styles are properly defined
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RiseTheBarMobile = () => {
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
    ) {
      return;
    }

    // Pinning the section
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom+=400%",
      pin: true,
      pinSpacing: true,
    });

    // Horizontal scrolling effect for first image container
    gsap.to(imageContainerRef1.current, {
      xPercent: -100 * (imageRef1.current.children.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=3000", // Adjusted to ensure the first image container scrolls fully
        scrub: true,
      },
    });

    // Fade out animation for ImageContainerRef1
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
      y: 50,
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

    // Horizontal scrolling effect for second image container
    gsap.to(imageContainerRef2.current, {
      xPercent: -100 * (imageRef2.current.children.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center center", // Ensure the second image container starts after the first one finishes
        end: "+=3000", // Adjusted to align with the first image container's scroll
        scrub: true,
      },
    });

    // Fade in animation for ImageContainerRef2
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
        { y: 1000, opacity: 0.5, scale: 0.8, rotation: 0 },
        {
          y: 0,
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

  return (
    <div
      ref={containerRef}
      className="relative bg-red flex flex-col mx-auto justify-center items-center w-full h-screen overflow-hidden"
    >
      {/* Image section 1 */}
      <div
        ref={imageContainerRef1}
        className="absolute inset-0 flex items-center justify-start bg-half-moon-gradient-red whitespace-nowrap"
      >
        <div
          ref={headerRef1}
          className="flex items-center justify-center text-center font-sf text-[30px] font-semibold text-black"
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
          className="flex h-[1200px] items-center gap-[60px]"
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
              className={`group relative h-[550px] w-[260px] transition-transform`}
              style={{
                backgroundImage: `url('./landing/RiseComponent/black-phone.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <img
                src={`./landing/RiseComponent/${item.img}.png`}
                alt={`Image ${index + 1}`}
                loading="lazy"
                className="absolute inset-0 w-full h-full opacity-100  p-2 transition-transform transition-opacity duration-500 group-hover:opacity-0 group-hover:translate-y-10"
              />
              <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="font-sf text-white leading-[42px] flex flex-col items-left justify-center font-semibold text-[32px] scale-x-[-1] transition-transform duration-500 group-hover:scale-x-[1]">
                  {item.text.map((word, indx) => (
                    <span key={indx} className="inline-block">
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
        className="absolute inset-0 flex items-start justify-start w-full bg-half-moon-gradient-blue whitespace-nowrap"
      >
        <div
          ref={headerRef2}
          className="flex items-center justify-center text-center font-sf text-[20px] font-semibold text-black"
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
        <div ref={imageRef2} className="flex h-full items-center gap-[60px]">
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
              className={`group relative h-[550px] w-[260px] transition-transform`}
              style={{
                backgroundImage: `url('./landing/RiseComponent/black-phone.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <img
                src={`./landing/RiseComponent/${item.img}.png`}
                alt={`Image ${index + 1}`}
                loading="lazy"
                className="absolute inset-0 w-full p-2 h-full opacity-100 transition-opacity duration-500 group-hover:opacity-0 group-hover:translate-y-10"
              />
              <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="font-sf text-white leading-[42px] flex flex-col items-left justify-center font-semibold text-[32px] scale-x-[-1] transition-transform duration-500 group-hover:scale-x-[1]">
                  {item.text.map((word, indx) => (
                    <span key={indx} className="inline-block">
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

export default RiseTheBarMobile;
