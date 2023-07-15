import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://dummyapi.online/api',
});

export default axiosInstance;
