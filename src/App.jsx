import { useState } from 'react'
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import WhyUs from './components/sections/WhyUs';
import Rooms from './components/sections/Rooms'
import Amenities from './components/sections/Amenities';
import Contact from './components/sections/Contact';
import Location from './components/sections/Location';
import Footer from './components/layout/Footer';
import Testimonials from './components/sections/Testimonials';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=''>
        <Navbar />
        <main>
          <Hero />
          <WhyUs />
          <Rooms />
          <Amenities />
          <Testimonials />
          <Location />
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  )
}

export default App
