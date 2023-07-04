import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import ContactPage from './pages/contact';  
import AboutPage from './pages/about';
import './scss/base.style.scss'
import WorkPage from './pages/work';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path='/work' element={<WorkPage />}/>
    </Routes>
  </Router>,
  document.getElementById('root')
);
