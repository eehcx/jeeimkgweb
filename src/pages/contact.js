import React, { useEffect, useState, useRef  } from 'react';
import anime from 'animejs';
import '../css/navbar.black.css';
import '../scss/contact.scss'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function ContactPage() {

    const elementRef = useRef(null);

    useEffect(() => {
        const element = elementRef.current;

        // Utiliza anime.js para animar el elemento
        anime({
            targets: element,
            translateX: [-100, 0],
            opacity: [0, 1],
            easing: 'easeOutExpo',
            duration: 4000
        });
    }, []);

    return (
        <div className="App">
            <body>
                <Navbar />

                <div className="hamburger-menu toggle-overlay">
                <div className="bar"></div>
                </div>
                <header className='header-content'>
                    <h1 className='main-title' ref={elementRef}>
                        let's build <br/> something <br/> <strong>amazing</strong>
                    </h1>
                    <img
                        className='contact-header'
                        src="https://firebasestorage.googleapis.com/v0/b/jeeimkg-5705b.appspot.com/o/static%2Fmain(1).webp?alt=media&token=bf98a65e-7208-4a80-b2b8-354551f3a183"
                        loading='lazy'
                        alt="Imagen"
                    />
                </header>

                <main>
                    <h2 className="title-form">
                        Aplica ahora y <br />
                        en un momento <br />
                        te contactaremos.
                    </h2>
                    <form action="" method="post">
                        <input className="feedback-input" type="text" name="name" placeholder="Nombre Completo" required />
                        <input className="feedback-input" type="email" name="email" placeholder="Email Laboral" required />
                        <input className="feedback-input" type="text" name="phone" placeholder="Teléfono" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" required />
                        <textarea className="feedback-input" placeholder="Asunto" name="" cols="30" rows="10" />
                        <input className="button" type="submit" value="enviar" />
                    </form>
                </main>

                <Footer />
            </body>
        </div>
    );
}

export default ContactPage;