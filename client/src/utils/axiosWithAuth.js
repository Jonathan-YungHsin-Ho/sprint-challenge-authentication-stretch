import axios from 'axios';

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: 'https://sprint-challenge-auth-jyh.herokuapp.com/api',
    headers: {
      Authorization: token,
    },
  });
};
