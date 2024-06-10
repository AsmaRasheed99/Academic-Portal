import { Button } from 'flowbite-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import HeroSection from '../components/HeroSection'

const Homepage = () => {

  return (
    <div className='flex flex-col gap-3 justify-center items-center h-[100vh]'>
      <HeroSection/>
    </div>
  )
}

export default Homepage
