import axiosInstance ,{role} from "..";


export const getAccountsByUserIdApi = async (id , page) => {
  try {
    let res = await axiosInstance.get(`${role()}/accounts/user/${id}?page=${page}`);
    return res;
  } catch (error) {
    throw error;
  }
};
export const createAccountsForUserApi = async (id , data) => {
  try {
    let res = await axiosInstance.post(`${role()}/accounts/user/${id}` , data);
    return res;
  } catch (error) {
    throw error;
  }
};