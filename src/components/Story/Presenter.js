import React, { Component } from 'react'

export default class Presenter extends Component {
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
