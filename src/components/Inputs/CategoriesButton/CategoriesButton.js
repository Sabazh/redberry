import React from 'react'

const CategoriesButton = (props) => {
  const { children, className, backgroundColor, textColor, ...rest } = props;
  const buttonStyle = {
    backgroundColor,
    color: textColor,
  };

  return (
    <button {...rest} className={`px-1-6 py-0-8 rounded-3-0 font-fN text-1-2 ${className}`} style={buttonStyle}>
      {children}
    </button>
  )
}

export default CategoriesButton