import React from 'react'

const colors = {
    blue: 'bg-blue text-white border border-blue',
    white: 'bg-white text-dark border border-grey01',
}
const Button = (props) => {
    const { children, className, color, ...rest } = props; 

  return (
    <button {...rest} className={`${colors[color]}  px-2-0 py-1-0 text-1-4 font-fR rounded-0-8 outline-none ${className}`}>
        {children}
    </button>
  )
}

export default Button