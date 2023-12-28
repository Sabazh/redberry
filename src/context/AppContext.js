'use client'

import { createContext, useState } from 'react'

export const AppContext = createContext()

const AppContextProvider = ({ children }) => {
  const [loginVisible, setLoginVisible] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [token, setToken] = useState('')
  const [categories, setCategories] = useState([])
  const [blogs, setBlogs] = useState([])
  
  const loginHandler = (bool) => {
    setLoginVisible(bool)
  }
  const isLoggedInHandler = (boolean = true) => {
    setIsLoggedIn(boolean)
  }
  const setTokenHandler = (token) => {
    setToken(token)
  }

  const setCategoriesHandler = (list = []) => {
    setCategories(list)
  }
  const setBlogsHandler = (blogs = []) => {
    setBlogs(blogs)
  }

  return (
    <AppContext.Provider
      value={{
        loginVisible,
        loginHandler,
        isLoggedIn,
        isLoggedInHandler,
        token,
        setTokenHandler,
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
