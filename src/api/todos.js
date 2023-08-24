import axios from 'axios';

const baseUrl = 'http://localhost:3001';

export const getTodos = async () => {
  try {
    const res = await axios.get(`${baseUrl}/todos`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const createTodo = async (payload) => {
  try {
    const { title, isDone } = payload;
    const res = await axios.post(`${baseUrl}/todos`, { title, isDone });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
