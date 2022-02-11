import { useState } from "react";
import { editTransactionApi, postTransaction } from "../../api";
import CategoryList from "../CategoryList/CategoryList";
import { useTransactionsContext } from "../../context/TransactionsProvider/TransactionsProvider";

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
  isOpenCategories,
  togleCategoryList,
  editingTransaction,
}) => {
  const { addTransaction } = useTransactionsContext();
  const [form, setForm] = useState(() =>
    editingTransaction ? editingTransaction : initialForm
  );
  const [categoriesList, setCategoriesList] = useState(initialCategoriesList);
  const [transType, setTransType] = useState("costs");

  const handleChangeForm = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleChangeTransType = (e) => {
    const { value } = e.target;
    setTransType(value);
  };

  const addCategory = (newCategory) => {
    setCategoriesList((prevCategoriesList) => [
      ...prevCategoriesList,
      newCategory,
    ]);
  };

  const handleSubmitTrans = (e) => {
    e.preventDefault();
    if (editingTransaction) {
      editTransactionApi({ transType, transaction: form });
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

  const { data, time, category, total, currency, comment } = form;

  return (
    <>
      {!isOpenCategories ? (
        <>
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
                value={data}
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
            <button type="submit">Submit</button>
          </form>
        </>
      ) : (
        <CategoryList
          categoriesList={categoriesList}
          addCategory={addCategory}
          togleCategoryList={togleCategoryList}
          setCategory={setCategory}
        />
      )}
    </>
  );
};
export default TransactionForm;
