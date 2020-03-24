import { combineReducers } from 'redux';
import refs from './refs';
import payments from './payments';
import location from './location';
export default combineReducers({ refs, payments, location });
