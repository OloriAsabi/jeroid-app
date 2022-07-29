import React from 'react'
import bg from '../../assests/bg.png'
import ticket from "../../assests/ticket.png";
import wallet from "../../assests/wallet.png";
import status from "../../assests/status.png";
import headphone from "../../assests/headphone.png";
import tool from "../../assests/tool.png";

const Price = () => {
  return (
    <div className='h-screen w-screen'>
        <div className='pt-20 container mx-auto'>
            <h1 className='whyus-text text-5xl pb-10'>And if you run into any issues, we’ve got your back!</h1>

        <div className='flex justify-between sm:flex-col lg:flex-row md:flex-col gap-4'>
            <div className='flex items-start flex-col mt-10'>
            <img src={bg} alt='bg' className='w-auto  absolute' />
            <img src={ticket} alt="ticket"  className='relative right-20 top-60'/>
            <img src={wallet} alt='wallet'  className='relative left-80 top-36' />
            <img src={status} alt="status"  className='relative top-80 item-end left-80' />
            </div>

            <div className='mt-20 mb-10 flex justify-between flex-col space-y-40'>
                <div className=''>
                    <div className='flex  flex-row'>
                    <img src={tool} alt="tool" className='w-18 h-auto' />
                    <h5 className='text-4xl  pl-3 font-medium text-[#170F49]'>Efficient Ticketing System</h5>
                    </div>
                    <p className='text-justify text-[#6F6C90] pt-5 text-2xl font-light'>With our ticketing system, you can have all your <br/> issues filed, tracked and resolved in the  <br/>  shortest time possible.</p>
                </div>
                <div>
                    <div className='flex  flex-row'>
                    <img src={headphone} alt="headphone" className='w-18 h-auto'/>
                    <h5 className='text-4xl  pl-3 font-medium text-[#170F49]'>24/7 Help Center</h5>
                    </div>
                    <p  className='text-justify text-[#6F6C90] pt-5 text-2xl font-light'>Find articles, FAQs and other helpful resource in our <br/> help center. Can’t find what you need? Contact us and <br/> we’d help you through it.</p>
                </div>
            </div>
         </div>    
       </div> 
    </div>
  )
}

export default Price