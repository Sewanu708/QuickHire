import React from 'react'

function Button({ content, }) {
    return (
        <button className='gradient-bg px-4 rounded-[4px] py-2 text-white font-inter transition duration-300 cursor-pointer hover:scale-105'>
            {content}
        </button>

    )
}

export default Button