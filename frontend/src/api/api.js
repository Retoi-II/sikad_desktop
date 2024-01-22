// src/api/api.js
import axios from 'axios';

const baseURL = 'http://localhost:8000'; // Sesuaikan dengan URL API Django

const api = axios.create({
  baseURL,
});

export const fetchData = () => {
  return api.get('/api/data/'); // Sesuaikan dengan URL endpoint di backend
};

export const postData = (data) => {
  return api.post('/api/data/', data); // Sesuaikan dengan URL endpoint di backend
};