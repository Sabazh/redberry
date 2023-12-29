import React from 'react'

const CategoriesButton = (props) => {
  const { children, className, backgroundColor, textColor, onChange, ...rest } =
    props
  const buttonStyle = {
    backgroundColor,
    color: textColor,
  }

  return (
    <button
      {...rest}
      className={`px-1-6 py-0-8 rounded-3-0 font-fN text-1-2 ${className}`}
      style={buttonStyle}
      onClick={onChange}
    >
      {children}
    </button>
  )
}

export default CategoriesButton
