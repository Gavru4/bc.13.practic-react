export const addCosts = (transaction) => ({
  type: "transactions/addCosts",
  payload: transaction,
});

export const addIncomes = (transaction) => ({
  type: "transactions/addIncomes",
  payload: transaction,
});

export const getCosts = (transactions) => ({
  type: "transactions/getCosts",
  payload: transactions,
});

export const getIncomes = (transactions) => ({
  type: "transactions/getIncomes",
  payload: transactions,
});
