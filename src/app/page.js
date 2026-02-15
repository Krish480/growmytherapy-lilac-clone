import React from 'react'
import Hero from './components/hero/Hero'
import FulfillingLife from './components/about/AboutPreviewSection'
import Specialties from './components/services/Services'
import SplitSupportSection from './components/support/SplitSupportSection'
import AboutSection from './components/about/AboutSection'
import FAQSection from './components/faq/FAQSection'
import BackgroundSection from './components/background/BackgroundSection'
import CTASection from './components/cta/CTASection'
import FooterSection from './components/layout/FooterSection'
import AboutPreviewSection from './components/about/AboutPreviewSection'
import Services from './components/services/Services'
import OfficeSection from './components/office/OfficeSection'


const page = () => {
  return (
    <div>
      <Hero/>
      <AboutPreviewSection/>
      <Services/>
      <OfficeSection/>
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