import config from '@app/config';

export default {
  getStories() {
    return new Promise(resolve => {
      fetch(config.api.story.all)
        .then(res => res.json())
        .then(data => resolve(data.hits))
    })
  }
}
