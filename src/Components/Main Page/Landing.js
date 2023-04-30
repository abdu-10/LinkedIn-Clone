import React from 'react'
import NavPanel from '../LandingPage/NavPanel'
import Welcome from '../LandingPage/Welcome'
import Jobs from '../LandingPage/Jobs'
import Topics from '../LandingPage/Topics'
import Post from '../LandingPage/Post'
import Testimonals from '../LandingPage/Testimonals'
import Connect from '../LandingPage/Connect'
import Join from '../LandingPage/Join'
import Footer from '../LandingPage/Footer'
import Footersection from '../LandingPage/Footersection'

const Landing = () => {
  return (
    <>
     <NavPanel />
      <Welcome />
      <Jobs />
      <Topics />
      <Post />
      <Testimonals />
      <Connect /> 
      <Join />
       <Footer />
      <Footersection />
    </>
  )
}

export default Landing