import { createContext, Dispatch } from "react";
import { initialTodoList } from "./initialTodoList";
import { TodoListType } from "./TodoListType";
import { StateActions } from "./StateActions.type";

interface IContext {
  state: TodoListType;
  dispatch: Dispatch<StateActions>;
}

// Create context
export const GlobalContext = createContext<IContext>({
  state: initialTodoList,
  dispatch: () => null
});
