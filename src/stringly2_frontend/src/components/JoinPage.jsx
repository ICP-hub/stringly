import React from 'react'

const JoinPage = () => {
	return (
		<div className='flex items-center justify-center flex-col mb-20 '>
			<div className='flex items-center justify-center flex-col p-8 lg:w-[727px]'>
				<p className='font-roboto text-[32px] lg:text-[48px] text-center font-bold  leading-[38px] lg:leading-[57px] py-6'>Join the Exclusive Network</p>
				<p className='font-roboto font-regular text-[18px] leading-[27px] text-center'>Experience luxury and privacy like never before with Stringly’s unique dating and networking platform.</p>
			</div>
			<div className='flex items-center justify-between gap-8 py-10'>
				<button className='bg-black text-white p-3 px-8 font-sf rounded-lg'>Sign Up</button>
				<button className='border-2 border-black p-3 px-8 font-sf rounded-lg'>Learn More</button>
			</div>
		</div>
	)
}

export default JoinPage