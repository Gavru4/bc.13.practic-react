import { createAction } from "@reduxjs/toolkit";

export const addCosts = createAction("transactions/addCosts");
export const addIncomes = createAction("transactions/addIncomes");
export const getCosts = createAction("transactions/getCosts");
export const getIncomes = createAction("transactions/getIncomes");
export const removeIncomes = createAction("transactions/removeIncomes");
export const removeCosts = createAction("transactions/removeCosts");

// export const addCosts = (transaction) => ({
//   type: "transactions/addCosts",
//   payload: transaction,
// });

// export const addIncomes = (transaction) => ({
//   type: "transactions/addIncomes",
//   payload: transaction,
// });

// export const getCosts = (transactions) => ({
//   type: "transactions/getCosts",
//   payload: transactions,
// });

// export const getIncomes = (transactions) => ({
//   type: "transactions/getIncomes",
//   payload: transactions,
// });
