import axiosInstance ,{role} from "..";


export const payBudgeApi = async data => {
  try {
    let res = await axiosInstance.post(`${role()}/payments/account` , data);
    return res;
  } catch (error) {
    throw error;
  }
};
export const payLoanApi = async data => {
  try {
    let res = await axiosInstance.post(`${role()}/payments/loan` , data);
    return res;
  } catch (error) {
    throw error;
  }
};