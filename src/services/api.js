import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.1.23:3331',
});

export default api;