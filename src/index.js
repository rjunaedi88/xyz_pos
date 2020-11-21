import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Variable from './Variable';
import Navbar from './Navbar';
import Banner from './Banner';
import Image from './Image';


ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Banner />
    <Image />
  </React.StrictMode>,
  document.getElementById('root')
);

