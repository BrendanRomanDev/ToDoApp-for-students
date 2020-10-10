import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
export default class TodoItem extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.handleRemove = this.handleRemove.bind(this);
	// }
	// handleRemove() {
	// 	this.props.remove(this.props.id);
	// }

	render() {
		const styles = {
			completed : this.props.completed ? 'complete' : 'incomplete'
		};

		console.log(this.props.id);
		return (
			<div className="item-div">
				<div onClick={() => this.props.markComplete(this.props.id)} className="task-item">
					<div className={`circle ${styles.completed}`} />
					<div className={`task-name ${styles.completed}`}>{this.props.task}</div>
				</div>
				{/* <button onClick={this.handleRemove}>example</button> */}
				<FontAwesomeIcon
					className="trash-icon"
					onClick={() => this.props.remove(this.props.id)}
					icon={faTrash}
				/>
			</div>
		);
	}
}
