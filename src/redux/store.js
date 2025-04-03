import { createStore ,applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import resultReducer from './reducer';
import resultData from '../data/student_data.json'

const initialState = {
    results: resultData,
    currentResult: null,
    loading: false,
    error: null
  };

const store = createStore(
    resultReducer,
    initialState,
    applyMiddleware(thunk)
);
export default store;