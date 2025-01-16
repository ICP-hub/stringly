import React, { useState, useEffect, useRef } from 'react'
import { FaChevronRight } from "react-icons/fa";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { MdPrivacyTip } from "react-icons/md";
import CarouselCoustom from '../../components/CarouselCoustom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "../../pages/landing/landingPage.scss"
import RiseTheBar from '../../components/RiseTheBar';

gsap.registerPlugin(ScrollTrigger);

const Landingpage = () => {
    const [hovered, setHovered] = useState('');
    const [isMobile, setIsMobile] = useState(false);
    const [hovered1, setHovered1] = useState([false, false, false]);
    const imageRefs = useRef([]);
    const [hovered2, setHovered2] = useState([false, false]);
    const [isConditionMet, setIsConditionMet] = useState(false)
    const [sLogoLarge, setSLogoLarge] = useState(false)
    const [sLogoColored, setSLogoColored] = useState(false)
    const [imageTransition, setImageTransition] = useState(false);
    const [imageRingUp, setImageRingUp] = useState(false)
    const [circleImageRingClose, setCircleImageClose] = useState(false)

    // const [scaleFactor, setScaleFactor] = useState(1);
    // const [scrollCount, setScrollCount] = useState(0);

    const handleHover1 = (index) => {
        if (!hovered1[index]) {
            const newHovered = [...hovered1];
            newHovered[index] = true;
            setHovered1(newHovered);
        }
    };

    const handleHover = (section) => {
        setHovered(section);
    };

    const handleHover2 = (index) => {
        if (!hovered2[index]) {
            const newHovered = [...hovered2];
            newHovered[index] = true;
            setHovered2(newHovered);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;

            setIsMobile(width <= 968);
            setIsConditionMet(width === 1440 && height === 900);
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize); // Cleanup
        };
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setSLogoLarge(true);
        }, 3000)
        const colorTimer = setTimeout(() => {
            setImageTransition(true);
            setTimeout(() => {
                setSLogoColored(true);
            }, 100);
        }, 4500);

        const imageRingTimer = setTimeout(() => {
            setImageRingUp(true)
        }, 6000);

        const circleImageTimer = setTimeout(() => {
            setCircleImageClose(true);
        }, 6900);

        return () => {
            clearTimeout(timer);
            clearTimeout(colorTimer);
            clearTimeout(imageRingTimer)
            clearTimeout(circleImageTimer)
        };
    }, [])


    return (

        <div className='relative w-full mx-auto flex flex-col items-center justify-center'>
            {/* Hero Section */}
            <div
                className="relative overflow-hidden w-full bg-black "
            >
                {/* Your content here */}
                <img
                    src="./landing/coupleHeroImg.jpg"
                    alt="Background"
                    className="object-cover md:mt-[-40px] opacity-60  object-contain" />
                <div
                    // className="absolute w-[950px] text-white left-1/2 top-[116px] transform -translate-x-1/3 -translate-y-1/3 z-[10] text-start p-20 cursor-pointer flex flex-col"
                    className="absolute w-[950px] text-white md:left-[calc(70%-475px)] lg:left-[calc(57%-475px)] md:top-[calc(116px-25%)] lg:top-[calc(116px-15%)]  z-[10] text-start p-20 cursor-pointer flex flex-col leading-tight"

                >
                    <div className="relative overflow-hidden leading-tight inline-block">
                        <p
                            className="font-sf font-semibold text-white text-[52px] lg:text-[70px]"
                        >
                            String your Vibe
                        </p>
                    </div>
                    <div className="relative overflow-hidden inline-block">
                        <p
                            className="font-sf text-white text-[32px] lg:text-[42px]"
                        >
                            Date & Network
                        </p>
                    </div>
                </div>
                <div>
                    <img
                        src='./landing/Rectangle_Ring.png'
                        className={`absolute lg:h-[600px] lg:top-[170px] lg:right-[158px] ${isConditionMet ? "xl:h-[640px] xl:top-[200px] xl:right-[200px]" : "xl:h-[670px] xl:top-[220px] xl:right-[218px]"
                            } ${imageRingUp && 'image-ring'}`}
                    />
                    <div className={`${imageRingUp && 'image-ring'} flex justify-between gap-40 text-white absolute top-0 lg:top-[650px] lg:right-[330px] ${isConditionMet ? " xl:top-[740px] xl:right-[395px]" : " xl:top-[785px] xl:right-[430px]"}`}>
                        <div className=''>
                            <h2 className='font-sf text-[24px] leading-[34px] font-semibold'>Michael Smith, 25</h2>
                            <p className='font-sf text-[18px] leading-[28px] font-medium'>Lives in Portland, Illinois</p>
                            <p className='font-sf text-[14px] leading-[14px] font-regular'>11 miles away</p>
                        </div>
                        <div
                            className={`${sLogoLarge ? 's-logo' : ''} rounded-full absolute h-14 w-18 lg:top-[30px] lg:right-[-120px] ${isConditionMet ? "xl:top-[13px] h-16 xl:right-[-148px]" : "xl:top-[13px] h-16 xl:right-[-170px]"}`}
                        >
                            {
                                !sLogoColored ? (
                                    <img
                                        src="./landing/s-logo.png"
                                        className={`text-[36px] pl-2 font-bold italic text-center flex justify-center items-center h-full w-full ${imageTransition ? 'image-transition' : 'image-transition-visible'}`}
                                        onLoad={() => setImageTransition(false)} // Reset transition once image is loaded
                                    />
                                ) : (
                                    <img
                                        src="./landing/s-heart-logo.png"
                                        className={`text-[36px] pl-2 font-bold italic text-center flex justify-center items-center h-full w-full ${imageTransition ? 'image-transition' : 'image-transition-visible'}`}
                                        onLoad={() => setImageTransition(false)} // Reset transition once image is loaded
                                    />
                                )
                            }
                        </div>
                    </div>
                </div>


                <div className={`${circleImageRingClose ? "" : "opacity-0"}`}>
                    <div className={` absolute lg:h-[600px] lg:top-[190px] lg:right-[758px] ${isConditionMet ? "xl:w-[950px] xl:top-[230px] xl:right-[360px]" : "xl:w-[950px] xl:top-[250px] xl:right-[425px]"
                        } ${circleImageRingClose && 'left-circle-ring'}`}>
                        <img src="./landing/left-circle-ring.png" alt="left-circle-Ring" />
                    </div>
                    <div className={` absolute lg:h-[600px] lg:top-[155px] lg:right-[70px] ${isConditionMet ? "xl:w-[890px] xl:top-[200px] xl:right-[-320px]" : "xl:w-[890px] xl:top-[210px] xl:right-[-300px]"
                        } ${circleImageRingClose && 'right-circle-ring'}`}>
                        <img src="./landing/right-circle-ring.png" alt="right-circle-Ring" />
                    </div>
                    <div className={`absolute lg:top-[630px] lg:right-[438px] ${isConditionMet ? "xl:top-[700px] xl:right-[530px]" : "xl:top-[750px] xl:right-[580px]"
                        } ${circleImageRingClose && 'match-text'}`}>
                        <p className='text-[56px] font-semibold leading-[60px] text-white font-sf'>It’s a match!</p>
                    </div>
                </div>

            </div>

            {/* Rise the bar component */}
            <RiseTheBar />

            {/* Connecting Section */}
            <div className="px-[20px] md:px-0 text-center w-[310px] md:w-auto mt-16 lg:mb-10">
                <h2 className="text-[30px]  lg:text-[48px] font-bold md:font-semibold font-sf leading-[38px] mb-2 md:mb-6">Discover Our Unique Features</h2>
                <p className="mt-2 text-[14px] md:text-[20px] font-regular leading-[24px]">
                    Experience unmatched privacy and secure connections today.
                </p>
            </div>
            <div className="mt-6 md:mt-5 lg:mt-0 w-full">
                <CarouselCoustom />
            </div>
            {/* Connecting Section */}
            <div className="px-[20px] md:px-0 text-center w-[310px] md:w-auto mt-3 md:mt-16 lg:mb-10">
                <h2 className="text-[30px]  lg:text-[48px] font-bold md:font-semibold font-sf leading-[38px] mb-2 md:mb-4">Connecting You With Purpose</h2>
                <p className="mt-2 text-[14px] md:text-[20px] font-regular leading-[24px]">
                    A unique blend of dating and networking experiences.
                </p>
            </div>

            {/* Group for All Images */}
            {isMobile ? (
                <div className="max-w-[360px]-sm-md lg:w-[90%] xl:w-full mx-auto flex flex-col items-center justify-center mt-8 gap-4 px-4 lg:px-0">
                    {/* Images */}
                    {["Firefly.png", "Rectangle 4.png", "kiss.png"].map((src, index) => (
                        <div
                            key={index}
                            ref={(el) => (imageRefs.current[index] = el)}
                            className={`relative w-full lg:w-full h-[300px] rounded-xl overflow-hidden bg-gray-800 ${hovered1[index] ? "animate-fadeIn " : ""
                                }`}
                        >
                            <img
                                src={`./landing/${src}`}
                                alt={`Image ${index + 1}`}
                                className="w-full h-full object-cover opacity-[0.6]"
                            />
                            <div
                                className={`absolute  inset-0 flex items-center p-6 md:px-28 transform ${hovered1[index] ? "translate-x-0 bg-dark-gradient" : "translate-x-[-100%]"
                                    } transition-all duration-1000`}
                            >
                                <div className="text-white">
                                    <h2 className="text-[32px] leading-[38px] font-semibold leading-tight font-roboto font-bold">
                                        {index === 0
                                            ? "Elevate Your Networking Experience"
                                            : index === 1
                                                ? "Your Journey Begins Here"
                                                : "Unmatched Privacy and Security"}
                                    </h2>
                                    <p className="mt-2 text-white-600 font-roboto font-light leading-[24px]">
                                        Experience connections like never before with Stringly.
                                    </p>
                                    <a href="https://tally.so/r/waD9X9">
                                        <button className="bg-white text-black px-8 py-2 rounded-[8px] mr-4 mt-4 hover:scale-105 transition-all duration-200">
                                            Join
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="max-w-[360px]-sm-md lg:w-[90%] xl:w-full mx-auto flex flex-col items-center justify-center mt-8 gap-4 px-4 lg:px-0 xl:px-16 2xl:px-0">

                    {/* Top Image with Hover Effect (Profile Image) */}
                    <div className={`relative w-full lg:w-full h-[300px] rounded-xl lg:rounded-tl-[12px] lg:rounded-tr-[12px] overflow-hidden bg-gray-800 md:mb-4`}>
                        <img
                            src="./landing/Firefly.png"
                            alt="Profile Image"
                            className="w-full md:w-full h-full object-cover opacity-[0.6]"
                        />
                        <div
                            className={`absolute inset-0 flex md:w-[600px] items-center p-6 md:px-28 transform translate-x-[-0%] group-hover:translate-x-0 transition-transform duration-500 ppp ${isMobile ? (hovered1[0] ? 'hovered' : '') : (hovered2[0] ? 'hovered' : '')
                                }`}
                            onMouseEnter={() => (isMobile ? handleHover1(0) : handleHover2(0))}
                        >
                            <div className={`text-white child`}>
                                <h2 className="text-[32px] leading-[38px] font-semibold leading-tight font-roboto font-bold">
                                    Elevate Your Networking <br /> Experience
                                </h2>
                                <p className="mt-2 text-white-600 font-roboto font-light leading-[24px]">
                                    Experience connections like never before with Stringly.
                                </p>
                                <a href='https://tally.so/r/waD9X9'><button className="bg-white text-black px-8 py-2 rounded-[8px] mr-4 mt-4 hover:scale-105 transition-all duration-200 hover:bg-black hover:text-white">
                                    Join
                                </button></a>
                            </div>
                        </div>
                    </div>

                    {/* Flex Container for Left, Middle, and Right Images */}
                    <div className={`w-full lg:flex justify-between gap-4  lg:w-full`}>

                        {/* Left Image with Hover Effect (Hug Image) */}
                        <div className={`relative mb-8 w-full lg:w-[680px] h-[340px] rounded-xl lg:rounded-bl-[12px] overflow-hidden bg-gradient-to-br from-black via-[#000000] to-[#1a1a1a] md:mr-4`}>
                            <img
                                src="./landing/Rectangle 4.png"
                                alt="Hug Image"
                                className="w-full h-full object-cover opacity-[0.6]"
                            />
                            <div
                                className={`absolute inset-0 flex items-center p-6 md:px-28 transform translate-x-[-0%] group-hover:translate-x-0 transition-transform duration-500 ppp ${isMobile ? (hovered1[1] ? 'hovered' : '') : (hovered2[0] ? 'hovered' : '')}`}
                                onMouseEnter={() => (isMobile ? handleHover1(1) : handleHover2(0))}
                            >
                                <div className="text-white child">
                                    <h2 className="text-[32px] leading-[38px] font-semibold font-roboto font-bold">Your Journey Begins Here</h2>
                                    <p className="text-lg mt-2 font-roboto font-light leading-[24px]">Experience connections like never before with Stringly.</p>
                                    <a href='https://tally.so/r/waD9X9'><button className="bg-white text-black px-8 py-2 rounded-[8px] mr-4 mt-4 hover:bg-black hover:text-white hover:scale-105 transition-all duration-200">
                                        Join
                                    </button></a>
                                </div>
                            </div>
                        </div>

                        {/* Middle Image with Hover Effect (Kiss Image) */}
                        <div className={`relative w-full lg:w-full h-[340px] rounded-xl overflow-hidden bg-gradient-to-br from-black via-[#000000] to-[#1a1a1a]`}>
                            <img
                                src="/landing/kiss.png"
                                alt="Kiss Image"
                                className="w-full h-full object-cover opacity-[0.9]"
                            />
                            <div
                                className={`absolute inset-0 flex md:w-[700px] items-center p-6 md:px-28 transform translate-x-[-0%] group-hover:translate-x-0 transition-transform duration-500 ppp ${isMobile ? (hovered1[2] ? 'hovered' : '') : (hovered2[0] ? 'hovered' : '')}`}
                                onMouseEnter={() => (isMobile ? handleHover1(2) : handleHover2(0))}
                            >
                                <div className="text-white child">
                                    <h2 className="text-[32px] leading-[38px] font-roboto font-bold">Unmatched Privacy <br /> and Security</h2>
                                    <p className="text-lg mt-2 font-roboto font-light leading-[24px]">Experience connections like never before with Stringly.</p>
                                    <a href='https://tally.so/r/waD9X9'><button className=" bg-white text-black px-8 py-2 rounded-[8px] mr-4 mt-4 hover:bg-black hover:text-white hover:scale-105 transition-all duration-200">
                                        Join
                                    </button></a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='hidden md:flex items-center gap-3'>
                        <p className='uppercase font-bold font-sf text-3xl m-10 tracking-widest'>Build on</p>
                        <img src="./landing/internet-computer.png" alt="" className='w-80 h-16' />
                    </div>
                </div>
            )
            }

            <section>
                <section
                    className={`bg-gradient-full relative py-15`}
                >
                    {/* Specifications */}
                    <div className={`flex h-[616px] lg:h-full lg:flex-row relative justify-center px-0 gap-20 items-start mt-10 md:mx-2 lg:mx-0  md:mt-12 ${hovered === 'section1' ? 'hovered opacity-90' : ''}`}
                    >
                        {/* Text Section */}
                        <div className={`${isMobile ? 'bg-white rounded-xl' : "bg-none"} w-[90%] p-5 md:p-10 lg:p-0 !text-black mt-10 absolute lg:pl-0 lg:w-[590px] xl:w-[616px] top-[0%] lg:top-0 text-white z-10 lg:text-black md:left-2/1 lg:left-0 h-[530px] lg:h-full lg:relative flex flex-col`} style={{
                            gap: '16px',
                            padding: '20px',
                        }}>
                            <h2 style={{
                            }} className='font-sf text-[28px] md:text-[30px] font-semibold lg:text-[48px] leading-[25px] leading-tight lg:leading-[58px]  min-w-[300px]-lg'>
                                Experience Unmatched Privacy and Elegance
                            </h2>
                            <p className="font-sf text-[15px] md:text-lg pb-4 lg:pb-0 lg:mt-4 lg:leading-[22px] font-light min-w-[300px]-lg xl:py-6" style={{
                                width: '90%',
                            }}>
                                At Stringly, we prioritize your privacy while providing a luxurious experience. Our platform is designed to ensure that every connection you make is both secure and sophisticated.
                            </p>
                            <div className="flex flex-col md:flex-row md:justify-between gap-2 lg:mt-6 items-center lg:w-[646px] md:h-[64px] lg:gap-8 ">
                                <div className="flex flex-col items-start w-full md:w-[50%]">
                                    <div className="flex items-center gap-4 md:gap-2 mb-3">
                                        <img src="./landing/privacy .gif" alt="privacy icon" className="h-8 w-auto" />
                                        <p className='text-2xl md:text-[32px] font-sf font-semibold text-[#1E1F6D]'>Privacy</p>
                                    </div>
                                    <p className="text-[15px] md:text-[16px] font-regular font-sf leading-[20px]">Your privacy is our top priority.</p>
                                </div>

                                <div className="flex flex-col items-start lg:pt-4 w-full md:w-[50%]">
                                    <div className="flex items-center gap-4 md:gap-2 mb-3">
                                        <img src="./landing/connect.gif" alt="privacy icon" className="h-8 w-auto" />
                                        <p className='text-2xl md:text-[32px] font-sf font-semibold text-[#D454A6]'>Connection</p>
                                    </div>
                                    <p className="text-[15px] md:text-[16px] font-regular font-sf leading-[20px]">Connect with like-minded individuals <br /> securely.</p>
                                </div>
                            </div>
                            <div className="mt-24 lg:mt-10">
                                {/* <button className="bg-white text-[14px] font-sf border border-black text-black px-6 py-3 w-32 rounded-xl">
                            Learn More
                        </button> */}
                                <button className="hover:scale-105 transition-all duration-200 hidden lg:block text-[16px] font-sf bg-black text-white w-32 text-white px-2 py-3 rounded-xl">
                                    <a href='https://tally.so/r/waD9X9'>Sign Up</a>
                                </button>
                            </div>
                        </div>

                        {/* Image Section */}
                        <div className="md:mt-0 bg-black lg:rounded-none lg:rounded-tl-xl h-full w-full lg:w-[80%] lg:h-[670px] lg:rounded-bl-xl">
                            <img
                                src={`${isMobile ? '/landing/hugImg_mobile.png' : '/splash.png'}`}
                                alt="Splash Image"
                                className="w-full md:w-screen opacity-[.7] h-full h-full border-red-600 lg:rounded-l-[10px]"
                            />
                        </div>
                    </div>
                    {isMobile ? (
                        <div
                            className={`animated-border-box relative flex flex-col items-center justify-center top-[880px] lg:top-[800px] left-[15px] md:left-[55px] lg:left-[355px] !w-[92%] lg:p-20 bg-white text-black ${hovered === 'section1' ? 'scale-up' : 'scale-0 opacity-0'}`}
                        >
                            <p className='mb-5 font-sf font-regular'>Bring your spark</p>
                            <p className="font-semibold px-2 text-[32px] leading-[44px] lg:text-[48px] lg:leading-[58px] text-center font-sf pb-2 md:pb-0">
                                Let's build Stringly together.
                            </p>
                            <p className="font-roboto text-[16px] font-sf font-regular leading-[27px]">Contribute to the vibes!</p>
                            <a href='https://docs.google.com/forms/d/e/1FAIpQLSfFvJ4tF7YWebqvfmpbuj30pkVAkyVOhLVPju6RjBLyNMukEw/viewform'>
                                <button className="hover:scale-105 transition-all duration-200 rounded-xl border border-black mt-10 px-5 py-2 text-black">
                                    Join Us
                                </button>
                            </a>
                        </div>
                    ) : (

                        <div
                            className={`animated-border-box m-2 flex top-[800px] left-[280px] xl:left-[410px] flex-col items-center justify-center lg:p-20 bg-white text-black ${hovered === 'section1' ? 'scale-up' : 'scale-0 opacity-0'
                                } `} xl:style={{
                                    position: 'absolute',
                                    top: '61%',
                                    left: '27%',
                                    transform: 'translate(-50%, -50%)',
                                }}
                        >
                            <p className='mb-5 font-sf font-regular'>Bring your spark</p>
                            <p className="font-semibold px-2 text-[32px] leading-[44px] lg:text-[48px] lg:leading-[58px] text-center font-sf mb-5 pb-2 md:pb-0">
                                Let's build Stringly together.
                            </p>
                            <p className="font-roboto text-[16px] font-sf font-semibold leading-[27px]">Contribute to the vibes!</p>
                            <a href='https://docs.google.com/forms/d/e/1FAIpQLSfFvJ4tF7YWebqvfmpbuj30pkVAkyVOhLVPju6RjBLyNMukEw/viewform'>
                                <button className="hover:scale-105 transition-all duration-200 rounded-xl border border-black mt-10 px-5 py-2 text-black">
                                    Join Us
                                </button></a>
                        </div>
                    )}


                    <div className={`mt-20 w-full h-full hidden lg:block ${hovered === 'section1' ? 'opacity-60' : 'opacity-1'}`}
                        onMouseEnter={() => handleHover('section1')}
                    >
                        <img src="./landing/Lets work.png" alt="" className='mx-auto w-[1227px]' />
                    </div>
                    <div className={`flex items-center justify-center border h-[900px] pt-5 px-0 lg:hidden group ${hovered === 'section1' ? 'opacity-60' : 'opacity-1'}`}
                        onMouseEnter={() => handleHover('section1')}
                    >
                        <img src="./landing/Property 1=Default.png" alt="" className='group-hover:opacity:60 h-full' />
                    </div>
                </section>
            </section>

        </div >
    );
};

export default Landingpage;