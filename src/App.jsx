import { Component } from "react";
import { getTransactions, removeTransactionApi } from "./api";
import MainPage from "./components/MainPage/MainPage";
import TransactionListPage from "./components/TransactionListPage/TransactionListPage";

class App extends Component {
  state = {
    activePage: "main", //main||transactionList
    costs: [],
    incomes: [],
    // transactions: [],
  };

  changePage = (activePage) => this.setState({ activePage });

  addTransaction = (newTrans) => {
    const transType = newTrans.transType; //costs/incomes
    this.setState((prevState) => ({
      [transType]: [...prevState[transType], newTrans],
    }));
  };

  componentDidMount() {
    getTransactions("costs")
      .then((costs) => this.setState({ costs }))
      .catch((err) => console.log(err));
    getTransactions("incomes")
      .then((incomes) => this.setState({ incomes }))
      .catch((err) => console.log(err));
  }

  delTransaction = ({ id, transType }) => {
    removeTransactionApi({ id, transType }).then((res) =>
      this.setState((prevState) => ({
        [transType]: prevState[transType].filter((el) => el.id !== id),
      }))
    );
  };

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.transactions !== this.state.transactions) {
  //     localStorage.setItem(
  //       "transactions",
  //       JSON.stringify(this.state.transactions)
  //     );
  //   }
  // }

  render() {
    return (
      <div>
        {this.state.activePage === "main" && (
          <MainPage
            changePage={this.changePage}
            addTransaction={this.addTransaction}
          />
        )}
        {this.state.activePage === "incomes" && (
          <TransactionListPage
            changePage={this.changePage}
            transType={"incomes"}
            transactions={this.state.incomes}
            delTransaction={this.delTransaction}
          />
        )}
        {this.state.activePage === "costs" && (
          <TransactionListPage
            changePage={this.changePage}
            transType={"costs"}
            transactions={this.state.costs}
            delTransaction={this.delTransaction}
          />
        )}
      </div>
    );
  }
}

export default App;
