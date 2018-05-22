import React, { Component } from 'react';

class EditComponent extends Component {

	onCloseModal() {

		const el = document.getElementById('edit-todo-modal');
		el.style.display = 'none';
		el.classList.remove('show');
		
	}

	render() {
		return (
			<div className="modal fade" id="edit-todo-modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">Edit</h5>
							<button 
								onClick={() => { this.onCloseModal() }}
								type="button" 
								className="close" 
								data-dismiss="modal" 
								aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							some text...
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => { this.onCloseModal() }}>Close</button>
							<button type="button" className="btn btn-primary">Save changes</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default EditComponent;