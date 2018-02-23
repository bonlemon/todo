import React from 'react';
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


class TaskItem extends React.Component {
    constructor(props){
        super(props);

        this.handlerOnClick = this.handlerOnClick.bind(this);
    }

    handlerOnClick() {
        const { task } = this.props;

        this.props.deleteTask(task);
    }
    render(){
        return (
            <div>
                <p>
                    <b>
                        {this.props.text}
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
        const { phones, deleteTask } = this.props;

        return (
            <div>
                {
                    phones && phones.map((phone) => {
                        <TaskItem 
                            text={phone}
                            deleteTask={ deleteTask }
                        />
                    })
                }
            </div>
        )
    }
}

class AppView extends React.Component {
    render(){
        const { data, addTask } = this.props;
        return (
            <div>
                <TaskForm addTask={addTask} />
                <TaskList {...data} /> 
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        phones: state.get("phones")
    }
}

export default connect(mapStateToProps, actions)(AppView);