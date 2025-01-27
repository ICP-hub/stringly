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
      start: "top",
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
        start: "top -50%",
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
            start: "top center",
            end: "bottom center",
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
    console.log("current", containerRef.current);

    return () => {
      ScrollTrigger.killAll(); // Clean-up ScrollTrigger instances
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col mx-auto justify-center items-center w-full h-screen overflow-hidden"
    >
      {/* Image section 1 */}
      <div
        ref={imageContainerRef1}
        className="absolute inset-0 flex items-center flex-col justify-start bg-half-moon-gradient-red whitespace-nowrap"
      >
        <div
          ref={headerRef1}
          className="flex items-center justify-center pt-40 text-center font-sf text-[30px] font-semibold text-black"
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
        className="absolute inset-0 flex items-start flex-col justify-start w-full bg-half-moon-gradient-blue whitespace-nowrap"
      >
        <div
          ref={headerRef2}
          className="flex items-center justify-center text-center flex-col font-sf text-[20px] font-semibold text-black"
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

// import React, { useEffect, useRef } from "react";
// import "../RiseTheBarMobile/style.scss"; // Ensure the styles are properly defined
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const RiseTheBarMobile = () => {
//   const containerRef = useRef(null);
//   const imageContainerRefs = [useRef(null), useRef(null)];
//   const headerRefs = [useRef(null), useRef(null)];
//   const imageRefs = [useRef(null), useRef(null)];

//   useEffect(() => {
//     if (!containerRef.current) return;

//     // Pin the section
//     ScrollTrigger.create({
//       trigger: containerRef.current,
//       start: "top top",
//       end: "bottom+=400%",
//       pin: true,
//       pinSpacing: true,
//     });

//     imageContainerRefs.forEach((imageContainerRef, idx) => {
//       const images = gsap.utils.toArray(imageRefs[idx].current.children);

//       // Horizontal scrolling effect for each image container
//       gsap.to(imageContainerRef.current, {
//         xPercent: -100 * (images.length - 1),
//         ease: "none",
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: idx === 0 ? "top -100%" : "center center",
//           end: "+=3000",
//           scrub: true,
//         },
//       });

//       // Fade effect for image containers
//       gsap.fromTo(
//         imageContainerRef.current,
//         { opacity: idx === 0 ? 1 : 0, zIndex: idx === 0 ? 1 : 0 },
//         {
//           opacity: idx === 0 ? 0 : 1,
//           zIndex: idx === 0 ? 0 : 1,
//           scrollTrigger: {
//             trigger: containerRef.current,
//             start: idx === 0 ? "top top" : "center center",
//             end: idx === 0 ? "center center" : "bottom top",
//             scrub: true,
//           },
//         }
//       );

//       // Header animations
//       gsap.to(headerRefs[idx].current, {
//         y: 50,
//         scale: 0.8,
//         opacity: 0,
//         scrollTrigger: {
//           trigger: imageContainerRef.current,
//           start: "top center",
//           end: "center center",
//           scrub: true,
//         },
//       });

//       // Staggered animations for images
//       images.forEach((image, imageIdx) => {
//         gsap.fromTo(
//           image,
//           {
//             y: 1000,
//             opacity: 0,
//             scale: 0.8,
//             rotation: 10 * (imageIdx % 2 === 0 ? 1 : -1),
//           },
//           {
//             y: 0,
//             opacity: 1,
//             scale: 1,
//             rotation: 10 * (imageIdx % 2 === 0 ? 1 : -1),
//             scrollTrigger: {
//               trigger: imageContainerRef.current,
//               start: "top bottom",
//               end: "center center",
//               scrub: true,
//             },
//           }
//         );
//       });
//     });

//     return () => {
//       ScrollTrigger.killAll(); // Clean up ScrollTrigger instances
//     };
//   }, []);

//   const imageSections = [
//     {
//       header: "Raise the Bar, Your Way",
//       toggleImage: "button-toggle-red.svg",
//       bgClass: "bg-half-moon-gradient-red",
//       images: [
//         { img: "property1_image1", text: ["TUNE", "INTO", "YOUR", "VIBE!"] },
//         { img: "property1_image2", text: ["Swipe.", "Match.", "Connect."] },
//         {
//           img: "property1_image3",
//           text: ["DOWNLOAD.", "AND", "FIND YOUR.", "STRING"],
//         },
//         {
//           img: "property1_image4",
//           text: ["PULL THE", "STRINGS", "OF", "YOUR", "VIBE!"],
//         },
//       ],
//     },
//     {
//       header: "Raise the Bar, Your Way",
//       toggleImage: "button-toggle-blue.svg",
//       bgClass: "bg-half-moon-gradient-blue",
//       images: [
//         { img: "property2_image1", text: ["Engage", "Your", "Network"] },
//         {
//           img: "property2_image2",
//           text: ["Dual", "Dating", "and", "Networking"],
//         },
//         { img: "property2_image3", text: ["Uncover", "Your", "Network"] },
//         { img: "property2_image4", text: ["Dive into", "Your", "Connections"] },
//       ],
//     },
//   ];

//   return (
//     <div
//       ref={containerRef}
//       className="relative flex flex-col mx-auto justify-center items-center w-full h-screen overflow-hidden"
//     >
//       {imageSections.map((section, idx) => (
//         <div
//           key={idx}
//           ref={imageContainerRefs[idx]}
//           className={`absolute inset-0 flex flex-col items-center justify-start ${section.bgClass} whitespace-nowrap`}
//         >
//           <div
//             ref={headerRefs[idx]}
//             className="flex items-center justify-center pt-40 text-center font-sf text-[30px] font-semibold text-black"
//           >
//             {section.header}{" "}
//             <span>
//               <img
//                 src={`./landing/RiseComponent/${section.toggleImage}`}
//                 alt="Toggle"
//               />
//             </span>
//           </div>
//           <div
//             ref={imageRefs[idx]}
//             className="flex h-[1200px] items-center gap-[60px]"
//           >
//             {section.images.map((item, imageIdx) => (
//               <div
//                 key={imageIdx}
//                 className="group relative h-[550px] w-[260px] transition-transform"
//                 style={{
//                   backgroundImage: `url('./landing/RiseComponent/black-phone.png')`,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                 }}
//               >
//                 <img
//                   src={`./landing/RiseComponent/${item.img}.png`}
//                   alt={`Image ${imageIdx + 1}`}
//                   loading="lazy"
//                   className="absolute inset-0 w-full h-full opacity-100 p-2 transition-transform transition-opacity duration-500 group-hover:opacity-0 group-hover:translate-y-10"
//                 />
//                 <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                   <p className="font-sf text-white leading-[42px] flex flex-col items-left justify-center font-semibold text-[32px] scale-x-[-1] transition-transform duration-500 group-hover:scale-x-[1]">
//                     {item.text.map((word, wordIdx) => (
//                       <span key={wordIdx} className="inline-block">
//                         {word}
//                       </span>
//                     ))}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default RiseTheBarMobile;
