import React from 'react'
import Header from '../components/Header'
import Steps from '../components/Steps'
import Description from '../components/Description'
import Testimonals from '../components/Testimonals'
import GenerateBtn from '../components/GenerateBtn'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Header/>
      <Steps/>
      <Description/>
      <Testimonals/>
      <GenerateBtn/>
    </div>
  )
}

export default Home
