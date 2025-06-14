import React from 'react'
import logo from '../assets/logo.png'
import { FaWhatsapp } from "react-icons/fa";
import { socials, legals } from '../data';

function Footer() {
    return (
        <div className='md:px-16 sm:px-12 px-8 py-12 border-t border-dashed grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-[1.5fr_1fr_1fr_1fr] gap-16 items-start w-full bg-gray-200 border-zinc-300'>
         
            <div className='flex flex-col gap-4 items-start '>
                <div className='w-[200px] h-[40px]'>
                    <img src={logo} alt="QuickHire Logo" className='w-full h-full object-cover' />
                </div>
                <div className='text-zinc-400 text-[16px] text-justify'>
                    HR Advisers carry out your company's HR service needs including providing training and management. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>

                <div className='py-4 px-4 bg-white rounded-2xl items-center justify-center flex gap-4 flex-wrap-reverse cursor-pointer mt-4'>
                    <div>
                        <p className='font-bold text-[14px] text-black'>Talk to Our Support</p>
                        <p className='font-[500] text-[14px] text-[#0667ce]'>+234-802-228-7813</p>
                    </div>
                    <div className='text-green-500 text-4xl'>
                        <FaWhatsapp />
                    </div>
                </div>
            </div>

         
            <div className='flex flex-col gap-2 items-start'>
                <p className='font-[700] mb-2'>Information</p>
                {
                    ['Adviser-Client Relations', 'Departments', 'Adviser Work', 'Our Employees', 'Meet Our Experts', 'Department Services', 'About Company']
                        .map((item, index) => (
                            <div className='text-zinc-400 text-[16px]' key={index}>{item}</div>
                        ))
                }
            </div>

           
            <div className='flex flex-col gap-2 items-start'>
                <p className='font-[700] mb-2'>Socials</p>
                {
                    socials.map((item, index) => (
                        <div className='text-zinc-400 text-[16px]' key={index}>{item.name}</div>
                    ))
                }
            </div>

           
            <div className='flex flex-col gap-2 items-start'>
                <p className='font-[700] mb-2'>Legal</p>
                {
                    legals.map((item, index) => (
                        <div className='text-zinc-400 text-[16px]' key={index}>{item.title}</div>
                    ))
                }
            </div>
        </div>
    )
}

export default Footer
