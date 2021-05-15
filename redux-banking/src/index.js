import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import { createStore } from 'redux'
import { bankingReducer } from './reducers/bankingReducer'
import { Provider } from 'react-redux';

const store = createStore(bankingReducer);

ReactDOM.render(
    <Provider store = {store}>
        <App/>
    </Provider>,

document.getElementById('root'));


