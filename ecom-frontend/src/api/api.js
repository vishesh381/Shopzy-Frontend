import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL || "http://localhost:8080/api",
  withCredentials: true,
});
api.interceptors.request.use(
  (config) => {
    const authData = localStorage.getItem("auth");
    if (authData) {
      const token = JSON.parse(authData).jwtToken || JSON.parse(authData).token;
      console.log("Attaching token:", token);
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } else {
      console.log("No auth data found");
    }
    return config;
  },
  (error) => Promise.reject(error)
);


export default api;
