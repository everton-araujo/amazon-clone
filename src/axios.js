import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5001/clone-2183b/us-central1/api/' // API (cloud function) URL
});

export default instance;
