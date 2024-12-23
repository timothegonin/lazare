import {useState} from 'react'
import Header from "./components/Header"
import SideMenu from "./components/SideMenu"
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import './App.css'

function App() {
  const [sideMenuDisplay, setSideMenuDisplay] = useState(false)

  const sideMenuHandler = () => {
    return setSideMenuDisplay(!sideMenuDisplay)
  }

  return (
    <>
    <Header statusHandler={sideMenuHandler}/>
    <SideMenu status={sideMenuDisplay} statusHandler={sideMenuHandler}/>
    <Hero/>
    <Footer/>
    </>
  )
}

export default App
