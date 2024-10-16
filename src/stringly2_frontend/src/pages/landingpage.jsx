import React, { useState, useEffect } from 'react'
import { FaChevronRight } from "react-icons/fa";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CustomCarousel from "../components/CustomCarousel";
const CardSection = () => {

    useEffect(() => {
        const cards = document.querySelectorAll('.card');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove('opacity-0', 'translate-y-8');
                        entry.target.classList.add('opacity-100', 'translate-y-0');
                    }
                });
            },
            { threshold: 0.3 }
        );
        cards.forEach((card) => {
            observer.observe(card);
        });
        return () => {
            cards.forEach((card) => {
                observer.unobserve(card);
            });
        };
    }, []);
}


const Landingpage = () => {
    const [hovered, setHovered] = useState([false]);

    const handleHover = (index) => {
        if (!hovered[index]) {
            const newHovered = [...hovered];
            newHovered[index] = true; 
            setHovered(newHovered);
        }
    };
    return (
        <div className="">
            {/* Hero Section */}
            <div className="relative h-[852px] w-full md:w-full h-screen">
                <img className="w-full h-[852px] md:h-auto object-cover h-full" src="/heroimg.png" alt="Hero image" />
                <div className="absolute text-white left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[364px] p-2 lg:w-[600px] bg-opacity-50 text-center">
                    <p className="font-sf font-semibold w-full text-[38px] lg:text-[64px] leading-[46px] lg:leading-[72px] text-center">
                        Stringly <br /> String your Vibe
                    </p>
                    <p className="font-sfprodisplay text-[14px] lg:text-[20px] font-normal leading-[21px] lg:leading-[30px] text-center mt-2">
                        Discover Stringly, the premium dating and networking app that blends
                        luxury with cutting-edge technology. Experience unmatched privacy and
                        security while forming meaningful connections.
                    </p>
                    <div className="mt-6">
                        <button className="bg-white text-black px-6 py-2 rounded-[8px] mr-4 br-20px">
                            Sign Up
                        </button>
                        <button className="bg-transparent border border-white text-white px-6 py-2 rounded-[8px] br-20px">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

            {/* Heading Section */}
            <div className="flex items-center justify-center">
                <div className='w-[308px] lg:w-[768px]'>
                <h1 className="text-center w-full leading-[40px] font-extrabold text-[24px] text-[34px] font-sf font-semibold leading-tight">
                    Discover Our Unique Features
                </h1>
                <p className="text-center w-full mt-2 font-jaktara text-[14px] leading-[21px]">
                    Experience unmatched privacy and secure connections today.
                </p>
                </div>
            </div>

            <section className='px-4'>
                <div className='lg:block w-full flex items-center justify-between flex-col py-8 text-[18px]'>
                    <div className='text-center gap-4 lg:w-[768px] flex items-center justify-between flex-col'>
                        <p className='text-[40px] font-sf font-semibold leading-[48px] md:hidden'>
                            Experience Security and Luxury
                        </p>
                    </div>
                </div>
                <div className='flex items-center justify-evenly gap-4 py-4 lg:px-2 flex-wrap'>
                    {[
                        {
                            imgSrc: './yolo.png',
                            title: 'Secure Connections',
                            description: 'Connect with confidence through our encrypted platform ensuring your privacy and safety.',
                        },
                        {
                            imgSrc: './elo.png',
                            title: 'Earn Token Rewards',
                            description: 'Unlock exclusive rewards for every meaningful connection and engagement on Stringly.',
                        },
                        {
                            imgSrc: './yello.png',
                            title: 'Premium Matchmaking',
                            description: 'Find your ideal match with our personalized approach.',
                        },
                    ].map((card, index) => (
                        <div
                            key={index}
                            className="card relative w-[363px] md:w-[408px] h-[377px] bg-black rounded-2xl text-white overflow-hidden transition-transform duration-400 group"
                        >
                            <img
                                src={card.imgSrc}
                                alt="features"
                                className="card-image w-full h-full object-cover opacity-50 rounded-2xl transition-opacity duration-400"
                            />
                            <div className="card-content absolute md:w-[326px] top-[200px] left-[15px] md:left-[41px]"> {/* Adjusted top value */}
                                <p className="text-[21px] md:text-[24px] font-jakarta font-bold leading-[28px] pb-[10px]">
                                    {card.title}
                                </p>
                                <p className="card-description transition-opacity duration-500 mb-4">
                                    {card.description}
                                </p>
                                <button className="card-button flex items-center gap-2 border-2 rounded-lg px-4 py-3 my-2 opacity-0 translate-x-[-20px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                                    Learn More
                                </button>
                            </div>
                            <p className='learnMore absolute bottom-6 left-12 text-[18px] flex items-center gap-2'>
                                Explore <FaChevronRight />
                            </p>
                        </div>
                    ))}
                </div>
            </section>



            {/* Connecting Section */}
            <div className="text-center mt-12 ">
                <h2 className="text-3xl font-semibold font-sf leading-[38px]">Connecting You With Purpose</h2>
                <p className="mt-2 text-[14px] font-regular leading-[24px]">
                    A unique blend of dating and networking experiences.
                </p>
            </div>

            {/* Group for All Images */}
            <div className="w-[330px] mx-auto group flex flex-col items-center justify-center mt-8 gap-4">

                {/* Top Image with Hover Effect (Profile Image) */}
                <div className="relative w-full lg:w-[1308px] h-[300px] rounded-xl lg:rounded-tl-[12px] lg:rounded-tr-[12px] overflow-hidden bg-black">
                    <img
                        src="/prof.png"
                        alt="Profile Image"
                        className="w-full md:w-full h-full object-cover opacity-[0.6] "
                    />
                    {/* Text Overlay for Top Image */}
                    <div className="absolute inset-0 flex items-center p-6 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500">
                        <div className="text-white">
                            <h2
                                className="text-[32px] leading-[38px] font-semibold leading-tight font-roboto font-bold"
                            >
                                Elevate Your Networking Experience
                            </h2>

                            <p className="mt-2 text-white-600 font-roboto font-regular leading-[24px]">Experience connections like never before with Stringly.</p>
                            <button className="bg-white text-black px-8 py-2 rounded-[8px] mr-4 mt-4 hover:bg-pink-100"> {/* Adjusted length and radius */}
                                Join
                            </button>
                        </div>
                    </div>
                </div>

                {/* Flex Container for Left and Right Images */}
                <div className="w-full lg:flex justify-between gap-4 mt-4 lg:w-[1308px]">

                    {/* Left Image with Hover Effect (Hug Image) */}
                    <div className="relative mb-8 w-full lg:w-[440px] h-[340px] rounded-xl lg:rounded-bl-[12px] overflow-hidden bg-black">
                        <img
                            src="/hug.png"
                            alt="Hug Image"
                            className="w-full h-full object-cover opacity-[0.6]"
                        />
                        {/* Text Overlay for Left Image */}
                        <div className="absolute inset-0 flex items-center p-6 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500">
                            <div className="text-white">
                                <h2 className="text-[32px] leading-[38px] font-semibold font-roboto font-bold" >Your Journey Begins Here</h2>
                                <p className="text-lg mt-2 font-roboto font-regular leading-[24px]">Experience connections like never before with Stringly.</p>
                                <button className="bg-white text-black px-8 py-2 rounded-[8px] mt-4 hover:bg-pink-100 "> {/* Adjusted length and radius */}
                                    Join
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Image with Hover Effect (Kiss Image) */}
                    <div className="relative w-full lg:w-[836px] h-[340px] rounded-xl overflow-hidden bg-black">
                        <img
                            src="/kiss.png"
                            alt="Kiss Image"
                            className="w-full h-full object-cover opacity-[0.6]"
                        />
                        {/* Text Overlay for Right Image */}
                        <div className="absolute inset-0 flex items-center p-6 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500">
                            <div className="text-white">
                                <h2 className="text-[32px] leading-[38px] font-roboto font-bold">Unmatched Privacy and Security</h2>
                                <p className="text-lg mt-2  fontSize: '26px'font-roboto font-regular leading-[24px] ">Experience connections like never before with Stringly.</p>
                                <button className="bg-white text-black px-8 py-2 rounded-[8px] mt-4 hover:bg-pink-100 "> {/* Adjusted length and radius */}
                                    Join
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            {/* Updated Section with Your Specifications */}
            <div className="flex px-4 lg:flex-row text-white lg:text-black relative justify-between items-start mt-12 h-[550px]">
                {/* Text Section */}
                <div className="absolute top-0  left-0 lg:relative flex flex-col" style={{
                    width: '100%',
                    maxWidth: '556px',
                    gap: '16px',
                    paddingLeft: '7%',
                    paddingTop: '10px',
                }}>
                    <h2 style={{
                        fontFamily: 'SF Pro Display',
                        fontSize: '32px',
                        sm: '36px',
                        md: '48px',
                        fontWeight: 800,
                        lineHeight: '58px',
                    }}>
                        Experience Unmatched<br />Privacy and Elegance
                    </h2>
                    <p className="text-[18px] mt-4 leading-normal" style={{
                        fontFamily: 'SF Pro Display',
                        fontSize: '18px',
                        fontWeight: 400,
                        lineHeight: '22px',
                        textAlign: 'left',
                        width: '100%',
                    }}>
                        At Stringly, we prioritize your privacy while providing a luxurious experience. Our platform is designed to ensure that every connection you make is both secure and sophisticated.
                    </p>
                    <div className="lg:flex justify-between mt-6 items-start lg:w-[556px] h-[64px] gap-8">
                        <div className="flex flex-col items-start">
                            <div className="flex items-center">
                                <img src="./final.png" alt="privacy icon" className="mr-2" />

                            </div>
                            <p className="text-sm">Your privacy is our top priority.</p>
                        </div>

                        <div className="flex flex-col items-start">
                            <div className="flex items-center">
                                <img src="./fra.png" alt="connection icon" className="mr-2" />

                            </div>
                            <p className="text-sm">Connect with like-minded individuals securely.</p>
                        </div>
                    </div>



                    <div className="flex gap-4 mt-8 flex-wrap">
                        <button className="border border-black text-black px-4 py-2 rounded">Learn More</button>
                        <button className="bg-black text-white px-4 py-2 rounded">Sign Up</button>
                    </div>
                </div>

                {/* Image Section */}
                <div className=" md:mt-0 bg-black rounded-xl">
                    <img
                        src="/splash.png"
                        alt="Splash Image"
                        className="w-[367px] lg:w-[750px] h-[550px] rounded-xl lg:rounded-l-[10px]"
                    />
                </div>
            </div>

            {/* Section with Button and Image Gallery */}
            <div className="flex flex-col items-center mt-10">
                <div className="py-12">
                    <h1 className="text-center w-full md:w-[768px] font-bold text-[24px] sm:text-[36px] leading-tight">
                        Short Heading goes here
                    </h1>
                    <p className="text-center w-full md:w-[768px] mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
                <div
                    className={`flex flex-col items-center opacity-0 ${hovered[0] ? 'lili' : ''}`}
                    onMouseEnter={() => handleHover(0)}
                >
                    <div className="childx lg:flex justify-center gap-6 mt-8 py-8" style={{ maxWidth: '1312px', margin: '0 auto' }}>
                        {/* Image 1 */}
                        <div
                            style={{
                                width: '416px',
                                height: '542px',
                                borderRadius: '10px 0 0 0',
                                overflow: 'hidden',
                            }}
                        >
                            <img
                                src="/poke.png"
                                alt="Image 1"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>

                        {/* Image 2 */}
                        <div
                            style={{
                                width: '416px',
                                height: '542px',
                                borderRadius: '10px 0 0 0',
                                overflow: 'hidden',
                            }}
                        >
                            <img
                                src="/forehand.png"
                                alt="Image 2"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>

                        {/* Image 3 */}
                        <div
                            style={{
                                width: '416px',
                                height: '542px',
                                borderRadius: '10px 0 0 0',
                                overflow: 'hidden',
                            }}
                        >
                            <img
                                src="/last.png"
                                alt="Image 3"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                    </div>

                    <button className="bg-white text-black border border-black px-4 py-2 rounded w-[100px] hover:bg-gray-200 hover:text-black transition-all duration-300">
                        View All
                    </button>
                </div>
            </div>

            {/* Image Gallery Section */}
            <div
                className="flex flex-col items-center mt-28"
                style={{
                    width: '100%',
                    maxWidth: '600px',
                    gap: '12px',
                }}
            >
                <h1 className="font-sf text-center w-full lg:w-[600px] text-[34px] font-semibold lg:text-[54px] leading-[48px] font-bold">

                    Image Gallery
                </h1>
                <p className="font-jakarta text-center w-full md:w-[600px] mt-2">
                    Explore our gallery to experience more.
                </p>
            </div>

            <div
                styles={{
                    display: 'flex',
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                <CustomCarousel />
            </div>


        </div >
    );
};

export default Landingpage;
