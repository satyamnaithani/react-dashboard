import { combineReducers } from 'redux';
import cakeReducer from './component1/comp1Reducer';
import iceCreamReducer from './component2/comp2Reducer';
import userReducer from './component3/comp3Reducer';

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  user: userReducer
})

export default rootReducer;