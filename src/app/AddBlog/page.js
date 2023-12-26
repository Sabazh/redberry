'use client'

import { useState } from 'react'
import Link from 'next/link'
import Category from '@/components/Accordions/Category/Category'
import Button from '@/components/Inputs/Button/Button'
import Input from '@/components/Inputs/Input/Input'

const AddBlog = () => {
  //  const payload = {
  //     title:'asfasfas',
  //     description:'',
  //     image:'',
  //     author: '',
  //     publish_date:''
  //     categories:'',
  //     email:''
  //  }

  const [inputValue, setInputValue] = useState({
      author: '',
      title: '',
      description: '',
      email: '',
  })
//   const [inputValue, setInputValue] = useState('')
  const [errorMessage, setErrorMessage] = useState({
    enoughSymbols: '',
    enoughWords: '',
    isGeorgianAlphabet: '',
  });

  const validateInput = () => {
    const trimmedValue = String(inputValue).trim();
    const hasEnoughSymbols = trimmedValue.length >= 4
    const words = trimmedValue.split(/\s+/)
    const hasEnoughWords = words.length >= 2
    const isGeorgianAlphabet = /^[\u10A0-\u10FF\s]+$/u.test(trimmedValue)

    setErrorMessage({
      enoughSymbols: hasEnoughSymbols ? 'green' : 'red',
      enoughWords: hasEnoughWords ? 'green' : 'red',
      isGeorgianAlphabet: isGeorgianAlphabet ? 'green' : 'red',
    });
  };

//   const onChangeHandler = (e) => {
//     const { name, value } = e.target;

//     setInputValue((prevInputValue) => ({
//         ...prevInputValue,
//         [name]: value,
//     }));

//     if (name === 'author' || name === 'title' || name === 'description' || name === 'email') {
//         validateInput();
//     }
//   };
  const onChangeHandler = (e) => {
    setInputValue({[e.target.name]: e.target.value})
    if (e.target.name === 'author') {
        validateInput()
    } else if (e.target.name = 'title') {
        validateInput()
    } else if (e.target.name = 'description') {
        validateInput();
    } else if (e.target.name = 'email') {
        validateInput();
    }
  };

//   onsubmit() {
//     if no errors
//     const 
//     await fetchData('blogs',{method:'post',body:JSON.stringify(payload)})
//   }

  return (
    <div>
      <div className="flex justify-center items-center py-2-8 bg-white border-b-0-1 border-grey01">
        <Link href="/">
          <img src="/images/LOGO.png" />
        </Link>
      </div>
      <div className="cont flex items-start gap-49-0 bg-white03">
        <Link href="/">
          <img src="/svg/Arrow-back-grey.svg" />
        </Link>
        <div className="flex flex-col gap-4-0 font-fR text-1-4 text-dark w-60-0 flex-wrap">
          <h1 className="font-fB text-3-2">ბლოგის დამატება</h1>
          <div className="flex flex-col gap-2-4">
            <div className="flex flex-col font-fR gap-0-8">
              <label className="font-fN">ატვირთეთ ფოტო</label>
              <div className="flex flex-col gap-2-4 items-center py-4-8 rounded-1-2 border-dashed border-0-1 border-grey bg-white04">
                <img src="/images/folder-add.png" />
                <p>
                  ჩააგდეთ ფაილი აქ ან{' '}
                  <span>
                    <button className="underline font-fB">აირჩიეთ ფაილი</button>
                  </span>
                </p>
              </div>
            </div>
            <div className="flex gap-2-4">
              <div className="flex flex-col gap-0-8 w-full">
                <Input 
                    title="ავტორი *"
                    type="text"
                    name="author"
                    placeholder="შეიყვნეთ ავტორი"
                    value={inputValue.author}
                    onChange={onChangeHandler}
                    onBlur={validateInput}
                />
                <ul className="ml-2-3 text-1-2 font-fR text-grey">
                  <li style={{ color: errorMessage.enoughSymbols }}>
                    მინიმუმ 4 სიმბოლო
                  </li>
                  <li style={{ color: errorMessage.enoughWords }}>
                    მინიმუმ ორი სიტყვა
                  </li>
                  <li style={{ color: errorMessage.isGeorgianAlphabet }}>
                    მხოლოდ ქართული სიმბოლოები
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-0-8 w-full">
                <Input 
                    title="სათაური *"
                    type="text"
                    name="title"
                    placeholder="შეიყვნეთ სათაური"
                    value={inputValue.title || ''}
                    onChange={onChangeHandler}
                    onBlur={validateInput}
                />
                <p
                    style={{ color: errorMessage.enoughSymbols}}                
                    className="font-fR text-1-2 text-grey"
                >
                    მინიმუმ 4 სიმბოლო
                </p>
              </div>
            </div>
            <div className='flex flex-col gap-0-8 w-full'>
                <Input 
                    title="აღწერა *"
                    type="text"
                    name="description"
                    placeholder="შეიყვანეთ აღწერა"
                    value={inputValue.description || ''}
                    onChange={onChangeHandler}
                    onBlur={validateInput}
                    className="min-h-[124px]"
                />
                <p
                    style={{ color: errorMessage.enoughSymbols}}                
                    className="font-fR text-1-2 text-grey"
                >
                    მინიმუმ 4 სიმბოლო
                </p>
            </div>
            <div className="flex gap-2-4">
              <div className="flex flex-col gap-0-8 w-full">
                <label className="font-fN">გამოქვეყნების თარიღი *</label>
                <input
                  type="date"
                  className="px-1-6 py-1-2 rounded-1-2 border-0-1 border-grey01 bg-white03 outline-none"
                />
              </div>
              <div className="flex flex-col gap-0-8 w-full">
                <label className="font-fN">კატეგორია *</label>
                <Category />
              </div>
            </div>
            <div className='flex flex-col gap-0-8 w-48-percent'>
                <Input 
                    title="ელ-ფოსტა"
                    type="text"
                    name="email"
                    placeholder="Example@redberry.ge"
                    value={inputValue.email}
                    onChange={onChangeHandler}
                    onBlur={validateInput}
                />
                <div className="flex items-start gap-0-8">
                    <img src="/svg/red-!.svg" />
                    <span className="font-fR text-1-2 text-red">
                        მეილი უნდა მთავრდებოდეს @redberry.ge-ით
                    </span>
                </div>
            </div>
          </div>
          <div className="flex justify-end items-end">
            <Button color="blue" className="w-48-percent">
              გამოქვეყნება
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddBlog
