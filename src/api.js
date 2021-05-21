import axios from 'axios/index';

const apiURL = process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:4000';

export const getAttenders = async () => {
    try {
        const result = await axios.get(`${apiURL}/attenders`);
        return (result.data);
    } catch (error) {
        console.log(error);
    }
};

export const postForm = async (user) => {
    try {
        return await axios.post(`${apiURL}/post-form`, user);
    } catch (error) {
        console.log(error);
    }
};