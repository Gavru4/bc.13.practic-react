import { useState } from "react";
import TransactionForm from "../TransactionForm/TransactionForm";
import TransactionList from "../TransactionList/TransactionList";

const TransactionListPage = ({ changePage, transType, transactions }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editingTransaction, setEditingTransaction] = useState(null);
  const switchEditForm = (transaction) => {
    setIsEdit((prev) => !prev);
    setEditingTransaction(transaction);
  };
  return (
    <>
      <h1>TransactionListPage</h1>
      {isEdit && <TransactionForm editingTransaction={editingTransaction} />}
      <TransactionList transType={transType} switchEditForm={switchEditForm} />
      <button
        onClick={() => {
          changePage("main");
        }}
        type="button"
      >
        Back
      </button>
    </>
  );
};

export default TransactionListPage;
