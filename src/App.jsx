import { useState } from 'react'
import { Routes, Route } from 'react-router'
import Header from './components/Header'
import SideMenu from './components/SideMenu'
import Hero from './components/Hero'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import Menu from './pages/Menu'
import Formules from './pages/Formules'
import './App.css'

function App() {
  const [sideMenuDisplay, setSideMenuDisplay] = useState(false)

  const sideMenuHandler = () => {
    return setSideMenuDisplay(!sideMenuDisplay)
  }

  return (
    <>
      <Header statusHandler={sideMenuHandler} />
      <SideMenu status={sideMenuDisplay} statusHandler={sideMenuHandler} />
      <Hero />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/formules" element={<Formules />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
