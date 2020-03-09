import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

// import lyberty
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'swiper/css/swiper.min.css';
import 'swiper/js/swiper.min.js';
import Swiper from 'swiper';
// import 'owl.carousel/dist/assets/owl.carousel.min.css';
// import 'owl.carousel/dist/assets/owl.theme.default.min.css';
// import 'owl.carousel/dist/owl.carousel.min.js';

//import Redux
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './Redux/Reducers';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// var swiper = new Swiper('.carousel__container', {
//   loop: true,
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   pagination: {
//     el: '.swiper-pagination',
//   }
// });


var swiper = new Swiper('.swiperSlide', {
  loop: true,
  autoplay: {
    delay: 2000
  }
});


// const webpack = require('webpack');

// var swiper = new Swiper('.homeMovie__container', {
//   loop: true,
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   el: '.swiper-pagination'
// });