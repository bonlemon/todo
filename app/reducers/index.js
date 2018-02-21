import { Map } from 'immutable';

import { ACTIONS } from './../constants';

function reducer(state = Map(), action) { 
    switch (action.type){
        case ACTIONS.SET_STATE:
            return state.merge(action.payload);
        case ACTIONS.ADD_TASK:
            return state.update("tasks", (tasks) => {
                tasks.push(action.payload.task)
            })
        case ACTIONS.REMOVE_TASK:
            return state.update("tasks", (tasks) => {
                tasks.filterNot(item => item === action.payload.task)
            })
    }
    return state;
}

export default reducer;