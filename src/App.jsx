import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/formules" element={<Formules />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
