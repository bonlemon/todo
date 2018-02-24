// Libraries
import React from 'react';

// Components
import TaskItem from './task-item.jsx'

// Component
export default class TaskList extends React.Component{
    constructor(props){
        super(props);
    }
    render () {
        const { tasks, deleteTask } = this.props;

        return (
            <div>
                {
                    tasks.map((task) => {
                        return <TaskItem
                            key={task}
                            task={task}
                            deleteTask={ deleteTask }
                        />
                    })
                }
            </div>
        )
    }
}
