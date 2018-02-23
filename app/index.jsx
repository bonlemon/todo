import React from 'react';
import {dispatch} from 'redux';
import { connect } from 'react-redux';
import * as actions from './actions';



class TaskForm extends React.Component {
    constructor(props){
        super(props);

        this.handlerOnClick = this.handlerOnClick.bind(this);
    }
    handlerOnClick() {
        const input = this.refs.input;
        if ( input.value !== '' ) {
            const task = input.value;

            console.log('TaskForm task', task)

            input.value = "";
            
            return this.props.addTask(task);
        }
    }

    render() {
        return  <div>
                    <input ref="input" />
                    <button onClick = {this.handlerOnClick}>Добавить</button>
                </div>
    }
}


class TaskItem extends React.Component{
    constructor(props){
        super(props);

        console.log('----------')

        this.handlerOnClick = this.handlerOnClick.bind(this);
    }

    handlerOnClick() {
        const { task, deleteTask } = this.props;
        
        deleteTask(task);
    }
    render(){
        console.log('this.props', this.props)
        return (
            <div>
                <p>
                    <b>
                        {this.props.task}
                    </b>
                    <button onClick={this.handlerOnClick}>Удалить</button>
                </p>
            </div>
        )
    }
}

class TaskList extends React.Component{
    constructor(props){
        super(props);
    }
    render () {
        const { tasks, deleteTask } = this.props;

        console.log('TaskList tasks', tasks)

        return (
            <div>
                {
                    tasks.map((task) => {
                        return <TaskItem
                            key={task}
                            task={task}
                            deleteTask={ deleteTask }
                        />
                        {console.log('task', task)}
                    })
                }
            </div>
        )
    }
}

class AppView extends React.Component {
    render(){
        const { tasks, actions } = this.props;
        
        console.log('AppView tasks', tasks)
        
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
        tasks: state.getIn(["tasks"]) ? state.getIn(["tasks"]).toJS() : []
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