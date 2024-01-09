  
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://topi-api-test.herokuapp.com/'
    // baseURL: 'http://localhost:3000'
    //configure your ip plus the port that is running your backend
})

export default api;