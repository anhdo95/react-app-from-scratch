import React, { Component } from 'react'

export default class Presenter extends Component {
	componentDidMount() {
		this.props.loadingStories()
	}

	render() {
		console.log('this.props :', this.props)

		return (
			<div>
				{this.props.stories.map((story) => (
					<li>{story.title}</li>
				))}
			</div>
		)
	}
}
