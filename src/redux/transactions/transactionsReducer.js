import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  addCosts,
  addIncomes,
  getCosts,
  getIncomes,
  removeCosts,
  removeIncomes,
} from "./transactionsActions";

const costsReducer = createReducer([], {
  [addCosts]: (state, { payload }) => [...state, payload],
  [getCosts]: (_, { payload }) => payload,
  [removeCosts]: (state, { payload }) =>
    state.filter((el) => el.id !== payload),
});

// const costsReducer = (state = [], { type, payload }) => {
//   switch (type) {
//     case "transactions/addCosts":
//       return [...state, payload];
//     case "transactions/getCosts":
//       return payload;
//     default:
//       return state;
//   }
// };

const incomesRudecer = createReducer([], {
  [addIncomes]: (state, { payload }) => [...state, payload],
  [getIncomes]: (_, { payload }) => payload,
  [removeIncomes]: (state, { payload }) =>
    state.filter((el) => el.id !== payload),
});

// const incomesRudecer = (state = [], { type, payload }) => {
//   switch (type) {
//     case "transactions/addIncomes":
//       return [...state, payload];
//     case "transactions/getIncomes":
//       return payload;
//     default:
//       return state;
//   }
// };

const transactionsReducer = combineReducers({
  costs: costsReducer,
  incomes: incomesRudecer,
});
export default transactionsReducer;
