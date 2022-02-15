import { useTransactionsContext } from "../../context/TransactionsProvider/TransactionsProvider";
import TransactionListItem from "../TransactionListItem/TransactionListItem";

const TransactionList = ({ transType, switchEditForm }) => {
  const { [transType]: transactions } = useTransactionsContext();
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
