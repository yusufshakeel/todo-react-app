import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';

import './style.css';

import HomeComponent from './components/home/index';
import NewTodoComponent from './components/newTodo/index';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<BrowserRouter>
			<Switch>
				<Route path="/new" component={NewTodoComponent} />
				<Route path="/" component={HomeComponent} />
			</Switch>
		</BrowserRouter>
	</Provider>, 
	document.getElementById('root'));
registerServiceWorker();
