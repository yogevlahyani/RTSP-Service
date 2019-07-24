export default class ValidateService {
	static isEmail(email) {
		const emailRegex = /\S+@\S+\.\S+/;

		return emailRegex.test(String(email).toLowerCase());
	}
}
