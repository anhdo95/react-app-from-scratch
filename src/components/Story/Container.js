import { connect } from 'react-redux'

import Presenter from './Presenter'

import { fetchStories } from '@actions/story'

const mapStateToProps = (state) => {
	return {
		stories: state.story.stories,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		loadingStories: () => dispatch(fetchStories()),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Presenter)
