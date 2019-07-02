import { ADD_TODO, FETCH_TODOS, SET_TODOS } from '@app/constants'

export const fetchTodos = () => {
	return {
		type: FETCH_TODOS,
	}
}

export const setTodos = (todos, error) => {
  return {
    type: SET_TODOS,
    payload: {
      todos,
      error,
    },
    error: !!error
  }
};


export const addTodo = (todo) => {
	return {
		type: ADD_TODO,
		payload: {
			todo,
		},
	}
}
