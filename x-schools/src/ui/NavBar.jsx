import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import navSupabase from "../services/navSupabase";

export default function NavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const [tutorials, setTutorials] = useState([]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toNewPage = () => {
    setIsDropdownOpen(false)
  }

  const openNav = () => {
    setIsNavOpen(!isNavOpen)
  }


  useEffect(() => {
    async function getTutorials() {
        const  { data, error } = await navSupabase
        .from('tutorials')
        .select('*')
      
        if(error){
          console.error(error)
          throw new Error('Tutorials could not be loaded')
        }
      
         setTutorials(data);
      }
      getTutorials();
  }, [])
  

  return (
    <>
      <nav>
        <div className="nav-logo">
          <Link to="/home" onClick={toNewPage}>
            <img src="/src/img/x-school-logo.png" alt="" />
          </Link>
        </div>
        <div className={!isNavOpen ? "nav-content" : "nav-content open"}>
        <div className="nav-tutorials">
          <Link
           className="tutorials-dropdown"
           onClick={toggleDropdown}
           >
            Tutorials
          </Link>
          {isDropdownOpen && <Dropdown toNewPage={toNewPage} data={tutorials}/>}
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
            {!isNavOpen ? '≡' : 'x'}
          </span>
        </div>
      </nav>
    </>
  );
}

function Dropdown({toNewPage, data}) {
  
  return (
    <div className="nav-dropdown">
      {data.map((item) => (
          <Link to= {`/${item.title}`} onClick={toNewPage} key={item.id} >{item.title}</Link>
      ))}
    </div>
  );
}
