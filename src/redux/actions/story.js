import { SET_STORIES } from '@app/constants'

export const setStories = (stories) => {
  return {
    type: SET_STORIES,
    payload: {
      stories
    }
  }
}
