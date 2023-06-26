import axios from 'axios';

const baseURL = 'http://localhost:3000/';

async function getAll() {
	const request = await axios.get(`${baseURL}products`);
	return request.data;
}

async function deleteOne(id) {
	const request = await axios.delete(`${baseURL}products/${id}`);
	return request.data;
}

async function updateOne(id, updateObject) {
	const request = await axios.put(`${baseURL}products/${id}`, updateObject);
	return request.data;
}
export default {
	getAll,
	deleteOne,
	updateOne,
};
