import * as config from '../../config';
import axios from 'axios';

export const baseApi = axios.create({
    baseURL: config.default.host
})