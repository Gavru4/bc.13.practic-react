import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { getTransactions } from "./api";
import "./App.css";
import MainPage from "./components/MainPage/MainPage";
import TransactionListPage from "./components/TransactionListPage/TransactionListPage";
import { getCosts, getIncomes } from "./redux/transactions/transactionsActions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getTransactions("costs")
      .then((costs) => dispatch(getCosts(costs)))
      .catch((err) => console.log(err));
    getTransactions("incomes")
      .then((incomes) => dispatch(getIncomes(incomes)))
      .catch((err) => console.log(err));
  }, [dispatch]);

  return (
    <div className="App">
      <Switch>
        <Route path="/transactions/:transType">
          <TransactionListPage />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </div>
  );
};

// const mapDispatchToProps = {
//   getCostsProp: getCosts,
//   getIncomesProp: getIncomes,
// };
export default App;
