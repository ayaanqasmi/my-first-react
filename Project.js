import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SubHero from '../components/SubHero'

import Pricing from '../components/Pricing'
const Project = () => {
  return (
   <>
   <Navbar/>
   <SubHero  Heading="PROJECTS." Para="My most recent works"/>
   <Pricing></Pricing>
   <Footer/>
   </>
  )
}

export default Project
