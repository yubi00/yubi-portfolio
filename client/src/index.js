import React from 'react';
import ReactDOM from 'react-dom';
import PortfolioApp from './components/PortfolioApp';
import * as serviceWorker from './serviceWorker';
import './styles/styles.scss'

ReactDOM.render(
  <React.StrictMode>
    <PortfolioApp />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
