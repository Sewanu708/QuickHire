import React from 'react'
import { jobs } from '../data'

function JobPosted() {

    return (
        <div className='md:px-16 font-inter my-16 sm:px-12 px-4'>
            <h1 className='w-full text-center font-bold text-2xl text-zinc-800'>Popular Job Categories</h1>
            <div className='mt-8 flex flex-wrap w-full gap-x-8 gap-y-4 justify-center items-center'>
                {
                    jobs.map((position, index) => (
                        <div key={index} className='bg-gray-200 w-[260px] py-4 px-6 rounded-[8px] flex items-center gap-4'>
                            <div className='text-3xl text-[#0667ce]'>
                                {<position.icon/>}
                            </div>
                            <div >
                                <p className='font-semibold'>{position.title}</p>
                                <p className='text-gray-700 text-sm'>{position.value} <span> {position.availability}</span> </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default JobPosted