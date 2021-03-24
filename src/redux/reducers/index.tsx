import { combineReducers } from 'redux';
import authentication from './authentication.reducer';
import enterprises from './enterprises.reducer';
import loading from './loading.reducer';

export const rootReducer = combineReducers({
  authentication,
  enterprises,
  loading
});