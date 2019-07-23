import USER from '../constants/user.constants';
import ERROR from '../constants/error.contants';
import BackendServiceSDK from '../services/BackendService';

export const login = (email, password) => async (dispatch) => {
	if (!email || !password) {
		return dispatch({ type: ERROR.ERROR, payload: 'Wrong credentials' });
	}

	try {
		const token = await BackendServiceSDK.authenticate(email, password);
		BackendServiceSDK.setToken(token);

		return dispatch({ type: USER.DO_LOGIN, payload: token });
	} catch (e) {
		return dispatch({ type: ERROR.ERROR, payload: 'Wrong credentials' });
	}
};
