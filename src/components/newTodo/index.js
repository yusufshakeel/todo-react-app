import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import HeaderComponent from '../header/index';
import { createTodo } from '../../actions/index';

class NewTodoComponent extends Component {

	renderInputField(field) {

		const { meta: { touched, error } } = field;
		const className = `form-control ${ touched && error ? "is-invalid" : "" }`;

		return (
			<div className="form-group">
				<label>{field.label}</label>
				<input 
					type='text'
					className={className}
					{...field.input}
					maxLength={field.maxLength} />

				<div className="invalid-feedback">
				{ touched ?  error : ''}
				</div>
			</div>
		);
	}

	renderTextField(field) {
		
		const { meta: { touched, error } } = field;
		const className = `form-control resize-none ${ touched && error ? "is-invalid" : "" }`;

		return (
			<div className="form-group">
				<label>{field.label}</label>
				<textarea
					className={className}
					{...field.input}
					rows="3"
					maxLength={field.maxLength}></textarea>
					
				<div className="invalid-feedback">
				{ touched ? error : ''}
				</div>
			</div>
		);
	}

	onFormSubmit(values) {
		this.props.createTodo(values, () => {
    		this.props.history.push("/");
    	});
	}

	render() {

		const { handleSubmit } = this.props;

		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-12 col-sm-6 offset-sm-3">
						<HeaderComponent />
					</div>
				</div>
				<div className="row mt-3">
					<div className="col-xs-12 col-sm-6 offset-sm-3">
						
						<p className="text-center lead">Create new todo</p>
						
						<form onSubmit={handleSubmit(this.onFormSubmit.bind(this))}>
							
							<Field 
								label="Title"
								name='title'
								type='text'
								maxLength='100'
								component={this.renderInputField}/>

							<Field 
								label="Description"
								name='description'
								type='text'
								maxLength='1000'
								component={this.renderTextField}/>

							<button
								type="submit"
								className="btn btn-primary mr-1">Create</button>

							<Link to="/" className="btn btn-outline-secondary">Cancel</Link>

						</form>

					</div>
				</div>
			</div>
		);
	}
}

function validate(values) {
	const errors = {};

	if (!values.title) {
		errors.title = 'Title required!';
	}
	if (!values.description) {
		errors.description = 'Description required!';
	}

	return errors;
}

export default reduxForm({
	validate,
	form: 'NewTodoForm'
})(connect(null, { createTodo })(NewTodoComponent));