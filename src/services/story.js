import config from '@app/config'

export default {
	async getStories() {
		return new Promise((resolve) => {
			fetch(config.api.story.all)
				.then((res) => res.json())
				.then((data) => resolve(data.hits))
				.catch((error) => console.error(error))
		})
	},
}
