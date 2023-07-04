import React, { useEffect, useState, useRef  } from 'react';
import anime from 'animejs';
import '../css/navbar.black.css';
import '../scss/about.scss'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function WorkPage() {

    return (
        <div className="WorkPage">
            <Navbar />

            <Footer />
        </div>
    );
}

export default WorkPage;