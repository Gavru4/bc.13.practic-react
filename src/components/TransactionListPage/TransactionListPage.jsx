import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import TransactionForm from "../TransactionForm/TransactionForm";
import TransactionList from "../TransactionList/TransactionList";

const TransactionListPage = () => {
  const { transType } = useParams();
  const [isEdit, setIsEdit] = useState(false);

  const [editingTransaction, setEditTransaction] = useState(null);

  const switchEditForm = (transaction) => {
    setIsEdit((prev) => !prev);
    setEditTransaction(transaction);
  };

  return (
    <>
      <h1>TransactionListPage</h1>
      {isEdit && <TransactionForm editingTransaction={editingTransaction} />}
      <TransactionList transType={transType} switchEditForm={switchEditForm} />
      <Link className="link" to={"/"}>Back</Link>
    </>
  );
};

export default TransactionListPage;
