import * as React from 'react'

interface PresenterProps {
  todos: Todo[]
  loadingTodos: () => void
}

export default class Presenter extends React.Component<PresenterProps> {
	componentDidMount() {
		this.props.loadingTodos()
	}

	render() {
		return (
			<div>
				{this.props.todos.map((todo) => (
					<li key={todo.id}>{todo.title}</li>
				))}
			</div>
		)
	}
}
