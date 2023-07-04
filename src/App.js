import React, { useEffect, useState, useRef } from 'react';
import anime from 'animejs';
import './css/navbar.black.css';
import './scss/style.scss'
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {

  const elementRef = useRef(null);

  useEffect(() => {
      const element = elementRef.current;

      anime({
          targets: element,
          translateY: [-150, 0],
          opacity: [0, 1],
          easing: 'easeOutExpo',
          duration: 3000
      });
  }, []);

  return (
    <div className="App">
      <body>
        <Navbar />

        <div className="hamburger-menu toggle-overlay">
          <div className="bar"></div>
        </div>

        <section className='home-header'>
          <h1 className='main-title'  ref={elementRef}>we design <br/> and build <br/> <b>solutions</b> </h1>
        </section>
        <Footer />
      </body>
    </div>
  );
}

export default App;
