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

    const { authToken } = data;
    if (authToken) {
      return { success: true, ...data };
    }

    return data;
  } catch (err) {
    console.log(err);
  }
};

export const checkPermission = async (authToken) => {
  try {
    const response = await axios.get(`${authUrl}/test-token`, {
      headers: {
        Authorization: 'Bearer ' + authToken,
      },
    });
    return response.data.success;
  } catch (error) {
    console.error('[Check Permission Failed]:', error);
  }
};
