import axios from 'axios/index';

const apiURL = process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:4000';

export const getAllUsers = async () => {
    try {
        const result = await axios.get(`${apiURL}/users`);
        return (result.data);
    } catch (error) {
        console.log(error);
    }
};

export const postUser = async (user) => {
    try {
        await axios.post(`${apiURL}/create-user`, user);
    } catch (error) {
        console.log(error);
    }
};