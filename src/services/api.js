import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.114:3331',
});

export default api;