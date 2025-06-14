import React from 'react'
import Button from './Button'
import human from '../assets/human.png'
function Hero() {
    return (
        <div className='md:px-16 font-inter  sm:px-12 px-4 pt-30 xmd:pt-20 flex items-center justify-between bg-gray-200 xmd:flex-row flex-col'>
            <div className='flex-1/3'>
                <p className='text-[#0667ce] font-[600] mb-4'>Online Hiring</p>
                <p className='text-[40px] sm:leading-12 leading-11 font-[500] md:w-[70%] w-full text-zinc-900 mb-4'>Simple Hiring For Smart Businesses</p>
                <p className='text-zinc-400 md:w-[70%] w-full capitalize mb-4'>We bring a human touch to hiring. discover and hire the perfect candidates with our no-fuss hring software that just works.</p>
                <div className='flex gap-4 sm:flex-row flex-col'>
                    <Button content={'Get Started Free'} style={'w-fit gradient-bg px-4 rounded-[8px] py-2 text-white font-inter transition duration-300 cursor-pointer hover:scale-105'} />
                    <div className='gradient-bg p-[2px] w-fit rounded-[8px] inline-block font-inter transition duration-300 cursor-pointer hover:scale-105'>
                        <div className='rounded-[6px] w-fit bg-gray-200 py-2 px-4'>
                            Watch A Demo
                        </div>
                    </div>


                </div>
            </div>
            <div className='flex-1/3'>
                <img src={human} alt="" className='w-full' />
            </div>
        </div>
    )
}

export default Hero