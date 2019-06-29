import React, { Component } from 'react'

export default class Presenter extends Component {
	componentDidMount() {
		this.props.loadingStories()
	}

	render() {
		return (
			<div>
				{this.props.stories.map((story) => (
					<li key={story.objectID}>{story.title}</li>
				))}
			</div>
		)
	}
}
