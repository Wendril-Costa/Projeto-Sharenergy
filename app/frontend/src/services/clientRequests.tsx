import axios from 'axios'
import { Client } from '../types/Client';

const api = axios.create({
    baseURL: 'http://localhost:3004'
});

export const requests = () => ({
    get: async (endpoint: string, token: string | null) => {
        const { data } = await api.get(endpoint, {
              headers: {
                'Authorization': `${token}`
              }
            })
        return data;
    },

    create: async ({name, username, email, telefone, endereco, cpf}: Client) => {
        const response = await api.post('/client-register', { name, username, email, telefone, endereco, cpf})
        console.log(response)
        return response.data
    },


    update: async ({name, username, email, telefone, endereco, cpf}: Client) => {
        const response = await api.put(`/client/:${cpf}`, { name, username, email, telefone, endereco, cpf})
        console.log(response)
        return response.data
    },

    delete: async ({name, username, email, telefone, endereco, cpf}: Client) => {
        console.log(cpf)
        const response = await api.delete(`/client/:${cpf}`, {data:{ name, username, email, telefone, endereco, cpf}})
        console.log(response)
        return response.data
    },

});