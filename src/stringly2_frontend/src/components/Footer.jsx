import React from 'react'
import { TbBrandTelegram } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";
import { RiMediumLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full lg:flex items-start justify-between bg-black text-white py-6'>
      <div>
        <div className='w-full mx-auto flex lg:flex-col pt-10 lg:gap-4 items-center justify-between lg:items-start px-8 lg:px-20'>
          <img src="./landing/stringly-logo.png" alt="" className='w-25 h-7 mb-5' />
          <div className='flex gap-4 text-xl'>
            <FaXTwitter />
            <TbBrandTelegram />
            <FaInstagram />
            <RiMediumLine />
          </div>
        </div>
      </div>
      <div className='pb-8'>
        {/* Hidden on larger screens and visible on mobile and tablet */}
        <ul className='lg:hidden leading-8 w-[100%] px-10'>
          <li className='text-lg font-semibold pb-4'>About Us</li>
          <li>Contact Us</li>
          <input type="text" placeholder='Your Email' className='rounded-2xl text-black bg-white px-2 my-4 p-1 w-full' />
        </ul>

        <div className='flex items-start justify-between flex-wrap gap-8 lg:gap-12 px-16 py-4'>
          {/* Pages Links */}
          <ul className='leading-8 font-extralight'>
            <li className='text-[18px] font-jaktara !font-regular pb-8'>Pages</li>
            <li className='pb-4'>Whitepaper</li>
            <li className='pb-4'>Pricing</li>
            <li className='pb-4'>Blog</li>
            <li className='pb-4'>Demo</li>
          </ul>

          {/* Company Links */}
          <ul className='leading-8 font-extralight'>
            <p className='text-[18px] font-jakarta !font-semibold pb-8'>Company</p>
            <li className='pb-4'>Pricing</li>
            <li className='pb-4'>Security</li>
            <li className='pb-4'>Privacy Policy</li>
            <li className='pb-4'>Terms of Use</li>
            <li className='pb-4'>Careers</li>
          </ul>

          {/* About Us Section (Visible on lg and larger screens) */}
          <ul className='leading-8 w-[100%] hidden lg:block lg:w-auto'>
            <li className='text-[18px] font-jakarta !font-semibold pb-14'>About Us</li>
            <li className='font-sm font-extralight'>Contact Us</li>
            <input type="text" placeholder='Your email' className='rounded-3xl text-sm p-4 text-gray-400 bg-white my-3 w-[300px]' />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer;
