'use client'
import React from 'react'
import Navbar from '../navbar'
import Hero from '../hero'
import Premium from '../premium'
import ChooseUifry from '../choose-uifry'
import Customizable from '../customizable'
import Testimonial from '../testimonial'

type Props = {}

const Home = (props: Props) => {
  return (
      <div className='flex flex-col  '>
          <Navbar />
      <Hero />
      <Premium />
      <ChooseUifry />
      <Customizable />
      <Testimonial/>
    </div>
  )
}

export default Home