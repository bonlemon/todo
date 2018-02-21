import { React } from 'react';
import { ReactDOM } from 'react-dom';
import { redux } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducers';
import { ACTIONS } from './constants';
import AppView from './index.jsx';


const store = redux.createStore(redux); 
// create store
// into createStore needs pass function that will update store

// store.dispatch - execute action
// execute set state
store.dispatch({
    type: ACTIONS.SET_STATE,
    payload: {
        tasks: "go!"
    }
})

ReactDOM.render(
    <Provider store={store}>
        <AppView />
    </Provider>,
    document.getElementById('app')
)