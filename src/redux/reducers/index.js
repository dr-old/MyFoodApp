import {combineReducers} from 'redux';
import generalReducer from './generalReducer';
import productReducer from './productReducer';

export default combineReducers({
  generalReducer,
  productReducer,
});
