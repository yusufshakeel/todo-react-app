import _ from 'lodash';
import React, { Component } from 'react';
import HeaderComponent from '../header';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class HomeComponent extends Component {

	renderTodoList() {
		return _.map(this.props.todo, item => {
			return (
				<li key={item.id}
					className="list-group-item">
					<Link to={`/view/${item.id}`}>{item.title}</Link>
					<div className="btn-group pull-right">
						<button type="button" className="btn btn-sm btn-secondary"><i className="fa fa-close"></i></button>
						<button type="button" className="btn btn-sm btn-secondary"><i className="fa fa-check"></i></button>
					</div>
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

export default connect(mapStateToProps)(HomeComponent);