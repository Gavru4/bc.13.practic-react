import TransactionListItem from "../TransactionListItem/TransactionListItem";

const TransactionList = ({ transactions, delTransaction }) => {
  return (
    <ul>
      {transactions.map((transaction) => (
        <TransactionListItem {...transaction} key={transaction.id} delTransaction={delTransaction}/>
      ))}
    </ul>
  );
};

export default TransactionList;
