import { createContext, useContext, useEffect, useState } from "react";
import { getTransactions, removeTransactionApi } from "../../api";

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

  const delTransaction = ({ id, transType }) => {
    removeTransactionApi({ id, transType }).then((res) => {
      transType === "costs" &&
        setCosts((prevCosts) => prevCosts.filter((el) => el.id !== id));
      transType === "incomes" &&
        setIncomes((prevIncomes) => prevIncomes.filter((el) => el.id !== id));
    });
  };

const editTransaction=(transaction)=>{
const transType=transaction.transType;
transType === "costs" && setCosts((prevCosts) =>prevCosts.map((el)=>el.id===transaction.id?transaction:el ) );

transType === "incomes" &&
  setIncomes((prevIncomes) => prevIncomes.map((el)=>el.id===transaction.id?transaction:el ));
}

  useEffect(() => {
    getTransactions("costs")
      .then((costs) => setCosts(costs))
      .catch((err) => console.log(err));
    getTransactions("incomes")
      .then((incomes) => setIncomes(incomes))
      .catch((err) => console.log(err));
  }, []);



  return (
    <TransactionsContext.Provider
      value={{ delTransaction, costs, incomes, addTransaction,editTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};

export default TransactionsProvider;
