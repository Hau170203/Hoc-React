import axios from 'axios';

const API_DOMAIN = ' http://localhost:3000/';

export const get = async (patch) =>{
    const response = await axios.get(`${API_DOMAIN}${patch}`);
    const result = await response.data;
    return result;
}

export const post = async (patch, options) => {
    const result = await axios.post(`${API_DOMAIN}${patch}`,options);
    return result;
}