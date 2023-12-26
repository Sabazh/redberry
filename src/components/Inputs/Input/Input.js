import React from 'react'

const Input = (props) => {
    const { title, className, type, name, value, placeholder, onBlur, onChange } = props;

  return (
    <label className="flex flex-col gap-0-8">
        <p className="font-fN">{title}</p>
        <input 
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
            className={`px-1-6 py-1-2 rounded-1-2 border-0-1 border-grey01 bg-white03 outline-none ${className}`}
        />
    </label>
  )
}

export default Input