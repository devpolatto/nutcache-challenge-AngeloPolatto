import axios from 'axios';
import config from '../config.json';

const URL = config.URL;
//const Token = config.Token;

const api = axios.create({
   baseURL: URL,
})

export default api;