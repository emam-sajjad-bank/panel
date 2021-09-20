import axiosInstance ,{role} from "..";


export const getUsersApi = async page => {
  try {
    let res = await axiosInstance.get(`${role()}/users?page=${page}`);
    return res;
  } catch (error) {
    throw error;
  }
};

export const getUserByIdApi = async id => {
  try {
    let res = await axiosInstance.get(`${role()}/users/${id}`);
    return res;
  } catch (error) {
    throw error;
  }
};
  

export const addUserApi = async data => {
  let finalData = {...data};
  for (var propName in finalData) {
    if (finalData[propName] === "") {
      delete finalData[propName];
    }
  }
  try {
    let res = await axiosInstance.post(`${role()}/users/register-user` , finalData);
    return res;
  } catch (error) {
    throw error;
  }
};

export const editUserApi = async (id , data) => {
  try {
    let res = await axiosInstance.put(`${role()}/users/${id}` , data);
    return res;
  } catch (error) {
    throw error;
  }
};
  