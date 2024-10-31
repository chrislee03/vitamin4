import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'


const Navbar = () => {
    return (
        <>
            <section id="navBar-container">
                <div id="navTitle"> 
                    My Website 
                </div>
                <div id="hyperlinks">
                    <Link to="/home">  Home </Link>
                    <Link to="/notHome"> Not Home </Link>
                </div>
            </section>
        </>
  )};
  
export default Navbar;