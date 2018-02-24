// Libraries
import React from 'react';

// Component
export default class TaskItem extends React.Component{
    constructor(props){
        super(props);

        this.handlerOnClick = this.handlerOnClick.bind(this);
    }

    handlerOnClick() {
        const { task, deleteTask } = this.props;
        
        deleteTask(task);
    }
    render(){
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