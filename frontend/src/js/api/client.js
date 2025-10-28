'use strict';
import axios from 'axios';

const client = axios.create({
	baseURL: "http://localhost:5000/api",
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
	}
});

client.interceptors.request.use(config => {
	const token = localStorage.getItem('jwtToken');
	if (token) {
		config.headers['Authorization'] = `Bearer ${token}`;
	}
	return config;
}, error => {
	return Promise.reject(error);
});

export default client;
