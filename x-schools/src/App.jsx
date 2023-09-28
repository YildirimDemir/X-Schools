// import { BrowserRouter, Routes, Route } from "react-router-dom"
// import NavBar from "./ui/NavBar"
// import About from "./pages/About"
// import Contact from "./pages/Contact"
// import Css from "./pages/CSS"
// import JavaScript from "./pages/JavaScript"
// import React from "./pages/React"
// import Python from "./pages/Python"
// import Csharp from "./pages/Csharp"
// import Home from "./pages/Home"
// import Sql from "./pages/SQL"
// import SignIn from "./pages/SignIn"
// import SignUp from "./pages/SignUp"
import CodeSpace from "./ui/CodeSpace"


export default function App() {
  return (
    <div>
      {/* <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route  path='/home' element={<Home />}/>
      <Route  path='/about' element={<About />}/>
      <Route  path='/contact' element={<Contact />}/>
      <Route  path='/css' element={<Css/>}/>
      <Route  path='/javascript' element={<JavaScript/>}/>
      <Route  path='/react' element={<React/>}/>
      <Route  path='/python' element={<Python/>}/>
      <Route  path='/csharp' element={<Csharp/>}/>
      <Route  path='/sql' element={<Sql/>}/>
      <Route  path='/sign-in' element={<SignIn/>}/>
      <Route  path='/sign-up' element={<SignUp/>}/>
    </Routes>
    </BrowserRouter> */}

      <CodeSpace
        title={"C#"}
        lang={"text/x-csharp"}
        readOnly={true}
        lineNumbers={true}
        enterCode={`using System;

namespace HelloWorld
{
  class Program
  {
    static void Main(string[] args)
    {
      Console.WriteLine("Hello World!");    
    }
  }
}`} />

      <CodeSpace
        title={"CSS"}
        lang={"css"}
        readOnly={true}
        lineNumbers={true}
        enterCode={`body {
  background-color: lightblue;
}`} />

      <CodeSpace
        title={"JavaScript"}
        lang={"javascript"}
        readOnly={true}
        lineNumbers={true}
        enterCode={`// Function to compute the product of p1 and p2
function myFunction(p1, p2) {
  return p1 * p2;
}`} />

      <CodeSpace
        title={"Python"}
        lang={"text/x-python"}
        readOnly={true}
        lineNumbers={true}
        enterCode={`x = 4       # x is of type int
x = "Sally" # x is now of type str
print(x)`} />

      <CodeSpace
        title={"React/JSX"}
        lang={"jsx"}
        readOnly={true}
        lineNumbers={true}
        enterCode={`import { useState } from "react";
import ReactDOM from "react-dom/client";

function FavoriteColor() {
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FavoriteColor />);`} />

      <CodeSpace
        title={"SQL"}
        lang={"text/x-sql"}
        readOnly={true}
        lineNumbers={true}
        enterCode={`CREATE TABLE Persons (
    PersonID int,
    LastName varchar(255),
    FirstName varchar(255),
    Address varchar(255),
    City varchar(255)
);`} />


    </div>
  )
}