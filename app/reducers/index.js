import { Map, List } from 'immutable';

import { ACTIONS } from './../constants';

const initialState = Map({
    tasks: List(["go!"])
})

function reducer(state = initialState, action) { 
    switch (action.type){
        case ACTIONS.ADD_TASK:
            return state.set('tasks', state.getIn(['tasks']).push(action.payload))

        case ACTIONS.REMOVE_TASK:
            return state.set('tasks', state.get('tasks').filterNot((item)=> {
                return item === action.payload
            }))
    }
    return state;
}

export default reducer;


// selectors

export function getTasks (state) {
    return state.getIn(["tasks"]) ? state.getIn(["tasks"]).toJS() : []
}