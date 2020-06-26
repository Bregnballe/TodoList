import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

import { CheckboxStyled, LabelStyled, CheckStyled } from "./CheckboxStyled";

interface Props {
  todoItem: { text: string; complete: boolean; id: string };
  index: number;
}

export const Checkbox: React.FC<Props> = ({ todoItem, index }) => {
  const { dispatch } = useContext(GlobalContext);

  /*########### CHANGE TODOITEM COMPLETE STATE ###########*/
  const changeHandler = (e: React.FormEvent) => {
    let targetValue = (e.target as HTMLInputElement).checked;

    dispatch({
      type: "toggleTodoComplete",
      payload: {
        complete: targetValue,
        index: index
      }
    });
  };

  const mouseDownHandler = (e: React.FormEvent) => {
    e.preventDefault();
    // buttons receive focus on mousedown, so preventing that is as simple as using e.preventDefault()
  };

  const clickHandler = (e: React.FormEvent) => {
    if (e.target === e.currentTarget) {
      e.preventDefault();
      (e.target as HTMLLabelElement).control.click();
    }
    /*Clickhandler gets called twice. One time for the label and one for the checkbox. 
    Prevent default when the handler is called from the label. Instead call checkbox click.
    */
  };

  /*
 
*/
  return (
    <LabelStyled
      htmlFor={todoItem.id}
      checked={todoItem.complete}
      onMouseDown={mouseDownHandler}
      onClick={clickHandler}
    >
      <CheckboxStyled
        onChange={changeHandler}
        type="checkbox"
        id={todoItem.id}
        checked={todoItem.complete}
        onMouseDown={mouseDownHandler}
        tabIndex="0"
      />
      <CheckStyled
        checked={todoItem.complete}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        onMouseDown={mouseDownHandler}
      >
        <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
      </CheckStyled>
    </LabelStyled>
  );
};
