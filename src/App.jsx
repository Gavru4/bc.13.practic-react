import { Route, Switch } from "react-router-dom";
import "./App.css";
import MainPage from "./components/MainPage/MainPage";
import TransactionListPage from "./components/TransactionListPage/TransactionListPage";

const App = () => {
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

export default App;
