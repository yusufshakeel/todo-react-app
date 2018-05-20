import React, { Component } from 'react';
import NavComponent from '../nav';

export default class HeaderComponent extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-12 col-sm-12">
						<div className="text-center">
							<h1>todo-react-app</h1>
							<p>Created by <a href="https://github.com/yusufshakeel">Yusuf Shakeel</a></p>
						</div>
						<hr />
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12 col-sm-12">
						<NavComponent />
					</div>
				</div>
			</div>
		);
	}
}