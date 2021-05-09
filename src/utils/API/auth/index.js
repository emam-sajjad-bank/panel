import axiosInstance from "..";
import history from '../../../router/history';




export const loginAPI = async data => {
  const role = data.isAdmin ? "admin" : "user";
  try {
      
    let res = await axiosInstance.post(`${role}/login`, {...data , isAdmin: undefined}, {});
    localStorage.setItem("token" ,res.data.data.token );
    history.push("/");
    return res;
  } catch (error) {
    throw error;
  }
};
  