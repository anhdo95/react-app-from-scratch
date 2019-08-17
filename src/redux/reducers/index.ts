import { combineReducers } from 'redux'
import { ADD_TODO, SET_TODOS } from '@/constants'

export const initialState: TodoState = {
	todos: [],
}

const todo = (state = initialState, action: ReduxAction) => {
	switch (action.type) {
		case SET_TODOS:
			state.todos = action.payload.todos

			return { ...state }

		case ADD_TODO:
			state.todos = state.todos.concat(action.payload.todo)

			return { ...state }

		default:
			return state
	}
}

export default combineReducers({
	todo,
})
