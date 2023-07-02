import React, { useEffect, useState } from 'react';
import '../css/footer.black.css';
import '../css/navbar.black.css';
import '../scss/about.scss'
import Footer from '../components/footer';
import Navbar from '../components/navbar';

function AboutPage() {
    return (
        <div className="App">
            <body>
                <Navbar />

                <header>
                    <div className="hamburger-menu toggle-overlay">
                        <div className
                        ="bar"></div>
                    </div>

                    <section className='main-content'>
                        <h1 className='main-element'>Descubre cómo podemos impulsar tu éxito ¡Conoce nuestro 
                            <a>ADN!</a>
                        </h1>
                    </section>
                </header>

                <section className='about-us-content'>
                    <a href="" data-reveal="fade-up">
                        <img src="https://firebasestorage.googleapis.com/v0/b/jeeimkg-5705b.appspot.com/o/static%2Fcircle.svg?alt=media&token=393afbe8-9d9b-4ca6-9012-da5cf5ec1af9" height="200" width="200"  alt="" srcset=""></img>
                    </a>
                </section>

                <Footer />
            </body>
        </div>
    );
}

export default AboutPage;