import { createStore } from 'redux';
import reducer from '../reducers';

const store = createStore(reducer, {discount: false});


export default store;
