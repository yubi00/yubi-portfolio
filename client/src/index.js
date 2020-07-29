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

const fetchProject = async () => {
  try {
    const response = await axios('http://localhost:8080/projects')
    console.log(`projects: ${response.data}`)
  } catch (e) {
    console.log(e)
  }
}

fetchProject()

const store = configureStore()
const jsx = (
  <Provider store={store}>
    <PortfolioApp/>
  </Provider>
)

ReactDOM.render( jsx, document.getElementById('root'));

serviceWorker.unregister();
