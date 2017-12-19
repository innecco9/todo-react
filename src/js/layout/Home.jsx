import React from 'react';

import todoStore from '../stores/todoStore';
import * as TodoActions from '../actions/TodoActions.js'
export class Home extends React.Component {
    
    constructor(){
        super();
        
        this.state = { data: todoStore.getAllTasks() };
    }
    
    componentDidMount(){
        todoStore.on('change', () => {
            this.setState({ 
    		    data: todoStore.getAllTasks()
    		});
        });
    }
    userClickedOnDelete(taskId){
    	console.log("the trash was clicked!", taskId);
    	TodoActions.deleteTask(taskId);
    	}
    	userAddedTask(evt) {
    	    console.log("add button was clicked!", evt);
    	    TodoActions.addNewTask(this.theValueOfTheInput);
    	}
    	handleInputChange(evt) {
    	    this.theValueOfTheInput = evt.target.value;

    	}

    	render() {

    	    var tasksToRender = this.state.data.map((task) => {
    	        const taskStyles = {};
    	        if (task.done == true) {
    	            taskStyles.textDecoration = "line-through"
    	        }
    	        return <li style={taskStyles} key={task.id}>
    	       <input type="checkbox" checked={(task.done) ? 'checked': ''} /> 
    	       {task.title} 
    	        <a onClick={() => this.userClickedOnDelete(task.id)} href="#">delete</a></li>
    	    });

    	    return (
    	        <div>
				<h1>Simple TODO App</h1>
				<ul>{tasksToRender}</ul>
				<input type="text" onChange={this.handleInputChange.bind(this)} />
				<button onClick={this.userAddedTask.bind(this)} />
			</div>
    	    )
    	}
    	};
    	