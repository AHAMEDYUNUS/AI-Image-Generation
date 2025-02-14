import React from 'react'
import Home from './pages/Home'
import Result from './pages/Result'
import BuyCredit from './pages/BuyCredit'
import { Routes, Route }  from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-tl from-indigo-100 to-teal-50'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/result' element={<Result/>}></Route>
        <Route path='/buy' element={<BuyCredit/>}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
