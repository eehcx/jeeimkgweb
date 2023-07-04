import PropTypes from 'prop-types'
import React, { memo } from 'react'

import '../css/FooterBlack.css';

const Footer = ({ pageStyle }) => {

    return (
    <div className={pageStyle}>
        <footer className='footer'>
            <div className='footer__addr'>
                <div className='footer__logo'>
                    <img src="https://firebasestorage.googleapis.com/v0/b/jeeimkg-5705b.appspot.com/o/static%2Ffooter-logo.webp?alt=media&token=bda93a35-f4ba-4d2d-b9d3-d334633e84a4" loading="lazy" alt="Logo de la organización Jóvenes Emprendedores e Innovadores" />
                </div>
                <h2>Contacto</h2>
                <address>1010 Avenue, sw 54321, chandigarh
                    <br />
                    <a className='footer__btn' href="mailto:jeeimkg@gmail.com">Email Us</a>
                </address>
            </div>
            <ul className="footer__nav">
                <li className="nav__item">
                    <h2 className="nav__title">Redes</h2>
                    <ul className="nav__ul">
                    <li>
                        <a
                        href="https://wa.me/529933011834?text=Hola"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        Whatsapp
                        </a>
                    </li>
                    <li>
                        <a
                        href="https://www.facebook.com/jeeimkg"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        Facebook
                        </a>
                    </li>
                    <li>
                        <a
                        href="https://www.instagram.com/jeeimkg"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        Instagram
                        </a>
                    </li>
                    <li>
                        <a
                        href="https://www.tiktok.com/@jeeimkg"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        TikTok
                        </a>
                    </li>
                    </ul>
                </li>
                <li className="nav__item nav__item--extra">
                    <h2 className="nav__title">Enlaces Útiles</h2>
                    <ul className="nav__ul nav__ul--extra">
                    <li>
                        <a href="/">Nuestros Clientes</a>
                    </li>
                    <li>
                        <a href="/">Nuestros Productos</a>
                    </li>
                    <li>
                        <a href="/">Nuestra Fundación</a>
                    </li>
                    <li>
                        <a href="/">Empresas Afiliadas</a>
                    </li>
                    <li>
                        <a href="/">Nuestra Trayectoría</a>
                    </li>
                    <li>
                        <a href="/">Conferencias</a>
                    </li>
                    </ul>
                </li>
                <li className="nav__item">
                    <h2 className="nav__title">Legal</h2>
                    <ul className="nav__ul">
                    <li>
                        <a href="/">Política de Privacidad</a>
                    </li>
                    <li>
                        <a href="/">Términos de Uso</a>
                    </li>
                    <li>
                        <a href="/">Cookies</a>
                    </li>
                    </ul>
                </li>
            </ul>
            <div className="legal">
                <p>
                    &copy; 2023, All Right Reserved <a href="/"> jeeimkg</a>
                </p>
            </div>
        </footer>
    </div>
    )
}

export default Footer