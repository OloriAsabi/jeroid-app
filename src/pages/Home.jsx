import React from 'react'
import { Footer, Navbar } from '../components'
import { Features, Header, Price, Rates, Testimonals, WhyUs  } from './homePages'



const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <Rates/>
        <WhyUs/>
        <Features/>
        <Price/>
        <Testimonals/>
        <Footer/>
    </div>
  )
}

export default Home