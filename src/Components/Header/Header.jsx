import React, { useState } from "react";
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
     const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State to control drawer visibility
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  // Function to close drawer when a link is clicked
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };
    return(
        <header id="main">
            <Link to="/" className="nv-item">Vivekanand College</Link>
            <nav className="right-item">
                <Link to="/" id="main2">Home</Link>
                <Link to="/aboutpage" id="main2">About</Link>
                <Link to="/coursespage" id="main2">Courses</Link>
                <Link to="/contactpage"id="main2">Contact</Link>
                <Link to="/addmission" id="main1"><b>Apply Now</b></Link>
            </nav>
            <button className="hamburger-menu" onClick={toggleDrawer}>
        <span className="hamburger-icon"></span>
        <span className="hamburger-icon"></span>
        <span className="hamburger-icon"></span>
      </button>
      <nav className={`drawer-nav ${isDrawerOpen ? "open" : ""}`}>
        <button className="close-drawer-btn" onClick={toggleDrawer}>
          ✕
        </button>
        <Link to="/" className="nav-item" onClick={closeDrawer}>
          Home
        </Link>
        <Link to="/aboutpage" className="nav-item" onClick={closeDrawer}>
          About
        </Link>
        <Link to="/coursespage" className="nav-item" onClick={closeDrawer}>
          Courses
        </Link>
        <Link to="/contactpage" className="nav-item" onClick={closeDrawer}>
          Contact
        </Link>
        <Link to="/addmisionpage"
          className="nav-item btn primary-btn"
          onClick={closeDrawer}
        >
          Apply Now!
        </Link>
      </nav>
      {isDrawerOpen && (
        <div className="drawer-overlay" onClick={toggleDrawer}></div>
      )}
        </header>
    )
}
export default Header