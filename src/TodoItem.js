import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPencilAlt,
  faTimesCircle,
  faCheckCircle,
  faThList,
} from "@fortawesome/free-solid-svg-icons";
export default class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: this.props.task,
      isEditing: false,
    };
    // this.handleRemove = this.handleRemove.bind(this);
  }

  toggleform = () => this.setState({ isEditing: !this.state.isEditing });

  handleComplete = () => {
    this.props.markComplete(this.props.id);
  };

  handleRemove = () => {
    this.props.remove(this.props.id);
  };

  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  handleUpdate = () => {
    this.props.update(this.props.id, this.state.task);
    this.setState({ task: this.state.task });
    this.toggleform();
  };

  render() {
    let result;
    const styles = {
      completed: this.props.completed ? "complete" : "incomplete",
    };
    if (this.state.isEditing) {
      result = (
        <div className="item-div">
          <div className="item-form-div">
            <input
              type="text"
              name="task"
              onChange={this.handleChange}
              value={this.state.task}
            />
            <div className="edit-btn-div">
              <FontAwesomeIcon
                className="edit-btn cancel"
                onClick={this.toggleform}
                icon={faTimesCircle}
              />
              <FontAwesomeIcon
                className="edit-btn save"
                onClick={this.handleUpdate}
                icon={faCheckCircle}
              />
            </div>
          </div>
        </div>
      );
    } else {
      result = (
        <div className="item-div">
          <div onClick={this.handleComplete} className="task-item">
            <div className={`circle ${styles.completed}`} />
            <div className={`task-name ${styles.completed}`}>
              {this.props.task}
            </div>
          </div>
          {/* <button onClick={this.handleRemove}>example</button> */}
          <FontAwesomeIcon
            className="pencil-icon"
            onClick={this.toggleform}
            icon={faPencilAlt}
          />
          <FontAwesomeIcon
            className="trash-icon"
            onClick={this.handleRemove}
            icon={faTrash}
          />
        </div>
      );
    }

    return result;
  }
}
