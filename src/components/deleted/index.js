import _ from 'lodash';
import React, { Component } from 'react';
import HeaderComponent from '../header';
import { connect } from 'react-redux';
import {
	fetchTodo,
	deleteTodo,
	updateStatusTodo,
	TODO_STATUS_ACTIVE,
	TODO_STATUS_DELETED,
	TODO_LIST_DELETED
} from '../../actions/index';

class DeletedComponent extends Component {

	componentDidMount() {
		this.props.fetchTodo(TODO_STATUS_DELETED);
	}

	onUpdateStatus(status, item) {
		const data = { ...item };
		data.status = status;
		this.props.updateStatusTodo(data, TODO_LIST_DELETED, this.props.todo, () => {
			this.props.history.push('/deleted');
		});
	}

	onDeleteTodo(item) {
		this.props.deleteTodo(item.id, TODO_LIST_DELETED, this.props.todo, () => {
			this.props.history.push('/deleted');
		});
	}

	renderTodoList() {
		return _.map(this.props.todo, item => {
			return (
				<li key={item.id}
					className="list-group-item">
					<div className="btn-group pull-right">
						<button 
							onClick={ () => { this.onUpdateStatus(TODO_STATUS_ACTIVE, item) } }
							type="button" 
							className="btn btn-sm btn-secondary"><i className="fa fa-undo"></i></button>
						<button
							onClick={ () => { this.onDeleteTodo(item) } }
							type="button" 
							className="btn btn-sm btn-secondary"><i className="fa fa-trash"></i></button>
					</div>
					<span className="lead">{item.title}</span>
					<div>{item.description}</div>
				</li>
			);
		});
	}

	render () {
		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-12 col-sm-6 offset-sm-3">
						<HeaderComponent />
					</div>
				</div>
				<div className="row mt-3">
					<div className="col-xs-12 col-sm-6 offset-sm-3">

						<p className="text-center lead">Deleted</p>

						{this.renderTodoList()}
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		todo: state.todo
	}
}

export default connect(mapStateToProps, { fetchTodo, deleteTodo, updateStatusTodo })(DeletedComponent);