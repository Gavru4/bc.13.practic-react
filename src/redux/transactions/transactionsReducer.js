import { combineReducers } from "redux";

const costsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case "transactions/addCosts":
      return [...state, payload];
    case "transactions/getCosts":
      return payload;
    default:
      return state;
  }
};

const incomesRudecer = (state = [], { type, payload }) => {
  switch (type) {
    case "transactions/addIncomes":
      return [...state, payload];
    case "transactions/getIncomes":
      return payload;
    default:
      return state;
  }
};

const transactionsReducer = combineReducers({
  costs: costsReducer,
  incomes: incomesRudecer,
});
export default transactionsReducer;
