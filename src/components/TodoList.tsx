import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { TodoItem } from "./TodoItem";
import { TodoListStyled } from "./TodoListStyled";
import { ITodo } from "../context/TodoListType";

export const TodoList: React.FC = () => {
  const { state } = useContext(GlobalContext);

  /*########### CREATING LIST ###########*/
  const list = state.map((todoItem: ITodo, index: number) => {
    return <TodoItem key={todoItem.id} index={index} todoItem={todoItem} />;
  });

  return <TodoListStyled>{list}</TodoListStyled>;
};
