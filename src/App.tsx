import * as React from 'react'
// import Story from '@components/Story/Container'
import Header from '@/components/Header/Container';
import Nav from '@/components/Nav/Container';
import Brand from '@/components/Brand/Container';
import TourDates from '@/components/TourDates/Container';
import Contact from '@/components/Contact/Container';
import Footer from '@/components/Footer/Container';

import './style.scss'

const App = () => (
  <>
    <Nav />
    <Header />
    <Brand />
    <TourDates />
    <Contact />
    <Footer />
    {/* <Story /> */}
  </>
)

export default App
