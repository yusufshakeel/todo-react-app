import { combineReducers } from 'redux';
import { reducer as formReducer } from "redux-form";
import TodoReducer from './todo_reducer';

const rootReducer = combineReducers({
	form: formReducer,
	todo: TodoReducer
});

export default rootReducer;