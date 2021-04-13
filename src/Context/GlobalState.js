import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial State
const InitialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20000 },
    { id: 2, text: "Salary", amount: 300000 },
    { id: 3, text: "Book", amount: -10000 },
    { id: 4, text: "Camera", amount: 150000 },
  ],
};

// Create Context
export const GlobalContext = createContext(InitialState);

// Provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, InitialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
