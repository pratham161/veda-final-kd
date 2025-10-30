import axios from 'axios';
const AxiosInstance = axios.create({

  baseURL: 'https://api.vedaglobalgroup.com', 

  withCredentials: true,
}); 

AxiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    console.log("token",token)
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default AxiosInstance;