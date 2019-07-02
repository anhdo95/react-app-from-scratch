import config from '@app/config'

export default {
	async getTodos() {
		return new Promise((resolve) => {
			fetch(config.api.todo.all)
				.then((res) => res.json())
				.then((data) => resolve(data.todos))
				.catch((error) => console.error(error))
		})
	},
}
