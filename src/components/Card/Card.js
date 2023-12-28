import React from 'react'
import Link from 'next/link'
import CategoriesButton from '../Inputs/CategoriesButton/CategoriesButton'
import { blue, green, white } from '@/themes/colors'

const Card = () => {
  return (
    <div className="flex flex-col gap-2-4 overflow-hidden">
      <div className="rounded-1-2 h-32-8 overflow-hidden">
        <img src="/images/test.png" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col gap-1-6 items-start">
        <div className="flex flex-col gap-0-8 font-fR text-1-2">
          <p className="font-fN text-16">ნია გოგსაძე</p>
          <p>02.11.2023</p>
        </div>
        <p className="font-fB text-2-0">
          EOMM-ის მრჩეველთა საბჭოს ნინო ეგაძე შეუერთდა
        </p>
        <div className="flex gap-1-6">
          <CategoriesButton backgroundColor={blue} textColor={white} disabled>
            მარკეტი
          </CategoriesButton>
        </div>
        <p className="font-fR text-1-6 text-dark01 line-clap">
          6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური
          სიზუსტისთვის, ეს პროცესი...
        </p>
        <div 
        // href={`DetailPage/${id}`} 
          className="flex items-center gap-0-4">
          <button className="font-fN text-1-4 text-blue">სრულად ნახვა</button>
          <img src="/svg/Arrow.svg" />
        </div>
      </div>
    </div>
  )
}

export default Card
