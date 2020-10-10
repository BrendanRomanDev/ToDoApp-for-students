import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoItem from './TodoItem';
import './App.css';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			task  : '',
			todos : [
				{
					id        : uuidv4(),
					task      : 'Be Awesome',
					completed : false
				},
				{
					id        : uuidv4(),
					task      : 'Take out trash',
					completed : false
				},
				{
					id        : uuidv4(),
					task      : 'Jump rope homie',
					completed : false
				}
			]
		};
		this.handleChange = this.handleChange.bind(this);
		this.remove = this.remove.bind(this);
	}

	remove(taskId) {
		this.setState({ todos: this.state.todos.filter((task) => task.id !== taskId) });
	}

	add(newTask) {
		this.setState({ ...this.state, todos: [ ...this.state.todos, newTask ] });
	}

	handleChange(evt) {
		this.setState({ [evt.target.name]: evt.target.value });
	}

	handleSubmit = (evt) => {
		const newTask = {
			id        : uuidv4(),
			task      : this.state.task,
			completed : false
		};
		this.add(newTask);
		this.setState({ task: '' });
	};

	markComplete = (id) => {
		const index = this.state.todos.findIndex((todo) => todo.id === id);
		const newTodoArr = [ ...this.state.todos ];
		newTodoArr[index] = { ...newTodoArr[index], completed: !newTodoArr[index].completed };
		this.setState({ todos: newTodoArr });
	};

	render() {
		return (
			<div className="card">
				<div className="card-title">
					<h2>ToDoCamp</h2>
				</div>
				<div className="card-body">
					<div className="add-item-div">
						<input
							type="text"
							placeholder="Add A Task"
							name="task"
							value={this.state.task}
							onChange={this.handleChange}
						/>
						<button className="add-button" onClick={this.handleSubmit}>
							+
						</button>
					</div>
					{this.state.todos.map((todo) => (
						<TodoItem
							key={todo.id}
							id={todo.id}
							task={todo.task}
							remove={this.remove}
							completed={todo.completed}
							markComplete={this.markComplete}
						/>
					))}
				</div>
			</div>
		);
	}
}
