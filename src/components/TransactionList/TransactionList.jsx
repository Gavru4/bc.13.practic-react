import { useSelector } from "react-redux";

import TransactionListItem from "../TransactionListItem/TransactionListItem";

const TransactionList = ({ switchEditForm, transType }) => {
  const transactions = useSelector((state) => {
    console.log(state.transactions);
    return state.transactions;
  });
  return (
    <ul>
      {transactions[transType].map((transaction) => (
        <TransactionListItem
          transaction={transaction}
          key={transaction.id}
          switchEditForm={switchEditForm}
        />
      ))}
    </ul>
  );
};
// const mapStateToProps = (state) => {
//   return {
//     transactionsProps: state.transactions,
//   };
// };

export default TransactionList;
