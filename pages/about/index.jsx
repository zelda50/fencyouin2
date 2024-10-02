import React from 'react'
import AboutUs from '../../components/AboutUs'
import SEOHead from '../../components/SEOHead';
import Footer from '../../components/Footer';
import Contact from '../../components/Contact';

const About = () => {
  return (
    <div>
       <SEOHead
        title="About Us - Landmark Creations"
        description="Learn more about Landmark Creations, a leading fence company."
        keywords="about Landmark Creations, fence company"
        url="https://fenceyouin.com/about"
        image="https://fenceyouin.com/images/about-us.jpg"
      />
        {/* <Hero heading='My Work' message='This is some of my recent work traveling the world.' /> */}
        <AboutUs />
        <Contact/>
        <Footer/>
    </div>
  )
}

export default About;