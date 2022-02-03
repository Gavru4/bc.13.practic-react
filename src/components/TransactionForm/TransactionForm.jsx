import { Component } from "react";
import CategoryList from "../CategoryList/CategoryList";

class TransactionForm extends Component {
  state = {
    date: "2022-02-03",
    time: "",
    category: "eat",
    sum: "",
    curency: "UAH",
    comment: "",
    categorieslist: [],
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    const { date, time, category, sum, curency, comment, categorieslist } =
      this.state;
    return (
      <>
        <select name="transactionType" id="">
          <option value="incomes" name="">
            Доходы
          </option>
          <option value="spends" name="">
            Расходы
          </option>
        </select>
        <form action="" onSubmit={this.handleSubmit}>
          <label>
            <input
              type="date"
              name="date"
              value={date}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <input
              type="time"
              name="time"
              value={time}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Категория
            <input
              type="button"
              value={category}
              name="category"
              onClick={null}
            />
          </label>

          <label>
            Сумма
            <input
              type="curency"
              name="sum"
              value={sum}
              onChange={this.handleChange}
              placeholder="Введите сумму"
            />
          </label>
          <label>
            Валюта
            <input
              type="button"
              value={curency}
              name="curency"
              onClick={null}
            />
          </label>
          <label>
            <input
              type="text"
              placeholder="Комментарий"
              value={comment}
              onChange={this.handleChange}
              name="comment"
            />
          </label>
          <button type="submit">Submit</button>
        </form>
        <CategoryList categorieslist={categorieslist} />
      </>
    );
  }
}

export default TransactionForm;
