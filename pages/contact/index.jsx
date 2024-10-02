import React from 'react'
import Contact from '../../components/Contact'
import Navbar from '../../components/Navbar'
import SEOHead from '../../components/SEOHead';
import Footer from '../../components/Footer';

const contact = () => {
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
        <Contact />
        <Footer/>
    </div>
    
  )
}

export default contact