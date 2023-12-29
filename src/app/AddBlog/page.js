'use client'

import { useContext, useState } from 'react'
import { AppContext } from '@/context/AppContext'
import { getCookie } from 'cookies-next'
import Link from 'next/link'
import axios from 'axios'
import dayjs from 'dayjs'
import Category from '@/components/Accordions/Category/Category'
import Button from '@/components/Inputs/Button/Button'
import Input from '@/components/Inputs/Input/Input'
import Calendar from '@/components/Accordions/Date/Date'

const AddBlog = () => {
  const { categories } = useContext(AppContext)
  
  const token = getCookie('token')
  const [inputValue, setInputValue] = useState({
    author: '',
    title: '',
    description: '',
    email: '',
    file: '',
    date: '',
    categoryId: '',
  })
  const [errorMessage, setErrorMessage] = useState({
    author: {
      enoughSymbols: '',
      enoughWords: '',
      isGeorgianAlphabet: '',
    },
    title: {
      enoughSymbols: '',
    },
    description: {
      enoughSymbols: '',
    },
    email: {
      isEmailValid: '',
    },
  })
  const [success, setSuccess] = useState(false)

  const validateInput = (key) => {
    const trimmedValue = inputValue[key].trim()
    const hasEnoughSymbols = trimmedValue.length >= 4
    const words = trimmedValue.split(/\s+/)
    const hasEnoughWords = words.length >= 2
    const isGeorgianAlphabet = /^[\u10A0-\u10FF\s]+$/u.test(trimmedValue)
    const isEmailValid = inputValue.email.endsWith('@redberry.ge')

    setErrorMessage((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        enoughSymbols: hasEnoughSymbols ? 'green' : 'red',
        enoughWords: hasEnoughWords ? 'green' : 'red',
        isGeorgianAlphabet: isGeorgianAlphabet ? 'green' : 'red',
      },
    }))
  }
  const dateUpdateHandler = (val) => {
    setInputValue((prev) => ({ ...prev, date: val }))
  }
  const fileUpdateHandler = (e) => {
    setInputValue((prev) => ({ ...prev, file: e.target.files[0] }))
  }
  const categoryUpdateHandler = (value) => {
    setInputValue((prev) => ({ ...prev, categoryId: value }))
  }
  const onChangeHandler = (e) => {
    setInputValue((prevInputValue) => ({
      ...prevInputValue,
      [e.target.name]: e.target.value,
    }))
    if (
      e.target.name === 'author' ||
      e.target.name === 'title' ||
      e.target.name === 'description' ||
      e.target.name === 'email' ||
      e.target.name === 'file' ||
      e.target.name === 'date' ||
      e.target.name === 'categoryId'
    ) {
      validateInput(e.target.name)
    }
  }

  const handleForm = async (e) => {
    e.preventDefault()
    if (
      !inputValue.file &&
      !inputValue.author &&
      !inputValue.title &&
      !inputValue.description &&
      !inputValue.date &&
      !inputValue.categoryId &&
      !inputValue.email
    ) {
      return false
    }
    const formData = new FormData()
    formData.append('title', inputValue.title)
    formData.append('description', inputValue.description)
    formData.append('image', inputValue.file)
    formData.append('author', inputValue.author)
    formData.append('publish_date', dayjs(inputValue.date).format('YYYY/MM/DD'))
    formData.append('categories', JSON.stringify([inputValue.categoryId]))
    formData.append('email', inputValue.email)

    try {
      await axios.post(
        'https://api.blog.redberryinternship.ge/api/blogs',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        }
      )
      setSuccess(true)
    } catch (e) {
      console.log('error', e)
      // handle errors
    }
  }

  return (
    <div>
      {success && (
        <div className="flex w-full h-full fixed top-0 left-0 justify-center items-center bg-dark/[0.24] z-2">
          <div className="max-w-[480px] w-full bg-white rounded-1-2 px-2-4 py-4-0 relative">
            <button
              className="absolute top-2-0 right-2-0"
              onClick={() => {
                setSuccess(false)
              }}
            >
              <img src="/svg/X.svg" />
            </button>
            <div className="flex flex-col gap-4-8">
              <div className="flex flex-col items-center justify-center gap-1-6 px-7-4">
                <img src="/svg/tick-circle.svg" className="w-6-4" />
                <p className="font-fB text-2-0 text-dark">
                  ჩანაწი წარმატებით დაემატა
                </p>
              </div>
              <Button
                color="blue"
                onClick={() => {
                  setSuccess(false)
                }}
              >
                მთავარ გვერდზე დაბრუნება
              </Button>
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-center items-center py-2-8 bg-white border-b-0-1 border-grey01">
        <Link href="/">
          <img src="/images/LOGO.png" />
        </Link>
      </div>
      <div className="bg-white03">
        <div className="cont flex items-start gap-24-0 pt-4-0">
          <Link href="/">
            <img src="/svg/Arrow-back-grey.svg" />
          </Link>
          <form
            className="flex flex-col gap-4-0 font-fR text-1-4 text-dark w-60-0 flex-wrap"
            onSubmit={handleForm}
          >
            <h1 className="font-fB text-3-2">ბლოგის დამატება</h1>
            <div className="flex flex-col gap-2-4">
              <div className="flex flex-col font-fR gap-0-8">
                <label className="font-fN">ატვირთეთ ფოტო</label>
                {!inputValue.file ? (
                  <div className="flex flex-col gap-2-4 items-center py-4-8 rounded-1-2 border-dashed border-0-1 border-grey bg-white04 relative">
                    <img src="/images/folder-add.png" />
                    <p>
                      ჩააგდეთ ფაილი აქ ან{' '}
                      <span className="underline font-fB">აირჩიეთ ფაილი</span>
                    </p>
                    <input
                      name="file"
                      type="file"
                      className="absolute inset-0 opacity-0"
                      onChange={fileUpdateHandler}
                    />
                  </div>
                ) : (
                  <div className="flex justify-between items-center p-1-6 rounded-1-2 bg-white01">
                    <div className="flex items-center gap-1-2">
                      <img src="/images/gallery.png" />
                      <p>Blog</p>
                    </div>
                    <button type="button">
                      <img src="/svg/X.svg" />
                    </button>
                  </div>
                )}
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
                  />
                  <ul className="ml-2-3 text-1-2 font-fR text-grey">
                    <li style={{ color: errorMessage.author.enoughSymbols }}>
                      მინიმუმ 4 სიმბოლო
                    </li>
                    <li style={{ color: errorMessage.author.enoughWords }}>
                      მინიმუმ ორი სიტყვა
                    </li>
                    <li
                      style={{ color: errorMessage.author.isGeorgianAlphabet }}
                    >
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
                    value={inputValue.title}
                    onChange={onChangeHandler}
                  />
                  <p
                    style={{ color: errorMessage.title.enoughSymbols }}
                    className="font-fR text-1-2 text-grey"
                  >
                    მინიმუმ 4 სიმბოლო
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-0-8 w-full">
                <textarea
                  name="description"
                  placeholder="შეიყვნეთ აღწერა"
                  value={inputValue.description}
                  onChange={onChangeHandler}
                  className="px-1-6 py-1-2 text-1-4 rounded-1-2 border-0-1 border-grey01 bg-white03 outline-none min-h-[124px]"
                />
                <p
                  style={{ color: errorMessage.description.enoughSymbols }}
                  className="font-fR text-1-2 text-grey"
                >
                  მინიმუმ 4 სიმბოლო
                </p>
              </div>
              <div className="flex gap-2-4">
                <Calendar
                  value={inputValue.date}
                  onChange={dateUpdateHandler}
                />
                <Category
                  onChange={categoryUpdateHandler}
                  categories={categories}
                  value={inputValue.categoryId}
                />
              </div>
              <div className="flex flex-col gap-0-8 w-48-percent">
                <Input
                  title="ელ-ფოსტა"
                  type="text"
                  name="email"
                  placeholder="Example@redberry.ge"
                  value={inputValue.email}
                  onChange={onChangeHandler}
                />
                {inputValue.email && (
                  <div className="flex items-start gap-0-8">
                    <img src="/svg/red-!.svg" />
                    <span className="font-fR text-1-2 text-red">
                      მეილი უნდა მთავრდებოდეს @redberry.ge-ით
                    </span>
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-end items-end">
              <Button color="blue" className="w-48-percent" type="submit">
                გამოქვეყნება
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddBlog
