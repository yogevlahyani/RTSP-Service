import { combineReducers } from 'redux';
import userReducer from './user.reducer';
import rtspReducer from './rtsp.reducer';

const reducers = {
	user: userReducer,
	rtsp: rtspReducer,
};

export default combineReducers(reducers);
