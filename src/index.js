import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';
import promise from "redux-promise";

import './style.css';

import HomeComponent from './components/home/index';
import NewTodoComponent from './components/newTodo/index';
import DoneComponent from './components/done/index';
import DeletedComponent from './components/deleted/index';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<BrowserRouter>
			<Switch>
				<Route path="/new" component={NewTodoComponent} />
				<Route path="/deleted" component={DeletedComponent} />
				<Route path="/done" component={DoneComponent} />
				<Route path="/" component={HomeComponent} />
			</Switch>
		</BrowserRouter>
	</Provider>, 
	document.getElementById('root'));
registerServiceWorker();
