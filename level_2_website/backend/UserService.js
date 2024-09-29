import axios from axios; 
const API_URL = 'https://localhost:5000';

export const getAllUsers = () => {
    return axios.get(`${API_URL}/users`);
};

export const getUser = (id) => {
    return axios.get(`${API_URL}/users/${id}`);
};

export const createUser = (data) => {
    return axios.post(`${API_URL}/users`, data);
};

export const updateUser = (id, data) => {
    return axios.put(`${API_URL}/users/${id}`,data);
};

export const deleteUser = (id) => {
    return axios.delete(`${API_URL}/users/${id}`);
};
