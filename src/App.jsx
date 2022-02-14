import { Route, Switch } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import TransactionListPage from "./components/TransactionListPage/TransactionListPage";

const App = () => {
  return (
    <div>
      <Switch>
        <Route path={"/transactions/:transType"}>
          <TransactionListPage />
        </Route>
        <Route path={"/"}>
          <MainPage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
