import axios from 'axios';

const baseURL = 'http://localhost:3000/';

async function signUp(credentials) {
	const response = await axios.post(`${baseURL}signUp`, credentials);
	return response.data;
}

export default {
	signUp,
};
