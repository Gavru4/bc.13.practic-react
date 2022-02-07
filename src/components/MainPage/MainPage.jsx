import { Component } from "react";
import MainButtons from "../MainButtons/MainButtons";
import TransactionForm from "../TransactionForm/TransactionForm";


class MainPage extends Component {
  state = {
    isOpenCategories: false,
  }

  toggleOpenCategoryList = () => {
    this.setState((prev) => ({
      isOpenCategories: !prev.isOpenCategories
    }))
  }
  render() {
    const { changePage, addTransaction } = this.props
    const { isOpenCategories } = this.state
    return (
      <>
        <TransactionForm
          isOpenCategories={isOpenCategories}
          toggleOpenCategoryList={this.toggleOpenCategoryList}
          addTransaction={addTransaction}
        />
        {!isOpenCategories && <MainButtons changePage={changePage} />}
      </>
    )
  }
}


export default MainPage;