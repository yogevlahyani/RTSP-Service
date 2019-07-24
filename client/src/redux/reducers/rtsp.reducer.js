import Immutable from 'seamless-immutable';
import RTSP from '../../constants/rtsp.constants';

const initialState = Immutable.from({
	name: null,
	url: null,
	list: [],
});

export default (state = initialState, { type, payload }) => {
	switch (type) {
	case RTSP.GET_ALL:
		return state.merge({ list: payload });
	case RTSP.CREATE:
		return state.merge({ list: [...state.list, payload] });
	case RTSP.GET_ONE:
		return state.merge({ name: payload.name, url: payload.url });
	default:
		return state;
	}
};
