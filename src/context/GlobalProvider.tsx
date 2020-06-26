import React, { useReducer } from "react";
import { TodosReducer } from "./TodosReducer";
import { GlobalContext } from "./GlobalContext";
import { initialTodoList } from "./initialTodoList";

// Provider component
export const GlobalProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(TodosReducer, initialTodoList);

  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
