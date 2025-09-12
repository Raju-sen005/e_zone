import axios from 'axios';
import { navigate } from './navigation';

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add request interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Add response interceptor
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        // Optional: handle common error globally
        if (error.response?.status === 401) {
            localStorage.removeItem('token');
            // Redirect to login
            navigate('/login');
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
