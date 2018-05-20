import { combineReducers } from 'redux';
import TodoReducer from './todo_reducer';

const rootReducer = combineReducers({
	todo: TodoReducer
});

export default rootReducer;