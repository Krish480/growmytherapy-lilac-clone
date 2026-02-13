import React from 'react'
import Hero from './components/Hero'
import FulfillingLife from './components/FulfillingLife'
import Specialties from './components/Specialties'
import SplitSupportSection from './components/SplitSupportSection'
import AboutSection from './components/AboutSection'
import FAQSection from './components/FAQSection'
import BackgroundSection from './components/BackgroundSection'
import CTASection from './components/CTASection'
import FooterSection from './components/FooterSection'


const page = () => {
  return (
    <div>
      <Hero/>
      <FulfillingLife/>
      <Specialties/>
      <SplitSupportSection/>
      <AboutSection/>
      <FAQSection/>
      <BackgroundSection/>
      <CTASection/>
      <FooterSection/>
    </div>
  )
}

export default page