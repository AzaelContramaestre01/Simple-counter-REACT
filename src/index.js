import React from 'react';
import ReactDOM from 'react-dom';
//import css bootstrap and fontawesome
import "bootstrap/dist/css/bootstrap.min.css"
import '@fortawesome/fontawesome-free/css/all.min.css'
import './index.css';
// Import js bootstrap jquery and popper
import 'jquery'
import 'popper.js'
import 'bootstrap'
import App from './App';
import reportWebVitals from './reportWebVitals';
import PropTypes from 'prop-types';



App.propTypes = {
  one: PropTypes.number,
  two: PropTypes.number,
  three: PropTypes.number,
  four: PropTypes.number,
};

let counter = 0;

setInterval(function () {
  const four = Math.floor(counter / 1000)
  const three = Math.floor(counter / 100)
  const two = Math.floor(counter / 10)
  const one = Math.floor(counter / 1)
  console.log(four, three, two, one)
  counter++;
  ReactDOM.render(
    <App one={one} two={two} three={three} four={four} />,

    document.getElementById('root'))
}, 1000);

reportWebVitals();
