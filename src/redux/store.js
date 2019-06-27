import { createStore } from 'redux';
import rootReducer from '@app/redux/reducers';

const store = createStore(rootReducer);

export default store;
