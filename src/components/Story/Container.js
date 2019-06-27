import { connect } from 'react-redux'

import Presenter from './Presenter'

import { setStories } from '@app/redux/actions/story';

const mapStateToProps = (state) => {
	return {
		stories: state.story.stories,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
    loadingStories: () => {
      fetch(`https://hn.algolia.com/api/v1/search?tags=story`)
        .then(res => res.json())
        .then(data => {
          console.log('data', data)
          dispatch(setStories(data.hits))
        })
    }
  }
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Presenter)
