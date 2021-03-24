import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import {createStore} from 'redux'
import {bankingReducer} from './reducers/bankingReducer'

const store = createStore(bankingReducer);
ReactDOM.render(<App/>, document.getElementById('root'));


