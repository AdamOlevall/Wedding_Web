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

export const postTask = async (task) => {
    try {
        return await axios.post(`${apiURL}/post-task`, task);
    } catch (error) {
        console.log(error);
    }
};

export const getTasks = async () => {
    try {
        const result = await axios.get(`${apiURL}/tasks`);
        return (result.data);
    } catch (error) {
        console.log(error);
    }
};

export const addAssignee = async (assignee) => {
    try {
        return await axios.put(`${apiURL}/add-assignee`, assignee);
    } catch (error) {
        console.log(error);
    }
};

export const toggleCompleteTask = async (completeTask) => {
    try {
       return await axios.put(`${apiURL}/toggle-complete-task`, completeTask);
    } catch (error) {
        console.log(error);
    }
};