import React from 'react';
import human2 from '../assets/human2.png';
import { CiCircleCheck } from 'react-icons/ci';

function KnowMore() {
    return (
        <div className='md:px-16 font-inter flex flex-col-reverse xmd:flex-row items-center justify-center pt-16 my-16 sm:px-12 px-4 bg-gray-200 gap-8'>
           
            <div className='flex-1/2'>
                <img src={human2} alt="Job seekers illustration"  />
            </div>

         
            <div className='flex-1/2 pb-16'>
                <p className='text-2xl lg:text-3xl font-semibold text-zinc-800 mb-1 leading-tight'>
                    Thousands of Opportunities.
                </p>
                <p className='text-2xl lg:text-3xl font-semibold text-zinc-800 mb-4 leading-tight'>
                    Find The One That <span className='text-pr'>Matches You.</span>
                </p>
                <p className='text-zinc-500 mb-4 text-sm md:text-base'>
                    We connect job seekers with trusted companies across the globe. Whether you're just starting out or looking for your next big role, QuickHire helps you every step of the way.
                </p>

             
                <div className='gradient-bg p-[1.5px] w-fit rounded-[8px] inline-block font-inter transition duration-300 cursor-pointer hover:scale-105 mb-6'>
                    <div className='rounded-[6px] w-fit bg-gray-200 py-2 px-4'>
                        Know More
                    </div>
                </div>

                <div className='flex flex-col gap-3'>
                    {[
                        'Personalized job recommendations based on your profile',
                        'Trusted by top companies and recruiters worldwide',
                        'Fast-track your applications with one-click apply'
                    ].map((item, index) => (
                        <div key={index} className='flex items-start gap-3'>
                            <div className='text-pr text-xl mt-1'>
                                <CiCircleCheck />
                            </div>
                            <p className='text-zinc-600 text-sm md:text-base'>{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default KnowMore;
