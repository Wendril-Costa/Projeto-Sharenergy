import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3004'
});

export const requests = () => ({
    validateToken: async (token: string) => {
        return {
            user: { id: 3, username: 'José', email: 'jose@gmail.com' }
        };
        const response = await api.post('/validate', { token })
        return response.data
    },

    signin: async (username: string, password: string) => {
        const response = await api.post('/signin', { username, password })
        console.log(response.data)
        return response.data
    },

    logout: async () => {
        return { status: true }
    }
});