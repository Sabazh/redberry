'use client'

import { useState } from 'react'
import Link from 'next/link'
import Category from '@/components/Accordions/Category/Category'
import Button from '@/components/Inputs/Button/Button'

const AddBlog = () => {
        // const [inputValue, setInputValue] = useState({
        //     author: '',
        //     title: '',
        //     description: '',
        // })
        const [inputValue, setInputValue] = useState('')
        const [errorMessage, setErrorMessage] = useState({
            enoughSymbols: '',
            enoughWords: '',
            isGeorgianAlphabet: '',
        });
    
        const validateInput = () => {
            const trimmedValue = inputValue.trim();
            const hasEnoughSymbols = trimmedValue.length >= 4;
            const words = trimmedValue.split(/\s+/);
            const hasEnoughWords = words.length >= 2;
            const isGeorgianAlphabet = /^[\u10A0-\u10FF\s]+$/u.test(trimmedValue);
            
            setErrorMessage ({
                enoughSymbols: hasEnoughSymbols ? 'green' : 'red',
                enoughWords: hasEnoughWords ? 'green' : 'red',
                isGeorgianAlphabet: isGeorgianAlphabet ? 'green' : 'red',
            });
        };

  return (
    <div>
        <div className='flex justify-center items-center py-2-8 bg-white border-b-0-1 border-grey01'>
            <Link href="/">
                <img src='/images/LOGO.png' />
            </Link>
        </div>
        <div className='cont flex items-start gap-49-0 bg-white03'>
            <Link href="/">
                <img src='/svg/Arrow-back-grey.svg'/>
            </Link>
            <div className='flex flex-col gap-4-0 font-fR text-1-4 text-dark w-60-0 flex-wrap'>
                <h1 className='font-fB text-3-2'>ბლოგის დამატება</h1>
                <div className='flex flex-col gap-2-4'>
                    <div className='flex flex-col font-fR gap-0-8'>
                        <label className='font-fN'>ატვირთეთ ფოტო</label>
                        <div className='flex flex-col gap-2-4 items-center py-4-8 rounded-1-2 border-dashed border-0-1 border-grey bg-white04'>
                            <img src='/images/folder-add.png'/>
                            <p>ჩააგდეთ ფაილი აქ ან <span><button className='underline font-fB'>აირჩიეთ ფაილი</button></span></p>
                        </div>
                    </div>
                    <div className='flex gap-2-4'>
                        <div className='flex flex-col gap-0-8 w-full'>
                            <label 
                                htmlFor="validation1"
                                className='font-fN'
                            >
                                ავტორი *
                            </label>
                            <input 
                                type='text'
                                id="validation1"
                                value={inputValue}
                                onChange={(e) => {
                                    setInputValue(e.target.value);
                                    validateInput();
                                }}
                                onBlur={validateInput}
                                placeholder='შეიყვნეთ ავტორი'
                                className='px-1-6 py-1-2 rounded-1-2 border-0-1 border-grey01 bg-white03 outline-none' 
                            />
                            <ul className='ml-2-3 text-1-2 font-fR text-grey'>
                                <li style={{ color: errorMessage.enoughSymbols }}>მინიმუმ 4 სიმბოლო</li>
                                <li style={{ color: errorMessage.enoughWords }}>მინიმუმ ორი სიტყვა</li>
                                <li style={{ color: errorMessage.isGeorgianAlphabet }}>მხოლოდ ქართული სიმბოლოები</li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-0-8 w-full'>
                            <label className='font-fN'>სათაური *</label>
                            <input 
                                type='text'
                                placeholder='შეიყვნეთ სათაური'
                                className='px-1-6 py-1-2 rounded-1-2 border-0-1 border-grey01 bg-white03 outline-none' 
                            />
                            <p className='font-fR text-1-2 text-grey'>მინიმუმ 4 სიმბოლო</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-0-8'>
                        <label className='font-fN'>აღწერა *</label>  
                        <textarea
                            placeholder='შეიყვანეთ აღწერა'
                            className='px-1-6 py-1-2 rounded-1-2 border-0-1 border-grey01 bg-white03 outline-none min-h-[124px]'
                        />
                        <p className='font-fR text-1-2 text-grey'>მინიმუმ 4 სიმბოლო</p>
                    </div>
                    <div className='flex gap-2-4'>
                        <div className='flex flex-col gap-0-8 w-full'>
                            <label className='font-fN'>გამოქვეყნების თარიღი *</label>
                            <input type='date' className='px-1-6 py-1-2 rounded-1-2 border-0-1 border-grey01 bg-white03 outline-none'/>
                        </div>
                        <div className='flex flex-col gap-0-8 w-full'>
                            <label className='font-fN'>კატეგორია *</label>
                            <Category />
                        </div>
                    </div>
                    <div className='flex flex-col gap-0-8 w-48-percent'>
                        <label className='font-fN'>ელ-ფოსტა</label> 
                        <input 
                            type='text'
                            placeholder='Example@redberry.ge'
                            className='px-1-6 py-1-2 rounded-1-2 border-0-1 border-grey01 bg-white03 outline-none' 
                        />
                    </div>
                </div>
                <div className='flex justify-end items-end'>
                    <Button color="blue" className='w-48-percent'>გამოქვეყნება</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddBlog