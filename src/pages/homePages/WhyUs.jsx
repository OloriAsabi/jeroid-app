import React from 'react'
import lock from "../../assests/lock.png";
import fast from "../../assests/Fast.png";
import easy from "../../assests/check-square.png";

const WhyUs = () => {
  return (
    <div className='backGroundColor w-screen'>
        <div className='container pb-20 w-screen mx-auto'>
        <h2 className='text-white text-start pt-20 text-5xl font-medium '>Why Jeroid ?</h2>

        <div className='flex lg:flex-row whyus md:flex-col items-start justify-between p-20 lg:items-center text-center'>
            <div className='flex flex-row justify-between text-center items-center text-white'>
                <div className='bg-white rounded w-18 text-center  p-4 '>
                <img src={lock} alt='lock' className='whyus-text' />
                </div>
                <div className='p-5 text-start'>
                <h3 className='pb-2 text-2xl'>Secure Transactions</h3>
                <p className='text-sm icon-text'>Your trades are protected with <br/> maximum security</p>
                </div>
            </div>
            <div  className='flex flex-row justify-between text-center  items-center text-white'>
                <div className='bg-white rounded w-18 text-center  p-4'>
                <img src={easy} alt='easy' />
                </div>
                <div className='p-5 text-start'>
                <h6 className='pb-2 text-2xl'>Easy to Use</h6>
                <p className='text-sm  icon-text'>No complex process involved  <br/> in trading with Jeroid</p>
                </div>
            </div>
            <div className='flex flex-row justify-between text-center  items-center text-white'>
                <div  className='rounded-xl w-18 text-center '>
                <img src={fast} alt='fast' />
                </div>
                <div className='p-5 text-start'>
                <h6  className='pb-2 text-2xl'>Fast Transactions</h6>
                <p className='text-sm icon-text'>Trades and withdrawals take just  <br/> a few minutes to complete</p>
                </div>
            </div>
        </div>

        <div className='bg-white whyus-text mt-20 rounded-xl shadow-black flex flex-row justify-between pt-10 pb-10 pl-20 pr-20 items-center text-center'>
            <div>
                <h6 className='font-normal lg:text-6xl sm:text-2xl '>$500,000</h6>
                <p className='text-xl p-3'>Monthly trading volume</p>
            </div>
            <div>
                <h6 className='font-normal lg:text-6xl sm:text-2xl'>300,000+</h6>
                <p className='text-xl p-3'>Registered users</p>
            </div>
            <div>
                <h6 className='font-normal lg:text-6xl sm:text-2xl'>10,000+</h6>
                <p className='text-xl p-3'>App installations</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default WhyUs