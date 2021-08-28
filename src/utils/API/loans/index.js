import axiosInstance ,{role} from "..";


export const createLoanApi = async data => {
  try {
    let res = await axiosInstance.post(`${role()}/loans` , data);
    return res;
  } catch (error) {
    throw error;
  }
};
export const updateLoanApi = async (loan_id, data) => {
  try {
    let res = await axiosInstance.post(`${role()}/loans/${loan_id}` , data);
    return res;
  } catch (error) {
    throw error;
  }
};
