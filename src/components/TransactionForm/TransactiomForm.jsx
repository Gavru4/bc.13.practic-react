const TransactionForm = () => {
  return (
    <>
      <select name="transType" id="">
        <option value="incomes">Доходы</option>
        <option value="costs">Расходы</option>
      </select>
      <form action="">
        <label>
          Day
          <input type="date" />
        </label>

        <label>
          Time
          <input type="time" />
        </label>

        <label>
          Category
          <input type="button" value="eat" />
        </label>

        <label>
          Total
          <input type="text" placeholder="Enter the price" />
        </label>

        <label>
          Currency
          <input type="button" value="UAH" />
        </label>

        <label>
          <input type="text" placeholder="comment" />
        </label>
      </form>
    </>
  );
};

export default TransactionForm;
