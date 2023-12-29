'use client'

import { useContext, useEffect, useState } from 'react'
import { deleteCookie, getCookie } from 'cookies-next'
import { AppContext } from '@/context/AppContext'
import { fetchData } from '@/utils/fetchData'
import Card from '../Card/Card'
import CategoriesButton from '../Inputs/CategoriesButton/CategoriesButton'

const Blogs = () => {
  const { blogs, categories, setBlogsHandler, setCategoriesHandler } = useContext(AppContext)
  
  const token = getCookie('token')
  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    const handler = async () => {
      try {
        const [categories, blogs] = await Promise.all([
          fetchData('categories', {
            method: 'get',
            cache: 'no-store',
            headers: {
              'Content-Type': 'application/json',
              accept: 'application/json',
              Authorization: `Bearer ${token}`,
            },
          }),
          fetchData('blogs', {
            method: 'get',
            cache: 'no-store',
            headers: {
              'Content-Type': 'application/json',
              accept: 'application/json',
              Authorization: `Bearer ${token}`,
            },
          }),
        ])
        setBlogsHandler(blogs.data)
        setCategoriesHandler(categories.data)
      } catch (e) {
        deleteCookie('token')
        // redirect to homepage,
        // open login modal
      }
    }
    if (token) handler()
  }, [token])

  useEffect(() => {
    setFilteredData(blogs)
  }, [blogs])

  const categoryHandler = (id) => {
    const filtered = blogs.filter(
      (item) => item.categories.filter((category) => category.id === id).length
    )
    setFilteredData(filtered)
  }

  return (
    <div className="bg-white01">
      <div className="cont">
        <div className="flex items-center justify-center pb-6-4 gap-2-4 flex-wrap">
          {categories.length > 0 &&
            categories.map((item) => (
              <CategoriesButton
                key={item.id}
                backgroundColor={item['background_color']}
                textColor={item['text_color']}
                onChange={() => categoryHandler(item.id)}
              >
                {item.title}
              </CategoriesButton>
            ))}
        </div>
        <div>
          {filteredData.length > 0 ? (
            <div className="grid grid-cols-3 gap-y-5-6 gap-x-3-2 pb-6-6">
              {filteredData.map((item) => (
                <Card key={item.id} />
                ))}
            </div>
          ) : (
            <p className="text-center uppercase text-3-0 bold">No Data</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Blogs
