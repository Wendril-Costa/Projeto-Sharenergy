import axios from 'axios'

const api = axios.create({
    baseURL: 'https://random.dog/woof.json'
});

export const randomDog = async () => {
    const { data } = await api.get('')
    return data.url
};