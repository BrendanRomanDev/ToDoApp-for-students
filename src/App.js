import React, { Component } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import Counter from "./Counter";
import ClickCounter from "./ClickCounter";
import Names from "./Names";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

//THIS IS A COMMENT//
//BUG FIXED!!!//
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: uuidv4(),
          task: "Be Awesome",
          completed: false,
        },
        {
          id: uuidv4(),
          task: "Take out trash",
          completed: false,
        },
        {
          id: uuidv4(),
          task: "Jump rope homie",
          completed: false,
        },
      ],
      text: "hello!",
    };

    this.remove = this.remove.bind(this);
  }

  remove(taskId) {
    this.setState({
      todos: this.state.todos.filter((task) => task.id !== taskId),
    });
  }

  add = (newTask) => {
    this.setState({ ...this.state, todos: [...this.state.todos, newTask] });
  };

  update = (id, updatedTask) => {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  };

  markComplete = (id) => {
    const index = this.state.todos.findIndex((todo) => todo.id === id);
    const newTodoArr = [...this.state.todos];
    newTodoArr[index] = {
      ...newTodoArr[index],
      completed: !newTodoArr[index].completed,
    };
    this.setState({ todos: newTodoArr });
  };

  render() {
    let dashboard;
    if (this.state.todos.length) {
      dashboard = (
        <div className="card">
          <div className="card-title">
            <h2>ToDoCamp</h2>
          </div>
          <div className="card-body">
            <TodoForm add={this.add} />
            {this.state.todos.map((todo) => (
              <TodoItem
                key={todo.id}
                id={todo.id}
                task={todo.task}
                remove={this.remove}
                completed={todo.completed}
                markComplete={this.markComplete}
                update={this.update}
              />
            ))}
          </div>
          <Counter count={this.state.todos.length} hello={this.state.text} />
          <ClickCounter />
          <Names />
        </div>
      );
    } else {
      dashboard = (
        <div className="card">
          <div className="card-title">
            <h2>ToDoCamp</h2>
          </div>
          <div className="card-body">
            <TodoForm add={this.add} />
            <div className="item-div">
              <div className="task-name muted">Add Tasks...</div>
            </div>
          </div>
        </div>
      );
    }

    return dashboard;
  }
}
