import { takeEvery, call, put, all } from 'redux-saga/effects'

import { setStories } from "@actions/story";
import { FETCH_STORIES } from '@app/constants';
import storyService from '@services/story'

function* fetchStories() {
  try {
    const stories = yield call(storyService.getStories)

    yield put(setStories(stories))

  } catch (error) {
    yield put(setStories(undefined, error))
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(FETCH_STORIES, fetchStories)
  ])
}
