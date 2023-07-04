import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import anime from 'animejs';
import '../css/navbar.white.css'

const Navbar = ({ activePage }) => {
    let ubicacionPrincipal = window.pageYOffset;

    window.addEventListener("scroll", function () {
      var nav = document.querySelector("nav");
      nav.classList.toggle("down", window.scrollY > 100);
    });
    
    window.onscroll = function () {
      let Desplazamiento_Actual = window.pageYOffset;
    
      if (ubicacionPrincipal >= Desplazamiento_Actual) {
        document.getElementById('navbar').style.top = '0';
      } else {
        document.getElementById('navbar').style.top = '-110px';
    
        // Animación con anime.js
        const nav = document.querySelector("nav");
        anime({
          targets: nav,
          translateY: window.scrollY > 100 ? '0' : '-50px',
          easing: 'easeOutQuad',
          duration: 500
        });
      }
    
      ubicacionPrincipal = Desplazamiento_Actual;
    };
    

    return (
        <>
            <nav id="navbar" className='navbar'>
                <div className="logo">
                    <a href="/">
                        <h1>JEEIMKG</h1>
                    </a>
                </div>

                <ul id="navigation" className="navbar-list">
                    <li><a id='about' className="navbar-link" href="/about">About</a></li>
                    <li><a id='work' className="navbar-link" href="/work">work</a></li>
                    <li><a id='opinions' className="navbar-link" href="/">opinions</a></li>
                    <li><a id='products' className="navbar-link" href="/">products</a></li>
                    <li><a id='contact' className="navbar-link" href="/contact">Contact</a></li>
                </ul>
            </nav>

            <aside>
                <div className="outer-close toggle-overlay">
                    <a className="close">
                        <span></span>
                    </a>
                </div>
                <nav>
                    <ul id="navbar-responsive" className="navbar-responsive">
                        <li><a className="navbar-break" href="/about">About</a></li>
                        <li><a className="navbar-break" href="/">work</a></li>
                        <li><a className="navbar-break" href="/">opinions</a></li>
                        <li><a className="navbar-break" href="/">products</a></li>
                        <li><a className="navbar-break" href="/contact">Contact</a></li>
                    </ul>
                </nav>
            </aside>
        </>
    )
}

export default Navbar