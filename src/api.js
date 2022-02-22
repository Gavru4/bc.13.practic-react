import axios from "axios";

const baseUrl = "https://wallet-roman-68c92-default-rtdb.firebaseio.com/";

export const postTransaction = ({ transType, transaction }) => {
  return axios
    .post(baseUrl + "/transaction/" + transType + ".json", transaction)
    .then((res) => ({ ...transaction, id: res.data.name }))
    .catch((err) => {
      throw err;
    });
};

export const editTransactionApi = ({ transType, transaction }) => {
  return axios
    .put(
      baseUrl + "/transaction/" + transType + "/" + transaction.id + ".json",
      transaction
    )
    .then((res) => ({ ...res.data, id: transaction.id }))
    .catch((err) => {
      throw err;
    });
};

export const getTransactionsApi = () => {
  return axios
    .get(baseUrl + "/transaction.json")
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};

export const removeTransactionApi = ({ id, transType }) => {
  return axios
    .delete(baseUrl + "/transaction/" + transType + "/" + id + ".json")
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
