import axios from "axios";
import jwt_decode from "jwt-decode";
import ErrorAndAlert from "../../components/errorNAlert";
import history from "../../router/history";

// eslint-disable-next-line no-undef
let baseURL = "http://localhost:3000";
const token = () => localStorage.getItem("token");


const config = () =>{
  return {
    baseURL: `${baseURL}/api/`,
    headers: {
      "Content-Type": "application/json",
    },
  };
}; 

const axiosInstance = axios.create(config());

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
      ErrorAndAlert({message:response.data.message ,type:"error"});
      
      const { status } = response;
      if (status) {
        if (status === 401) {
          localStorage.clear();
          history.push("/login");
        }
      }
    }
    return Promise.reject(error);
  }
);



export const role = () =>{
  const role = token() ? jwt_decode(token()).role : "";
  return role;
};

export default axiosInstance;
