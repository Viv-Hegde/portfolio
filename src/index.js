import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import Splashscreen from './components/Splashscreen/Splashscreen';
import About from './components/About/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Splashscreen />
    <About/>
  </React.StrictMode>
);
