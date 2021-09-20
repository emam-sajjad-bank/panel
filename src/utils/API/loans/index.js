import axiosInstance ,{role} from "..";


export const createLoanApi = async data => {
  try {
    let res = await axiosInstance.post(`${role()}/loans` , data);
    return res;
  } catch (error) {
    throw error;
  }
};

export const deleteLoanApi = async (loan_id) => {
  try {
    let res = await axiosInstance.delete(`${role()}/loans/${loan_id}` );
    return res;
  } catch (error) {
    throw error;
  }
};
