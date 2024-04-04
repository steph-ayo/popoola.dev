import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import logo from "../../assets/faviconsp.png";
import data from "./data";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={isOpen ? "open" : ""}>
      <div className="container nav__container">
        <a href="index.html" className="nav__logo">
          <img src={logo} alt="logo" className="spin-on-hover"></img>
        </a>
        <ul className={`nav__menu ${isOpen ? "active" : ""}`}>
          {data.map((item) => (
            <li key={item.id}>
              <a href={item.link} className="nav__link">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        <button className="open-btn" onClick={toggleMenu}>
          <FaBars />
        </button>
        <button className="close-btn" onClick={toggleMenu}>
          <FaTimes />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
