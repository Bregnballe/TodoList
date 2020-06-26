import styled, { keyframes } from "styled-components";

/*
const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;


const yellowFade = keyframes`
from {
  background-color: lightyellow;
}

to {
  background-color: white;
}
`;

PUT IN CSS:
animation: ${fadeIn} 0.3s linear, ${yellowFade} 3s ease-out;
*/

export const InputStyled = styled.input`
  padding: 8px 8px;
  display: inline-block;
  border: 2px solid transparent;
  border-radius: 4px;
  box-sizing: border-box;
  margin-right: 8px;

  background-color: rgba(0, 0, 0, 0);

  &:hover {
    border: 2px solid #a9a9a9;
  }
  &:focus {
    outline: none;
    border: 2px solid #8bb5fa;
  }
  &:active {
    background-color: #f2f2f2;
  }

  transition: border 0.2s;
`;

export const ButtonStyled = styled.button`
  display: inline-block;
  margin-left: auto;
  padding: 8px 8px;
  color: #717171;
  background: #f2f2f2;
  font-family: Arial, sans-serif;
  border: 2px solid #d0d0d0;
  box-shadow: inset 0px -2px 0px 0px #d0d0d0;
  cursor: pointer;
  border-radius: 4px;
  box-sizing: border-box;

  &:focus {
    box-shadow: 0px 0px 0px 1px #fff, 0px 0px 0px 3px #8bb5fa,
      inset 0px -2px 0px 0px #d0d0d0;
    outline: none;
  }
  transition: box-shadow 0.2s;
`;

export const ContainerStyled = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  min-width: 272px;
  padding: 8px;
  border-radius: 4px;
  margin: 4px 0px 4px 0px;
  cursor: hand;

  border: ${props =>
    props.isDragging ? "2px solid #8BB5FA" : "2px solid #e5e5e5"};
  background-color: ${props => (props.isDragging ? "#fff" : "#fcfcfc")};
  box-shadow: ${props =>
    props.isDragging ? " 0px 3px 5px 0px rgba(0,0,0,0.15);" : "none;"};
  &:hover {
    background-color: #fff;
  }

  &:focus {
    border: 2px solid #8bb5fa;
    outline: none;
  }

  transition: border 0.2s;
`;

export const NumberStyled = styled.p`
  display: inline;
  margin-right: 8px;
  font-family: Arial, sans-serif;
  font-size: 12px;
  vertical-align: middle;
`;
