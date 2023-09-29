import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./ui/NavBar"
import Footer from "./ui/Footer"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Css from "./pages/CSS"
import JavaScript from "./pages/JavaScript"
import React from "./pages/React"
import Python from "./pages/Python"
import Csharp from "./pages/Csharp"
import Home from "./pages/Home"
import Sql from "./pages/SQL"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/css' element={<Css />} />
          <Route path='/javascript' element={<JavaScript />} />
          <Route path='/react' element={<React />} />
          <Route path='/python' element={<Python />} />
          <Route path='/csharp' element={<Csharp />} />
          <Route path='/sql' element={<Sql />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}