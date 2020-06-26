import React, { useState, useContext } from "react";
import shortid from "shortid";
import { GlobalContext } from "../context/GlobalContext";

import { InputStyled, ButtonStyled, ContainerStyled } from "./InputStyled";

export const Input: React.FC = () => {
  const [inputState, setInputState] = useState("");

  const { dispatch } = useContext(GlobalContext);

  /*########### CHANGE INPUT STATE ###########*/
  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputState(e.currentTarget.value);
  };

  /*########### ADDING TODO BUTTON ###########*/
  const handleOnAdd = () => {
    if (inputState) {
      dispatch({
        type: "addTodo",
        payload: {
          text: inputState,
          complete: false,
          id: shortid.generate()
        }
      });

      setInputState("");
    }
  };

  /*########### ADDING TODO ENTER ###########*/
  const handleOnEnterAdd = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (inputState && e.keyCode === 13) {
      const newTodo = {
        text: inputState,
        complete: false,
        id: shortid.generate()
      };

      dispatch({
        type: "addTodo",
        payload: newTodo
      });

      setInputState("");
    }
  };

  return (
    <ContainerStyled>
      <InputStyled
        autoFocus
        onChange={handleOnChange}
        onKeyDown={handleOnEnterAdd}
        value={inputState}
        placeholder="add todo"
      />
      <ButtonStyled onClick={handleOnAdd} tabIndex="0" disabled={!inputState}>
        Add Todo
      </ButtonStyled>
    </ContainerStyled>
  );
};
