import { Component } from "react";
import MainPage from "./components/MainPage/MainPage";
import TransactionListPage from "./components/TransactionListPage/TransactionListPage";
// import TransactionForm from "./components/TransactionForm/TransactionForm"

class App extends Component {
  state = {
    activePage: "main", //main || transactionList
  };

  changePage = (activePage) => this.setState({ activePage });

  render() {
    return (
      <div>
        <h1>React Practic</h1>
        {this.state.activePage === "main" && <MainPage />}
        {this.state.activePage === "transactionList" && <TransactionListPage />}
      </div>
    );
  }
}

export default App;
