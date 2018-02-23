import { Map } from 'immutable';

import { ACTIONS } from './../constants';

const initialState = Map({
    tasks: List(["go!"])
})

function reducer(state = initialState, action) { 
    switch (action.type){
        // case ACTIONS.SET_STATE:
        //     return state.merge(action.payload);
        case ACTIONS.ADD_TASK:
        console.log('state', state.get('tasks'))
            return state.update("tasks", (tasks) => {
                tasks.push(action.payload.task)
            })
        case ACTIONS.REMOVE_TASK:
            console.log('state', state.get('tasks'))
        
            return state.update("tasks", (tasks) => {
                tasks.filterNot(item => item === action.payload.task)
            })
    }
    return state;
}

export default reducer;