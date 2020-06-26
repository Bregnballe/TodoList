import styled from "styled-components";

export const TodoListStyled = styled.div`
  max-width: 768px;
  margin: auto;
  margin-top: 24px;
  border-radius: 4px;
  border: ${props => (props.isDraggingOver ? "2px dashed #8bb5fa;" : "none")};
  background-color: ${props =>
    props.isDraggingOver ? "aliceblue" : "#f2f2f2"};
  box-sizing: border-box;
`;
