import { Component } from "react";
import MainBtns from "../MainBtns/MainBtns";
import TransactionForm from "../TransactionForm/TransactionForm";

class MainPage extends Component {
  state = {
    isOpenCategories: false,
  };

  togleCategoryList = () => {
    this.setState((prevState) => ({
      isOpenCategories: !prevState.isOpenCategories,
    }));
  };

  render() {
    const { changePage, addTransaction } = this.props;
    const { isOpenCategories } = this.state;

    return (
      <>
        <TransactionForm
          isOpenCategories={isOpenCategories}
          togleCategoryList={this.togleCategoryList}
          addTransaction={addTransaction}
        />
        {!isOpenCategories && <MainBtns changePage={changePage} />}
      </>
    );
  }
}

export default MainPage;
