import React from 'react'
import Footer from '../../components/Footer'
import SEOHead from '../../components/SEOHead'
import OrnamentPage from '../../components/OrnamentPage'

const ornament = () => {
  return (
    <div>
      <SEOHead
        title="Contact Us - Landmark Creations"
        description="Learn more about Landmark Creations, a leading fence company."
        keywords="Contact Landmark Creations, fence company"
        url="https://fenceyouin.com/contact"
        image="https://fenceyouin.com/images/about-us.jpg"
      />
        {/* <Hero heading='Contact' message='Submit the form below for more work and quotes.' /> */}
        <OrnamentPage/>
        <Footer/>
    </div>
    
  )
}

export default ornament
