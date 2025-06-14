import React from 'react'
import { techBrands } from '../data'
import { motion } from 'framer-motion';

const iconVariants = {
  animate: {
    x: ["100%", "-100%"], 
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 5, // adjust speed
        ease: "linear",
      },
    },
  },
};

function Brands() {
    return (
        <div className='overflow-hidden w-full bg-white py-4'>
      <motion.div
        className='flex gap-16 w-fit'
        variants={iconVariants}
        animate="animate"
      >
        {[...techBrands, ...techBrands].map((brand, index) => {
          const Icon = brand.icon;
          return (
            <div className='text-[60px]' key={index}>
              <Icon color={brand.color} />
            </div>
          );
        })}
      </motion.div>
    </div>
    )
}

export default Brands