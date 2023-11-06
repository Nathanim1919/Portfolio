import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Works from './components/works/Works'
import Services from './components/services/Services'
import Contact from './components/contact/Contact'

function App() {
  return (
    <>
      <div>
        <div className='heros'>
        <Header/>
        <Hero/>
        </div>
        <Services/>
        <About/>
        <Works/>
        <Contact/>
       </div>
    </>
  )
}

export default App
