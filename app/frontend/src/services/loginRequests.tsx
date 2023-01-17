import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3004'
});

export const requests = () => ({
    signin: async (username: string, password: string) => {
        const response = await api.post('/signin', { username, password })
        return response.data
    },

    logout: async () => {
        return { status: true }
    }
});