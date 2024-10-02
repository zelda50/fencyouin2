import Head from 'next/head';
import Image from 'next/image';
import Hero from '../components/Hero';
import SEOHead from '../components/SEOHead';
import Footer from '../components/Footer';
import Gallery from '../components/Gallary';
import ImageSlider from '../components/ImageSlider';
import Layout1 from '../components/Layout1';
import Layout2 from '../components/Layout2';
import Testimonial from '../components/Testimonial';
import Contact from '../components/Contact';
import FenceStyles from '../components/FenceStyles';
import GoogleReviews from '../components/GoogleReviews';
import ScrollingTestimonials from '../components/ScrollingTestimonials';
import TextParallaxContentExample from '../components/TextParallax';
import OppoScroll from '../components/OppoScroll';
import Footer2 from '../components/Footer2';
import PopupAd  from '../components/PopupAd';
import TrackVisitor from '../components/trackVisitor';








export default function Home() {
  const placeId = 'ChIJdVeC5pgBkVQRo55oO8yDTg8';
  
  return (
    <div>
      <SEOHead
        title="Fence | Land Mark Creations LLC | Tacoma"
        description="Best fence company for your needs. We offer a variety of fencing solutions."
        keywords="fence, fencing, ornamental fence, fence slats, secure fence, fence company, cedar fence, chainlink fence, vinyl fence, gate, gates, commercial fencing, residential fencing, fence contractor, ornament fence, shadow box fence, fence repair"
        url="https://fenceyouin.com"
        image="https://fenceyouin.com/images/logo.png"
      />
      <Hero heading='Landmark Creations' message='Your Link To Better Fencing!' />
      {/* <OppoScroll/> */}
      {/* <Gallery/> */}
      {/* <TextParallaxContentExample/> */}
      {/* <ImageSlider/> */}
      <Layout1/>
      <Layout2/>
      <FenceStyles/>
      <TrackVisitor/>
      {/* <RevealCards/> */}
      {/* <GoogleReviews placeId={placeId}/> */}
      <ScrollingTestimonials placeId={placeId}/>
      <PopupAd/>
      <Contact/>
      <Footer/>
    </div>
  );
}
