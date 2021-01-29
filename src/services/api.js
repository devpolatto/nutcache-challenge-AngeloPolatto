import axios from 'axios';
import config from '../config.json';

const URL = config.Token;
const Token = config.Token;

const api = axios.create({
   baseURL: URL+Token,
})

export default api;