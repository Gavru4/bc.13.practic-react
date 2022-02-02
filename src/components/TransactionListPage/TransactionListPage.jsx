import TransactionList from "../TransactionList/TransactionList";

const TransactionListPage = ({ changePage, transType }) => {
  return (
    <>
      <h1>TransactionListPage</h1>
      <TransactionList />
      <button
        onClick={() => {
          changePage("main")
        }}
        type="button"
      >
        Назад
      </button>
    </>
  )
}
 
export default TransactionListPage;
