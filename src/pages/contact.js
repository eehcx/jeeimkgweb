import React, { useEffect, useState } from 'react';
import '../css/footer.black.css';
import '../css/navbar.black.css';
import '../scss/contact.scss'
import Footer from '../components/footer';
import Navbar from '../components/navbar';

function ContactPage() {
    return (
        <div className="App">
        <body>
            <Navbar />

            <div className="hamburger-menu toggle-overlay">
            <div className="bar"></div>
            </div>
            <header className='header-content'>
                <h1 className='main-title '>
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