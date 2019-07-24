import Immutable from 'seamless-immutable';
import USER from '../../constants/user.constants';
import ERRORS from '../../constants/error.contants';

const initialState = Immutable.from({
	id: null,
	email: null,
	name: null,
	token: null,
	// Temporary in this state
	error: null,
});

export default (state = initialState, { type, payload }) => {
	switch (type) {
	case USER.DO_REGISTER:
		return state.merge(payload);
	case USER.DO_LOGIN:
		return state.merge({ token: payload, error: null });
	// Temporary in this reducer
	case ERRORS.ERROR:
		return state.merge({ error: payload });
	default:
		return state;
	}
};
