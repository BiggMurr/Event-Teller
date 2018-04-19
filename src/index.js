import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
import './reset.css';

import store from './ducks/store'
import { Provider } from 'react-redux'

// import axios from 'axios'

// axios.defaults.baseURL = "http://localhost:3002"
// axios.defaults.withCredentials = true

ReactDOM.render(
    <Provider store ={ store }>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
, document.getElementById('root'));
