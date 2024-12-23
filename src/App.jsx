import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Header from './components/Header'
import SideMenu from './components/SideMenu'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
