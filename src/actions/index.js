import axios from 'axios';

export const TODO_NEW = 'TODO_NEW';
export const TODO_LIST_ACTIVE = 'TODO_LIST_ACTIVE';
export const TODO_LIST_DONE = 'TODO_LIST_DONE';
export const TODO_LIST_DELETED = 'TODO_LIST_DELETED';

export function createTodo(values, callback) {

	setTimeout(()=>{
		callback();
	}, 1000);
	
	return {
		type: TODO_NEW,
		payload: { ...values, id: new Date().getTime() }
	};

}

export function fetchTodo() {
	const request = axios.get('http://localhost:3000/active');

	return {
		type: TODO_LIST_ACTIVE,
		payload: request
	};
}