import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import PortfolioApp from './components/PortfolioApp';
import * as serviceWorker from './serviceWorker';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import configureStore from './store/configureStore'
import axios from 'axios'

const store = configureStore()
store.subscribe(() =>{
  localStorage.setItem('TOKEN', store.getState().auth.token)
})

// Add a request interceptor
axios.interceptors.request.use( (request)  => {
  console.log(request)
  const token = store.getState().auth.token;
  request.headers.Authorization =  `Bearer ${token}`
  return request;
},  (error) => {
  console.log(error)
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use( (response) => {
  console.log(response)
  return response;
},  (error) => {
  console.log(error)
  return Promise.reject(error);
});

const jsx = (
  <Provider store={store}>
    <PortfolioApp/>
  </Provider>
)

ReactDOM.render( jsx, document.getElementById('root'));

serviceWorker.unregister();
