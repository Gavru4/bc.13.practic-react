import TransactionListItem from "../TransactionListItem/TransactionListItem";
import { useTransactionsContext } from "../../context/TransactionsProvider/TransactionsProvider";

const TransactionList = ({ transType, switchEditForm }) => {
  const { [transType]: transactions } = useTransactionsContext(); //costs, incomes

  return (
    <ul>
      {transactions.map((transaction) => (
        <TransactionListItem
          transaction={transaction}
          key={transaction.id}
          switchEditForm={switchEditForm}
        />
      ))}
    </ul>
  );
};

export default TransactionList;
