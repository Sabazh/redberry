'use client'

import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import Link from 'next/link'
import Login from "@/components/Popup/Login/Login";
import Button from "@/components/Inputs/Button/Button";


const Header = () => {
    const { loginVisible, loginHandler, isLoggedIn, isLoggedInHandler } = useContext(AppContext)

    return (
      <div>
        {loginVisible && <Login />}
        <div className="bg-white">
            <div className='cont flex items-center justify-between px-7-6 py-2-0 border-b-0-1 border-grey01'>
                <Link href="/">
                    <img src='/images/LOGO.png' />
                </Link>
                {isLoggedIn ? (
                    <div className='flex gap-3-0'>
                        <Link href="/AddBlog">
                            <Button color="blue">დაამატე ბლოგი</Button>
                        </Link>
                        <Button color="white" onClick={() => isLoggedInHandler(false)}>გასვლა</Button>
                    </div>
                ) : (
                    <Button color="blue" onClick={() => loginHandler(true)}>შესვლა</Button>
                )}
            </div>
        </div>
      </div>
  )
}

export default Header

