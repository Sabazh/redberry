import React from 'react'
import DatePicker from 'react-date-picker'


const Date = () => {
  return (
    <div className="flex flex-col gap-0-8 w-full">
        <label className="font-fN">გამოქვეყნების თარიღი *</label>
        <DatePicker />
    </div>
  )
}

export default Date