import { SET_STORIES, FETCH_STORIES } from '@app/constants'

export const fetchStories = () => {
  return {
    type: FETCH_STORIES,
  }
}

export const setStories = (stories) => {
  return {
    type: SET_STORIES,
    payload: {
      stories
    }
  }
}
