import React, { useEffect, useRef } from "react";
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
    console.log("mobile view");
    if (
      !containerRef.current ||
      !imageContainerRef1.current ||
      !imageContainerRef2.current ||
      !imageRef1.current ||
      !imageRef2.current
    )
      return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=400%",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    // First section animation
    tl.to(imageRef1.current, {
      xPercent: -75,
      ease: "none",
      duration: 3,
    });

    // Fade out first section and fade in second section
    tl.to(imageContainerRef1.current, { opacity: 0, duration: 1 }, ">=0")
      .to(headerRef1.current, { opacity: 0, y: -50, duration: 1 }, "<")
      .to(imageContainerRef2.current, { opacity: 1, duration: 1 }, "<")
      .to(headerRef2.current, { opacity: 1, y: 0, duration: 1 }, "<");

    // Second section animation
    tl.to(imageRef2.current, {
      xPercent: -75,
      ease: "none",
      duration: 3,
    });

    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative border-6 border-red-500 flex overflow-hidden flex-col mx-auto justify-center items-center w-full h-screen"
    >
      {/* Image section 1 */}
      <div
        ref={imageContainerRef1}
        className="absolute inset-0 flex items-center justify-center bg-half-moon-gradient-red"
      >
        <div
          ref={headerRef1}
          className="absolute top-10 left-10 flex items-center justify-center text-center font-sf text-[70px] font-semibold text-black"
        >
          Raise the Bar,{" "}
          <span className="ml-4">
            <img
              src="./landing/RiseComponent/button-toggle-red.svg"
              alt="Red toggle"
            />
          </span>
          Your Way
        </div>
        <div
          ref={imageRef1}
          className="flex justify-start items-center gap-[60px]"
          style={{ width: "400%" }}
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
              className="group relative h-[550px] w-[260px] flex-shrink-0"
              style={{
                backgroundImage: `url('./landing/RiseComponent/black-phone.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
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
                <p className="font-sf text-white leading-[42px] h-full flex flex-col items-left justify-center font-semibold text-[32px] scale-x-[-1] transition-transform duration-500 group-hover:scale-x-[1]">
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
        className="absolute inset-0 flex items-start justify-center bg-half-moon-gradient-blue opacity-0"
      >
        <div
          ref={headerRef2}
          className="absolute top-10 left-10 flex items-center justify-between text-center font-sf text-[70px] font-semibold text-black opacity-0"
        >
          Raise the Bar,{" "}
          <span className="ml-4">
            <img
              src="./landing/RiseComponent/button-toggle-blue.svg"
              alt="Blue toggle"
            />
          </span>
          Your Way
        </div>
        <div
          ref={imageRef2}
          className="flex justify-start items-center gap-[60px]"
          style={{ width: "400%" }}
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
              className="group relative h-[550px] w-[260px] flex-shrink-0"
              style={{
                backgroundImage: `url('./landing/RiseComponent/black-phone.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Image on Top */}
              <img
                src={`./landing/RiseComponent/${item.img}.png`}
                alt={`Image ${index + 1}`}
                loading="lazy"
                className="absolute inset-0 transition-transform px-[8px] py-3 w-full h-full transition-opacity duration-500 opacity-100 group-hover:opacity-0 group-hover:translate-y-20"
              />

              {/* Text to Show on Hover */}
              <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="font-sf text-white leading-[42px] h-full flex flex-col items-left justify-center font-semibold text-[32px] scale-x-[-1] transition-transform duration-500 group-hover:scale-x-[1]">
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
