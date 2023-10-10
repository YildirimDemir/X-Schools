import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import dataSupabase from "../services/dataSupabase";
import PropTypes from 'prop-types';

export default function NavBar({ logStatus, requestUser, logSetFalse, requestUserSet, }) {

  NavBar.propTypes = {
    logStatus: PropTypes.bool.isRequired,
    logSetFalse: PropTypes.func.isRequired,
    requestUser: PropTypes.object.isRequired,
    requestUserSet: PropTypes.func.isRequired
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isUserDropdown, setIsUserDropdown] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [tutorials, setTutorials] = useState([]);

  async function handleLogout() {
    requestUserSet({});
    const requestUserJSON = JSON.stringify({});
    localStorage.setItem('Request User', requestUserJSON);
    logSetFalse(false);
    const logStatusJSON = JSON.stringify(false);
    localStorage.setItem('Log Status', logStatusJSON);
  }

  const toggleUser = () => {
    setIsUserDropdown(!isUserDropdown);
    setIsDropdownOpen(false);
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsUserDropdown(false);
  };

  const toNewPage = () => {
    setIsDropdownOpen(false)
    setIsUserDropdown(false);
    setIsNavOpen(false);
  }

  const openNav = () => {
    setIsNavOpen(!isNavOpen)
  }


  useEffect(() => {
    async function getTutorials() {
      const { data, error } = await dataSupabase
        .from('tutorials')
        .select('*')

      if (error) {
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
            <Link className="tutorials-dropdown" onClick={toggleDropdown}>Tutorials</Link>
            {isDropdownOpen && <Dropdown toNewPage={toNewPage} data={tutorials} />}
          </div>
          <div className="nav-item">
            <div className="nav-link">
              <Link to="/about" onClick={toNewPage}>About</Link>
              <Link to="/contact" onClick={toNewPage}>Contact</Link>
            </div>
            {logStatus ?
              <div className="nav-tutorials">
                <Link className="tutorials-dropdown" onClick={toggleUser}>👤{requestUser.username} ↓</Link>
                {isUserDropdown && <div className="nav-dropdown" style={{ width: "150px" }}>
                  <Link to="/profile" onClick={toNewPage}>Profile</Link>
                  <Link to="/home" onClick={handleLogout}>Logout</Link>
                </div>}
              </div>
              :
              <div className="nav-user">
                <Link to="/sign-in" onClick={toNewPage}>Sign In</Link>
                <Link to="/sign-up" onClick={toNewPage}>Sign Up</Link>
              </div>}
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

function Dropdown({ toNewPage, data }) {

  Dropdown.propTypes = {
    toNewPage: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired
  };

  return (
    <div className="nav-dropdown">
      {data.map((item) => (
        <Link to={`/${item.title}`} onClick={toNewPage} key={item.id} >{item.title}</Link>
      ))}
    </div>
  );
}
