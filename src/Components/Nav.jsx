import { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () =>{
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="d-flex justify-content-md-between">
      <Link to="/">
        <div className="homeLink shadow d-flex justify-content-center align-items-center rounded-circle">
          <i className="fa fa-home"></i>
        </div>
      </Link>
      <div
        className={`menuLink shadow d-flex justify-content-center align-items-center rounded-circle ${
          menuOpen ? "change" : ""
        }`}
        onClick={toggleMenu}
      >
        <i className="fa fa-bars"></i>
        <i className="fa fa-times"></i>
      </div>
      <div className={`menu ${menuOpen ? "show" : ""}`}>
        <ul>
          <li className="p-3">
            <Link to="/" className="d-flex align-items-center">
              <i className="fa fa-home menu-icon"></i>
              <div>Home</div>
            </Link>
          </li>
          <li className="p-3">
            <Link to="/about" className="d-flex align-items-center">
              <i className="fa fa-user menu-icon"></i>
              <div>About Me</div>
            </Link>
          </li>
          <li className="p-3">
            <Link to="/education" className="d-flex align-items-center">
              <i className="fa fa-user-graduate menu-icon"></i>
              <div>Education</div>
            </Link>
          </li>
          <li className="p-3">
            <a
              href="https://docs.google.com/document/d/1b-yWeJrqLaj_bqebXAMp5zkRrC7A4R1yYprRzJhvw_0/edit?usp=sharing"
              className="d-flex align-items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-download menu-icon"></i>
              <div>Resume</div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
