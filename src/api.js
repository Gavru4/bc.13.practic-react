import axios from "axios";

const baseUrl = "http://localhost:3004/";

export const postTransaction = ({ transType, transaction }) => {
  return axios
    .post(baseUrl + transType, transaction)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};

export const editTransactionApi = ({ transType, transaction }) => {
  return axios
    .patch(baseUrl + transType + "/" + transaction.id, transaction)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};

export const getTransactions = (transType) => {
  return axios
    .get(baseUrl + transType)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};

export const removeTransactionApi = ({ id, transType }) => {
  return axios
    .delete(baseUrl + transType + "/" + id)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};

export const postCategory = ({ transType, category }) => {
  return axios
    .post(baseUrl + transType + "Cat", category)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};

export const getCategories = (transType) => {
  return axios
    .get(baseUrl + transType + "Cat")
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};
