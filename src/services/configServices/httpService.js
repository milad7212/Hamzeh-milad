import axios from "axios";
import { toastErrorMessage } from "../../utils/toastMessage/toastMessage";

// const token = localStorage.getItem("token");

axios.defaults.headers.post["Content-Type"] = "application/json";

// if (token) axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

axios.interceptors.response.use(null, (error) => {
  const expectedErrors =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedErrors) {
    toastErrorMessage("There was a problem with the server");
  }
  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
