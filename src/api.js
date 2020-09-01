import axios from 'axios/index';

export const getAllUsers = async () => {
    try {
        const result = await axios.get('http://localhost:8080/users');
        return (result.data);
    } catch (error) {
        console.log(error);
    }
};

export const postUser = async (user) => {
    try {
        await axios.post('http://localhost:8080/create-user', user);
    } catch (error) {
        console.log(error);
    }
};