import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import AppView from './containers/index.jsx';

import './app.scss'

const store = createStore(reducer); 

ReactDOM.render(
    <Provider store={store}>
        <AppView />
    </Provider>,
    document.getElementById('app')
)