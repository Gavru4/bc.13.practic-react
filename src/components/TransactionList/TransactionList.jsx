import { connect } from "react-redux";

import TransactionListItem from "../TransactionListItem/TransactionListItem";

const TransactionList = ({ transType, switchEditForm, transactionsProps }) => {
  const transactions = transactionsProps[transType];
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
const mapStateToProps = (state) => {
  return {
    transactionsProps: state.transactions,
  };
};

export default connect(mapStateToProps)(TransactionList);
