import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import TransactionForm from "../TransactionForm/TransactionForm";
import TransactionList from "../TransactionList/TransactionList";

const btnStyles = {
  padding: "10px",
  marginRight: "20px",
  marginBottom: "20px",
  borderRadius: "10px",
  outline: "none",
  border: "2px solid #212121",
  textDecoration: "none",
  color: "#212121",
};
const TransactionListPage = () => {
  const { transType } = useParams();
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
      <Link style={btnStyles} to={"/"}>
        Back
      </Link>
    </>
  );
};

export default TransactionListPage;
