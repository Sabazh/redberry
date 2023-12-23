'use client'

import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [loginVisible, setLoginVisible] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const loginHandler = (bool) => {
        setLoginVisible(bool);
    };
    const isLoggedInHandler = (boolean = true) => {
        setIsLoggedIn(boolean)
    }

    return (
        <AppContext.Provider
            value={{
                loginVisible,
                loginHandler,
                isLoggedIn,
                isLoggedInHandler,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider