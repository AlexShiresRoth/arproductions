import { combineReducers } from 'redux';
import refs from './refs';
import payments from './payments';
import location from './location';
import cookies from './cookies';

export default combineReducers({ refs, payments, location, cookies });
