import React, { useState } from 'react'
import banner from "../assests/Banner.png";
import { RiArrowDropDownLine } from "react-icons/ri"
import logo from '../assests/logo_black.png'

const Navbar = () => {
return(
    <div>
        <div>
            <img src={banner} className='w-screen' alt="banner" />
        </div>
        <nav className='w-screen bg-white text-black shadow h-24 flex md:justify-center justify-between items-center p-8 shadow-black'>
        <div className="md:flex-[1.5] flex-start justify-center items-center">
        <a href="/">
        <img src={logo} alt="logo" className="w-auto h-auto object-cover  cursor-pointer" />
        </a>
        </div>
        <ul className="text-black nav-list  md:flex hidden sm:hidden list-none dark:text-white flex-row justify-between items-center flex-1">
              <li className='mx-4 cursor-pointer text-2xl  p-3  dark:text-white my-2 text-lg'>
                <a href="/" className='flex justify-between items-center'>Solutions<RiArrowDropDownLine/></a>
                </li>
              <li className='mx-4 cursor-pointer text-2xl  p-3  dark:text-white my-2 text-lg'>
                <a href="/about" className='flex justify-between items-center'>Company<RiArrowDropDownLine/></a></li>
              <li className='mx-4 cursor-pointer text-2xl  p-3  dark:text-white my-2 text-lg'>
                <a href='/services' className='flex justify-between items-center'>Support<RiArrowDropDownLine/></a></li>
              <li className='mx-4 cursor-pointer text-2xl  p-3  dark:text-white my-2 text-lg'>
                <a href='/portfolio'>Rewards</a></li>
          </ul>
        <div className='items-center flex p-5  justify-between text-center'>
                <div className='mx-4 cursor-pointer text-2xl text-center dark:text-white my-2 text-lg'>
                <a href='/portfolio'>Log in</a></div>
                <div className='mx-4 cursor-pointer text-2xl bg-[#0B2368] text-white  rounded-xl p-5  dark:text-white my-2 text-lg'>
                <a href='/portfolio'>Get started</a></div>
                </div>     
        </nav>
    </div>
    );
}

export default Navbar