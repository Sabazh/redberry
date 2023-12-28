import React from 'react'
import DatePicker from 'react-date-picker'
import 'react-date-picker/dist/DatePicker.css'
import 'react-calendar/dist/Calendar.css'

const Date = (props) => {
  const { value, onChange } = props
  return (
    <div className="flex flex-col gap-0-8 w-full">
      <label className="font-fN">გამოქვეყნების თარიღი *</label>
      <DatePicker value={value} onChange={onChange} />
    </div>
  )
}

export default Date
