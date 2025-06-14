import React from 'react'

function Button({ content, style }) {
    return (
        <button className={style}>
            {content}
        </button>

    )
}

export default Button