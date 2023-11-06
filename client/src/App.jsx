import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Works from './components/works/Works'

function App() {
  return (
    <>
      <div>
        <div className='heros'>
        <Header/>
        <Hero/>
        </div>
        <div className='about'>
        <About/>
        </div>
        <Works/>
       </div>
    </>
  )
}

export default App
