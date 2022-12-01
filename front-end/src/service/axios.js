import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3330/api',
    timeout: 50000
});

export { api }