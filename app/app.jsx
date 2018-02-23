import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import { ACTIONS } from './constants';
import AppView from './index.jsx';


const store = createStore(reducer); 
// create store
// into createStore needs pass function that will update store


// store.dispatch - execute action
// execute set state
// store.dispatch({
//     type: ACTIONS.SET_STATE,
//     payload: {
//         tasks: ["go!"]
//     }
// })

ReactDOM.render(
    <Provider store={store}>
        <AppView />
    </Provider>,
    document.getElementById('app')
)