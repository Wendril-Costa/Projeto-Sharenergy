import axios from 'axios';

const api = axios.create({
    baseURL: 'https://randomuser.me/api/'
});

export const randomUser = async (endpoint: any) => {
    const { data } = await api.get(endpoint);
    return data
};