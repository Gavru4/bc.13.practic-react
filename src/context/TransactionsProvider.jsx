import { createContext, useContext, useEffect, useState } from "react";
// import { getTransactions, removeTransactionApi } from "../api";

const TransactionsContext = createContext();
export const useTransactionsContext = () => useContext(TransactionsContext);

const TransactionsProvider = ({ children }) => {
  const [costs, setCosts] = useState([]);
  const [incomes, setIncomes] = useState([]);

  const addTransaction = (newTrans) => {
    const transType = newTrans.transType;
    transType === "costs" && setCosts((prevCosts) => [...prevCosts, newTrans]);

    transType === "incomes" &&
      setIncomes((prevIncomes) => [...prevIncomes, newTrans]);
  };

  return (
    <TransactionsContext.Provider
      value={{
        // delTransaction,
        costs,
        incomes,
        addTransaction,
        // editTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};

export default TransactionsProvider;
