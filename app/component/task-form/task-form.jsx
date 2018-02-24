// Libraries
import React from 'react';

// Component
export default class TaskForm extends React.Component {
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