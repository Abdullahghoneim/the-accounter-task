import React from 'react'




// Button Component 

function Button({ type, children, onClick, className, ...reset }) {
    return <button className={`${className} w-full p-3 `} onClick={onClick} type={type}  {...reset} > {children} </button>
}

export default Button