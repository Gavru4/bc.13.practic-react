import { useState } from "react";
import { editTransactionApi, postTransaction } from "../../api";
import CategoryList from "../CategoryList/CategoryList";
import { useTransactionsContext } from "../../context/TransactionsProvider/TransactionsProvider";
import { Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";

const initialForm = {
  date: "2022-02-22",
  time: "",
  category: "eat",
  currency: "UAH",
  comment: "",
  total: "",
};

const initialCategoriesList = [
  { id: 1, title: "Eat" },
  { id: 2, title: "Drink" },
];

const TransactionForm = ({
  togleCategoryList,
  isOpenCategories,
  editingTransaction,
}) => {
  const history=useHistory();

  const match=useRouteMatch();
// console.log(editingTransaction);
  const { addTransaction,editTransaction } = useTransactionsContext();
  const [form, setForm] = useState(() =>
    editingTransaction ? editingTransaction : initialForm
  );
  const [categoriesList, setCategoriesList] = useState(initialCategoriesList);
  const [transType, setTransType] = useState("costs");

  const handleChangeForm = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const openCategoryList=()=>{history.push("/categories-list")}

  const handleChangeTransType = (e) => {
    const { value } = e.target;
    setTransType(value);
  };

  const addCategory = (newCategory) => {
    setCategoriesList((prevCategoryList) => [...prevCategoryList, newCategory]);
  };

  const handleSubmitTrans = (e) => {
    e.preventDefault();
    if (editingTransaction) {
      editTransactionApi({ transType, transaction: form }).then(res=>editTransaction(res));
    
    } else {
      postTransaction({ transType, transaction: { ...form, transType } }).then(
        (data) => addTransaction(data)
      );
    }
    setForm(initialForm);
  };

  const setCategory = (newCategory) => {
    setForm((prevForm) => ({ ...prevForm, category: newCategory }));
    togleCategoryList();
  };

  const { date, time, category, total, currency, comment } = form;

  return (
    <Switch>
      <Route path={match.path} exact>
        <select
          name="transType"
          onChange={handleChangeTransType}
          value={transType}
        >
          <option value="incomes">Incomes</option>
          <option value="costs">Costs</option>
        </select>
        <form onSubmit={handleSubmitTrans}>
          <label>
            Day
            <input
              name="date"
              type="date"
              value={date}
              onChange={handleChangeForm}
            />
          </label>

          <label>
            Time
            <input
              name="time"
              type="time"
              value={time}
              onChange={handleChangeForm}
            />
          </label>

          <label>
            Category
            <input
              name="category"
              type="button"
              value={category}
              onClick={openCategoryList}
            />
          </label>

          <label>
            Total
            <input
              name="total"
              type="text"
              placeholder="Enter sum"
              value={total}
              onChange={handleChangeForm}
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
              onChange={handleChangeForm}
            />
          </label>
          <button className="submit" type="submit">
            Submit
          </button>
        </form>
      </Route>
      <Route path={match.path+"/categories-list"}>
        <CategoryList
          categoriesList={categoriesList}
          addCategory={addCategory}
          togleCategoryList={togleCategoryList}
          setCategory={setCategory}
        />
      </Route>
    </Switch>
  );
};
export default TransactionForm;
