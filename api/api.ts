import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_URL;
const apiKey = process.env.NEXT_PUBLIC_API_KEY;

const api = axios.create({
  baseURL,
  params: {
    api_key: apiKey
  }
});

export default api;
