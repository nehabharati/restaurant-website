import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/main.css'
import './sass/index.scss'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './redux/reducers'

const store = createStore(reducer, window.devToolsExtension ? window.devToolsExtension() : f => f)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
