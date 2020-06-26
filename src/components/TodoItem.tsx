import React, { useContext } from "react";
import {
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot
} from "react-beautiful-dnd";
import { Checkbox } from "./Checkbox";
import { GlobalContext } from "../context/GlobalContext";

import {
  ButtonStyled,
  ContainerStyled,
  InputStyled,
  NumberStyled
} from "./TodoItemStyled";

interface Props {
  todoItem: { text: string; complete: boolean; id: string };
  index: number;
}

export const TodoItem: React.FC<Props> = ({ todoItem, index }) => {
  const { dispatch } = useContext(GlobalContext);

  /*########### CHANGE TODOITEM TEXT STATE ###########*/
  const handleOnInputChange = (e: React.FormEvent) => {
    let targetValue = (e.target as HTMLInputElement).value;
    dispatch({
      type: "editTodoText",
      payload: {
        text: targetValue,
        index: index
      }
    });
  };


  /*########### FOCUS OUT ###########*/
  const handleOnFocusOut = (e: React.FormEvent) => {
    if (!(e.target as HTMLInputElement).value.trim()) {
      dispatch({
        type: "deleteTodo",
        payload: {
          index: index
        }
      });
    }
  };

  /*########### DELETE TODO ###########*/
  const handleDelete = () => {
    dispatch({
      type: "deleteTodo",
      payload: {
        index: index
      }
    });
  };

  /*########### ENTER ###########*/
  const handleOnEnterAdd = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      (e.target as HTMLInputElement).blur();
    }
  };

  /*########### MOUSE DOWN ###########*/
  const mouseDownHandler = (e: React.FormEvent) => {
    e.preventDefault();
    // buttons receive focus on mousedown, so preventing that is as simple as using e.preventDefault()
  };

  return (
    <Draggable draggableId={todoItem.id} index={index}>
      {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
        <ContainerStyled
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          isDragging={snapshot.isDragging}
        >
          <NumberStyled>{index + 1}</NumberStyled>
          <Checkbox todoItem={todoItem} index={index} />
          <InputStyled
            htmlFor={todoItem.id}
            defaultValue={todoItem.text}
            onChange={handleOnInputChange}
            onBlur={handleOnFocusOut}
            onKeyDown={handleOnEnterAdd}
          />
          <ButtonStyled onClick={handleDelete} onMouseDown={mouseDownHandler}>
            Delete
          </ButtonStyled>
        </ContainerStyled>
      )}
    </Draggable>
  );
};
