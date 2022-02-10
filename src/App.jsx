import { useState, useEffect } from "react";
import { getTransactions, removeTransactionApi } from "./api";
import MainPage from "./components/MainPage/MainPage";
import TransactionListPage from "./components/TransactionListPage/TransactionListPage";

const App = () => {
  const [activePage, setActivePage] = useState("main");
  const [costs, setCosts] = useState([]);
  const [incomes, setIncomes] = useState([]);
  const [transactions, setTransactions] = useState([]);

  const changePage = (activePage) => setActivePage(activePage);

  const addTransaction = (newTrans) => {
    const transType = newTrans.transType; //costs/incomes

    transType === "costs" && setCosts((prevCosts) => [...prevCosts, newTrans]);
    transType === "incomes" &&
      setCosts((prevIncomes) => [...prevIncomes, newTrans]);
  };

  useEffect(() => {
    getTransactions("costs")
      .then((costs) => setCosts(costs))
      .catch((err) => console.log(err));
    getTransactions("incomes")
      .then((incomes) => setIncomes(incomes))
      .catch((err) => console.log(err));
  }, []);

  const delTransaction = ({ id, transType }) => {
    removeTransactionApi({ id, transType }).then((res) => {
      transType === "costs" &&
        setCosts((prevCosts) => prevCosts.filter((el) => el.id !== id));
      transType === "incomes" &&
        setIncomes((prevIncomes) => prevIncomes.filter((el) => el.id !== id));
    });
  };
  return (
    <div>
      {activePage === "main" && (
        <MainPage changePage={changePage} addTransaction={addTransaction} />
      )}
      {activePage === "incomes" && (
        <TransactionListPage
          changePage={changePage}
          transType={"incomes"}
          transactions={incomes}
          delTransaction={delTransaction}
        />
      )}
      {activePage === "costs" && (
        <TransactionListPage
          changePage={changePage}
          transType={"costs"}
          transactions={costs}
          delTransaction={delTransaction}
        />
      )}
    </div>
  );
};

export default App;
