import React from 'react';
import ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import PortfolioApp from './components/PortfolioApp';
import * as serviceWorker from './serviceWorker';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import configureStore from './store/configureStore'


const { store, persistor } = configureStore()

const jsx = (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <PortfolioApp/>
    </PersistGate>
  </Provider>
)

ReactDOM.render( jsx, document.getElementById('root'));

serviceWorker.unregister();
