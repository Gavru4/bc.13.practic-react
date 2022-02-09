import { nanoid } from "nanoid";
import { Component } from "react";
import {postTransaction} from "../../api";
import CategoryList from "../CategoryList/CategoryList";

class TransactionForm extends Component {
  state = {
    date: "2022-02-22",
    time: "",
    category: "eat",
    currency: "UAH",
    comment: "",
    total: "",
    categoriesList: [
      { id: 1, title: "Eat" },
      { id: 2, title: "Drink" },
    ],
    transType: "costs",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  addCategory = (newCategory) => {
    this.setState((prevState) => ({
      categoriesList: [...prevState.categoriesList, newCategory],
    }));
  };
  handleSubmitTrans = (e) => {
    e.preventDefault();
    const { categoriesList, ...transaction } = this.state;
    transaction.id = nanoid();
    postTransaction({ transType:transaction.transType, transaction }).then((data) =>
      this.props.addTransaction(data)
    );
    this.reset();
  };

  reset = () => {
    const resetedState = Object.keys(this.state).reduce((acc, el) => {
      if (el === "categoriesList") return acc;
      if (el === "category") {
        acc[el] = "Eat";
        return acc;
      }
      if (el === "date") {
        acc[el] = "2022-02-22";
        return acc;
      }
      acc[el] = "";
      return acc;
    }, {});
    this.setState(resetedState);
  };

  setCategory = (newCategory) => {
    this.setState({ category: newCategory });
    this.props.togleCategoryList();
  };

  render() {
    const { data, time, category, total, currency, comment, categoriesList } =
      this.state;
    const { isOpenCategories, togleCategoryList } = this.props;
    return (
      <>
        {!isOpenCategories ? (
          <>
            <select name="transType" onChange={this.handleChange} value={this.state.transType}>
              <option value="incomes">Incomes</option>
              <option value="costs">Costs</option>
            </select>
            <form onSubmit={this.handleSubmitTrans}>
              <label>
                Day
                <input
                  name="date"
                  type="date"
                  value={data}
                  onChange={this.handleChange}
                />
              </label>

              <label>
                Time
                <input
                  name="time"
                  type="time"
                  value={time}
                  onChange={this.handleChange}
                />
              </label>

              <label>
                Category
                <input
                  name="category"
                  type="button"
                  value={category}
                  onClick={togleCategoryList}
                />
              </label>

              <label>
                Total
                <input
                  name="total"
                  type="text"
                  placeholder="Enter sum"
                  value={total}
                  onChange={this.handleChange}
                />
              </label>

              <label>
                Currency
                <input
                  name="currency"
                  type="button"
                  value={currency}
                  onClick={null}
                />
              </label>

              <label>
                <input
                  name="comment"
                  type="text"
                  placeholder="Comment"
                  value={comment}
                  onChange={this.handleChange}
                />
              </label>
              <button type="submit">Submit</button>
            </form>
          </>
        ) : (
          <CategoryList
            categoriesList={categoriesList}
            addCategory={this.addCategory}
            togleCategoryList={togleCategoryList}
            setCategory={this.setCategory}
          />
        )}
      </>
    );
  }
}
export default TransactionForm;
