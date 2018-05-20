import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavComponent extends Component {
	render() {
		return (
			<div>
				<ul className="nav justify-content-center">
					<li className="nav-item">
						<Link className="nav-link" to="/new">New</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/">Todo</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="done">Done</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="deleted">Deleted</Link>
					</li>
				</ul>
			</div>
		);
	}
}