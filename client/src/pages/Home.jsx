import React from 'react'
import Banner from '../components/home/Banner'
import Hero from '../components/home/Hero'
import { Features } from '../components/home/Features'
import Testimonil from '../components/home/Testimonial'
import { CalltoAction } from '../components/home/CalltoAction'
import Footer from '../components/home/footer'


const Home = () => {
  return (
    <div>
        <Banner />
        <Hero />
        <Features />
        <Testimonil />
        <CalltoAction />
        <Footer />

    </div>
  )
}

export default Home