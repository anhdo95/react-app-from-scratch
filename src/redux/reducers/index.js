import { combineReducers } from 'redux'
import { ADD_TODO, SET_TODOS } from '@app/constants'

const initialState = {
	todos: [],
}

const todo = (state = initialState, action) => {
	switch (action.type) {
		case SET_TODOS:
			state.todos = action.payload.todos

			return { ...state }

		case ADD_TODO:
			state = state.todos.concat(action.payload.todo)

			return { ...state }

		default:
			return state
	}
}

export default combineReducers({
	todo,
})
