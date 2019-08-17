import { connect } from 'react-redux'
import { Dispatch } from 'redux';

import { fetchTodos } from '@actions/todo'

import Presenter from './Presenter'

const mapStateToProps = (state: RootState) => {
  return {
    todos: state.todo.todos,
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    loadingTodos: () => dispatch(fetchTodos()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Presenter)
