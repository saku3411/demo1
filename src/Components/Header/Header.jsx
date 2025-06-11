import React from "react";
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return(
        <header id="main">
            <h4>Vivekanand College</h4>
            <nav className="right-item">
                <Link to="/" id="main2">Home</Link>
                <Link to="/aboutpage" id="main2">About</Link>
                <Link to="/coursespage" id="main2">Courses</Link>
                <Link to="/contactpage"id="main2">Contact</Link>
                <Link to="/addmission" id="main1"><b>Apply Now</b></Link>
            </nav>
        </header>
    )
}
export default Header