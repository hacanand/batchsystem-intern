'use client'
import React from 'react'
import Navbar from '../navbar'
import Hero from '../hero'
import Premium from '../premium'
import ChooseUifry from '../choose-uifry'
import Customizable from '../customizable'

type Props = {}

const Home = (props: Props) => {
  return (
      <div className='flex flex-col  '>
          <Navbar />
      <Hero />
      <Premium />
      <ChooseUifry />
      <Customizable/>
    </div>
  )
}

export default Home