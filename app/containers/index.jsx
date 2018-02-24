// Libraries
import React from 'react';
import { dispatch } from 'redux';
import { connect } from 'react-redux';

// Actions
import * as actions from './../actions';

// Components
import TaskForm from './../component/task-form.jsx'
import TaskList from './../component/task-list.jsx'

// Selectors
import { getTasks } from './../reducers'

class AppView extends React.Component {
    render(){

        const { tasks, actions } = this.props;
        
        return (
            <div>
                <TaskForm addTask={actions.onAddTask} />
                <TaskList tasks={tasks} deleteTask={actions.onDeleteTask} /> 
            </div>
        )
    }
}


function mapStateToProps(state){
    return {
        tasks: getTasks(state)
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions: {
            onAddTask: (task) => {
                return dispatch(actions.addTask(task))
            },
            onDeleteTask: (task) => {
                return dispatch(actions.deleteTask(task))
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppView);