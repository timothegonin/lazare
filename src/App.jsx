import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import SideMenu from './components/SideMenu'
import Hero from './components/Hero'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [sideMenuDisplay, setSideMenuDisplay] = useState(false)

  const sideMenuHandler = () => {
    setSideMenuDisplay(!sideMenuDisplay)
  }

  return (
    <>
      <Header statusHandler={sideMenuHandler} />
      <SideMenu status={sideMenuDisplay} statusHandler={sideMenuHandler} />
      <Hero />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
