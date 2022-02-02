const TransactionForm = () => {
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
      <form action="">
        <label>
          <input type="date" />
        </label>
        <label>
          <input type="time" />
        </label>
        <label>
          Категория
          <input type="button" value="Еда" />
        </label>

        <label>
          Сумма
          <input type="curency" placeholder="Введите сумму" />
        </label>
        <label>
          Валюта
          <input type="button" value="UAH" />
        </label>
        <label>
          <input type="text" placeholder="Комментарий" />
        </label>
      </form>
    </>
  )
}

export default TransactionForm
