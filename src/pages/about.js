import React, { useEffect, useState, useRef  } from 'react';
import anime from 'animejs';
import '../css/navbar.black.css';
import '../scss/about.scss'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function AboutPage() {

    const elementRef = useRef(null);

    useEffect(() => {
        const element = elementRef.current;

        // Utiliza anime.js para animar el elemento
        anime({
            targets: element,
            translateX: [-170, 0],
            opacity: [0, 1],
            easing: 'easeOutExpo',
            duration: 3000
        });
    }, []);

    return (
        <div className="App">
            <body>
                <Navbar/>

                <header>
                    <div className="hamburger-menu toggle-overlay">
                        <div className
                        ="bar"></div>
                    </div>

                    <section className='main-content'>
                        <h1 ref={elementRef} className='main-element'> <a>JEEIMKG ADN —</a> Descubre cómo podemos impulsar tu éxito.
                        </h1>
                    </section>
                </header>

                <section className='about-us-content'>
                    <a href="" data-reveal="fade-up">
                        <img className='image-about-main' src="https://firebasestorage.googleapis.com/v0/b/jeeimkg-5705b.appspot.com/o/static%2Fcircle.svg?alt=media&token=393afbe8-9d9b-4ca6-9012-da5cf5ec1af9" height="550" width="550"  alt="" srcset=""></img>
                    </a>
                    <h2></h2>
                </section>

                <Footer/>
            </body>
        </div>
    );
}

export default AboutPage;