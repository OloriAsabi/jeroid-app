import React from 'react'
import heightBg from "../../assests/heightBg.png";


const Features = () => {
  return (
    <div className='hero-bg h-screen w-screen'>
        <div className='pt-20 container  mx-auto'>
            <h1 className='whyus-text text-5xl pb-10'>All that you need in one place</h1>
            <div className='container w-screen mx-auto flex'>
                <div className='pr-5'>
               <img src={heightBg} alt='heightBg'/>
               </div>
               <div className='flex justify-between flex-col p-5'>
                <div className='flex-start pb-3'>
                    <h6 className='font-light text-[#555463] text-2xl'>Savings</h6>
                    <p className=' font-light text-[#555463] text-xl'>Save securely in your wallet and access when <br/> neccessary. </p>
               </div>
               <div className='bg-[#EDF4FF] flex-start rounded-xl p-8 shadow-black'>
                    <h6 className='whyus-text text-2xl'>Your personalized wallet</h6>
                    <p className='text-[#737272] text-xl font-light'>Send and receive crypto with your wallet, fund it,  <br/>  withdraw, and swap assets at anytime!</p>
               </div>
               <div className='pt-5 flex-start'>
                <h6 className='font-light text-[#555463] text-2xl'>Trade Giftcards with ease</h6>
                <p  className=' font-light text-[#555463] text-xl'>Trade Giftcards from all of your favourite stores, such as <br/> Netflix, Amazon, Spotify and a host of others.</p>
               </div>
            </div>
        </div>
        <div className='pt-20'>
        <button className='mx-4 cursor-pointer rounded text-xl bg-[#0B2368] text-white  text-start  p-5'>Get Started now</button>
        </div>
        </div>
    </div>
  )
}

export default Features