import {
	TODO_NEW,
	TODO_LIST_ACTIVE
} from '../actions/index'

export default function(state = {}, action) {

	switch(action.type) {

		case TODO_NEW:
			return { [action.payload.id]: action.payload, ...state };

		case TODO_LIST_ACTIVE:
			return action.payload.data;

		default:
			return state;
	}

}