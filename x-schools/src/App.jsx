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
import SQL from "./pages/SQL"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Syntax from "./components/Csharp-learn/Syntax"
import Output from "./components/Csharp-learn/Output"
import Comments from "./components/Csharp-learn/Comments"
import Arrays from "./components/Csharp-learn/Arrays"
import Booleans from "./components/Csharp-learn/Booleans"
import Data from "./components/Csharp-learn/Data"
import Operators from "./components/Csharp-learn/Operators"
import Strings from "./components/Csharp-learn/Strings"
import Switch from "./components/Csharp-learn/Switch"
import Variables from "./components/Csharp-learn/Variables"
import Delete from "./components/SQL-learn/Delete"
import And from "./components/SQL-learn/And"
import Between from "./components/SQL-learn/Between"
import Not from "./components/SQL-learn/Not"
import Or from "./components/SQL-learn/Or"
import Sum from "./components/SQL-learn/Sum"
import SQLSyntax from "./components/SQL-learn/Syntax"
import Union from "./components/SQL-learn/Union"
import Update from "./components/SQL-learn/Update"
import Where from "./components/SQL-learn/Where"
import Profile from "./pages/Profile"

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
          <Route path='/c' element={<Csharp />} />
          <Route path='/sql' element={<SQL />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/c/syntax' element={<Syntax />} />
          <Route path='/c/output' element={<Output />} />
          <Route path='/c/comments' element={<Comments />} />
          <Route path='/c/variables' element={<Variables />} />
          <Route path='/c/data' element={<Data />} />
          <Route path='/c/operators' element={<Operators />} />
          <Route path='/c/strings' element={<Strings />} />
          <Route path='/c/booleans' element={<Booleans />} />
          <Route path='/c/swith' element={<Switch />} />
          <Route path='/c/arrays' element={<Arrays />} />
          <Route path='/sql/and' element={<And />} />
          <Route path='/sql/between' element={<Between />} />
          <Route path='/sql/delete' element={<Delete />} />
          <Route path='/sql/not' element={<Not />} />
          <Route path='/sql/or' element={<Or />} />
          <Route path='/sql/sum' element={<Sum />} />
          <Route path='/sql/syntax' element={<SQLSyntax />} />
          <Route path='/sql/union' element={<Union />} />
          <Route path='/sql/update' element={<Update />} />
          <Route path='/sql/where' element={<Where />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}