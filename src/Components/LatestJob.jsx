import React from 'react'
import { jobListings } from '../data'

function LatestJob() {
    return (
        <div className='md:px-16 font-inter my-16 sm:px-12 px-4'>
            <h1 className='w-full text-center font-bold text-2xl sm:text-3xl text-zinc-800'>
                Today Latest Post <span className='text-pr'>Job</span>
            </h1>

            <div className='mt-8 flex flex-wrap w-full gap-6 justify-center items-center'>
                {jobListings.map((job, index) => (
                    <div
                        key={index}
                        className='w-full sm:w-[80%] md:w-[550px] border border-zinc-200 p-4 sm:p-6 rounded-[8px] flex flex-col sm:flex-row gap-4 sm:gap-8 relative'
                    >
                     
                        <div className='flex gap-4 items-center justify-start'>
                            <div className='w-[60px] h-[60px] flex-shrink-0'>
                                <img
                                    src={job.logo}
                                    alt={job.company}
                                    className='rounded-[8px] w-full h-full object-cover'
                                />
                            </div>
                            <div>
                                <p className='text-[16px] sm:text-[18px] font-[600] text-zinc-800'>{job.company}</p>
                                <p className='text-[12px] sm:text-[14px] font-[500] text-zinc-500'>{job.location}</p>
                            </div>
                        </div>

                       
                        <div className='border-t sm:border-t-0 sm:border-l border-dashed border-gray-300 pt-4 sm:pt-0 sm:pl-4'>
                            <p className='text-[16px] sm:text-[18px] font-[600] text-zinc-800'>
                                {job.title}
                            </p>
                            <div className='text-[12px] sm:text-[14px] mt-1'>
                                <span className='font-[600] text-pr'>{job.salary}</span>{' '}
                                <span className='text-zinc-500'>|</span>{' '}
                                <span className='text-zinc-500'>{job.datePosted}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

}

export default LatestJob