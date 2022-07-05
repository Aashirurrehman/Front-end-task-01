import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';


import './Navbar.css';


function Navbar() {

  
  


  

  return (
    <>
      <header id="header" class="fixed-top " >
      <div class="container d-flex align-items-center justify-content-between">

      <h1 class="logo"><a href="index.html">Tempo</a></h1>
     

      <nav id="navbar" class="navbar">
        <ul>
          <li><NavLink to={'/'} class="nav-link scrollto active" href="#hero">Home</NavLink></li>
          <li><Link to={'/about'} class="nav-link"  smooth={true} duration={500}
          spy={true} exact='true' offset={-80} >About</Link></li>
          <li><NavLink to={'/services'} class="nav-link scrollto" href="#services">Services</NavLink></li>
          <li><NavLink to={'/about'} class="nav-link scrollto " href="#portfolio">Portfolio</NavLink></li>
          <li><NavLink to={'team'} class="nav-link scrollto" href="#team">Team</NavLink></li>
          <li><NavLink to={'/team'} href="blog.html">Blog</NavLink></li>
          <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li>
          <li><NavLink to={'/contact'} class="nav-link scrollto" href="#contact">Contact</NavLink></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>

            
    </header>
   
    </>
  );
}

export default Navbar;