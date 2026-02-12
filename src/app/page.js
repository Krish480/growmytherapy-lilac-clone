import React from 'react'
import Hero from './components/Hero'
import FulfillingLife from './components/FulfillingLife'
import Specialties from './components/Specialties'
import SplitSupportSection from './components/SplitSupportSection'
import AboutSection from './components/AboutSection'
import FAQSection from './components/FAQSection'


const page = () => {
  return (
    <div>
      <Hero/>
      <FulfillingLife/>
      <Specialties/>
      <SplitSupportSection/>
      <AboutSection/>
      <FAQSection/>
    </div>
  )
}

export default page