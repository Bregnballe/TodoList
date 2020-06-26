import { TodoListType } from "./TodoListType";

export interface IAddTodo {
  type: "addTodo";
  payload: { text: string; complete: boolean; id: string };
}

export interface IDeleteTodo {
  type: "deleteTodo";
  payload: { index: number };
}

export interface IEditTodoText {
  type: "editTodoText";
  payload: { text: string; index: number };
}

export interface IToggleTodoComplete {
  type: "toggleTodoComplete";
  payload: { complete: boolean; index: number };
}

export interface IEndDrag {
  type: "endDrag";
  payload: TodoListType;
}

export type StateActions =
  | IAddTodo
  | IDeleteTodo
  | IEditTodoText
  | IToggleTodoComplete
  | IEndDrag;
