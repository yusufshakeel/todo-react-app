import _ from 'lodash';
import React, { Component } from 'react';
import HeaderComponent from '../header';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
	fetchTodo, 
	updateStatusTodo,
	TODO_STATUS_ACTIVE,
	TODO_STATUS_DONE,
	TODO_STATUS_DELETED,
	TODO_LIST_DONE
} from '../../actions/index';

class DoneComponent extends Component {

	componentDidMount() {
		this.props.fetchTodo(TODO_STATUS_DONE);
	}

	onUpdateStatus(status, item) {
		const data = { ...item };
		data.status = status;
		this.props.updateStatusTodo(data, TODO_LIST_DONE, this.props.todo, () => {
			this.props.history.push('/done');
		});
	}

	renderTodoList() {
		return _.map(this.props.todo, item => {
			return (
				<li key={item.id}
					className="list-group-item">
					{item.title}
					<div className="btn-group pull-right">
						<button 
							onClick={ () => { this.onUpdateStatus(TODO_STATUS_ACTIVE, item) } }
							type="button" 
							className="btn btn-sm btn-secondary"><i className="fa fa-undo"></i></button>
						<button 
							onClick={ () => { this.onUpdateStatus(TODO_STATUS_DELETED, item) } }
							type="button" 
							className="btn btn-sm btn-secondary"><i className="fa fa-close"></i></button>
					</div>
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

						<p className="text-center">Done</p>
						
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

export default connect(mapStateToProps, { fetchTodo, updateStatusTodo })(DoneComponent);