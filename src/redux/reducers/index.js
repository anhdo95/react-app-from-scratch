import { combineReducers } from 'redux'
import { SET_STORIES } from '@app/constants'

const initialState = {
	stories: [],
}

const story = (state = initialState, action) => {
	switch (action.type) {
		case SET_STORIES:
      console.log('action', action)
			state.stories = action.payload.stories

			return { ...state }

		default:
			return state
	}
}

export default combineReducers({
	story,
})
