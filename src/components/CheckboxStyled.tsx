import styled from "styled-components";

export const CheckboxStyled = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  top: 0;
  left: 0;
  clip-path: circle(0%);
  padding: 0;
  border: 0;
  width: 20px;
  height: 20px;
  overflow: hidden;
  cursor: pointer;
`;

export const LabelStyled = styled.label`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  background-color: #fff;
  margin-right: 8px;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: inset 0px 0px 0px 2px #d0d0d0;
  &:hover {
    box-shadow: inset 0px 0px 0px 2px #a9a9a9;
  }

  &:focus-within {
    box-shadow: inset 0px 0px 0px 2px #8bb5fa;
  }
  transition: box-shadow 0.2s;
`;

export const CheckStyled = styled.svg`
  pointer-events: none;
  cursor: pointer;
  display: ${props => (props.checked ? "inline" : "none")};
  fill: #5089e6;
  width: 13px;
  height: 13px;
`;
