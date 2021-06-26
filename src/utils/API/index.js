import axios from "axios";
import jwt_decode from "jwt-decode";
// import { LogOut } from "../LogOut";

// eslint-disable-next-line no-undef
let baseURL = "http://localhost:3000";



const config = {
  baseURL: `${baseURL}/api/${localStorage.getItem("token") ? jwt_decode(localStorage.getItem("token")).role : ""}`,
  headers: {
    "Content-Type": "application/json",
  },
};

const axiosInstance = axios.create(config);

const token = () => localStorage.getItem("token");

axiosInstance.interceptors.request.use((config) => {
  if (token()) {
    config.headers.token = `${token()}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.message) {
      if (error.message === "Network Error") {
        //TODO refactor this section completLy
      }
      const errorMessage = error.message.toLowerCase().trim();
      const xmlError =
        "failed to execute 'setrequestheader' on 'xmlhttprequest': value is not a valid bytestring.";
      if (errorMessage === xmlError) {
        //TODO refactor this section completLy
      }
    }

    const { response } = error;
    if (response) {
      const { status } = response;
      if (status) {
        if (status === 401) {
          // LogOut();
        }
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
