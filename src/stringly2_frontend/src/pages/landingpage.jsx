import React, { useState, useEffect } from 'react'
import { FaChevronRight } from "react-icons/fa";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { MdPrivacyTip } from "react-icons/md";
import CarouselCoustom from '../components/CarouselCoustom';

const Landingpage = () => {
    const [hovered, setHovered] = useState('');

    const handleHover = (section) => {
        setHovered(section);
    };


    const [hovered2, setHovered2] = useState([false]);

    const handleHover2 = (index) => {
        if (!hovered2[index]) {
            const newHovered = [...hovered2];
            newHovered[index] = true;
            setHovered2(newHovered);
        }
    };

    return (
        <div className='w-full mx-auto flex flex-col items-center justify-center'>
            {/* Hero Section */}
            <div className="relative h-[852px] lg:h-auto w-full md:w-full bg-black">
                <img className="w-full h-[852px] lg:h-auto object-cover rounded-none" src="/heroimg.png" alt="Hero image" />
                <div className="absolute text-white left-1/2 top-1/2 lg:top-[65%] transform -translate-x-1/2 -translate-y-1/2 w-[310px] md:w-[364px] p-2 lg:w-[550px] bg-opacity-50 text-center">
                    <p className="font-sf font-semibold w-full text-[38px] md:text-[64px] leading-[46px] md:leading-[72px] text-center">
                        {/* <p className='md:text-[76px] text-center bg-clip-text text-transparent md:font-bold p-2' style={{ backgroundImage: 'linear-gradient(90.4deg, #D83694 29.82%, #0039C7 95.61%)' }}>Stringly</p> */}
                        String your Vibe
                    </p>
                    <p className="font-sfProDispaly text-[14px] lg:text-[18px] font-light leading-[21px] lg:leading-[30px] text-center mt-2">
                        Discover Stringly, the premium dating and networking app that blends
                        luxury with Internet Computer Protocol. Experience unmatched privacy and
                        security while forming meaningful connections.
                    </p>
                    <div className="mt-10 space-x-6">
                        <button className="bg-white text-[16px] font-sf text-black px-6 py-3 w-32 rounded-xl">
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>

            {/* Heading Section */}
            {/* <section className='max-w-[340px]-sm md:w-[388px] lg:w-auto xl:w-full 2xl:mt-40'>
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
                <div className='px-4 flex items-center gap-4 justify-evenly py-4 lg:px-2 flex-wrap'>
                    {[
                        {
                            imgSrc: './yolo.png',
                            title: 'Secure Connections',
                            description: 'Connect with confidence through our encrypted platform ensuring your privacy.',
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
                            className="card relative max-w-[340px]-sm md:w-full lg:w-[378px] h-[358px] xl:w-[430px] xl:h-[400px] bg-black rounded-2xl text-white overflow-hidden transition-transform duration-400 group"
                        >
                            <img
                                src={card.imgSrc}
                                alt="features"
                                className="card-image w-full h-full object-cover opacity-50 rounded-2xl border border-3 border-red-900 transition-opacity duration-400"
                            />
                            <div className="card-content absolute w-[90%] top-[170px] xl:top-[200px] left-[10px] md:left-[15px]">
                                <div className='px-4 min-h-[120px] h-[120px] w-full'>
                                    <p className="text-[21px] md:text-[24px] font-jakarta font-bold leading-[28px] pb-[10px]">
                                        {card.title}
                                    </p>
                                    <p className="card-description transition-opacity duration-500 mb-4">
                                        {card.description}
                                    </p>
                                </div>

                                <div className="flex px-4 items-center relative">
                                    <button className="card-button flex items-center gap-2 border rounded-xl px-10 py-2.5 opacity-0 translate-x-[-20px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                                        Join
                                    </button>
                                    <div className="learnMore absolute bottom-1 left-0 flex items-center gap-2 text-[16px]">
                                        <span className="default-text px-4 flex font-light items-center gap-2">Explore   <FaChevronRight size={12} /></span>
                                        <span className="hover-text flex font-light items-center gap-2">Join   <FaChevronRight size={12} /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section> */}

            <div className="py-10 w-full">
                <CarouselCoustom />
            </div>



            {/* Connecting Section */}
            <div className="text-center mt-12 ">
                <h2 className="lg:text-[48px] sm:text-3xl font-semibold font-sf leading-[38px]">Connecting You With Purpose</h2>
                <p className="mt-2 text-[14px] text-[20px] font-regular leading-[24px]">
                    A unique blend of dating and networking experiences.
                </p>
            </div>

            {/* Group for All Images */}
            <div className="max-w-[360px]-sm-md lg:w-[90%] xl:w-full mx-auto flex flex-col items-center justify-center mt-8 gap-4 px-4 lg:px-0">

                {/* Top Image with Hover Effect (Profile Image) */}
                <div className={`relative w-full lg:w-full h-[300px] rounded-xl lg:rounded-tl-[12px] lg:rounded-tr-[12px] overflow-hidden bg-gray-900`}>
                    <img
                        src="./landing/Rectangle 3.png"
                        alt="Profile Image"
                        className="w-full md:w-full h-full object-cover opacity-[0.6]"
                    />
                    <div
                        className={`absolute inset-0 flex md:w-[600px] items-center p-6 md:px-28 transform translate-x-[-0%] group-hover:translate-x-0 transition-transform duration-500 ppp ${hovered2[0] ? 'hovered' : ''}`}
                        onMouseEnter={() => handleHover2(0)}
                    >
                        <div className="text-white child">
                            <h2 className="text-[32px] leading-[38px] font-semibold leading-tight font-roboto font-bold">
                                Elevate Your Networking <br /> Experience
                            </h2>
                            <p className="mt-2 text-white-600 font-roboto font-light leading-[24px]">
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
                    <div className={`relative mb-8 w-full lg:w-[680px] h-[340px] rounded-xl lg:rounded-bl-[12px] overflow-hidden bg-black`}>
                        <img
                            src="./landing/Rectangle 4.png"
                            alt="Hug Image"
                            className="w-full h-full object-cover opacity-[0.6]"
                        />
                        <div
                            className={`absolute inset-0 flex items-center p-6 md:px-28 transform translate-x-[-0%] group-hover:translate-x-0 transition-transform duration-500 ppp ${hovered2[0] ? 'hovered' : ''}`}
                            onMouseEnter={() => handleHover2(0)}
                        >
                            <div className="text-white child">
                                <h2 className="text-[32px] leading-[38px] font-semibold font-roboto font-bold">Your Journey Begins Here</h2>
                                <p className="text-lg mt-2 font-roboto font-light leading-[24px]">Experience connections like never before with Stringly.</p>
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
                            className={`absolute inset-0 flex md:w-[700px] items-center p-6 md:px-28 transform translate-x-[-0%] group-hover:translate-x-0 transition-transform duration-500 ppp ${hovered2[0] ? 'hovered' : ''}`}
                            onMouseEnter={() => handleHover2(0)}
                        >
                            <div className="text-white child">
                                <h2 className="text-[32px] leading-[38px] font-roboto font-bold">Unmatched Privacy <br /> and Security</h2>
                                <p className="text-lg mt-2 font-roboto font-light leading-[24px]">Experience connections like never before with Stringly.</p>
                                <button className="bg-white text-black px-8 py-2 rounded-[8px] mt-4 hover:bg-pink-100">
                                    Join
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            {/* Specifications */}
            <div className="flex h-[616px] lg:h-full lg:flex-row relative justify-center lg:px-0 gap-20 items-start mx-2 lg:mx-0  mt-12">
                {/* Text Section */}
                <div className="w-[95%] p-5 md:p-10 lg:ml-10 rounded-xl bg-white !text-black lg:bg-none  mt-10  absolute lg:pl-0 lg:w-[500px] xl:w-[616px] top-[38%] lg:top-0 text-white z-10 lg:text-black md:left-[2%] lg:left-0 h-[320px] lg:h-full lg:relative flex flex-col" style={{
                    gap: '16px',
                    paddingTop: '10px',
                }}>
                    <h2 style={{
                    }} className='font-sf text-[22px] lg:text-[30px] font-semibold lg:text-[48px] md:leading-[48px] leading-tight lg:leading-[58px]  min-w-[300px]-lg'>
                        Experience Unmatched Privacy and Elegance
                    </h2>
                    <p className="font-sf text-sm lg:text-lg lg:mt-4 lg:leading-[22px] font-light min-w-[300px]-lg " style={{
                        width: '90%',
                    }}>
                        At Stringly, we prioritize your privacy while providing a luxurious experience. Our platform is designed to ensure that every connection you make is both secure and sophisticated.
                    </p>
                    <div className="flex justify-between gap-4 lg:mt-6 items-center lg:w-[556px] h-[64px] lg:gap-8 ">
                        <div className="flex flex-col items-start">
                            <div className="flex items-center gap-2 pb-2 m-0">
                                <img src="./landing/privacy .gif" alt="privacy icon" className="h-5 lg:h-10 w-auto" />
                                <p className='text-md lg:text-[32px] font-semibold text-[#1E1F6D]'>Privacy</p>
                            </div>
                            <p className="text-sm lg:text-[16px] font-regular font-sf leading-[20px]">Your privacy is our top priority.</p>
                        </div>

                        <div className="flex flex-col items-start lg:pt-4">
                            <div className="flex items-center gap-2 m-0">
                                <img src="./landing/connect.gif" alt="privacy icon" className="h-5 lg:h-10 w-auto" />
                                <p className='text-md lg:text-[32px] font-semibold text-[#D454A6]'>Connection</p>
                            </div>
                            <p className="text-sm lg:text-[16px] font-regular font-sf leading-[20px]">Connect with like-minded individuals <br /> securely.</p>
                        </div>
                    </div>
                    <div className="mt-24 lg:mt-10">
                        {/* <button className="bg-white text-[14px] font-sf border border-black text-black px-6 py-3 w-32 rounded-xl">
                            Learn More
                        </button> */}
                        <button className="hidden lg:block text-[16px] font-sf bg-black text-white w-32 text-white px-2 py-3 rounded-xl">
                            Sign Up
                        </button>
                    </div>
                </div>

                {/* Image Section */}
                <div className="md:mt-0 bg-black rounded-xl lg:rounded-none lg:rounded-tl-xl h-full lg:w-full lg:h-[670px] lg:rounded-bl-xl">
                    <img
                        src="/splash.png"
                        alt="Splash Image"
                        className="w-full opacity-[.7] h-full h-full border-red-600 lg:object-cover lg:rounded-l-[10px]"
                    />
                </div>
            </div>

            {/* Section with Button and Image Gallery */}
            {/* <section className='flex flex-col w-full lg:pl-20 lg:flex-row items-center justify-between gap-8 py-20 bg-gradient-full'>
                <div className='flex items-center flex-col text-center'>
                    <p className='font-roboto text-[14px] leading-[21px] md:text-[18px] font-regular md:leading-[27px]'>Work at Stringly</p>
                    <div className='md:py-10 py-5'>
                        <p className='font-sf text-[32px] md:text-[48px] leading-[58px] font-semibold'>Let’s work together</p>
                        <p className='font-roboto text-[14px] leading-[21px] md:text-[18px] font-regular leading-[27px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </div>
                    <button className='hidden md:block border border-black py-2 px-6 rounded-lg'>Join</button>
                </div>
                <div className={`lg:flex items-center space-y-5 md:gap-4 opacity-0 ${hovered[0] ? 'lili' : ''}`} onMouseEnter={() => handleHover(0)}>
                    <div className='bg-black  w-[340px] h-[370px] lg:h-[453px] lg:w-[259px] rounded-lg'>
                        <img src="/forever.png" alt="" className='opacity-[0.7] rounded-lg object-cover h-full w-full' />
                    </div>
                    <div className='bg-black rounded-lg w-[340px] h-[370px] lg:h-[522px] lg:w-[298px] rounded-lg'>
                        <img src="/couples.png" alt="" className='opacity-[0.7] object-cover h-full w-full rounded-lg' />
                    </div>
                    <div className='bg-black rounded-lg w-[340px] h-[370px] lg:h-[453px] lg:w-[259px]'>
                        <img src="/coupleshand.png" alt="" className='opacity-[0.7] object-cover h-full w-full' />
                    </div>
                </div>
                <button className='black md:hidden border border-black py-2 px-6 rounded-lg'>Join</button>

            </section> */}
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
            
            <section>
                <section
                    className={`bg-gradient-full relative lg:pl-20 ${hovered === 'section1' ? 'hovered opacity-90' : ''} lg:opacity-90`}
                    onMouseEnter={() => handleHover('section1')}
                // onMouseLeave={() => handleHover('')}
                >
                    <div className={`bbb  m-2 flex flex-col items-center justify-center w-[96%] top-[20%] left-[0%] md:left-[0%] lg:left-[25%] md:w-[450px] lg:w-[700px] p-10 lg:p-20 bg-white text-black border-2 rounded-lg ${hovered === 'section1' ? 'scale-up' : 'scale-0 opacity-0'}`}
                    >
                        <p>Bring your spark</p>
                        <p className="font-semibold text-[35px] leading-[44px] lg:text-[48px] lg:leading-[58px] text-center font-sf">
                            Let's build Stingly together.
                        </p>
                        <p className="font-roboto text-[18px] leading-[27px]">Contribute to the vibes!</p>
                        <button className="px-6 py-2 rounded-xl border mt-10 border-black">Join us</button>
                    </div>

                    <div className="flex justify-center items-center w-full min-h-full hidden lg:block">
                        <div className="grid grid-cols-2 lg:grid-cols-6 gap-2 w-full lg:p-20">
                            {/* Images */}
                            <img
                                src="./landing/Rectangle 3889.png"
                                alt="Image 1"
                                className="col-span-1 row-span-1 lg:row-span-2 w-[100px] lg:w-full h-[100px] lg:h-[40%] my-auto object-cover"
                            />
                            <img
                                src="./landing/Rectangle 3888.png"
                                alt="Image 2"
                                className="lg:col-span-2 lg:row-span-1 w-[200px] lg:w-full h-full object-cover"
                            />
                            <img
                                src="./landing/Rectangle 3892.png"
                                alt="Image 3"
                                className="col-span-1 row-span-1 w-full h-full object-cover"
                            />
                            <img
                                src="./landing/Rectangle 3893.png"
                                alt="Image 4"
                                className="col-span-2 row-span-3 w-auto h-auto lg:w-[350px] lg:h-[340px] object-cover"
                            />
                            <img
                                src="./landing/Rectangle 3890.png"
                                alt="Image 5"
                                className="col-span-1 row-span-2 w-full h-auto object-cover"
                            />
                            <img
                                src="./landing/Rectangle 3891.png"
                                alt="Image 6"
                                className="col-span-2 row-span-1 w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-center py-10 px-0 lg:hidden">
                        <img src="./landing/Property 1=Default.png" alt="" />
                    </div>
                </section>
            </section>

        </div >
    );
};

export default Landingpage;
