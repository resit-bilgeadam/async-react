import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:1337/api",
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
});

const requestMiddleware = (config) => {
  console.log("Request Middleware", config);

  return config;
};

const responseMiddleware = (response) => {
  console.log("Response Middleware", response);

  return response;
};

api.interceptors.request.use(requestMiddleware);

api.interceptors.response.use(responseMiddleware);

export default api;
