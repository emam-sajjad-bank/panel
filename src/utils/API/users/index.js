import axiosInstance from "..";


export const getUsersApi = async page => {
  try {
    let res = await axiosInstance.get(`/users?page=${page}`);
    return res;
  } catch (error) {
    throw error;
  }
};
  

export const addUserApi = async data => {
  try {
    let res = await axiosInstance.post(`/users/register-user` , data);
    return res;
  } catch (error) {
    throw error;
  }
};
  