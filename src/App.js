import React, { useEffect, useState } from 'react';
import './css/footer.black.css';
import './css/navbar.black.css';
import './scss/style.scss'
import Footer from './components/footer';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <body>
        <Navbar />

        <div className="hamburger-menu toggle-overlay">
          <div className="bar"></div>
        </div>

        <section className='home-header'>
          <h1 className='main-title'>construimos <b>soluciones</b> </h1>
        </section>
        <Footer />
      </body>
    </div>
  );
}

export default App;
