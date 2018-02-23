import { Map, List } from 'immutable';

import { ACTIONS } from './../constants';

const initialState = Map({
    tasks: List(["go!"])
})

function reducer(state = initialState, action) { 
    switch (action.type){
        // case ACTIONS.SET_STATE:
        //     return state.merge(action.payload);
        case ACTIONS.ADD_TASK:
            // console.log('state', state.getIn(['tasks']).toJS())
            // return state.update("tasks", (tasks) => {
            //     tasks.push(action.payload)
            // })
            console.log('action.payload', action.payload)
            return state.set('tasks', state.getIn(['tasks']).push(action.payload))
        case ACTIONS.REMOVE_TASK:
            console.log(action.payload)
            console.log('state', state.get('tasks'))
            return state.removeIn(['tasks'], action.payload)
            // return state.update("tasks", (tasks) => {
            //     tasks.filterNot(item => item === action.payload)
            //     tasks.removeIn(item => item === action.payload)
            // })
    }
    return state;
}

export default reducer;