import { nanoid } from "nanoid";
import { Component } from "react";
import CategoryList from "../CategoryList/CategoryList";
import { postTransaction } from "../../Services/api.js";

class TransactionForm extends Component {
  state = {
    date: "",
    time: "",
    category: "Еда",
    sum: "",
    curency: "UAH",
    comment: "",
    categoriesList: [
      { id: 1, title: "Еда" },
      { id: 2, title: "Напитки" },
    ],
    transType: "costs",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmitTransaction = (e) => {
    e.preventDefault();
    const { categoriesList, ...transaction } = this.state;
    transaction.id = nanoid();
    postTransaction({ transType: transaction.transType, transaction }).then(
      (data) => this.props.addTransaction(data)
    );

    this.reset();
  };

  addCategory = (data) => {
    this.setState((prev) => ({
      categoriesList: [...prev.categoriesList, data],
    }));
  };

  setCategory = (category) => {
    this.setState({ category: category });
    this.props.toggleOpenCategoryList();
  };

  reset = () => {
    const resetedState = Object.keys(this.state).reduce((acc, el) => {
      if (el === "categoriesList") return acc;
      if (el === "category") {
        acc[el] = "Еда";
        return acc;
      }
      if (el === "date") {
        acc[el] = "2022-02-05";
        return acc;
      }
      acc[el] = "";
      return acc;
    }, {});
    // this.setState({ :  });
    console.log(resetedState);
  };

  render() {
    const { date, time, category, sum, curency, comment, categoriesList } =
      this.state;
    const { isOpenCategories, toggleOpenCategoryList, addTransaction } =
      this.props;
    return (
      <>
        {!isOpenCategories ? (
          <>
            <select
              name="transactionType"
              value={this.state.transType}
              onChange={this.handleChange}
            >
              <option value="incomes">Доходы</option>
              <option value="costs">Расходы</option>
            </select>
            <form onSubmit={this.handleSubmitTransaction} action="">
              <label>
                <input
                  onChange={this.handleChange}
                  type="date"
                  name="date"
                  value={date}
                />
              </label>
              <label>
                <input
                  onChange={this.handleChange}
                  type="time"
                  name="time"
                  value={time}
                />
              </label>
              <label>
                Категория
                <input
                  onClick={toggleOpenCategoryList}
                  type="button"
                  name="category"
                  value={category}
                />
              </label>

              <label>
                Сумма
                <input
                  onChange={this.handleChange}
                  type="text"
                  placeholder="Введите сумму"
                  name="sum"
                  value={sum}
                />
              </label>
              <label>
                Валюта
                <input
                  onChange={this.handleChange}
                  type="button"
                  name="curency"
                  value={curency}
                />
              </label>
              <label>
                <input
                  onChange={this.handleChange}
                  type="text"
                  placeholder="Комментарий"
                  name="comment"
                  value={comment}
                />
              </label>
              <button type="sunmit">Записать</button>
            </form>
          </>
        ) : (
          <CategoryList
            categoriesList={categoriesList}
            toggleOpenCategoryList={toggleOpenCategoryList}
            addCategory={this.addCategory}
            setCategory={this.setCategory}
          />
        )}
      </>
    );
  }
}

export default TransactionForm;
