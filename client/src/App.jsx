import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Works from './components/works/Works'
import Services from './components/services/Services'
import Contact from './components/contact/Contact'
import Success from './components/success/Success'

function App() {

  const [sendMsg, setSendMsg] = useState(false);
  const [success, setSucces] = useState(false);
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
        <Success setSendMsg={setSendMsg} setSucces={setSucces} sendMsg={sendMsg} success = {success}/>
        <Contact setSendMsg={setSendMsg}setSucces={setSucces}/>
       </div>
    </>
  )
}

export default App
