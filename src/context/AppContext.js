'use client'

import { getCookie } from 'cookies-next'
import { createContext, useEffect, useState } from 'react'

export const AppContext = createContext()

const AppContextProvider = ({ children }) => {
  const [loginVisible, setLoginVisible] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [categories, setCategories] = useState([])
  const [blogs, setBlogs] = useState([])

  const loginHandler = (bool) => {
    setLoginVisible(bool)
  }
  const isLoggedInHandler = (boolean = true) => {
    setIsLoggedIn(boolean)
  }

  const setCategoriesHandler = (list = []) => {
    setCategories(list)
  }
  const setBlogsHandler = (blogs = []) => {
    setBlogs(blogs)
  }
  useEffect(() => {
    const cookieToken = getCookie('token')
    if (cookieToken) setIsLoggedIn(true)
  }, [])
  return (
    <AppContext.Provider
      value={{
        loginVisible,
        loginHandler,
        isLoggedIn,
        isLoggedInHandler,
        setCategoriesHandler,
        categories,
        setBlogsHandler,
        blogs,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
