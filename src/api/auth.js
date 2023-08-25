import axios from 'axios';

const authUrl = 'https://todo-list.alphacamp.io/api/auth';

export const login = async ({ username, password }) => {
  try {
    const { data } = await axios.post(`${authUrl}/login`, {
      username,
      password,
    });
    console.log(data);

    const { authToken } = data;
    if (authToken) {
      return { success: true, ...data };
    }

    return data;
  } catch (err) {
    console.log(err);
  }
};

export const register = async ({ username, password, email }) => {
  try {
    const { data } = await axios.post(`${authUrl}/register`, {
      username,
      password,
      email,
    });
    console.log(username, password, email);

    console.log(data);

    const { authToken } = data;
    if (authToken) {
      return { success: true, ...data };
    }

    return data;
  } catch (err) {
    console.log(err);
  }
};
