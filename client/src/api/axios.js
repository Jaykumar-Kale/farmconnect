import axios from "axios";

const api = axios.create({
  baseURL: "https://farmconnect-api-cqc0.onrender.com/api",
});

api.interceptors.request.use(
  (req) => {
    const token = localStorage.getItem("token");
    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
  },
  (error) => Promise.reject(error)
);

export default api;
