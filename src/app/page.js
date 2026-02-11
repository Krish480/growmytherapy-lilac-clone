import React from 'react'
import Hero from './components/Hero'
import FulfillingLife from './components/FulfillingLife'
import Specialties from './components/Specialties'
import SplitSupportSection from './components/SplitSupportSection'


const page = () => {
  return (
    <div>
      <Hero/>
      <FulfillingLife/>
      <Specialties/>
      <SplitSupportSection/>
    </div>
  )
}

export default page