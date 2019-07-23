import axios from 'axios';
import config from '../config';

let backendService = null;

class BackendService {
	constructor() {
		this.token = null;
	}

	setToken(token) {
		this.token = token;
		localStorage.setItem('token', this.token);
	}

	authenticate(email, password) {
		return BackendService.getToken(email, password);
	}

	static async getToken(email, password) {
		const { data } = await axios.post(`${config.service.baseUrl}/auth`, { email, password });

		return data.access_token;
	}
}

const getBackendService = () => {
	if (!backendService) {
		backendService = new BackendService();
	}

	return backendService;
};

export default getBackendService();
