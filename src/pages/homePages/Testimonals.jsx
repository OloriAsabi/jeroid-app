import React from 'react'
import testimonal from "../../assests/testimonalBg.png";

const Testimonals = () => {
  return (
    <div className='w-screen  bg-[#EFF7FD] h-auto'>
     <div className='container pb-20 pt-40 w-screen mx-auto'>
        <h1 className='whyus-text text-5xl pb-10'>Want to know what our users are saying?</h1>
        <img src={testimonal} className='w-screen mt-10' alt='testimonalsBg'/>
     </div>
    </div>
  )
}

export default Testimonals