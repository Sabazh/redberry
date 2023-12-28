'use client'

import { useContext, useEffect } from 'react'
import { AppContext } from '@/context/AppContext'
import { fetchData } from '@/utils/fetchData'
import Card from '../Card/Card'
import CategoriesButton from '../Inputs/CategoriesButton/CategoriesButton'

const Blogs = () => {
  const { blogs, categories, token, setBlogsHandler } = useContext(AppContext)

  useEffect(() => {
    const handler = async () => {
      const { data } = await fetchData('blogs', {
        method: 'get',
        cache: 'no-store',
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      setBlogsHandler(data)
    }
    if (token) handler()
  }, [token])

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
              >
                {item.title}
              </CategoriesButton>
            ))}
        </div>
        <div>
          {blogs.length > 0 ? (
            <div className="grid grid-cols-3 gap-y-5-6 gap-x-3-2 pb-6-6">
              {blogs.map((item) => (
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
