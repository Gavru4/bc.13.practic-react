const MainButtons = ({ changePage }) => {
  return (
    <>
      <button
        onClick={() => {
          changePage("incomes");
        }}
        type="button"
      >
        Доходы
      </button>
      <button
        onClick={() => {
          changePage("incomes");
        }}
        type="button"
      >
        Расходы
      </button>
    </>
  );
};

export default MainButtons;
