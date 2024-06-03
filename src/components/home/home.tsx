'use client'
import React from 'react'
import Navbar from '../navbar'
import Hero from '../hero'

type Props = {}

const Home = (props: Props) => {
  return (
      <div className='flex flex-col  '>
          <Navbar />
          <Hero/>
    </div>
  )
}

export default Home