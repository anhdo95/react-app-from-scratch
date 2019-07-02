import { connect } from 'react-redux'

import Presenter from './Presenter'

import { fetchTodos } from '@actions/todo'

const mapStateToProps = (state) => {
	return {
		todos: state.todo.todos,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		loadingTodos: () => dispatch(fetchTodos()),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Presenter)
