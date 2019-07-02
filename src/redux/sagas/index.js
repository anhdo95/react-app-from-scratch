import { takeEvery, call, put, all } from 'redux-saga/effects'

import { setTodos } from "@actions/todo";
import { FETCH_TODOS } from '@app/constants';
import todoService from '@services/todo'

function* fetchTodos() {
  try {
    const todos = yield call(todoService.getTodos)

    yield put(setTodos(todos))

  } catch (error) {
    yield put(setTodos(undefined, error))
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(FETCH_TODOS, fetchTodos)
  ])
}
