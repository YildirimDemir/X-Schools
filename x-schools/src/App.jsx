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
import Components from "./components/React-learn/Components"
import UseMemo from "./components/React-learn/UseMemo"
import Props from "./components/React-learn/Props"
import Routers from "./components/React-learn/Routers"
import Lists from "./components/React-learn/Lists"
import Events from "./components/React-learn/Events"
import UseState from "./components/React-learn/UseState"
import UseEffect from "./components/React-learn/UseEffect"
import UseReducer from "./components/React-learn/UseReducer"
import UseRef from "./components/React-learn/UseRef"
import Assignment from "./components/JS-learn/Assignment"
import Variables from "./components/JS-learn/Variables"
import DataTypes from "./components/JS-learn/DataTypes"
import JsFunctions from "./components/JS-learn/JsFunctions"
import Objects from "./components/JS-learn/Objects"
import Strings from "./components/JS-learn/Strings"
import JsIfElse from "./components/JS-learn/JsIfElse"
import Switch from "./components/JS-learn/Switch"
import Sets from "./components/JS-learn/Sets"
import JsMaps from "./components/JS-learn/Maps"


export default function App() {
  return (
    <div>
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route index element={<Home />} />
      <Route  path='/home' element={<Home />}/>
      <Route  path='/about' element={<About />}/>
      <Route  path='/contact' element={<Contact />}/>
      <Route  path='/css' element={<Css/>}/>
      <Route  path='/javascript' element={<JavaScript/>}/>
      <Route  path='/react' element={<React/>}/>
      <Route  path='/python' element={<Python/>}/>
      <Route  path='/c' element={<Csharp/>}/>
      <Route  path='/sql' element={<Sql/>}/>
      <Route  path='/sign-in' element={<SignIn/>}/>
      <Route  path='/sign-up' element={<SignUp/>}/>
      <Route  path='/react/components' element={<Components />}/>
      <Route path='/react/useMemo' element={<UseMemo />} />
      <Route path='/react/props' element={<Props />} />
      <Route path='/react/router' element={<Routers />} />
      <Route path='/react/lists' element={<Lists />} />
      <Route path='/react/events' element={<Events />} />
      <Route path='/react/useState' element={<UseState />} />
      <Route path='/react/useEffect' element={<UseEffect />} />
      <Route path='/react/useReducer' element={<UseReducer />} />
      <Route path='/react/useRef' element={<UseRef />} />
      <Route path='/javascript/assignment' element={<Assignment />} />
      <Route path='/javascript/variables' element={<Variables />} />
      <Route path='/javascript/data-types' element={<DataTypes />} />
      <Route path='/javascript/functions' element={<JsFunctions />} />
      <Route path='/javascript/objects' element={<Objects />} />
      <Route path='/javascript/strings' element={<Strings />} />
      <Route path='/javascript/if-else' element={<JsIfElse />} />
      <Route path='/javascript/switch' element={<Switch />} />
      <Route path='/javascript/sets' element={<Sets />} />
      <Route path='/javascript/maps' element={<JsMaps />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  </div>
  )
}