import React from 'react'
import { RiFacebookFill } from "react-icons/ri";
import { TfiTwitter } from "react-icons/tfi";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";




const Footer = () => {
  return (
    <div className='w-full md:flex items-start justify-between bg-black text-white'>
      <div>
        <div className='w-full mx-auto flex md:flex-col md:gap-4 items-center justify-between md:items-start p-10'>
          <p>LOGO</p>
          <div className='flex gap-4 text-xl'>
            <RiFacebookFill />
            <TfiTwitter />
            <FaLinkedinIn />
            <FaInstagram />
          </div>
        </div>
      </div>
      <div className='pb-8'>
        <ul className='md:hidden leading-8 w-[100%] px-10 md:w-auto'>
          <li className='text-lg font-semi-bold pb-4'>About Us</li>
          <li>Contact Us</li>
          <input type="text" placeholder='Your Email' className='rounded-2xl text-black bg-white px-2 my-4 p-1 my-2 w-full' />
        </ul>
        <div className='flex items-start justify-between flex-wrap gap-8 mg:gap-12 px-16 py-4'>
          <ul className='leading-8'>
            <li className='text-lg font-semi-bold pb-4'>Pages</li>
            <li>Whitepaper</li>
            <li>Pricing</li>
            <li>Blog</li>
            <li>Demo</li>
          </ul>
          <ul className='leading-8'>
            <p className='text-lg font-semi-bold pb-4'>Company</p>
            <li>Pricing</li>
            <li>Security</li>
            <li>Privacy Policy</li>
            <li>Term of use</li>
            <li>Carrier</li>
          </ul>
          <ul className='leading-8 w-[100%] hidden md:block md:w-auto'>
            <li className='text-lg font-semi-bold pb-4'>About Us</li>
            <li>Contact Us</li>
            <input type="text" placeholder='Yout Email' className='rounded-2xl text-black bg-white px-2 my-4 p-1 my-2 w-[300px]' />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer