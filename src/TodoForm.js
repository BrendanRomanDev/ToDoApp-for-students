import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmitTask = (evt) => {
    const newTask = {
      id: uuidv4(),
      task: this.state.task,
      completed: false,
    };
    this.props.add(newTask);
    this.setState({ task: "" });
  };

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  render() {
    return (
      <div className="add-item-div">
        <input
          type="text"
          placeholder="Add A Task"
          name="task"
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button className="add-button" onClick={this.handleSubmitTask}>
          +
        </button>
      </div>
    );
  }
}

export default TodoForm;
