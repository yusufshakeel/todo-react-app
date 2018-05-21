import axios from 'axios';

export const TODO_NEW = 'TODO_NEW';
export const TODO_LIST_ACTIVE = 'TODO_LIST_ACTIVE';
export const TODO_LIST_DONE = 'TODO_LIST_DONE';
export const TODO_LIST_DELETED = 'TODO_LIST_DELETED';

export const TODO_STATUS_ACTIVE = 'ACTIVE';
export const TODO_STATUS_DONE = 'DONE';
export const TODO_STATUS_DELETED = 'DELETED';

const API_HOST = 'http://localhost:3000';

export function createTodo(values, callback) {

	const request = axios
						.post(`${API_HOST}/todo`, { ...values, status: TODO_STATUS_ACTIVE })
						.then(() => {
							callback();
						});
	
	return {
		type: TODO_NEW,
		payload: request
	};

}

export function fetchTodo(todoStatus) {

	const request = axios.get(`${API_HOST}/todo?status=${todoStatus}`);

	return {
		type: TODO_LIST_ACTIVE,
		payload: request
	};

}