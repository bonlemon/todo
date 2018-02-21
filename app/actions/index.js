import { ACTIONS } from './../constants';

export function addTask ( task ){
    return {
        type: ACTIONS.ADD_TASK,
        payload: task
    }
};

export function deleteTask (task){
    return {
        type: ACTIONS.REMOVE_TASK,
        payload: task
    }
}
