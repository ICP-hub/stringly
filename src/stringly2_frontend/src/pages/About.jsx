import React, { useState } from 'react'
import JoinPage from '../components/JoinPage';
import TestimonialGrid from '../components/TestimonialGrid';

function About() {
	const [hovered, setHovered] = useState([false, false, false]);

	const handleHover = (index) => {
		if (!hovered[index]) {
			const newHovered = [...hovered];
			newHovered[index] = true;
			setHovered(newHovered);
		}
	};
	return (
		<>
			<section>
				<div className='relative w-full bg-black'>
					<img src="./aboutHeroImg.png" alt="Premium Features" className='w-full h-screen object-cover sm:h-screen lg:h-auto opacity-[0.7]' />
					<div className='w-[364px] flex items-center flex-col justify-center absolute top-60 md:top-80 text-center left-4 md:left-48 lg:top-[35%] lg:top-[35%] lg:left-[30%] lg:p-4 text-white lg:w-[560px] lg:h-[254px]'>
						<h1 className='font-bold font-sf leading-[72px] lg:leading-[67px] text-[38px] lg:text-[56px]'>
							Discover Our Story.</h1>
						<p className='text-[18px] text-center font-roboto font-regular leading-[27px]'>
							Explore the vision behind Stringly and our commitment to redefining connections in a luxurious way.
						</p>
						<div class="flex space-x-4 my-10">
							<button class="px-10 py-4 bg-white text-black font-sf text-[16px] rounded-xl hover:bg-gray-100">
								Join Us
							</button>
							<button class="px-10 py-4 border-2 border-white text-white font-sf text-[16px] rounded-xl hover:bg-white hover:text-black">
								Learn More
							</button>
						</div>
					</div>
				</div>
			</section>
			<section>
				{/* first card */}
				<div
					className={`ppp animate p-4 my-6 mt-16 py-8 lg:p-0 lg:flex relative items-center justify-between pt-24 ${hovered[0] ? 'hovered' : ''}`}
					onMouseEnter={() => handleHover(0)}
				>
					<div className={`child hidden lg:block w-[616px] ml-[100px] m-auto opacity-0`}>
						<p className='font-sf font-bold text-[40px] leading-[48px] py-8'>
							Our Journey: Crafting Meaningful Connections Through Luxury
						</p>
						<p className='text-[18px] font-jakarta font-regular leading-[27px]'>
							At Stringly, we believe in transforming the way people connect. Our mission is to blend luxury with technology, creating a unique platform for both dating and networking.
						</p>
						<div className='flex items-start justify-evenly'>
							<div className='flex flex-col w-[296px]'>
								<p className='text-[20px] font-jakarta my-4 font-bold leading-[28px]'>
									Our Inspiration
								</p>
								<p className='font-roboto font-sf my-4 text-[16px] leading-[24px]'>
									Driven by a passion for meaningful connections and user empowerment, we innovate continuously.
								</p>
							</div>
							<div className='w-[296px]'>
								<p className='text-[20px] my-4 font-jakarta font-bold leading-[28px] my-4'>
									Founding Team
								</p>
								<p className='my-4 mx-4 font-sf text-[16px]'>
									Our diverse team combines expertise in technology, design, and relationship-building for your benefit.
								</p>
							</div>
						</div>
					</div>
					<div className='lg:w-auto z-20 left-right children bg-black'>
						<img src="./aboutPageImage1.png" alt="" className='h-screen lg:h-auto object-cover opacity-[0.7]' />
					</div>
				</div>
				{/* second card */}
				<div className={`ppp animate p-4 py-8 lg:p-0 lg:flex items-center justify-between ${hovered[1] ? 'hovered' : ''}`} onMouseEnter={() => handleHover(1)}>
					<div className='z-20 children bg-black'>
						<img src="./aboutPageImage2.png" alt="" className='h-screen lg:h-auto object-cover opacity-[0.8]' />
					</div>
					<div className='child-2 hidden lg:block w-[756px] w-[616px] ml-[100px] m-auto  '>
						<div>
							<p className='font-sf font-bold text-[40px] leading-[48px]'>
								Our Commitment to Innovation and Privacy
							</p>
							<p className='font-jakarta font-regular text-[18px] leading-[27px] py-8'>
								At Stringly, we prioritize innovation and user privacy in every aspect of our platform. Our mission is to empower users to forge meaningful connections in a secure environment.
							</p>
						</div>
						<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
							<div>
								<h2 class="text-6xl font-bold text-blue-900 mb-2">100%</h2>
								<p class="text-lg font-jakarta text-[16px] text-gray-700">Innovation drives us to create exceptional user experiences.</p>
							</div>
							<div>
								<h2 class="text-6xl font-bold text-blue-900 mb-2">100%</h2>
								<p class="text-lg font-jakarta text-[16px] text-gray-700">Privacy ensures your connections are secure and confidential.</p>
							</div>
						</div>
						<div class="flex space-x-4">
							<button class="px-8 py-4 border-2 border-black text-black text-lg rounded-xl hover:bg-black hover:text-white transition-colors">
								Learn More
							</button>
							<button class="px-8 py-4 text-black text-xl flex items-center space-x-2 hover:underline">
								<span>Join Us</span>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7" />
								</svg>
							</button>
						</div>
					</div>
				</div>
			</section>
			<main>
				<div className="max-w-6xl mx-auto text-center animate" >
					<h1 className='text-[48px] font-bold font-roboto text-black mt-16 mb-4'>Our Team</h1>
					<p className='text-gray-600 text-[18px] font-bold font-roboto mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
				</div>
				<div class="p-4 md:p-2 flex items-center justify-center mb-16 animate">
					<div class="mx-auto grid grid-cols-2 lg:grid-cols-3 gap-4 animate lg:gap-8 lg:w-[1285px]">
						<div class="flex w-[174px] h-[231px] md:w-[300px] md:h-[360px] lg:w-[407px] lg:h-[540px] flex-col p-0">
							<img src="./aboutDefault1.png" alt="Erika Fisher" class="w-full h-full object-cover" />
						</div>
						<div class="flex w-[174px] h-[231px] md:w-[300px] md:h-[360px] lg:w-[407px] lg:h-[540px] flex-col p-0">
							<img src="./aboutDefault2.png" alt="Erika Fisher" class="w-full h-full object-cover" />
						</div>
						<div class="flex w-[174px] h-[231px] md:w-[300px] md:h-[360px] lg:w-[407px] lg:h-[540px] flex-col p-0">
							<img src="./aboutDefault3.png" alt="Erika Fisher" class="w-full h-full object-cover" />
						</div>

						<div class="flex w-[174px] h-[231px] md:w-[300px] md:h-[360px] lg:w-[407px] lg:h-[540px] flex-col p-0">
							<img src="./aboutDefault4.png" alt="Erika Fisher" class="w-full h-full object-cover" />
						</div>
						<div class="flex w-[174px] h-[231px] md:w-[300px] md:h-[360px] lg:w-[407px] lg:h-[540px] flex-col p-0">
							<img src="./aboutDefault5.png" alt="Erika Fisher" class="w-full h-full object-cover" />
						</div>
						<div class="flex w-[174px] h-[231px] md:w-[300px] md:h-[360px] lg:w-[407px] lg:h-[540px] flex-col p-0">
							<img src="./aboutDefault6.png" alt="Erika Fisher" class="w-full h-full object-cover" />
						</div>
					</div>
				</div>
			</main>
			{/* <section>
				<div className='relative w-full'>
					<img src="./about/Frame42.png" alt="Premium Features" className='w-full h-screen object-cover md:h-auto' />
				</div>
			</section> */}
			<section>
				<div className='relative w-full h-[656px] md:h-auto bg-black mx-4'>
					<img src="./aboutComponent 2.png" alt="Premium Features" className='w-full lg:w-screen relative object-cover h-full md:h-screen opacity-[0.7]' />
					<div className='hidden lg:flex items-center gap-8 flex-col justify-center absolute top-40 lg:top-80 text-center left-4 md:top-[35%] lg:top-[35%] lg:left-[30%] p-4 text-white lg:w-[560px] lg:h-[254px]'>
						<h1 className='font-semibold lg:font-bold font-sf leading-[38px] md:leading-[67px] text-[32px] md:text-[56px]'>
							Harnessing ICP for Ultimate User Security</h1>
						<p className='text-[14px] md:text-[18px] text-center font-jakarta font-regular leading-[21px] lg:leading-[27px]'>
							At Stringly, we utilize the Internet Computer Protocol (ICP) to provide a secure and private environment for our users. This cutting-edge technology ensures that your personal data remains confidential while you explore meaningful connections. With Stringly, you can enjoy peace of mind knowing that your privacy is our top priority.
						</p>
						<div class="flex space-x-4 my-10">
							<button class="px-8 py-4 border-2 border-white text-white text-lg rounded-xl hover:bg-black hover:text-white transition-colors">
								Learn More
							</button>
							<button class="px-8 py-4 text-white text-xl flex items-center space-x-2 hover:underline">
								<span>Sign Up</span>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7" />
								</svg>
							</button>
						</div>
					</div>
				</div>
			</section>
			<div className='hidden lg:block'>
			<TestimonialGrid />
			</div>
			<section>
				<div className="h-full py-12 mb-12 px-6 flex flex-col box-contain">
					<div className="h-full mx-auto text-center">
						<h1 className="text-[48px] font-sf font-bold text-black mb-4">Our Journey</h1>
						<p className="text-gray-600 text-[18px] font-jakarta mb-10">
							Explore the milestones and culture that define Stringly.
						</p>
						<div className="h-full flex lg:gap-8 flex-col gap-8 lg:flex-row">
							<div className="relative w-full pb-8 lg:pb-0 bg-black">
								<img src="./aboutPlaceholder-Image-1.png" alt="Journey Image 1" className="w-full h-screen lg:h-auto object-cover opacity-[0.7]" />
							</div>
							<div className="relative w-full bg-black">
								<img src="./aboutPlaceholder-Image-2.png" alt="Journey Image 2" className="w-full h-screen lg:h-auto object-cover opacity-[0.7]" />
							</div>
						</div>
					</div>
				</div>
			</section>
			<JoinPage />
		</>
	)
}

export default About

