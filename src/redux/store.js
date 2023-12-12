// src/redux/store.js
import { createStore } from 'redux';
import rootReducer from './reducers'; // Adjust the import based on your file structure

const store = createStore(rootReducer);

export default store;
