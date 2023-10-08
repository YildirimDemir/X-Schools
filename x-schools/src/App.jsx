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
import CSharpSyntax from "./components/Csharp-learn/Syntax"
import CSharpOutput from "./components/Csharp-learn/Output"
import CSharpComments from "./components/Csharp-learn/Comments"
import CSharpArrays from "./components/Csharp-learn/Arrays"
import CSharpBooleans from "./components/Csharp-learn/Booleans"
import CSharpData from "./components/Csharp-learn/Data"
import CSharpOperators from "./components/Csharp-learn/Operators"
import CSharpStrings from "./components/Csharp-learn/Strings"
import CSharpSwitch from "./components/Csharp-learn/Switch"
import CSharpVariables from "./components/Csharp-learn/Variables"
import Variables from "./components/JS-learn/Variables"
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
import DataTypes from "./components/JS-learn/DataTypes"
import JsFunctions from "./components/JS-learn/JsFunctions"
import Objects from "./components/JS-learn/Objects"
import Strings from "./components/JS-learn/Strings"
import JsIfElse from "./components/JS-learn/JsIfElse"
import Switch from "./components/JS-learn/Switch"
import Sets from "./components/JS-learn/Sets"
import JsMaps from "./components/JS-learn/Maps"
// import PythonComments from "./components/Python-learn/Comments"
// import PythonVariables from "./components/Python-learn/Variables"
// import PythonData from "./components/Python-learn/Data"
// import PythonNumber from "./components/Python-learn/Number"
// import PythonStrings from "./components/Python-learn/Strings"
// import PythonLists from "./components/Python-learn/Lists"
// import PythonIfElse from "./components/Python-learn/If-Else"
// import PythonWhile from "./components/Python-learn/While"
// import PythonArrays from "./components/Python-learn/Arrays"
// import PythonJson from './components/Python-learn/JSON'

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
          <Route path='/c/syntax' element={<CSharpSyntax />} />
          <Route path='/c/output' element={<CSharpOutput />} />
          <Route path='/c/comments' element={<CSharpComments />} />
          <Route path='/c/variables' element={<CSharpVariables />} />
          <Route path='/c/data' element={<CSharpData />} />
          <Route path='/c/operators' element={<CSharpOperators />} />
          <Route path='/c/strings' element={<CSharpStrings />} />
          <Route path='/c/booleans' element={<CSharpBooleans />} />
          <Route path='/c/swith' element={<CSharpSwitch />} />
          <Route path='/c/arrays' element={<CSharpArrays />} />
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
          <Route path='/react/components' element={<Components />} />
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
          {/* <Route path='/python/comments' element={<PythonComments />} />
          <Route path='/python/variables' element={<PythonVariables />} />
          <Route path='/python/data' element={<PythonData />} />
          <Route path='/python/number' element={<PythonNumber />} />
          <Route path='/python/strings' element={<PythonStrings />} />
          <Route path='/python/lists' element={<PythonLists />} />
          <Route path='/python/ifelse' element={<PythonIfElse />} />
          <Route path='/python/while' element={<PythonWhile />} />
          <Route path='/python/arrays' element={<PythonArrays />} />
          <Route path='/python/json' element={<PythonJson />} /> */}
    </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}