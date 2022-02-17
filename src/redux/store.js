import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import transactionsReducer from "./transactions/transactionsReducer";

// const reducer = (state = {}, action) => {
//   return state;
// };
const rootReducer = combineReducers({
  transactions: transactionsReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
