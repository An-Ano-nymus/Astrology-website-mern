import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Service from '../components/Service'
import Testimonial from '../components/Testimonial'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ServicesPage = () => {
  return (
    <>
    <Navbar />
    <Breadcrumb heading={"Services"} link={"Services"}/>
    <Service />
    <Testimonial />
    <Footer />
    </>
  )
}

export default ServicesPage