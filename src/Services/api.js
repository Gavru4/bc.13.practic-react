import axios from "axios";
const baseUrl = " http://localhost:3000";

export const postTransaction = ({ transType, transaction }) => {
  return axios
    .post(baseUrl + "/" + transType, transaction)
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};
