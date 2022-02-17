import { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { getTransactions } from "./api";
import "./App.css";
import MainPage from "./components/MainPage/MainPage";
import TransactionListPage from "./components/TransactionListPage/TransactionListPage";
import { getCosts, getIncomes } from "./redux/transactions/transactionsActions";

const App = ({ getCostsProp, getIncomesProp }) => {
  useEffect(() => {
    getTransactions("costs")
      .then((costs) => getCostsProp(costs))
      .catch((err) => console.log(err));
    getTransactions("incomes")
      .then((incomes) => getIncomesProp(incomes))
      .catch((err) => console.log(err));
  }, []);

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

const mapDispatchToProps = {
  getCostsProp: getCosts,
  getIncomesProp: getIncomes,
};
export default connect(null, mapDispatchToProps)(App);
