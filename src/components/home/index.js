import _ from 'lodash';
import React, { Component } from 'react';
import HeaderComponent from '../header';
import { connect } from 'react-redux';
import {
	fetchTodo, 
	updateStatusTodo, 
	TODO_STATUS_ACTIVE,
	TODO_STATUS_DONE,
	TODO_STATUS_DELETED,
	TODO_LIST_ACTIVE
} from '../../actions/index';

class HomeComponent extends Component {

	componentDidMount() {
		this.props.fetchTodo(TODO_STATUS_ACTIVE);
	}

	onUpdateStatus(status, item) {
		const data = { ...item };
		data.status = status;
		this.props.updateStatusTodo(data, TODO_LIST_ACTIVE, this.props.todo, () => {
			this.props.history.push('/');
		});
	}

	onClickHandle(e) {

		const id = e.currentTarget.dataset.id;

		let showdescription = false;

		if (e.currentTarget.dataset.showdescription === 'false') {
			e.currentTarget.dataset.showdescription = 'true';
			showdescription = true;
		} else {
			e.currentTarget.dataset.showdescription = 'false';
			showdescription = false;
		}

		if (showdescription) {
			document.getElementById('todo-description-' + id).classList.remove('d-none');
		} else {
			document.getElementById('todo-description-' + id).classList.add('d-none');
		}

	}

	renderTodoList() {

		return _.map(this.props.todo, item => {

			return (
				<li key={item.id}
					onClick={this.onClickHandle.bind(this)}
					data-showdescription='false'
					data-id={item.id}
					className="list-group-item">
					<div className="btn-group pull-right">
                        <button
							onClick={ () => { this.onUpdateStatus(TODO_STATUS_DELETED, item) } }
							type="button" 
							className="btn btn-sm btn-secondary"><i className="fa fa-close"></i></button>
						<button
							onClick={ () => { this.onUpdateStatus(TODO_STATUS_DONE, item) } }
							type="button" 
							className="btn btn-sm btn-secondary"><i className="fa fa-check"></i></button>
					</div>
					<span className="lead">{item.title}</span>
					<div className='d-none' id={`todo-description-${item.id}`}>{item.description}</div>
				</li>
			);

		});

	}

	render() {

		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-12 col-sm-6 offset-sm-3">
						<HeaderComponent />
					</div>
				</div>
				<div className="row mt-3">
					<div className="col-xs-12 col-sm-6 offset-sm-3">

						<p className="text-center lead">Todo</p>
						
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
	};
}

export default connect(mapStateToProps, { fetchTodo, updateStatusTodo })(HomeComponent);