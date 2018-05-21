import axios from 'axios';

export const TODO_NEW = 'TODO_NEW';
export const TODO_LIST_ACTIVE = 'TODO_LIST_ACTIVE';
export const TODO_LIST_DONE = 'TODO_LIST_DONE';
export const TODO_LIST_DELETED = 'TODO_LIST_DELETED';

const API_HOST = 'http://localhost:3000';

export function createTodo(values, callback) {

	const request = axios
						.post(`${API_HOST}/active`, values)
						.then(() => {
							callback();
						});
	
	return {
		type: TODO_NEW,
		payload: request
	};

}

export function fetchTodo() {

	const request = axios.get(`${API_HOST}/active`);

	return {
		type: TODO_LIST_ACTIVE,
		payload: request
	};

}