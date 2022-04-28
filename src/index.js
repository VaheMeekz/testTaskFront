import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {createStore, compose, applyMiddleware} from 'redux'
import {rootReducer} from './redux/rootReducer'

import App from './App';
import reportWebVitals from './reportWebVitals';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const store = createStore(rootReducer, compose(
    applyMiddleware(
        thunk
    ),
))

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    app,
);

reportWebVitals();
