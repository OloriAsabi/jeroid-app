import React from 'react'
import linkedin from "../assests/linkedin.png";
import instagram from "../assests/instagram.png";
import twitter from "../assests/twitter.png";

const Footer = () => {
  return (
    <div className='h-auto'>
        <div className=' container mt-20 mx-auto '>
        <div
        className="grid lg:grid-cols-5 grid-cols-1 gap-8 md:grid-cols-3 sm:grid-cols-1 justify-center items-center shadow-black sm:px-8 px-5 py-16"
        > 
        <div className='items-start text-start '>
            <h5 className='text-2xl pb-5 font-normal text-[#333333]'>Solutions</h5>
            <p className='text-[#737272] pb-3 font-light text-xl'>Wallets (Buy and sell crypto)</p>
            <p className='text-[#737272] pb-3 font-light text-xl'>Trade Giftcards </p>
            <p className='text-[#737272] pb-3 font-light text-xl'>Pay Utility Bills</p>
            <p className='text-[#737272] pb-3 font-light text-xl'>Save</p>
            <p className='text-[#737272] pb-3 font-light text-xl'>Trade Chat</p>
        </div>
        <div className='items-start text-start pb-10 mb-10'>
            <h5 className='text-2xl pb-5 font-normal text-[#333333]'>Company</h5>
            <p className='text-[#737272] pb-3 font-light text-xl'>About us</p>
            <p className='text-[#737272] pb-3 font-light text-xl'>Careers</p>
            <p className='text-[#737272] pb-3 font-light text-xl'>Blog</p>
        </div>
        <div className='items-start text-start pb-10 mb-20'>
            <h5 className='text-2xl pb-5 font-normal text-[#333333]'>Legal</h5>
            <p className='text-[#737272] pb-3 font-light text-xl'>Terms of Use</p>
            <p className='text-[#737272] pb-3 font-light text-xl'>Privacy Policy</p>
        </div>
        <div className='items-start text-start pb-10 mb-10'>
            <h5 className='text-2xl pb-5 font-normal text-[#333333]'>Support</h5>
            <p className='text-[#737272] pb-3 font-light text-xl'>Help Center</p>
            <p className='text-[#737272] pb-3 font-light text-xl'>FAQs</p>
            <p className='text-[#737272] pb-3 font-light text-xl'>Ticketing</p>
        </div>
        <div  className='items-start text-start'>
            <h5 className='text-2xl pb-5 font-normal text-[#333333]'>Contact Us</h5>
            <p className='text-[#737272] pb-3 font-light text-xl'>Email Address: info@jeroid.ng</p>
            <p className='text-[#737272] pb-3 font-light text-xl'>Phone Number: 08124877671</p>
            <p className='text-[#737272] pb-3 font-light text-xl'>Address: 194, Herbert <br/> Macaulay Way, Yaba, Lagos.</p>
        </div>
        </div>
        
        <hr className='border-2 m-5'/>

        <div className='flex justify-between p-5 '>
            <p className='text-[#737272] pb-3 font-light text-xl'>2022 Jeroid. All rights reserved</p>
            <div className='flex justify-between space-x-10 '>
                <img src={instagram} className="w-8" alt="instagram" />
                <img src={linkedin} className="w-8"  alt="linkedin" />
                <img src={twitter} className="w-8"  alt="twitter" />
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer