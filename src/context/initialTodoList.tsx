import shortid from "shortid";
import { TodoListType } from "./TodoListType";

export const initialTodoList: TodoListType = [
  {
    text: "Hello0",
    complete: false,
    id: shortid.generate()
  },
  {
    text: "Hello1",
    complete: false,
    id: shortid.generate()
  },
  {
    text: "Hello2",
    complete: false,
    id: shortid.generate()
  }
];
