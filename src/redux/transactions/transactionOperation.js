import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  editTransactionApi,
  getTransactionsApi,
  postTransaction,
  removeTransactionApi,
} from "../../api";

const transformGetTransactions = (data) =>
  Object.entries(data).map(([id, transaction]) => ({ ...transaction, id }));

export const addCosts = createAsyncThunk(
  "transaction/addCosts",
  async (transaction, thunkApi) => {
    try {
      const newTransaction = await postTransaction({
        transType: "costs",
        transaction,
      });
      return newTransaction;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addIncomes = createAsyncThunk(
  "transaction/addIncomes",
  async (transaction, thunkApi) => {
    try {
      const newTransaction = await postTransaction({
        transType: "incomes",
        transaction,
      });
      return newTransaction;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getTransactions = createAsyncThunk(
  "transaction/getTransactions",
  async (_, thunkApi) => {
    try {
      const transaction = await getTransactionsApi();

      return {
        costs: transaction?.costs
          ? transformGetTransactions(transaction.costs)
          : [],
        incomes: transaction?.incomes
          ? transformGetTransactions(transaction.incomes)
          : [],
      };
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const removeTransaction = createAsyncThunk(
  "transaction/removeTransaction",
  async ({ transType, id }, thunkApi) => {
    try {
      await removeTransactionApi({ transType, id });
      return { transType, id };
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const editTransaction = createAsyncThunk(
  "transaction/editTransaction",
  async ({ transType, transaction }, thunkApi) => {
    try {
      const editedTransaction = await editTransactionApi({
        transType,
        transaction,
      });

      return { transType, transaction: editedTransaction };
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
