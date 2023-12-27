import React from 'react'
import Card from '../Card/Card'
import CategoriesButton from '../Inputs/CategoriesButton/CategoriesButton'
import { blue, dark, green, grey, grey01, red, white } from '@/themes/colors'

const Blogs = () => {
  return (
    <div className='bg-white01'>
      <div className='cont'>
        <div className=' flex items-center justify-center pb-6-4 gap-2-4'>
            <CategoriesButton backgroundColor={blue}  textColor={white}>
              მარკეტი
            </CategoriesButton>
            <CategoriesButton backgroundColor={dark} textColor={white}>
              აპლიკაცია
            </CategoriesButton>
            <CategoriesButton backgroundColor={red} textColor={white}>
              ხელოვნური ინტელექტი
            </CategoriesButton>
            <CategoriesButton backgroundColor={green} textColor={white}>
              UI/UX
            </CategoriesButton>
            <CategoriesButton backgroundColor={grey} textColor={white}>
              კვლევა
            </CategoriesButton>
            <CategoriesButton backgroundColor={grey01} textColor={dark}>
              Figma
            </CategoriesButton>
        </div>
        <div className='grid grid-cols-3 gap-y-5-6 pb-6-6'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  )
}

export default Blogs