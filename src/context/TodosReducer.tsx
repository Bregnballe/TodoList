import { TodoListType } from "./TodoListType";
import { StateActions } from "./StateActions.type";

export const TodosReducer = (
  state: TodoListType,
  action: StateActions
): TodoListType => {
  switch (action.type) {
    case "addTodo":
      return [action.payload, ...state];

    case "deleteTodo":
      let deleteList = [...state];
      deleteList.splice(action.payload.index, 1);
      return deleteList;

    case "editTodoText":
      let textEditList = [...state];
      textEditList[action.payload.index].text = action.payload.text;
      return textEditList;

    case "toggleTodoComplete":
      let completeToggleList = [...state];
      completeToggleList[action.payload.index].complete =
        action.payload.complete;
      return completeToggleList;

    case "endDrag":
      return action.payload;

    default:
      console.log("default");
      return state;
  }
};
