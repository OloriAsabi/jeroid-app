import React from 'react'
import banner  from '../../assests/heroBg.png'
import coin  from '../../assests/coin.png'
import appStore from "../../assests/appStore.png";
import googlePlay from '../../assests/Google Play.png'
import google from '../../assests/google.png'
import facebook from '../../assests/facebook.png'
import youtube from '../../assests/youtube.png'
import pintrest from '../../assests/pintrest.png'
import comment from "../../assests/comment.png";


const Header = () => {
  return (
    <div className='bg-[#F8FBFF] h-screen w-screen '>
         <div className='flex justify-between container mx-auto space-x-80'>
           <div className='container mx-auto'>
            <h1 className='text-6xl container mx-auto text-justify pb-10 hero-text text-center mt-20 font-medium'>
            Trade Bitcoin and <br/> Giftcards Without <br/> Borders
            </h1>
            <p className='font-normal text-[#737272] container mx-auto  text-start text-xl'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br/> at commodo ipsum maecenas neque, proin. Justo lorem <br/> posuere dignissim pellentesque.
            </p>
            <div className='flex space-x-10 text-center mt-16'>
                <img src={appStore}  alt="appStore"/>
                <img src={googlePlay} alt="googlePlay" />
            </div>

            <hr className='p-10 mt-12 border-black '/>
            
            <div className=''>
              <p className='text-start uppercase font-normal text-2xl pb-5'>Featured Giftcards</p>
            <div className='flex justify-between whyus gap-4  text-center mt-10'>
                <img src={google} className="sm:w-20" alt='google' />
                <img src={facebook} className="sm:w-20  w-auto"  alt="facebook" />
                <img src={youtube} className="sm:w-20 w-auto"  alt="youtube" />
                <img src={pintrest} className="sm:w-20"  alt="pintrest"/>
            </div>
            </div>
            </div>
            <div className='flex flex-col'>
                <img src={banner} className="w-auto h-auto absolute" alt='hero-banner' />
                <img src={coin} alt='coin' className='relative flex justify-between text-center w-auto h-auto top-20 left-30' />
                <img src={coin} alt='coin' className='relative w-auto h-auto left-60 top-72' />
            </div>
            <div className='text-end flex items-end'>
              <img src={comment} alt="comment" />
            </div>
        </div>
    </div>
  )
}

export default Header