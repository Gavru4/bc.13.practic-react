import TransactionListItem from "../TransactionListItem/TransactionListItem";

const TransactionList = ({transactions}) => {
  return (
    <ul>
      {transactions.map((transaction) => (
        <TransactionListItem {...transaction} key={transaction.id} />
      ))}
    </ul>
  )
}
 
export default TransactionList;