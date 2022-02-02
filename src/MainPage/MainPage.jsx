import TransactionForm from "../components/TransactionForm/TransactiomForm";

const MainPage = () => {
  return (
    <>
      <TransactionForm />
      <button
        onClick={() => {
          changePage;
        }}
        type="button"
      >
        Доходы
      </button>
      <button type="button">Расходы</button>
    </>
  );
};

export default MainPage;
