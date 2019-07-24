import axios from 'axios';
import config from '../config';

let backendService = null;

class BackendService {
	constructor() {
		this.token = localStorage.getItem('token') || null;
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

	register(email, name, password) {
		return axios.post(`${config.service.baseUrl}/users`, { email, name, password });
	}

	getAllRtsps() {
		const headers = { Authorization: `Bearer ${this.token}` };

		return axios.get(`${config.service.baseUrl}/rtsps`, { headers });
	}

	getOneRtsp(id) {
		const headers = { Authorization: `Bearer ${this.token}` };

		return axios.get(`${config.service.baseUrl}/rtsps/${id}`, { headers });
	}

	createRtsp(name, url) {
		const headers = { Authorization: `Bearer ${this.token}` };

		return axios.post(`${config.service.baseUrl}/rtsps`, { name, url }, { headers });
	}
}

const getBackendService = () => {
	if (!backendService) {
		backendService = new BackendService();
	}

	return backendService;
};

export default getBackendService();
