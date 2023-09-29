import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toNewPage = () => {
    setIsDropdownOpen(false)
  }

  const openNav = () => {
    setIsNavOpen(!isNavOpen)
  }
  

  return (
    <>
      <nav>
        <div className="nav-logo">
          <Link to="/home" onClick={toNewPage}>
            <img src="/src/img/x-school-logo.png" alt="" />
          </Link>
        </div>
        <div className={isNavOpen ? "nav-content" : "nav-content open"}>
        <div className="nav-tutorials">
          <Link
           className="tutorials-dropdown"
           onClick={toggleDropdown}
           >
            Tutorials
          </Link>
          {isDropdownOpen && <Dropdown toNewPage={toNewPage}/>}
        </div>
        <div className="nav-item">
          <div className="nav-link">
            <Link to="/about" onClick={toNewPage}>About</Link>
            <Link to="/contact" onClick={toNewPage}>Contact</Link>
          </div>
          <div className="nav-user">
              <Link to="/sign-in" onClick={toNewPage}>Sign In</Link>
              <Link to="/sign-up" onClick={toNewPage}>Sign Up</Link>
          </div>
        </div>
        </div>
        <div className="resp-open">
          <span onClick={openNav}>
            {isNavOpen ? '≡' : 'x'}
          </span>
        </div>
      </nav>
    </>
  );
}

function Dropdown({toNewPage}) {
  return (
    <div className="nav-dropdown">
      <Link to="/css" onClick={toNewPage}>CSS</Link>
      <Link to="/javascript" onClick={toNewPage}>JavaScript</Link>
      <Link to="/react" onClick={toNewPage}>React</Link>
      <Link to="/python" onClick={toNewPage}>Python</Link>
      <Link to="/csharp" onClick={toNewPage}>C#</Link>
      <Link to="/sql" onClick={toNewPage}>SQL</Link>
    </div>
  );
}
