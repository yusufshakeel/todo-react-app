import axios from 'axios';
import _ from 'lodash';

export const TODO_NEW = 'TODO_NEW';
export const TODO_LIST_ACTIVE = 'TODO_LIST_ACTIVE';
export const TODO_LIST_DONE = 'TODO_LIST_DONE';
export const TODO_LIST_DELETED = 'TODO_LIST_DELETED';
export const TODO_LIST_REMOTE_ITEM = 'TODO_LIST_REMOTE_ITEM';

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

export function updateStatusTodo(item, currList, payload, callback) {

	axios
		.put(`${API_HOST}/todo/${item.id}`, item )
		.then(() => {

			callback();

		});

	const data = _.filter(payload, (o) => {
		return o.id !== item.id;
	});

	return {
		type: currList,
		payload: { data: data }
	};

}

export function deleteTodo(id, currList, payload, callback) {

	axios
		.delete(`${API_HOST}/todo/${id}`)
		.then(() => {

			callback();

		});

	const data = _.filter(payload, (o) => {
		return o.id !== id;
	});

	return {
		type: currList,
		payload: { data: data }
	};

}