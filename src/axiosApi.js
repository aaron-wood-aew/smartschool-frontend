import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/school_api/',
    timeout: 5000,
    headers: {
        'Authorization': "JWT " + localStorage.getItem('access'),
        'Content-Type': 'application/json',
        'accept': 'application/json'
    }
});

export default axiosInstance