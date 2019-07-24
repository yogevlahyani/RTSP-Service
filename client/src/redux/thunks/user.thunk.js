import USER from '../../constants/user.constants';
import ERROR from '../../constants/error.contants';
import BackendServiceSDK from '../../services/BackendService';

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

export const register = (email, name, password) => async (dispatch) => {
	if (!email || !password) {
		return dispatch({ type: ERROR.ERROR, payload: 'Email and password are required!' });
	}

	try {
		const user = await BackendServiceSDK.register(email, name, password);

		return dispatch({ type: USER.DO_REGISTER, payload: user });
	} catch (e) {
		let payload = 'Something went wrong..';

		if (e.response && e.response.status === 409) {
			payload = 'User already exists with this email';
		}

		return dispatch({ type: ERROR.ERROR, payload });
	}
};
