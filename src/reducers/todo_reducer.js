import _ from 'lodash';
import {
	TODO_NEW,
	TODO_LIST_ACTIVE,
	TODO_LIST_DONE,
	TODO_LIST_DELETED
} from '../actions/index'

export default function(state = {}, action) {

	switch(action.type) {

		case TODO_NEW:
			// const updatedTodoList = { ...state, [action.payload.data.id]: action.payload.data };
			// console.log(updatedTodoList);
			// return updatedTodoList;
			return state;

		case TODO_LIST_ACTIVE:
		case TODO_LIST_DONE:
		case TODO_LIST_DELETED:
			const todoList = _.keyBy(action.payload.data, 'id');
			return todoList;

		default:
			return state;
	}

}