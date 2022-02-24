import { createStore } from 'redux';
//import rootReducer from "./rootreducer";
import changeTheNumber from './reducer';
import { incNumber } from './action';
import { decNumber } from './action';
import { combineReducers } from 'redux';

  const rootReducer1 = combineReducers({
    changeTheNumber
  })

const store = createStore(rootReducer1,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;