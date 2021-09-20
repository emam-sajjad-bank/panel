import axiosInstance ,{role} from "..";


export const getOptionsApi = async () => {
  try {
    let res = await axiosInstance.get(`${role()}/options`);
    return res;
  } catch (error) {
    throw error;
  }
};
export const updateOptionsApi = async data => {
  try {
    let res = await axiosInstance.put(`${role()}/options/${data._id}` , {
      name : data.name,
      value: data.value,
      key: data.key,
    });
    return res;
  } catch (error) {
    throw error;
  }
};