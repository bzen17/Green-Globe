import axios from 'axios';
const jwt = require('jsonwebtoken');
// const { REACT_APP_API_NODE_ENV } = process.env;

// const env = REACT_APP_API_NODE_ENV;

// create axios instence
const authInterceptedAPI = axios.create();

// middleware before sending any requests
authInterceptedAPI.interceptors.request.use(async config => {
  try {
    const axiosConfig = {...config};
    if (localStorage.getItem('token-store')) {
      const tokenData = JSON.parse(localStorage.getItem('token-store'));
      axiosConfig.headers['Authorization'] = `Bearer ${tokenData['accessToken']['accessToken']}`;
    }
    axiosConfig.headers['Access-Control-Allow-Origin'] = '*';
    return axiosConfig;
  } catch (err) {
    console.log('interceptor Error:', err);
    return config;
  }
});

// middleware before sending any response back to axios call
authInterceptedAPI.interceptors.response.use(
  function(response) {
    return response;
  },
  function(err) {
    return Promise.reject(err);
  },
);

export default authInterceptedAPI;
