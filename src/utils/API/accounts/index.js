import axiosInstance ,{role} from "..";


export const getAccountsByUserIdApi = async (id , page) => {
  try {
    let res = await axiosInstance.get(`${role()}/accounts/user/${id}?page=${page}`);
    return res;
  } catch (error) {
    throw error;
  }
};
export const createAccountsForUserApi = async (userId , data) => {
  try {
    let res = await axiosInstance.post(`${role()}/accounts/user/${userId}` , data);
    return res;
  } catch (error) {
    throw error;
  }
};
export const editAccountsForUserApi = async (accountId , data) => {
  try {
    let res = await axiosInstance.put(`${role()}/accounts/${accountId}` , data);
    return res;
  } catch (error) {
    throw error;
  }
};