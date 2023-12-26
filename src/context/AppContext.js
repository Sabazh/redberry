'use client'

import { createContext, useState } from 'react'

export const AppContext = createContext()

const AppContextProvider = ({ children }) => {
  const [loginVisible, setLoginVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);

  const loginHandler = (bool) => {
    setLoginVisible(bool)
  }
  const isLoggedInHandler = (boolean = true) => {
    setIsLoggedIn(boolean)
  }
  const setTokenHandler = (token) => {
    setToken(token)
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
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
