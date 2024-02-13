import axios from 'axios';
import API_CONFIG from '../configs/API_CONFIG';

const defaultUrl = {
    headers: {
        'Content-Type': 'application/json',
    },
    baseURL: API_CONFIG.baseURL,
    timeout: 0
};

const HttpService = axios.create(defaultUrl);

HttpService.interceptors.request.use(async (config) => {
    return config;
}, (error) => {
    const { response } = error;
    console.error('[ERROR][Request]', response);
    return Promise.reject(response.data);
});

HttpService.interceptors.response.use((response) => {
    return response;
}, async (error) => {
    console.error('[ERROR][Response]', error);
    return Promise.reject(error);
});

export default HttpService;