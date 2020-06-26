import styled from "styled-components";

export const InputStyled = styled.input`
  padding: 8px 8px;
  border: 2px solid #d0d0d0;
  border-radius: 4px 0px 0px 4px;
  box-sizing: border-box;
  background-color: white;
  font-size: 16px;

  &:disabled {
    background-color: #f2f2f2;
  }

  &:hover {
    border: 2px solid #a9a9a9;
  }
  &:focus {
    border: 2px solid #8bb5fa;
    outline: none;
  }
  &:active {
    background-color: #f2f2f2;
  }

  transition: border 0.2s;
`;

export const ButtonStyled = styled.button`
  display: inline-block;
  padding: 8px 8px;
  color: #fff;
  background: #1abc9c;
  font-family: Arial, sans-serif;
  border: none;
  border: 2px solid #3aa6a0;
  box-shadow: inset 0px -2px 0px 0px #3aa6a0;
  cursor: pointer;
  border-radius: 0px 4px 4px 0px;
  font-size: 16px;
  box-sizing: border-box;
  user-select: none;

  &:disabled {
    background-color: #84cfc0;
    color: rgba(255, 255, 255, 0.6);
    box-shadow: none;
    border-color: #3fbfb8;
  }

  &:hover {
    background-color: #3aa6a0;
  }

  &:focus {
    box-shadow: 0px 0px 0px 1px #fff, 0px 0px 0px 3px #8bb5fa,
      inset 0px -2px 0px 0px #3aa6a0;
    outline: none;
  }

  &:active {
    box-shadow: inset 0px 2px 0px 0px #2e7572;
    background-color: #3aa6a0;
    border: 2px solid #2e7572;
    padding-top: 10px;
    padding-bottom: 6px;
  }

  transition: box-shadow 0.2s;
`;

export const ContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  min-width: 272px;
  width: 100%;
`;
