import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { removeCosts, removeIncomes } from "./transactionsActions";
import {
  addCosts,
  addIncomes,
  editTransaction,
  getTransactions,
  removeTransaction,
} from "./transactionOperation";

const costsReducer = createReducer([], {
  [addCosts.fulfilled]: (state, { payload }) => [...state, payload],
  [getTransactions.fulfilled]: (_, { payload: { costs } }) => costs,
  [removeTransaction.fulfilled]: (state, { payload }) => {
    const { transType, id } = payload;
    return transType === "costs" ? state.filter((el) => el.id !== id) : state;
  },
  [editTransaction.fulfilled]: (state, { payload }) => {
    const { transType, transaction } = payload;
    return transType === "costs"
      ? state.map((el) => (el.id === transaction.id ? transaction : el))
      : state;
  },
});

const incomesRudecer = createReducer([], {
  [addIncomes.fulfilled]: (state, { payload }) => [...state, payload],
  [getTransactions.fulfilled]: (_, { payload: { incomes } }) => incomes,
  [removeTransaction.fulfilled]: (state, { payload }) => {
    const { transType, id } = payload;
    return transType === "incomes" ? state.filter((el) => el.id !== id) : state;
  },
  [editTransaction.fulfilled]: (state, { payload }) => {
    const { transType, transaction } = payload;
    return transType === "incomes"
      ? state.map((el) => (el.id === transaction.id ? transaction : el))
      : state;
  },
});

const isLoadingReduser = createReducer(false, {
  [addCosts.pending]: () => true,
  [addCosts.fulfilled]: () => false,
  [addCosts.rejected]: () => false,
  [addIncomes.pending]: () => true,
  [addIncomes.fulfilled]: () => false,
  [addIncomes.rejected]: () => false,
  [getTransactions.pending]: () => true,
  [getTransactions.fulfilled]: () => false,
  [getTransactions.rejected]: () => false,
  [removeTransaction.pending]: () => true,
  [removeTransaction.fulfilled]: () => false,
  [removeTransaction.rejected]: () => false,
});

const transactionsReducer = combineReducers({
  costs: costsReducer,
  incomes: incomesRudecer,
  isLoading: isLoadingReduser,
});
export default transactionsReducer;
