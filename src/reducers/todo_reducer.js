import {
	TODO_LIST_ACTIVE
} from '../actions/index'

export default function(state = [], action) {
	switch(action.type) {

		case TODO_LIST_ACTIVE:
			return action.payload;

		default:
			return {
				1: {
					id: 1,
					title: 'breakfast @ 7',
					description: 'Breakfast at 7 am.'
				},
				2: {
					id: 2,
					title: 'meeting @ 10',
					description: 'Office meetinf at 10 am.'
				},
				3: {
					id: 3,
					title: 'lunch with the team',
					description: 'Team Lunch!!!'
				}
			};
			// return state;
	}
}