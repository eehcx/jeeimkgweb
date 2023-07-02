import PropTypes from 'prop-types'
import React, { memo } from 'react'

const Navbar = memo((props) => {
    let ubicacionPrincipal = window.pageYOffset;
    window.onscroll = function () {
        let Desplazamiento_Actual = window.pageYOffset;
        if (ubicacionPrincipal >= Desplazamiento_Actual) {
            document.getElementById('navbar').style.top = '0';
        }
        else {
            document.getElementById('navbar').style.top = '-110px';
        window.addEventListener("scroll", function () {
            var nav = document.querySelector("nav");
            nav.classList.toggle("down", window.scrollY > 100);
        })
        }
        ubicacionPrincipal = Desplazamiento_Actual;
    }
    return (
        <>
            <nav id="navbar" class="navbar">
                <div className="logo">
                    <a href="/">
                        <h1>JEEIMKG</h1>
                    </a>
                </div>

                <ul id="navigation" className="navbar-list">
                    <li><a className="navbar-link" href="/">About</a></li>
                    <li><a className="navbar-link" href="/">work</a></li>
                    <li><a className="navbar-link" href="/">opinions</a></li>
                    <li><a className="navbar-link" href="/">products</a></li>
                    <li><a className="navbar-link" href="/contact">Contact</a></li>
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
                        <li><a className="navbar-break" href="/">About</a></li>
                        <li><a className="navbar-break" href="/">work</a></li>
                        <li><a className="navbar-break" href="/">opinions</a></li>
                        <li><a className="navbar-break" href="/">products</a></li>
                        <li><a className="navbar-break" href="/contact">Contact</a></li>
                    </ul>
                </nav>
            </aside>
        </>
    )
})

Navbar.propTypes = {}

export default Navbar