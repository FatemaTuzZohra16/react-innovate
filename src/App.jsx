
import './App.css'
import { AboutUs } from './components/AboutUs/AboutUs'
import { Apps } from './components/Apps/Apps'
import Bannar from './components/Bannar/Bannar'
import { Business } from './components/Business/Business'
import { Customers } from './components/Customers/Customers'
import { Features } from './components/Features/Features'
import { Footer } from './components/Footer/Footer'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import { Platform } from './components/Platform/Platform'
import { Work } from './components/Work/Work'

function App() {

  return (
    <>
      <Header>
        <Navbar></Navbar>
        <Bannar></Bannar>
      </Header>
      <Platform></Platform>
      <Features></Features>
      <Apps></Apps>
      <Work></Work>
      <Customers></Customers>
      <Business></Business>
      <AboutUs></AboutUs>
      <Footer></Footer>
    </>
  )
}

export default App
