import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sv443.net/jokeapi/v2/joke/Any',
});

export default api;
