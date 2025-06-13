import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { services } from '../data/index'
import { Link } from 'react-router'
import { RiMenu3Fill } from "react-icons/ri";
import Button from './Button'
import { IoMdClose } from "react-icons/io";
import { AnimatePresence, motion } from 'framer-motion';
function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <nav className='md:px-16 sm:px-12 px-8 py-2 flex items-center bg-white sticky justify-between' >
            <Link to={'/'} className='w-[200px] h-[60px]'>
                <img src={logo} alt="QuickHire Logo" className='w-full h-full object-cover' />
            </Link>

            <div className=' flex-1 items-center justify-end gap-4 hidden xl:flex'>
                {
                    services.map((service, index) => (
                        <div key={index} className='font-inter capitalize font-[500] cursor-pointer text-black hover:text-[#6c6c71] hover:scale-105 transition-all duration-300 ease-in-out'>
                            {service}
                        </div>
                    ))
                }

                <div className='font-inter capitalize font-[500] cursor-pointer hover:text-[#6c6c71] hover:scale-105 transition-all duration-300 ease-in-out'>
                    Login
                </div>
                {<Button content={'Get Started Free'} />}
            </div>

            <div className='flex xl:hidden  relative sm:text-[30px] text-[20px] cursor-pointer ' onClick={() => setMenuOpen(prev => !prev)}>
                {menuOpen ?  <IoMdClose />:<RiMenu3Fill /> 
                }
            </div>

            {
                <AnimatePresence>
                    menuOpen && (
                    <motion.div className='absolute'>
                        {
                            services.map((service, index) => (
                                <div key={index} className='font-inter capitalize font-[500] cursor-pointer text-black hover:text-[#6c6c71] hover:scale-105 transition-all duration-300 ease-in-out'>
                                    {service}
                                </div>
                            ))
                        }
                        <div className='font-inter capitalize font-[500] cursor-pointer hover:text-[#6c6c71] hover:scale-105 transition-all duration-300 ease-in-out'>
                            Login
                        </div>
                        {<Button content={'Get Started Free'} />}
                    </motion.div>
                )
                </AnimatePresence>
                
            }
        </nav>
    )
}

export default Navbar