import RTSP from '../../constants/rtsp.constants';
import ERROR from '../../constants/error.contants';
import BackendService from '../../services/BackendService';

export const getAll = () => async (dispatch) => {
	try {
		const { data } = await BackendService.getAllRtsps();

		return dispatch({ type: RTSP.GET_ALL, payload: data });
	} catch (e) {
		return dispatch({ type: ERROR.ERROR_GET, payload: e });
	}
};

export const create = (name, url) => async (dispatch) => {
	if (!url) {
		return;
	}

	try {
		const { data } = await BackendService.createRtsp(name, url);

		return dispatch({ type: RTSP.CREATE, payload: data });
	} catch (e) {
		return dispatch({ type: ERROR.ERROR_CREATE, payload: e });
	}
};

export const getOne = id => async (dispatch) => {
	if (!id) {
		return;
	}

	try {
		const { data } = await BackendService.getOneRtsp(id);

		return dispatch({ type: RTSP.GET_ONE, payload: data });
	} catch (e) {
		return dispatch({ type: ERROR.ERROR_GET_ONE, payload: e });
	}
};
