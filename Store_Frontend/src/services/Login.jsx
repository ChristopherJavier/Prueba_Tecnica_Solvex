import axios from 'axios';

const baseURL = 'http://localhost:3000/';

async function login(credentials) {
	const response = await axios.get(`${baseURL}users`);
	const user = await response.data.filter((i) => i.email === credentials.email);

	if (user.length === 0) {
		throw new Error('Please Insert a valid email or sign up');
	}

	if (
		user[0].email === credentials.email &&
		user[0].password === credentials.password
	) {
		return user[0];
	}

	if (
		user[0].password !== credentials.password
	) {
		throw Error('Please insert a valid email or password');
	}
}

export default {
	login,
};
