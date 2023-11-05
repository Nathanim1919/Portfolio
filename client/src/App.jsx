import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import About from './components/about/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header/>
        <Hero/>
        <About/>
       </div>
    </>
  )
}

export default App
