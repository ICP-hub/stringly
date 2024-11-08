import React, { useState, useEffect } from 'react'
import { FaChevronRight } from "react-icons/fa";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CarouselCustom from '../components/CarouselCoustom';

const Landingpage = () => {
    const [hovered, setHovered] = useState([false]);

    const handleHover = (index) => {
        if (!hovered[index]) {
            const newHovered = [...hovered];
            newHovered[index] = true;
            setHovered(newHovered);
        }
    };

    const [hovered2, setHovered2] = useState([false, false, false]);

    const handleHover2 = (index) => {
        if (!hovered2[index]) {  // Use hovered2 here
            const newHovered = [...hovered2];
            newHovered[index] = true;
            setHovered2(newHovered);  // Set hovered2 instead of hovered
        }
    };

    return (
        <div className='w-full mx-auto flex flex-col items-center justify-center'>
            {/* Hero Section */}
            <div className="relative h-[852px] lg:h-auto w-full md:w-full bg-black">
                <img className="w-full h-[852px] lg:h-auto object-cover" src="/heroimg.png" alt="Hero image" />
                <div className="absolute text-white left-1/2 top-1/2 lg:top-[65%] transform -translate-x-1/2 -translate-y-1/2 w-[310px] md:w-[364px] p-2 lg:w-[620px] bg-opacity-50 text-center">
                    <p className="font-sf font-semibold w-full text-[38px] md:text-[64px] leading-[46px] md:leading-[72px] text-center">
                        Stringly <br /> String your Vibe
                    </p>
                    <p className="font-sfProDispaly text-[14px] lg:text-[18px] text-light leading-[21px] lg:leading-[30px] text-center mt-2">
                        Discover Stringly, the premium dating and networking app that blends
                        luxury with cutting-edge technology. Experience unmatched privacy and
                        security while forming meaningful connections.
                    </p>
                    <div className="mt-10 space-x-6">
                        <button className="bg-white text-[16px] font-sf text-black px-6 py-3 w-32 rounded-xl">
                            Sign Up
                        </button>
                        <button className="bg-transparent text-[16px] font-sf border border-white w-32 text-white px-2 py-3 rounded-xl">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

            {/* Heading Section */}

            <section className='max-w-[360px]-sm-md  md:w-[480px] lg:w-auto 2xl:mt-40'>
                <div className=' w-full flex items-center justify-between flex-col py-8 text-[18px]'>
                    <div className='text-center gap-4 lg:w-[768px] flex items-center justify-between flex-col'>
                        <p className='text-[40px] font-sf font-semibold leading-[48px] '>
                            Discover Our Unique Features
                        </p>
                        <p className="text-center w-full mt-2 font-jaktara text-[18px] leading-[21px]">
                            Experience unmatched privacy and secure connections today.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-10 justify-evenly py-4 lg:px-2 flex-wrap'>
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
                            className="card relative max-w-[360px]-sm md:w-[408px] h-[378px] bg-black rounded-2xl text-white overflow-hidden transition-transform duration-400 group"
                        >
                            <img
                                src={card.imgSrc}
                                alt="features"
                                className="card-image w-full h-full object-cover opacity-50 rounded-2xl transition-opacity duration-400"
                            />
                            <div className="card-content absolute md:w-[340px] top-[200px] left-[15px] md:left-[41px]"> {/* Adjusted top value */}
                                <p className="text-[21px] md:text-[24px] font-jakarta font-bold leading-[28px] pb-[10px]">
                                    {card.title}
                                </p>
                                <p className="card-description transition-opacity duration-500 mb-4">
                                    {card.description}
                                </p>
                                <div className=''>
                                    <button className="card-button flex items-center gap-2 border rounded-xl px-5 py-2.5 opacity-0 translate-x-[-20px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                                        Learn More
                                    </button>
                                    <div className='learnMore absolute bottom-6 left-2 text-[16px] flex items-center'>
                                        <span className="default-text flex items-center gap-2">Explore   <FaChevronRight size={12} /></span>
                                        <span className="hover-text flex items-center gap-2">Join   <FaChevronRight size={12} /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>



            {/* Connecting Section */}
            <div className="text-center mt-12 ">
                <h2 className="lg:text-[48px] sm:text-3xl font-semibold font-sf leading-[38px]">Connecting You With Purpose</h2>
                <p className="mt-2 text-[14px] text-[20px] font-regular leading-[24px]">
                    A unique blend of dating and networking experiences.
                </p>
            </div>

            {/* Group for All Images */}
            <div className="max-w-[360px]-sm-md lg:w-[90%] mx-auto flex flex-col items-center justify-center mt-8 gap-4 px-4">  

            {/* Top Image with Hover Effect (Profile Image) */}  
            <div className={`relative w-full lg:w-full h-[300px] rounded-xl lg:rounded-tl-[12px] lg:rounded-tr-[12px] overflow-hidden bg-black`}>  
                <img  
                    src="/prof.png"  
                    alt="Profile Image"  
                    className="w-full md:w-full h-full object-cover opacity-[0.6]"  
                />  
                <div   
                    className={`absolute inset-0 flex md:w-[500px] items-center p-6 md:px-28 transform translate-x-[-0%] group-hover:translate-x-0 transition-transform duration-500 ppp ${hovered2[0] ? 'hovered' : ''}`}   
                    onMouseEnter={() => handleHover2(0)}  
                    onMouseLeave={() => setHovered2([false, false, false])} // Reset on mouse leave  
                >  
                    <div className="text-white child">  
                        <h2 className="text-[32px] leading-[38px] font-semibold leading-tight font-roboto font-bold">  
                            Elevate Your Networking <br /> Experience  
                        </h2>  
                        <p className="mt-2 text-white-600 font-roboto font-regular leading-[24px]">  
                            Experience connections like never before with Stringly.  
                        </p>  
                        <button className="bg-white text-black px-8 py-2 rounded-[8px] mr-4 mt-4 hover:bg-pink-100">  
                            Join  
                        </button>  
                    </div>  
                </div>  
            </div>  

            {/* Flex Container for Left, Middle, and Right Images */}  
            <div className={`w-full lg:flex justify-between gap-4 mt-4 lg:w-full`}>  

                {/* Left Image with Hover Effect (Hug Image) */}  
                <div className={`relative mb-8 w-full lg:w-[640px] h-[340px] rounded-xl lg:rounded-bl-[12px] overflow-hidden bg-black`}>  
                    <img  
                        src="/hug.png"  
                        alt="Hug Image"  
                        className="w-full h-full object-cover opacity-[0.6]"  
                    />  
                    <div   
                        className={`absolute inset-0 flex items-center p-6 md:px-28 transform translate-x-[-0%] group-hover:translate-x-0 transition-transform duration-500 ppp ${hovered2[1] ? 'hovered' : ''}`}   
                        onMouseEnter={() => handleHover2(1)}  
                        onMouseLeave={() => setHovered2([false, false, false])} // Reset on mouse leave  
                    >  
                        <div className="text-white child">  
                            <h2 className="text-[32px] leading-[38px] font-semibold font-roboto font-bold">Your Journey Begins Here</h2>  
                            <p className="text-lg mt-2 font-roboto font-regular leading-[24px]">Experience connections like never before with Stringly.</p>  
                            <button className="bg-white text-black px-8 py-2 rounded-[8px] mt-4 hover:bg-pink-100">  
                                Join  
                            </button>  
                        </div>  
                    </div>  
                </div>  

                {/* Middle Image with Hover Effect (Kiss Image) */}  
                <div className={`relative w-full lg:w-full h-[340px] rounded-xl overflow-hidden bg-black`}>  
                    <img  
                        src="/kiss.png"  
                        alt="Kiss Image"  
                        className="w-full h-full object-cover opacity-[0.9]"  
                    />  
                    <div   
                        className={`absolute inset-0 flex md:w-[700px] items-center p-6 md:px-28 transform translate-x-[-0%] group-hover:translate-x-0 transition-transform duration-500 ppp ${hovered2[2] ? 'hovered' : ''}`}   
                        onMouseEnter={() => handleHover2(2)}  
                        onMouseLeave={() => setHovered2([false, false, false])} // Reset on mouse leave  
                    >  
                        <div className="text-white child">  
                            <h2 className="text-[32px] leading-[38px] font-roboto font-bold">Unmatched Privacy <br /> and Security</h2>  
                            <p className="text-lg mt-2 font-roboto font-regular leading-[24px]">Experience connections like never before with Stringly.</p>  
                            <button className="bg-white text-black px-8 py-2 rounded-[8px] mt-4 hover:bg-pink-100">  
                                Join  
                            </button>  
                        </div>  
                    </div>  
                </div>  

            </div>  
        </div> 


            {/* Updated Section with Your Specifications */}
            <div className="flex lg:flex-row relative justify-center gap-20 items-start mt-12 h-[550px]">
                {/* Text Section */}
                <div className="lg:ml-20 absolute md:w-[500px] pl-7 lg:pl-0 lg:w-full top-[10%] lg:top-0 text-white z-10 lg:text-black md:left-[10%] lg:left-0 lg:relative flex flex-col" style={{
                    maxWidth: '556px',
                    gap: '16px',
                    paddingTop: '10px',
                }}>
                    <h2 style={{
                    }} className='font-sf text-[30px]  font-semibold lg:text-[48px] md:leading-[48px] leading-tight lg:leading-[58px]  min-w-[300px]-lg'>
                        Experience Unmatched Privacy and Elegance
                    </h2>
                    <p className="font-sf text-sm lg:text-lg mt-4 lg:leading-[22px] font-regular min-w-[300px]-lg " style={{
                        width: '90%',
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
                            <p className="text-sm">Connect with like-minded <br /> individuals securely.</p>
                        </div>
                    </div>



                    <div className="flex gap-4 mt-14  flex-wrap">
                        <button className="border lg:border-black lg:text-black px-4 py-2 rounded">Learn More</button>
                        <button className="bg-black text-white px-4 py-2 rounded">Sign Up</button>
                    </div>
                </div>

                {/* Image Section */}
                <div className=" md:mt-0 bg-black rounded-tl-xl rounded-bl-xl">
                    <img
                        src="/splash.png"
                        alt="Splash Image"
                        className="w-full opacity-[.7] lg:w-[820px] h-[550px] rounded-tl-x rounded-br-xl object-cover lg:rounded-l-[10px]"
                    />
                </div>
            </div>

            {/* Section with Button and Image Gallery */}
            <section className='flex flex-col w-full lg:pl-20 lg:flex-row items-center justify-between gap-8 py-20'>
                <div className='flex items-center flex-col text-center'>
                    <p className='font-roboto text-[14px] leading-[21px] md:text-[18px] font-regular md:leading-[27px]'>Work at Stringly</p>
                    <div className='md:py-10 py-5'>
                        <p className='font-sf text-[32px] md:text-[48px] leading-[58px] font-semibold'>Let’s work together</p>
                        <p className='font-roboto text-[14px] leading-[21px] md:text-[18px] font-regular leading-[27px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </div>
                    <button className='hidden md:block border border-black py-2 px-6 rounded-lg'>Join</button>
                </div>
                <div className='lg:flex items-center space-y-5 md:gap-4'>
                    <div className='bg-black  w-[340px] h-[370px] lg:h-[453px] lg:w-[259px]'>
                        <img src="/forever.png" alt="" className='opacity-[0.7] rounded-none object-cover h-full w-full' />
                    </div>
                    <div className='bg-black rounded-lg w-[340px] h-[370px] lg:h-[522px] lg:w-[298px]'>
                        <img src="/couples.png" alt="" className='opacity-[0.7] object-cover h-full w-full' />
                    </div>
                    <div className='bg-black rounded-lg w-[340px] h-[370px] lg:h-[453px] lg:w-[259px]'>
                        <img src="/coupleshand.png" alt="" className='opacity-[0.7] object-cover h-full w-full' />
                    </div>
                </div>
                <button className='black md:hidden border border-black py-2 px-6 rounded-lg'>Join</button>

            </section>
            {/* <div className="flex flex-col items-center justify-center  mt-10">
                <div className="py-12">
                    <h1 className="font-sf text-center w-full md:w-[768px] font-semibold sm:text-[36px] lg:text-[48px] leading-tight">
                        Short Heading goes here
                    </h1>
                    <p className="text-center w-full text-lg md:w-[768px] mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
                <div
                    className={`flex flex-col items-center opacity-0 ${hovered[0] ? 'lili' : ''}`}
                    onMouseEnter={() => handleHover(0)}
                >
                    <div className="lg:w-auto flex flex-col lg:flex-row items-center justify-center gap-8 mt-8 py-8" style={{ maxWidth: '1412px', margin: '0 auto' }}>
                        <div className="md:w-[396px] shadow-lg mx-8">
                            <div className='bg-black rounded-lg'>
                                <img src="/forever.png" alt="" className='opacity-[0.7]' />
                            </div>
                            <div className="w-[] p-4">
                                <p className='font-jakarta font-bold text-[14px] leading-[16px] '>Category</p>
                                <p className="text-[24px] font-jakarta font-bold leading-[28px] py-2">Blog title heading will go here</p>
                                <p className='text-[16px] font-sf font-regular leading-[20px]'>Lorem ipsum dolor sit amet, consectetur <br />
                                    Suspendisse varius enim in eros.</p>
                            </div>
                            <div className="flex items-center gap-2 p-2 py-4">
                                <img src="./FeaturesProfile.png" alt="" />
                                <div>
                                    <p>Full name</p>
                                    <div className="flex">
                                        <p>11 Jan 2022</p>
                                        <p>5 min read</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className=" shadow-lg mx-8">
                            <div className='bg-black rounded-lg'>
                                <img src="/couples.png" alt="" className='opacity-[0.7]' />
                            </div>
                            <div className="w-[] p-4">
                                <p className='font-jakarta font-bold text-[14px] leading-[16px] '>Category</p>
                                <p className="text-[24px] font-jakarta font-bold leading-[28px] py-2">Blog title heading will go here</p>
                                <p className='text-[16px] font-sf font-regular leading-[20px]'>Lorem ipsum dolor sit amet, consectetur <br />
                                    Suspendisse varius enim in eros.</p>
                            </div>
                            <div className="flex items-center gap-2 p-2 py-4">
                                <img src="./FeaturesProfile.png" alt="" />
                                <div>
                                    <p>Full name</p>
                                    <div className="flex">
                                        <p>11 Jan 2022</p>
                                        <p>5 min read</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" shadow-lg mx-8">
                            <div className='bg-black rounded-lg'>
                                <img src="/coupleshand.png" alt="" className='opacity-[0.7]' />
                            </div>
                            <div className="w-[] p-4">
                                <p className='font-jakarta font-bold text-[14px] leading-[16px] '>Category</p>
                                <p className="text-[24px] font-jakarta font-bold leading-[28px] py-2">Blog title heading will go here</p>
                                <p className='text-[16px] font-sf font-regular leading-[20px]'>Lorem ipsum dolor sit amet, consectetur <br />
                                    Suspendisse varius enim in eros.</p>
                            </div>
                            <div className="flex items-center gap-2 p-2 py-4">
                                <img src="./FeaturesProfile.png" alt="" />
                                <div>
                                    <p>Full name</p>
                                    <div className="flex">
                                        <p>11 Jan 2022</p>
                                        <p>5 min read</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className="bg-white text-black border border-black px-4 py-2 rounded w-[100px] hover:bg-gray-200 hover:text-black transition-all duration-300">
                        View All
                    </button>
                </div>
            </div> */}
            {/* Image Gallery Section */}
            <div
                className="flex flex-col items-center justify-center m-auto mt-28"
                style={{
                    width: '100%',
                    maxWidth: '600px',
                    gap: '12px',
                }}
            >
                <h1 className="font-sf text-center w-full lg:w-[600px] text-[34px] font-semibold lg:text-[54px] leading-[48px] font-bold">
                    Image Gallery
                </h1>
                <p className="font-jakarta text-center w-full md:w-[600px] mt-2 font-[24px]">
                    Explore our gallery to experience more.
                </p>
            </div>

            <div
                styles={{
                    display: 'flex',
                    alignItems: "center",
                    justifyContent: "center",
                }}
                className='w-full'>
                <div className='flex items-center justify-center'>
                    <CarouselCustom />
                </div>
            </div>


        </div >
    );
};

export default Landingpage;
