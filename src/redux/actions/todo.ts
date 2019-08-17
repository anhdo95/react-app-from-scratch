import { ADD_TODO, FETCH_TODOS, SET_TODOS } from '@/constants'

export const fetchTodos = () => {
	return {
		type: FETCH_TODOS,
	}
}

export const setTodos = (todos: Todo[], error?: any) => {
  return {
    type: SET_TODOS,
    payload: {
      todos,
      error,
    },
    error: !!error
  }
};


export const addTodo = (todo: Todo) => {
	return {
		type: ADD_TODO,
		payload: {
			todo,
		},
	}
}
